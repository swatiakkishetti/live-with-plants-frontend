import React, { useState, useEffect } from "react"
import './NextHeader.css'
import Logo from "../../images/logo-icon.png";
import CategoryIcon from "../../images/category-icon.png";
import ProductIcon from "../../images/product-icon.png";
import Profile from "../../images/profile-icon.png";
import Category from '../Category/Category.js';

function NextHeader(props) {

    const [isClicked, setIsClicked] = useState(false);

    if(isClicked){
        return(
            <Category/>
        );
    }
    else{
        return (
            <div>
                <nav className="nav-logo">
                    <img src={Logo} className="logo"></img>
                    <h4 className="logo-header">Live With Plants</h4>
                    <h3 className="profile">Profile</h3>
                    <img src={Profile} className="profile-icon"></img>
    
                    <div className="dropdown">
                        <img src={CategoryIcon} className="category-icon"></img>
                        <button onClick={CategoryDropdown} className="category-dropdown">Manage Categories</button>
                        <div id="category-dropdown" className="sub-category-dropdown">
                            <a alt="left-arrow" height="15px" width="15px" onClick={() => setIsClicked(true)}>Get all Categories</a>
                            <a href="">Add Category</a>
                            <a href="">Delete Category</a>
                            <a href="">Update Category</a>
                        </div>
                    </div>
                    <div className="dropdown">
                        <img src={ProductIcon} className="product-icon"></img>
                        <button onClick={ProductDropdown} className="product-dropdown">Manage Products</button>
                        <div id="product-dropdown" className="sub-product-dropdown">
                            <a href="">Get all Products</a>
                            <a href="">Add Product</a>
                            <a href="">Delete Product</a>
                            <a href="">Update Product</a>
                        </div>
                    </div>
                </nav>
            </div>
            // <div>
            // <Category/>
            // </div>
        );
    }
}

function CategoryDropdown() {
    document.getElementById("category-dropdown").classList.toggle("show");
}

function ProductDropdown() {
    document.getElementById("product-dropdown").classList.toggle("show");
}

// function UseCategories() {
//     const [categories, setCategories] = useState('');

//     useEffect(() => {
//         (async () => {
//             const result = await categories
//             setData(result.data);
//         })();
//     }, []);

//     return (
//         categories.map(({ categoryId, categoryName, description }) => (
//             <div key={categoryId}>
//                 <p>{`${categoryName}`}</p>
//                 <p>{`${description}`}</p>
//             </div>
//         )));
// }

export default NextHeader;