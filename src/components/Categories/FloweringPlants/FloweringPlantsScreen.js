import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import './FloweringPlantsScreen.css';
import 'reactjs-popup/dist/index.css';
import AddProduct from '../../Mutation/AddProduct';
import DeleteProduct from '../../Mutation/DeleteProduct';
import UpdateProduct from '../../Mutation/UpdateProduct';
import { PRODUCT_BY_CATEGORY_NAME } from '../../Query/ProductByCategoryName';

function FloweringPlantsCategory({ category }) {
  const { loading, error, data } = useQuery(PRODUCT_BY_CATEGORY_NAME, {
    variables: { categoryName: category },
  });
  const [productMap, setProductMap] = useState([]);

  useEffect(() => {
    if (!loading && data) {
      setProductMap(data.productByCategoryName.map((product) => ({ ...product })));
    }
  }, [loading, data]);

  const handleChange = (productId, fieldName, value) => {
    const updatedProductMap = productMap.map((item) =>
      (productId === item.productId ? { ...item, [fieldName]: value } : item)
    );
    setProductMap(updatedProductMap);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  let categoryId;
  let categoryName;
  let categoryDescription;

    data.productByCategoryName.map(({ category }) => (
      categoryId = category.categoryId,
      categoryName = category.categoryName,
      categoryDescription = category.description
    ))

  return (
    <div>
      <div className='flowering-display'>
        <p className='flowering-category'>{categoryName}</p>
        <p className='flowering-desc'>{categoryDescription}</p>
      </div>
      <div className="flowering-products">
        <AddProduct categoryId={categoryId} />
        {data.productByCategoryName.map(({ productId, productName, description, imageUrl, price }) => (
          <div className="flowering-product" key={productId}>
            <img src={imageUrl} alt="product" className='flowering-product-image'></img>
            <p className='flowering-product-name'>{productName}</p>
            <p className='flowering-product-text'>{description}</p>
            <p className='flowering-product-price'>From  ₹{price}</p>
            <div className='flowering-product-btn'>
              <UpdateProduct productId={productId} productName={productName} description={description}
                imageUrl={imageUrl} price={price} productMap={productMap} handleChange={handleChange} />
              <DeleteProduct productName={productName} productId={productId} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FloweringPlantsScreen() {
  return (
    <div className="flowering-plants">
      <FloweringPlantsCategory category="Flowering Plants" />
    </div>
  );
}

export default FloweringPlantsScreen;