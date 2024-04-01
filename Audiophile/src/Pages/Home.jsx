import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import ProductRow from "../Components/ProductRow";
import MobileMenu from "../Components/MobileMenu"
import CartSummary from "../Components/CartSummary";
import CompanyInfo from "../Layout/CompanyInfo";
import Data from '../data.json'
import '../Styles/home.css'
import '../Styles/cart-summary.css'
import '../Styles/mobile-nav.css'

export default function Home(){

  const [cartOpen, setCartOpen] = useState(false)
  function handleCartClick(){
    setCartOpen(prevState => !prevState)
}

const [mobileOpen, setMobileOpen] = useState(false)

function mobileHandler(){
    setMobileOpen(prevState => !prevState)
}

const groupedData = Data.reduce((acc, item) => {
  if (!acc[item.category]) {
      acc[item.category] = [];
  }
  acc[item.category].push(item);
  return acc;
}, {});

console.log(Data)




const categoryLinks = Object.keys(groupedData).map(category => (
  <Link className="nav-links" key={category} to={`/products/${category}`}>
    {category.toUpperCase()}
  </Link>
));

console.log(categoryLinks)
 
    return(
        <>
            <header className="home-header">
            <MobileMenu 
            isOpen={mobileOpen}
            mobileHandler={mobileHandler}
            />
              <nav>
                <div  className="hamburger-logo-container">
                <img onClick={() => mobileHandler()} className="hamburger-icon" src="/Shared/icon-hamburger.svg" />
                <img src='/Shared/logo.svg' alt='logo'/>
                </div>
                <div className="nav-link-container">
                  <Link to='/' className="nav-links">HOME</Link>
                 {categoryLinks}
                </div>
                <img onClick={() => handleCartClick()} src="/Shared/icon-cart.svg" alt="cart logo" />
              </nav>
              <div className="product-info-container">
                <p className="new-product">NEW PRODUCT</p>
                <h1 className="product-title">XX99 Mark II Headphones</h1>
                <p className="product-description">Experience natural, lifelike audio and exceptional 
                build quality made for the passionate music enthusiast.</p>
                <Link className="header-btn" to='Product/4' >See Product</Link>
              </div>
             
            </header>
            
            <CartSummary
            cartOpen={cartOpen}
            handleCart={handleCartClick}
            />
            <ProductRow />
            <div className="home-product-gallery-container">
              <div className="zx9-container">
                <img 
                className="zx9-speaker-img" 
                src='/Home/image-speaker-zx9.png'
                alt='zx9 speaker'
                />
                <div className="zx9-info-container">
                  <h1 className="zx9-title">ZX9 SPEAKER</h1>
                  <p className="zx9-description">Upgrade to premium speakers that are phenomenally 
                  built to deliver truly remarkable sound.</p>
                  <Link to='Product/6'  className="see-product-btn">See Product</Link>
                </div>
              </div>
              <div className="zx7-speaker-container">
                <div className="zx7-speaker-description-container">
                  <h1 className="zx7-title">ZX7 SPEAKER</h1>
                  <Link to='Product/5' target='_top' className="see-product-btn-transparent">SEE PRODUCT</Link>
                </div>
                
              </div>
              <div className="home-earphones-row">
                  <div className="earphone-img-container"></div>
                  <div className="earphone-text-container">
                    <h1 className="earphone-title">YX1 EARPHONES</h1>
                    <Link to='Product/1' target='_top' className="see-product-btn-earphones">See Product</Link>
                  </div>
                </div>
            </div>
            <CompanyInfo />
        </>
    )
}