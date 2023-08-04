import React from "react";
import './Inventory.css';
import { useQuery } from '@apollo/client';
import gql from "graphql-tag";

const ALL_PRODUCTS = gql`
  query allProducts {
    allProducts{
      productId
      productName
      description
      imageUrl
      category {
        categoryId
        categoryName
        description
      }
      price
    }
  }
`;

function Inventory() {
    const { loading, error, data } = useQuery(ALL_PRODUCTS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <div className="inventory-container">
            {data.allProducts.map(({ productId, productName, description, imageUrl, price, category }) => (
                <div className="inventory-product" key={productId}>
                    <img src={imageUrl} alt="product" className='inventory-product-image'></img>
                    <p className='inventory-product-name'>{productName}</p>
                    <p className='inventory-category-name'>Category:  {category.categoryName}</p>
                    <p className='inventory-product-text'>{description}</p>
                    <p className='inventory-product-price'>From  ₹ {price}</p>
                </div>
            ))}
        </div>
    )
}

export default Inventory;