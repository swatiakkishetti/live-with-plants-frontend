import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import './WinterPlantsScreen.css';
import 'reactjs-popup/dist/index.css';
import AddProduct from '../../Mutation/AddProduct';
import DeleteProduct from '../../Mutation/DeleteProduct';
import UpdateProduct from '../../Mutation/UpdateProduct';
import { PRODUCT_BY_CATEGORY_NAME } from '../../Query/ProductByCategoryName';

function WinterPlantsCategory({ category }) {
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
            <div className='winter-display'>
                <p className='winter-category'>{categoryName}</p>
                <p className='winter-desc'>{categoryDescription}</p>
            </div>
            <div className="winter-products">
                <AddProduct categoryId={categoryId} />
                {data.productByCategoryName.map(({ productId, productName, description, imageUrl, price }) => (
                    <div className="winter-product" key={productId}>
                        <img src={imageUrl} alt="product" className='winter-product-image'></img>
                        <p className='winter-product-name'>{productName}</p>
                        <p className='winter-product-text'>{description}</p>
                        <p className='winter-product-price'>From  ₹{price}</p>
                        <div className='winter-product-btn'>
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

function WinterPlantsScreen() {
    return (
        <div className="winter-plants">
            <WinterPlantsCategory category="Winter Plants" />
        </div>
    );
}

export default WinterPlantsScreen;
