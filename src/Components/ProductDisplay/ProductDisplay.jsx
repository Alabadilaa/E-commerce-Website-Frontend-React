import React from 'react'
import './ProductDisplay.css'
import { FaStar, FaRegStar } from "react-icons/fa";

const ProductDisplay = (props) => {
    const {product} = props;
  return (
    <div className='productdisplay'>
        <div className="pd-left">
            <div className="pd-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="pd-img">
                <img className='pd-main-img' src={product.image} alt="" />
            </div>
        </div>
        <div className="pd-right">
            <h1>{product.name}</h1>
            <div className="pd-right-star">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
                <p>(122)</p>
            </div>
        </div>
    </div>
  )
}

export default ProductDisplay; 