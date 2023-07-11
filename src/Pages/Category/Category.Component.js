import React, { PureComponent } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import "./Category.scss";

export default class CategoryComponent extends PureComponent {
  render() {
    const { categoryItems, handleSortChange,handleitem} = this.props;
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
          {categoryItems.map((item, index) => {
            return (
              <div key={index} className='category-one'>
                <ol key={index} >

                  <Link to={`/${item.id}/${item.title}`} className='category-link'> 
                  {}
                  <div className='category-border'>

                    <li className='category-li'><img className='category-image' src={item.image} alt='' /></li>
                 
                    <li className='category-title'>{item.title.substring(0,10)}</li>
                    <li className='category-desc'>{item.description.substring(0,25)}.....</li>                    <li className='category-price'>Rs.{item.price}/-
                    
                    <strike>₹200</strike>
              <span>(27% OFF)</span>
                    </li>
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
