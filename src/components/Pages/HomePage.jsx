import React, { useEffect, useState } from 'react'
import video from '../../pictures/video.mp4'
import logo from '../../logo.png'
import { Link } from 'react-router-dom'
import getAllProducts from '../../services/products'
import ScrollToTopNavLink from '../ScrollToTopNavLink'

const HomePage = () => {
  const [productsList, setProductsList] = useState([]);

  const fetchData = async () =>{
    try {
      const products = await getAllProducts();
      setProductsList(products);
    } catch (error) {
      console.log(error.massage);
    }
 }

  useEffect (() =>{
    fetchData()
  },[] )


  return (
    <>
      <div id='containerHP'>
        <div className='contentVideo'>
          <video id='video' autoPlay muted>
          <source src={video} alt='video' title='video' type="video/mp4" />
            Your browser does not support HTML5 video. We're sorry.
          </video>
        </div>
        <div>
          <div className='contentLogo'>
            <img id='logoImg' src={logo} alt='logo' title='logo'></img>
            <h2>Let's find together the perfect wig for you</h2>
            <p id='videoText'><strong>With over 20 years of experience</strong>
              I realized that working with hair is not only a job but also an art.<br/>
             In our wig salon each&nbsp; 
             You receive personal treatment, a pampering experience<br/>
              and a unique adjustment of the wig according to the structure of her face and personality.
            </p>
            <button id='ourStoreButton'><ScrollToTopNavLink  id='ourStoreLButton' to="/store" >Our Store &gt; </ScrollToTopNavLink></button>
          </div>
        </div>
      </div>
      <br/>
      <div className='contentTxtHP'>
        <p>
          Welcome to our Wig World Community! <br/>
          Wig World is an online wig shop, located in Louisiana, dedicated to providing our customers with the best quality human hair.
          Try our NourishedbyTiffani hair products on your bio and wig hair to keep it feeling clean, fresh, soft, and hydrated! <br/>
          Have any questions or requests, contact us here! 
        </p>
      </div>
      <div className='gallery'>
        <div className='galleryBox'>
            {productsList.map((product, index) => (
              <div key={index}className='galleryItem'>
                <Link className='item'
                  style={{ backgroundImage: `url(${product.img})`}}
                  to={'/store/'+product.name}>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default HomePage