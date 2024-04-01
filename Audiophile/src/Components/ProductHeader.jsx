import '../Styles/product-header.css'
import { Link } from 'react-router-dom';
import Data from '../data.json'

export default function ProductHeader({handleCartClick,mobileHandler}){
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
        <nav className="product-header">
             <div  className="hamburger-logo-container">
                <img onClick={mobileHandler}   className="hamburger-icon" src="/Shared/icon-hamburger.svg" />
                <img src='/Shared/logo.svg' alt='logo'/>
                </div>
            <div className="product-nav-link-container">
              <Link to='/' className="nav-links">HOME</Link>
                {categoryLinks}
            </div>
            <img onClick={handleCartClick} className='cart-icon' src="/Shared/icon-cart.svg" alt="cart-icon" />
        </nav>
    )
}