import React, { PureComponent } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import "./Category.scss";
import '../../Components/Navbar/Navbar.scss'
import star from '../../Components/Images/Orange_star.svg.png'
export default class CategoryComponent extends PureComponent {
  render() {
    const { categoryItems, handleSortChange,handleProduct} = this.props;
    const{items}=this.props;

    return (
      
      <div>
        <div className='category-sort'>
          <select onChange={handleSortChange} className='category-sort2'>
            <option>Sort by</option>
            <option value="pricehl">Price: High to Low</option>
            <option value="pricelh">Price: Low to High</option>
            <option value="titleaz">Title: A to Z</option>
            <option value="titleza">Title: Z to A</option>
          </select>
        </div>
        <div className='category-item' >
          {categoryItems && categoryItems.map((item, index) => {
            return (
              <div key={index} className='category-one'>
                <ol key={index} >

                  <Link to={`/${item.id}/${item.title}`} className='category-link' onClick={()=>handleProduct(item.id)}> 
                  <div className='category-border'>

                    <li className='category-li'><img className='category-image' src={item.image} alt='' /></li>
                 
                    {/* <li className='category-title'>{item.title.substring(0,16)}</li>
                    <li className='category-icon'>
                      <img src={staricon} alt='' height={20} />
                      <img src={staricon} alt='' height={20} />
                      <img src={staricon} alt='' height={20} />
                      <imf5ty67u8i9op[]
                       src={staricon} alt='' height={20} />47589+
                      <img src={staricon} alt='' height={20} />
                    </li>
                    <li className='category-desc'>{item.description.substring(0,45)}.....</li>              
                    <li className='category-price'>Rs.{item.price}/-</li>
                    <li>
                      <button className='category-btn-cart'>
                        Add to Cart 
                      </button>
                    </li> */}
                     <span className='category-tp'>

<li className='category-title'>{item.title.substring(0,10)}</li>
<li className='category-price'>${item.price}/-</li>

</span>

<li className='category-desc'>{item.description.substring(0,35)}.....</li>
<span className='category-tp'>

<li className='category-star-icon'>
  <img src={star} alt='' height={20} />
  <img src={star} alt='' height={20} />
  <img src={star} alt='' height={20} />
  <img src={star} alt='' height={20} />
  <img src={star} alt='' height={20} />
</li>
<li>
  <button className='category-button'>BuyNow</button>
</li>
</span>
                    
                    </div>
                  </Link>
                </ol>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
