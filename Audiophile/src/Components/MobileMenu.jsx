import '../Styles/mobile-nav.css'
import { Link } from 'react-router-dom'

export default function ProductRow({isOpen,mobileHandler}){
    return(
    <>
    <div onClick={() => mobileHandler()} className={`mobile-overlay ${isOpen ? 'active' : ''}`}></div>
    <div className={`background ${isOpen ? 'active' : ''}`}>
    <div className={`mobile-navigation-row ${isOpen ? 'active' : ''}`}>
    <div className="mobile-navigation-container">
      <img 
      className="mobile-navigation-picture" 
      src='/Shared/headphones-no-background.png'
      alt='product img' />
      <img 
      className="mobile-navigation-shadow" 
      src='/Shared/shadow.png'
      alt='shadow' />
      <h1 className="mobile-navigation-title">HEADPHOHNES</h1>
      <div className="mobile-shop-row">
        <Link  onClick={() => mobileHandler()} to='/Products/headphones'  className="navigation-btn">SHOP</Link>
        <img alt='arrow' src='/Shared/icon-arrow-right.svg' />
      </div>
    </div>
    <div className="mobile-navigation-container">
      <img 
      className="mobile-navigation-picture" 
      src='/Shared/speaker-no-background.png'
      alt='product img' />
      <img 
      className="mobile-navigation-shadow" 
      src='/Shared/shadow.png'
      alt='shadow' />
      <h1 className="mobile-navigation-title">SPEAKERS</h1>
      <div className="mobile-shop-row">
      <Link  onClick={() => mobileHandler()} to='/Products/speakers'  className="navigation-btn">SHOP</Link>
        <img alt='arrow' src='/Shared/icon-arrow-right.svg' />
      </div>
    </div>
    <div className="mobile-navigation-container">
      <img 
      className="mobile-navigation-picture" 
      src='/Shared/earphones-no-background.png'
      alt='product img' />
      <img 
      className="mobile-navigation-shadow" 
      src='/Shared/shadow.png'
      alt='shadow' />
      <h1 className="mobile-navigation-title">EARPHONES</h1>
      <div className="mobile-shop-row">
      <Link  onClick={() => mobileHandler()} to='/Products/earphones'  className="navigation-btn">SHOP</Link>
        <img alt='arrow' src='/Shared/icon-arrow-right.svg' />
      </div>
    </div>
  </div>
  </div>
  </>
    )
}