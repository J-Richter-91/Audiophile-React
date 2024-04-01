import CartContext from '../Context/CartContext'
import CompanyInfo from './CompanyInfo'
import Footer from './Footer'
import { useContext } from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout(){
    return(
        <div className="site-wrapper">
           
            <Outlet />
            
            <Footer />
          
        </div>
    )
}