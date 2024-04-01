import { Link } from 'react-router-dom'
import '../Styles/footer.css'

export default function Footer(){
    return(
        <>
            <footer>
                <div className="footer-nav">
                    <img
                    className='footer-logo'
                    src="/Shared/logo.svg"
                    alt='logo'
                    />
                  <div className="footer-nav-link-container">
                    <Link to='/' target='_top' className="footer-nav-links">HOME</Link>
                    <Link to='Products/headphones'  target='_top' className="footer-nav-links">HEADPHONES</Link>
                    <Link to='Products/speakers'  target='_top' className="footer-nav-links">SPEAKERS</Link>
                    <Link to='Products/earphones'  target='_top' className="footer-nav-links">EARPHONES</Link>
                  </div>
                  
                </div>
              
                <div className="footer-text-container">
                    <p className="footer-description">
                    Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists 
                    who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we're open 7 days a week.
                    </p>
                    <p className='copyright'>Copyright 2021. All Rights Reserved</p>
                </div>
                <div className="social-icons-row">
                    <img 
                    src='/Shared/icon-facebook.svg'
                    alt='facebook icon'
                    />
                     <img 
                    src='/Shared/icon-twitter.svg'
                    alt='facebook icon'
                    />
                     <img 
                    src='/Shared/icon-instagram.svg'
                    alt='facebook icon'
                    />
                </div>
            </footer>
        </>
    )
}