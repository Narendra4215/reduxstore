import React, { PureComponent } from 'react'
import "./Product.scss";
import star from "../../Components/Images/green-star.png"
export default class ProductComponent extends PureComponent {
  render() {
    const { productData,handleAddCart } = this.props;

    return (
      <div className='header'>
        <div className='product'>
          <div className='product-img'>
            <img alt='' className='product-img-img' src={productData.image} />
          </div>
          <div className='product-details'>
            <li className='product-title'>{productData.title}</li>
            <li className='product-cate'>{productData.category}</li>

            <div className='product-rating'>
              <li className='product-rate' >4.3
                <img className='product-rate-icon' src={star} height={15} alt='' />
              </li>
              <li className='product-count'>(400) Ratings</li>
            </div>
            <li className='product-off'>Extra 20%  OFF</li>
            <li className='product-price'>
              Rs.{productData.price}
              <strike>Rs.200</strike>
              <span>(27% OFF)</span>
            </li>
            <button className='product-cart' id="demo" onClick={handleAddCart} >Add to Cart</button>
            <button className='product-buy'>Buy Now</button>
          </div>

        </div>
      </div>

    )
  }
}
