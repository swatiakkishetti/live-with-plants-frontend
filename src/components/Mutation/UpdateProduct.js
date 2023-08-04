import React from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import Popup from 'reactjs-popup';
import './UpdateProduct.css';

const UPDATE_PRODUCT = gql`
    mutation updateProduct($productId: Int!, $productName: String!,$description: String!, 
    $imageUrl: String!, $price: Float!){
    updateProduct(productId: $productId, productName: $productName, description: $description, 
    imageUrl: $imageUrl, price: $price){
        productId
        productName
        description
        imageUrl
        price
    }
  }
`;

function UpdateProduct({ productId, productName, description, imageUrl, price, productMap, handleChange }) {
    const [updateProduct] = useMutation(UPDATE_PRODUCT);

    function handleUpdate(productId) {
        let productToUpdate = [];

        if (!productMap || productMap.length === 0) {
            console.log("Loading")
        }

        productToUpdate = productMap.find((product) => product.productId === productId);

        if (!productToUpdate) {
            console.error('Product not found in productMap:', productMap.productId);
            return;
        }

        updateProduct({
            variables: {
                productId: productToUpdate.productId,
                productName: productToUpdate.productName,
                description: productToUpdate.description,
                imageUrl: productToUpdate.imageUrl,
                price: productToUpdate.price,
            },
        })
            .then((result) => {
                console.log('Product updated successfully:', result.data.updateProduct);
            })
            .catch((error) => {
                console.error('Error updating product:', error.message);
            });
    };

    return (
        <Popup trigger={
            <button className='edit-btn'>
                <img src='/images/pencil.png' className='edit-img' alt="update"/>
            </button>} modal nested>
            {
                close => (
                    <div className='edit-popup'>
                        <p>Product Name</p>
                        <input className='text-area' type='text' defaultValue={productName} onChange={(e) => handleChange(productId, 'productName', e.target.value)}></input>
                        <p>Description</p>
                        <input className='text-area' type='text' defaultValue={description} onChange={(e) => handleChange(productId, 'description', e.target.value)}></input><br></br>
                        <p>Image URL</p>
                        <input className='text-area' type='text' defaultValue={imageUrl} onChange={(e) => handleChange(productId, 'imageUrl', e.target.value)}></input>
                        <p>Price</p>
                        <input className='text-area' type='float' defaultValue={price} onChange={(e) => handleChange(productId, 'price', e.target.value)}></input><br></br>
                        <div className='popup-btn'>
                            <button className='update-btn' onClick={() => handleUpdate(productId)}>Update</button>
                            <button className='close-btn' onClick={() => close()}>Close</button>
                        </div>
                    </div>
                )
            }
        </Popup>
    )
}

export default UpdateProduct;