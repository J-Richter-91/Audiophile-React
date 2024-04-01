import { Link } from "react-router-dom"
import { useContext } from "react"
import CartContext from "../Context/CartContext"

export default function CartSummary({ cartOpen,handleCart}){
    
    const {cart,total,increaseQuantity,decreaseQuantity,resetCart} = useContext(CartContext)
    console.log(cart)
    return(
        <>
        <div onClick={() => handleCart()} className={`overlay ${cartOpen ? 'active' : ''}`}></div>
        <div className={`cart-summary-container ${cartOpen ? 'active' : ''}`}>
            <div className="cart-summary-heading-container">
                <h1>Cart({cart.length})</h1>
                <a className="remove-all-btn" onClick={() => resetCart()}>Remove All</a>
            </div>
            <div className="cart-products-column">
                {cart.map((item,index) => (
                    <div key={index} className="cart-row">
                        <img className="cart-img" src={item.Img} />
                        <div className="name-price-container">
                            <p className="cart-preview-title">{item.title}</p>
                            <p className="cart-preview-item-price">${item.price}</p>
                        </div>
                        <div className="cart-preview-quantity-container">
                        <img 
                        className="minus-symbol"
                        src="/ProductPage/minus.svg"
                        alt='minus symbol'
                        onClick={() => decreaseQuantity(index, item.quantity)} />
                        <span>{item.quantity}</span>
                        <img
                        className="plus-symbol"
                        src="/ProductPage/plus.svg"
                        alt="plus symbol"
                        onClick={() => increaseQuantity(index,item.quantity)}
                        />
                        </div>
                        
                    </div>
                )) }
                {cart.length > 0 && 
                <div className="total-row">
                    <p className="total-text">Total</p>
                    <p className="total">${total.toLocaleString()}</p>
                </div>
                }       
              
                {cart.length > 0 &&<Link className="checkout-btn" to="/checkout">Checkout</Link>}
            </div>
        </div>
        

            </>
    )
}