import React from 'react'
import contact from '../../pictures/contact.jpg'

const ContactUs = () => {
  return (
    <div className='contant'>
        <div className='contentImgC'>
          <img src={contact} alt='contant'></img>
        </div>
        <div className='contentTxt'>
          <h3>Contact Us</h3>
          <div id='border'></div>
          <p>
          Have a question or need assistance? Feel free to reach out to our friendly team at wigworld@gmail.com. 
          We are here to help you find the perfect wig that makes you feel fabulous inside and out. <br/><br/>
          Thank you for choosing Wig World for all your wig needs. We look forward to being a part of your hair transformation!
          </p>
          <br/><br/>
          <form action="#" method="POST" className='form'>
              <label for="name" className='label'>Name:</label><br/>
              <input type="text" id="name" name="name" required/><br/><br/>
              
              <label for="email" className='label'>Email:</label><br/>
              <input type="email" id="email" name="email" required/><br/><br/>
              
              <label for="subject" className='label'>Subject:</label><br/>
              <input type="text" id="subject" name="subject" required/><br/><br/>
              
              <label for="message" className='label'>Message:</label><br/>
              <textarea id="message" name="message" rows="4" required></textarea><br/><br/>
              
              <input type="submit" value="Submit"/>
            </form>   
      </div>
    </div>
  )
}

export default ContactUs