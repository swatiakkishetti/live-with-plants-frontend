import React, { useState } from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import Popup from 'reactjs-popup';
import './AddProduct.css';

const ADD_PRODUCT = gql`
  mutation addProduct($productName: String!, $description: String!, $imageUrl: String!, $price: Float!){
    addProduct(productName: $productName, description: $description, imageUrl: $imageUrl, price: $price){
      productId
    }
  }
`;

const ADD_PRODUCTS_TO_CATEGORY = gql`
  mutation addProductsToCategory($categoryId: Int!, $productId: [Int]!){
    addProductsToCategory(categoryId: $categoryId, productId: $productId){
      categoryName
    }
  }
`;


function AddProduct({ categoryId }) {
  const [addProduct] = useMutation(ADD_PRODUCT);
  const [addProductsToCategory] = useMutation(ADD_PRODUCTS_TO_CATEGORY);
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [price, setPrice] = useState(0);

  function handleAdd(fieldName, value) {
    console.log("Field", value)
    switch (fieldName) {
      case 'productName':
        setProductName(value);
        break;
      case 'description':
        setDescription(value);
        break;
      case 'imageUrl':
        setImageUrl(value);
        break;
      case 'price':
        setPrice(parseFloat(value));
        break;
      default:
        break;
    }
  };

  function handleSave() {
    if (!productName || !description || !imageUrl || !price) {
      console.log('Please fill all fields');
      return;
    }

    addProduct({
      variables: {
        productName,
        description,
        imageUrl,
        price,
      },
    })
      .then((result) => {
        let productId = result.data.addProduct.productId;
        console.log('Product added successfully:', result.data.addProduct);
        addProductsToCategory({
          variables: {
            categoryId,
            productId
          }
        }).then((result) => {
          console.log('Product added successfully:', result.data.addProductsToCategory);
        }).catch((error) => {
          console.error('Error adding product:', error.message);
        });
      })
      .catch((error) => {
        console.error('Error adding product:', error.message);
      });
  }

  return (
    <div className="add-product">
      {
        <Popup trigger={
          <img src='/images/add.jpeg' alt='add' className='add-product-image'></img>
        } modal nested>
          {
            close => (
              <div className='add-popup'>
                <p>Product Name</p>
                <input className='text-area' type='text' maxLength="20" onChange={(e) => handleAdd('productName', e.target.value)}></input>
                <p>Description</p>
                <input className='text-area' type='text' maxLength="250" onChange={(e) => handleAdd('description', e.target.value)}></input><br></br>
                <p>Image URL</p>
                <input className='text-area' type='text' maxLength="100" onChange={(e) => handleAdd('imageUrl', e.target.value)}></input>
                <p>Price</p>
                <input className='text-area' type='float' onChange={(e) => handleAdd('price', e.target.value)}></input><br></br>
                <div className='popup-btn'>
                  <button className='update-btn' onClick={handleSave}>Save</button>
                  <button className='close-btn' onClick={() => close()}>Close</button>
                </div>
              </div>
            )
          }
        </Popup>
      }
      <p className='summer-product-name'>Add a new product</p>
    </div>
  )

}

export default AddProduct;