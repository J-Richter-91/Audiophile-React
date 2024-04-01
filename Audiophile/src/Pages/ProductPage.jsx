import { useParams, Link, useLocation} from "react-router-dom"
import { useEffect, useState, useContext, useLayoutEffect} from "react"
import CartContext  from "../Context/CartContext"
import ProductHeader from "../Components/ProductHeader"
import ProductRow from "../Components/ProductRow"
import MobileMenu from "../Components/MobileMenu"
import Data from '../data.json'
import CartSummary from "../Components/CartSummary"
import CompanyInfo from "../Layout/CompanyInfo"
import '../Styles/product-page.css'
import '../Styles/cart-summary.css'

export default function ProductPage({products}){
    //const [cart, setCart] = useState([])
    const {id} = useParams()
    const product = products.find(item => item.id === parseInt(id));
    
    const {cart, setCart, updateCart, resetCart, count, setCount} = useContext(CartContext)
    const [mobileOpen, setMobileOpen] = useState(false)
    const [cartOpen, setCartOpen] = useState(false)
    const location = useLocation()

    function mobileHandler(){
        setMobileOpen(prevState => !prevState)
    }
   
    
    const slugs = product.others.map(item => item.slug )
    const slugId = slugs.map(slug => {
    
    const match = Data.find(item => item.slug === slug)
        return match ? match.id : null;
    });
    
    

    const paragraphs = product.features.split("\n\n")

    function handleCartClick(){
        setCartOpen(prevState => !prevState)
    }
    


    function handleIncreaseCount(){
        setCount(prevCount => (
            prevCount + 1
        ))  
    }

    function handleDecreaseCount(){
        setCount(prevCount => {
            if(prevCount > 0){
                return prevCount - 1
            }
            else return prevCount
        })
    }

   useLayoutEffect(() => {
    window.scrollTo(0, 0)
},[location]);
   

    return(
    <>
        <ProductHeader
        handleCartClick={() => handleCartClick()}
        mobileHandler={mobileHandler}
        />
        <main>
        <CartSummary
        cartOpen={cartOpen}
        handleCart={handleCartClick}
        />
        <MobileMenu
        isOpen={mobileOpen}
        mobileHandler={mobileHandler}
        />
                 <div className="product-page-row-container" >
            <img className="product-page-item-img" src={product.categoryImage.desktop} alt='headphones'/>
            <div className="product-page-info-container">
                <h1 className="product-page-title">{product.name}</h1>
                <p className="product-page-description">{product.description}</p>
                <p className="product-price">{`$${product.price.toLocaleString()}`}</p>
                <div className="product-quantities-container">
                    <div className="quantity-container">
                        <img 
                        className="minus-symbol"
                        src="/ProductPage/minus.svg"
                        alt='minus symbol'
                        onClick={() => handleDecreaseCount()} />
                        <span>{count}</span>
                        <img
                        className="plus-symbol"
                        src="/ProductPage/plus.svg"
                        alt="plus symbol"
                        onClick={() => handleIncreaseCount()}
                        />
                        </div>
                        <button onClick={ () => updateCart(product, count)} className="add-to-cart-btn">ADD TO CART</button>
                    </div>
                </div>
            </div>
            
            <div className="product-features-row-container">
                <div className="product-features-container">
                    <h1 className="features-title">FEATURES</h1>
                    {paragraphs.map((item,index) => (
                        <p className="product-features" key={index}>{item}</p>
                    ))}
                </div>
                <div className="in-the-box-container">
                        <div className="in-the-box-title-container"><h1 className="in-the-box">IN THE BOX</h1></div>
                        <div className="in-the-box-items-container">
                        {product.includes.map((item,index) => (
                             <p key={index} className="package-item"><span className="orange-product-text">{item.quantity}x </span>{item.item}</p>
                        ))}
                        </div>
                </div>
            </div>
            <div className="product-gallery-container">
                <div className="two-img-container">
                    <img src={product.gallery.first.desktop} alt="product img" className="img-1" />
                    <img src={product.gallery.second.desktop} alt="product img" className="img-1" />
                </div>
                <img src={product.gallery.third.desktop} alt="product img" className="img-3" />
            </div>
            <div className="suggested-product-row-container">
                {product.others.map((item,index) => {
                    //match the id with the item
                
                   
                return(
                    <div key={index} className="suggested-product-card">
                    <img className="suggested-img" src={item.image.desktop} alt='img'/>
                    <h1 className="suggested-title" >{item.name}</h1>
                    {slugId[index] && <Link className="suggested-product-link" key={index} to={`/Product/${slugId[index]}`} >SEE PRODUCT</Link>}
                    
                </div>

                )})}


            </div>
            <ProductRow />
            <CompanyInfo/>
            </main>
    </>
    )
}
