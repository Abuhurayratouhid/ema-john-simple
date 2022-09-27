import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const {name,img,price,ratings,seller}=props.product

    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <p className='product-name'>{name}</p>
            <div className='product-info'>
            <p>${price}</p>
            <p><small>{seller}</small></p>
            <p><small>{ratings}stars</small></p>
            </div>
            <div className='btn-add-to-cart'>
            <button className='btn-add' onClick={()=>props.handleAddToCart(props.product)} >Add to cart
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
            </div>

        </div>
    );
};

export default Product;