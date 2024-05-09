import React from 'react'
import about from '../../pictures/about.jpg'

const OurStory = () => {
  return (
    <div className='contant'>
        <div className='contentImgA'>
          <img src={about} alt='OurStory'></img>
        </div>
        <div className='contentTxt'>
          <h3>Our Story</h3>
          <div id='border'></div>
          <p>
          Welcome to Wig World, your destination for high-quality wigs that empower you to express your unique style and confidence. 
          At Wig World, we believe that every individual should have the opportunity to look and feel their best, no matter the occasion.
          <br/><br/>
          Our mission is to provide a diverse range of wigs that cater to different preferences, 
          lifestyles, and needs. Whether you are looking for a natural look, a bold statement piece, 
          or a convenient solution, we have the perfect wig for you. We are committed to offering top-notch customer 
          service and ensuring that your shopping experience with us is seamless and enjoyable.
          <br/><br/>
          Why Choose Us?
          <br/><br/>
          <b>Quality</b>: We source our wigs from reputable manufacturers to ensure the highest quality materials and craftsmanship. <br/><br/>
          <b>Variety</b>: Explore our extensive collection featuring a variety of styles, colors, lengths, and textures to suit your individual taste.<br/><br/>
          <b>Expertise</b>: Our team is passionate about wigs and is dedicated to helping you find the perfect wig that complements your style and personality.<br/><br/>
          <b>Customer Satisfaction</b>: Your satisfaction is our priority. We are here to assist you every step of the way, from selection to after-sales support.<br/><br/>
          Our Commitment<br/><br/>
          At Wig World, we understand the significance of a good hair day and the impact it can have on your confidence. 
          Whether you are looking to switch up your look, enhance your natural beauty, or simply have fun with different styles, 
          we are here to support you on your hair journey.
          </p>
        </div>
    </div>
  )
}

export default OurStory