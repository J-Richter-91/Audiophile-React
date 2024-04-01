import '../Styles/company-info.css'

export default function CompanyInfo(){
    return(
        <div className="company-info-container">
            <div className="company-info-text-container">
                <h1 className="company-info-title">Bringing you the <span className='orange-text'>best</span> audio gear</h1>
                <p className='company-info-description'>
                    Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. 
                    We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our 
                    store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
                </p>
            </div>
            <div className="company-info-img-container"></div>
        </div>
    )
}