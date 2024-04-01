import cartContext from "../Context/CartContext"
import { useContext, useState } from "react";
import { Link } from "react-router-dom"
import { useForm} from "react-hook-form"
import Footer from "../Layout/Footer"
import ProductHeader from '../Components/ProductHeader'
import MobileMenu from '../Components/MobileMenu'
import CartSummary from "../Components/CartSummary"
import '../Styles/checkout.css'
import '../Styles/mobile-nav.css'

export default function Checkout(){
    const { register, handleSubmit, formState: {errors,isValid, isSubmitted}, watch} = useForm()
    const {cart} = useContext(cartContext)
    const [isSummaryActive, setIsSummaryActive] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const [paymentMethod, setPaymentMethod] = useState('credit card');
    const [viewAllProducts, setViewAllProducts] = useState(false)
    const [cartOpen, setCartOpen] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)

    function mobileHandler(){
        setMobileOpen(prevState => !prevState)
    }

    function handleCartClick(){
      setCartOpen(prevState => !prevState)
  }
    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
    };

    console.log(cart)

    const onSubmit = (data) =>{
        console.log(data)
        if(isValid){
            setSubmitted(true)
            setIsSummaryActive(true)
            console.log(data)
        } else{
            setSubmitted(false)
            setIsSummaryActive(false)
        }
    }

    function closePopup(){
        console.log("clicked")
        setIsSummaryActive(false)
    }

    const subTotal = cart.reduce((acc, item) => {
        const itemPrice = parseInt(item.quantity) * parseInt(item.price.split(',').join(''));
        return acc += itemPrice
     },0)
   
    const tax = subTotal * .0825;

    const grandTotal = tax + subTotal

    function handleViewAll(){
        setViewAllProducts(prevState => !prevState)
    }
    
    console.log(mobileOpen)

    return(
        <>
          <ProductHeader
        handleCartClick={() => handleCartClick()}
        mobileHandler={mobileHandler}

        />
        <CartSummary
         cartOpen={cartOpen}
         handleCart={handleCartClick}
        />
        <MobileMenu
        isOpen={mobileOpen}
        mobileHandler={mobileHandler}
        
        />
           <div className="main">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className="checkout">Checkout</h1>
                <p className="billing-details">Billing Details</p>
                <div className="billing-details-container">
                    <div className="input-wrapper">
                          <div className="label-wrapper"><label for="name">Name</label>{errors.name && <p className="error">{errors.name.message}</p>}</div>  
                        <input {...register('name',{required:"please enter your name", minLength: {value: 4, message:"name must be atleast 4 characters"}})} name="name" id="name" placeholder="Name"  ></input>
                        
                    </div>
                    <div className="input-wrapper">
                    <div className="label-wrapper"><label for="email">Email</label>{errors.email && <p className="error">{errors.email.message}</p>}</div>  
                        <input {...register('email', {required:"Please enter your email",  pattern: {value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, message: "please enter a valid email"}})} name="email" id="email" placeholder="email@mail.com"  ></input>
                       
                    </div>
                        <div className="input-wrapper">
                        <div className="label-wrapper"><label for="phone">Phone</label>{errors.phone && <p className="error">{errors.phone.message}</p>}</div>  
                        <input {...register('phone', {required:"enter your phone number", pattern: {value: /^\d{3}-\d{3}-\d{4}$/, message: "phone number not valid" }})} name="phone" id="phone" placeholder="123-456-7890"  ></input>
                       
                        </div>
                </div>
                <p className="shipping-info">Shipping Info</p>
                <div className="shipping-info-container">

                    <div className="input-wrapper-address">
                    <div className="label-wrapper"><label for="address">Address</label>{errors.address && <p className="error">{errors.address.message}</p>}</div>  
                        <input {...register("address", {required: "enter a valid address", pattern: {value:/^[a-zA-Z0-9\s,'-]*$/, message: "address not valid" }})} className="address" name="address" id="address" placeholder="11357 Williams Ave" ></input>
                        
                    </div>

                    <div className="input-wrapper">
                    <div className="label-wrapper"><label for="zip">Zip</label>{errors.pin && <p className="error">{errors.zip.message}</p>}</div>  
                        <input {...register("zip", {required: "enter valild zip code", minLength:{value: 5, message: "must be 5 charcters long"}, pattern: {value: /^[0-9]+$/, message:"must only contain numbers"}})} name="zip" id="zip" placeholder="10001" ></input>
                        
                    </div>

                    <div className="input-wrapper">
                    <div className="label-wrapper"><label for="city">City</label>{errors.city && <p className="error">{errors.city.message}</p>}</div>  
                        <input {...register("city", {required:"enter your city"})} name="city" id="city" placeholder="New York" ></input>
                        
                    </div>

                    <div className="input-wrapper">
                    <div className="label-wrapper"><label for="country">Country</label>{errors.country && <p className="error">{errors.country.message}</p>}</div>  
                        <input {...register("country", {required:"please enter your country"})} name="country" id="country" placeholder="United States" ></input>
                    </div>
                </div>

                <p className="payment-details">Payment Details</p>
               
                
                <div className="payment-details-container">
                    <p className="payment-method">Payment Method</p>
                    <div className="radio-btns-container">
                    <div className="radio-input">
                        <label  className="credit-card" for="credit-card"  >Credit Card</label>
                        <input  onClick={handlePaymentMethodChange} {...register('paymentMethod')} className="radio" name="paymentMethod" type="radio" value="credit card" id="credit card"  />
                        
                    </div>
                    <div className="radio-input">
                        <label className="cash" for="cash">Cash</label>
                        <input  onClick={handlePaymentMethodChange}  {...register('paymentMethod')} className="radio" name="paymentMethod" type="radio" value="cash" id="cash" />
                        
                    </div>
                    </div>

                    <div className="input-wrapper">
                    <div className="label-wrapper"><label for="creditCard">Credit Card</label>{errors.creditCard && <p className="error">{errors.creditCard.message}</p>}</div>  
                        <input
                         {...register("creditCard", {
                            required: paymentMethod === 'credit card' ? "Please enter credit card number" : false,
                            pattern: {
                                value: /^[0-9]*$/,
                                message: "Credit card number must contain only numbers"
                            },
                            minLength: {
                                value: 16,
                                message: "Credit card number must be at least 16 characters long"
                            }
                        })}
                        name="creditCard" id="creditCard" placeholder="238521993" ></input>
                       
                    </div>

                    <div className="input-wrapper">
                    <div className="label-wrapper"><label for="pin">PIN</label>{errors.pin && <p className="error">{errors.pin.message}</p>}</div>  
                        <input {...register("pin", 
                        {required: paymentMethod === 'credit card' ? "please enter your PIN" : false,
                        minLength: {value: 4, message: "PIN not valid"},
                        maxLength: {value: 4, message: "PIN not valid"}
                    }
                        )} name="pin" id="pin" placeholder="2164" ></input>
                      
                    </div>

                </div>
                
            </form>
            {cart &&
            <div className="order-summary-container">
                <p className="summary-title">Summary</p>
                {cart.map((item,index) => (
                    <div key={index} className="ordered-item-row">
                    <img className="order-summary-img" src={item.Img} alt="product picture" />
                    <div className="ordered-item-info-column">
                        <p className="ordered-item-name" >{item.title}</p>
                        <p className="ordered-item-price" >${item.price}</p>
                    </div>
                    <p className="ordered-item-quantity">x{item.quantity}</p>
                </div>
                ))}
                <div className="total-row">

</div>
            <div className="subtotal-row">
                <p className="order-summary-row-title">Total</p>
                <p className="order-summary-row-value">${subTotal.toLocaleString()}</p>
            </div>
            <div className="shipping-row">
                <p className="order-summary-row-title">Shipping</p>
                <p className="order-summary-row-value">$50</p>
            </div>
            <div className="tax-row">
                    <p className="order-summary-row-title">Tax</p>
                    <p className="order-summary-row-value">${tax.toFixed().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
            </div>
            <div className="grand-total-row">
                    <p className="order-summary-row-title">GRAND TOTAL</p>
                    <p className="grand-total">${grandTotal.toFixed().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
            </div>
                <button className="pay-btn" onClick={handleSubmit(onSubmit)}  type="submit">CONTINUE & PAY</button>
            </div>
}
            </div>
            <div onClick={() => closePopup()} className={`order-confirm-overlay ${isSummaryActive ? 'active' : ''}`}></div>
            <div className={`order-confirmation-container ${isSummaryActive ? 'active' : ''}`}>
                    <img className="checkmark-icon" src="/Shared/icon-order-confirmation.svg" />
                    <h1 className="order-confirmation-title" >THANK YOU FOR YOUR ORDER</h1>
                    <p className="order-confirmation-message" >You will receive an email confirmation shortly.</p>
                    <div className="order-confirmation-info">
                        <div className="product-confirmation-container">
                            
                            
                            {!viewAllProducts ? 
                            <>
                                <div className="order-confirmation-product-row">
                                <img className="order-confirmation-product-img" alt="product img" src={cart[0].Img}  />
                                <div className="order-confirmation-info-column">
                                    <p className="order-confirmation-product-title">{cart[0].title}</p>
                                    <p className="order-confirmation-product-price">${cart[0].price}</p>
                                </div>
                                <p className="order-confirmation-product-qty">x{cart[0].quantity}</p>
                            </div>
                            <hr className="order-confirmation-break"></hr>
                            <p onClick={() => handleViewAll()} className="other-items">and {cart.length - 1} other item(s)</p>
                            </>
                            
                            :
                            
                            cart.map((item,index) => (
                                <div key={index} className="order-confirmation-product-row">
                                <img className="order-confirmation-product-img" alt="product img" src={item.Img}  />
                                <div className="order-confirmation-info-column">
                                    <p className="order-confirmation-product-title">{item.title}</p>
                                    <p className="order-confirmation-product-price">${item.price}</p>
                                </div>
                                <p className="order-confirmation-product-qty">x{item.quantity}</p>
                            </div>
                            ))}
                             {viewAllProducts && <p onClick={() => handleViewAll()} className="other-items">hide</p>}
                            
                        </div>
                        <div className="price-info-container">
                            <p className="order-confirmation-total-title">GRAND TOTAL</p>
                            <p className="order-confirmation-grand-total" >${grandTotal.toFixed().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                            
                        </div>
                        
                    </div>
                    <Link className="back-to-home-btn" target="_top" to='/' >BACK TO HOME</Link>
            </div>
            <Footer />
        </>
    )
}