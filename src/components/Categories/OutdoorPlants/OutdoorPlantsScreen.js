import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import './OutdoorPlantsScreen.css';
import 'reactjs-popup/dist/index.css';
import AddProduct from '../../Mutation/AddProduct';
import DeleteProduct from '../../Mutation/DeleteProduct';
import UpdateProduct from '../../Mutation/UpdateProduct';
import { PRODUCT_BY_CATEGORY_NAME } from '../../Query/ProductByCategoryName';

function OutdoorPlantsCategory({ category }) {
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
      <div className='outdoor-display'>
        <p className='outdoor-category'>{categoryName}</p>
        <p className='outdoor-desc'>{categoryDescription}</p>
      </div>
      <div className="outdoor-products">
        <AddProduct categoryId={categoryId} />
        {data.productByCategoryName.map(({ productId, productName, description, imageUrl, price }) => (
          <div className="outdoor-product" key={productId}>
            <img src={imageUrl} alt="product" className='outdoor-product-image'></img>
            <p className='outdoor-product-name'>{productName}</p>
            <p className='outdoor-product-text'>{description}</p>
            <p className='outdoor-product-price'>From  ₹{price}</p>
            <div className='outdoor-product-btn'>
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

function OutdoorPlantsScreen() {
  return (
    <div className="outdoor-plants">
      <OutdoorPlantsCategory category="Outdoor plants" />
    </div>
  );
}

export default OutdoorPlantsScreen;