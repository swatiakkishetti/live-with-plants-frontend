import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import './SummerPlantsScreen.css';
import 'reactjs-popup/dist/index.css';
import AddProduct from '../../Mutation/AddProduct';
import DeleteProduct from '../../Mutation/DeleteProduct';
import UpdateProduct from '../../Mutation/UpdateProduct';
import { PRODUCT_BY_CATEGORY_NAME } from '../../Query/ProductByCategoryName';

function SummerPlantsCategory({ category }) {
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
      <div className='summer-display'>
        <p className='summer-category'>{categoryName}</p>
        <p className='summer-desc'>{categoryDescription}</p>
      </div>
      <div className="summer-products">
        <AddProduct categoryId={categoryId} />
        {data.productByCategoryName.map(({ productId, productName, description, imageUrl, price }) => (
          <div className="summer-product" key={productId}>
            <img src={imageUrl} alt="product" className='summer-product-image'></img>
            <p className='summer-product-name'>{productName}</p>
            <p className='summer-product-text'>{description}</p>
            <p className='summer-product-price'>From  ₹ {price}</p>
            <div className='summer-product-btn'>
              <UpdateProduct productId={productId} productName={productName} description={description}
                imageUrl={imageUrl} price={price} productMap={productMap} handleChange={handleChange} />
              <DeleteProduct productName={productName} productId={productId} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

function SummerPlantsScreen() {
  return (
    <div className="summer-plants">
      <SummerPlantsCategory category="Summer Plants" />
    </div>
  );
}

export default SummerPlantsScreen;
