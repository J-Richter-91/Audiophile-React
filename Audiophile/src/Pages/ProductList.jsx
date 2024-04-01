import { useParams, Link, useLocation } from "react-router-dom"
import { useState, useLayoutEffect } from "react";
import ProductRow from "../Components/ProductRow";
import Header from '../Components/Header'
import MobileMenu from '../Components/MobileMenu'
import CompanyInfo from "../Layout/CompanyInfo";
import CartSummary from "../Components/CartSummary";
import '../Styles/product-list.css'
import '../Styles/cart-summary.css'

export default function ProductList({products}){
const {category} = useParams();
const [mobileOpen, setMobileOpen] = useState(false)
const location = useLocation()
console.log(category)

const filteredProducts = products.filter(item => item.category === category);
filteredProducts.forEach(product => {
    console.log(product.categoryImage.desktop)
});

function mobileHandler(){
    setMobileOpen(prevState => !prevState)
}

function handleCartClick(){
    console.log("clicked")
    setCartOpen(prevState => !prevState)
}

const [cartOpen, setCartOpen] = useState(false)

console.log(mobileOpen)

useLayoutEffect(() => {
    window.scrollTo(0, 0)
},[location]);

    return(
        <>
            <Header
            category={category}
            mobileHandler={mobileHandler}
            handleCart={handleCartClick}
            
            />
            <CartSummary
            cartOpen={cartOpen}
            handleCart={handleCartClick}
            />
             <MobileMenu 
            isOpen={mobileOpen}
            mobileHandler={mobileHandler}
            />
            
            {filteredProducts.map((item,index) => (
                <div className="product-list-container" key={index}>
                    <img className="product-img" src={item.categoryImage.desktop} alt='headphones'/>
                    <div className="product-list-info-container">
                        <h1 className="product-list-title">{item.name}</h1>
                        <p className="product-list-description">{item.description}</p>
                        <Link  className="product-list-btn" to={`/product/${item.id}`}>See Product</Link>
                    </div>
                </div>
            ))}
           <ProductRow />
           <CompanyInfo />
        </>
    )
}
