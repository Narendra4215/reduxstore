import React, { PureComponent } from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import logo from "../Images/image-logo.jpg";
import profile from "../Images/profile-icon.jpg";
import bag from "../Images/bag -icon.png";
import whishlist from "../Images/heart -icon.png";
import "./Navbar.scss";

export default class NavbarComponent extends PureComponent {
    render() {
        const { categories, handleItems } = this.props;
        return (
            <div>
                <header>
                    <div className='navbar'>
                        <Link to="/">
                            <div>
                                <img src={logo} alt='' className='navbar-logo' />
                            </div>
                        </Link>

                        <div className='search'>
                            <input type='search' className='search-input' placeholder='Search for products, brands and more' />
                        </div>
                        <div className='icons'>
                            <span className='icons-profile'>
                                <img src={profile} alt='' height={15} />
                                profile
                            </span>

                            <span className='icons-whishlist'>
                                <img src={whishlist} alt='' height={15} />
                                Wishlist
                            </span>
                            <span className='icons-bag'>
                                <img src={bag} alt='' height={15} />
                                Bag
                            </span>
                        </div>
                    </div>
                </header>

                <div className='navbar-category'>
                    <div className='navbar-category2'>
                        Category

                    </div>
                </div>

                <div className='navbar-items'>

                    {categories && categories.map((category, index) => (
                        <div key={index} className='navbar-item'>

                            <Link className='navbar-link' onClick={handleItems} to={category} key={index} >{category}</Link>
                        </div>

                    ))}
                </div>


                <div>

                </div>
            </div>
        )
    }
}
