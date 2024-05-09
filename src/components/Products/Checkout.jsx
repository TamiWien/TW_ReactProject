import React, { useState } from 'react'
import { CountryDropdown } from 'react-country-region-selector';
import { Link } from 'react-router-dom'
import CreditCardForm from './CreditCardForm';
import { useSelector } from 'react-redux';
import { toCart , toCartSum } from '../../states/cartSlice';

const Checkout = () => {
    const [country, setCountry] = useState('');
    const [showComponent, setShowComponent] = useState(false);
    const arrCart = useSelector(toCart)
    const sumCart = useSelector(toCartSum)

  const selectCountry = (val) => {
    setCountry(val);
  };


  return (
    <div className='contant'>
        <div className='details'><form action="#" method="POST" className='formChack'>
            <h4>Customer details</h4>           
              <label for="email"  className='labelChack'>Email for order confirmation *</label><br/>
              <input type="email" id="email" name="email" required/><br/><br/>

              <label for="name"  className='labelChack'>First Name:</label><br/>
              <input type="text" id="name" name="name" required/><br/><br/>

              <label for="name"  className='labelChack'>Last Name:</label><br/>
              <input type="text" id="name" name="name" required/><br/><br/>

              <label for="name"  className='labelChack'>Phone *</label><br/>
              <input type="text" id="name" name="name" required/><br/><br/>
              
              <h4>Delivery details</h4>

              <label for="name"  className='labelChack'>Country/Region *</label><br/>
              <input type="country" id="name" name="name" value={country} required/>
              <CountryDropdown country={country} onChange={selectCountry}/>
              
              <label for="name"  className='labelChack'>Street name *</label><br/>
              <input type="text" id="name" name="name" required/><br/><br/>
              
              <label for="name"  className='labelChack'>City *</label><br/>
              <input type="text" id="name" name="name" required/><br/><br/>

              <label for="name"  className='labelChack'>Zip / Postal code *</label><br/>
              <input type="text" id="name" name="name" required/><br/><br/>

              <label for="message" className='labelChack'>Message:</label><br/>
              <textarea id="message" name="message" rows="4" required></textarea><br/><br/>
              
              <Link to={'/checkout'}><button id='checkoutButton' onClick={() => setShowComponent(true)}>Continue</button></Link>
            </form> 
            <br/>
            {showComponent ? <CreditCardForm /> : null}
            </div>
            <div id='myCartCheck'>
            <h4 className='h4'>Order summary <Link to={'/cart'} id='edit'>Edit cart</Link></h4> 
          {arrCart.map((c, index) => (
            <div key={index} id='productCart'>
              <div id='myCartContant'>
                <img id='productImgCart' src={c.item.img} alt={c.item.name}></img>
                {c.item.type === "wig" && <div id='productDataCart'>
                  <h5 className='h5'>{c.item.Color +"_" +c.item.Length+"_" +c.item.Head_Size}</h5>
                  <p className='itemDataCart'>Color:  {c.item.Color}</p>
                  <p className='itemDataCart'>Length:  {c.item.Length}</p>
                  <p className='itemDataCart'>Head Size:  {c.item.Head_Size}</p>
                  <p className='itemDataCart'>Price:  ${c.item.Price}</p>
                </div>}
                {c.item.type !== "wig" && <div id='productDataCart'>
                  <h5 className='h5'>{c.item.name2}</h5>
                  <p className='itemDataCart'>{c.item.title}</p>
                </div>}
                <div className='itemDataCart'>
                  ${(c.quantity * c.item.Price).toLocaleString()}
                </div>
              </div>
            </div>
          ))}
          <p className='h5'>Subtotal<div className='left'> ${sumCart.toLocaleString()}</div></p>
          <p className='h5'>Delivery <div className='left'>$40</div></p>
          <h4 className='h4'></h4>
          <p className='h5'><b>Total</b> <div className='left'><b>${(sumCart + 40).toLocaleString()}</b></div></p>
        </div>
    </div>
  )
}

export default Checkout