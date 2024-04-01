import '../Styles/product-row.css'
import { Link } from 'react-router-dom'

export default function ProductRow(){
    return(
    <div className="navigation-row">
    <div className="navigation-container">
      <img 
      className="navigation-picture" 
      src='/Shared/headphones-no-background.png'
      alt='product img' />
      <img 
      className="navigation-shadow" 
      src='/Shared/shadow.png'
      alt='shadow' />
      <h1 className="navigation-title">HEADPHOHNES</h1>
      <div className="shop-row">
        <Link to='/products/headphones'  className="navigation-btn">SHOP</Link>
        <img alt='arrow' src='/Shared/icon-arrow-right.svg' />
      </div>
    </div>
    <div className="navigation-container">
      <img 
      className="navigation-picture" 
      src='/Shared/speaker-no-background.png'
      alt='product img' />
      <img 
      className="navigation-shadow" 
      src='/Shared/shadow.png'
      alt='shadow' />
      <h1 className="navigation-title">SPEAKERS</h1>
      <div className="shop-row">
      <Link to='/products/speakers'  className="navigation-btn">SHOP</Link>
        <img alt='arrow' src='/Shared/icon-arrow-right.svg' />
      </div>
    </div>
    <div className="navigation-container">
      <img 
      className="navigation-picture" 
      src='/Shared/earphones-no-background.png'
      alt='product img' />
      <img 
      className="navigation-shadow" 
      src='/Shared/shadow.png'
      alt='shadow' />
      <h1 className="navigation-title">EARPHONES</h1>
      <div className="shop-row">
      <Link to='/Products/earphones' className="navigation-btn">SHOP</Link>
        <img alt='arrow' src='/Shared/icon-arrow-right.svg' />
      </div>
    </div>
  </div>
    )
}