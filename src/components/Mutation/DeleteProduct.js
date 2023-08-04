import React from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import Popup from 'reactjs-popup';
import './DeleteProduct.css';

const DELETE_PRODUCT = gql`
    mutation deleteProduct($productId: Int!){
      deleteProduct(productId: $productId)
    }
`;

function DeleteProduct({productName, productId}){
    const [deleteProduct] = useMutation(DELETE_PRODUCT);

    function handleDelete(productId) {

        deleteProduct({
          variables: {
            productId: productId,
          },
        })
          .then((result) => {
            console.log('Product deleted successfully:');
          })
          .catch((error) => {
            console.error('Error deleting product:', error.message);
          });
      };

      return (
            <Popup trigger={
              <button className='delete-btn'><img src='/images/delete.png' className='delete-img' alt="delete" /></button>
            } modal nested>
              {
                close => (
                  <div className='delete-popup'>
                    <p className='delete-text'>Delete product {productName} permanently?</p>
                    <div className='popup-btn'>
                      <button className='update-btn' onClick={() => handleDelete(productId)}>Yes</button>
                      <button className='close-btn' onClick={() => close()}>Close</button>
                    </div>
                  </div>
                )
              }
            </Popup>
      )
}

export default DeleteProduct;