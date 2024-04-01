import Data from '../data.json'
import { Link } from 'react-router-dom';
import '../Styles/header.css'

export default function Header({category, mobileHandler, handleCart}){
    
const groupedData = Data.reduce((acc, item) => {
    if (!acc[item.category]) {
        acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});
  
  
  
  
  
  
  const categoryLinks = Object.keys(groupedData).map(category => (
    <Link className="nav-links" key={category} to={`/products/${category}`}>
      {category.toUpperCase()}
    </Link>
  ));
    return(
        <header className="product-list-header">
              <nav>
              <div  className="hamburger-logo-container">
                <img onClick={mobileHandler}   className="hamburger-icon" src="/Shared/icon-hamburger.svg" />
                <img src='/Shared/logo.svg' alt='logo'/>
                </div>
             
                <div className="nav-link-container">
                  <Link to='/' className="nav-links">HOME</Link>
                 {categoryLinks}
                </div>
                <img onClick={handleCart} className='cart-icon' src="/Shared/icon-cart.svg" alt="cart-icon" />
              </nav>
            <h1 className="product-list-category">{category}</h1>
        </header>
    )
}