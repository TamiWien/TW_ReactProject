import React, { useState } from 'react';
import Cards from 'react-credit-cards-2'; 
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import { Link } from 'react-router-dom';

function CreditCardForm() {
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');
  const [focus, setFocus] = useState('');

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value.replace(/[^\d]/g, '').replace(/(.{4})/g, '$1 ').trim());
  };

  const handleExpirationDateChange = (e) => {
    setExpirationDate(e.target.value.replace(/[^\d]/g, '').replace(/(\d{2})(\d{0,4})/, '$1/$2').trim());
  };

  const handleCvvChange = (e) => {
    setCvv(e.target.value.replace(/[^\d]/g, '').replace(/(.{3})/, '$1').trim());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Your purchase has been successful!');
  };

  return (
    <div className="credit-card-form">
      <Cards
        cvv={cvv}
        expiry={expirationDate}
        focused={focus}
        name={name}
        number={cardNumber}
      />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          {/* <label htmlFor="cardNumber">Card Number:</label> */}
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={handleCardNumberChange}
            onFocus={() => setFocus('number')}
            onBlur={() => setFocus('')}
            maxLength="19"
            placeholder="1234 5678 9012 3456"
            required
          />
        </div>
        <div className="form-group">
          {/* <label htmlFor="expirationDate">Expiration Date:</label> */}
          <input
            type="text"
            id="expirationDate"
            value={expirationDate}
            onChange={handleExpirationDateChange}
            onFocus={() => setFocus('expiry')}
            onBlur={() => setFocus('')}
            maxLength="7"
            placeholder="MM/YY"
            required
          />
        </div>
        <div className="form-group">
          {/* <label htmlFor="cvv">CVV:</label> */}
          <input
            type="text"
            id="cvv"
            value={cvv}
            onChange={handleCvvChange}
            onFocus={() => setFocus('cvv')}
            onBlur={() => setFocus('')}
            maxLength="3"
            placeholder="CVV"
            required
          />
        </div>
        <div className="form-group">
          {/* <label htmlFor="name">Name on Card:</label> */}
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value.toUpperCase())}
            onFocus={() => setFocus('name')}
            onBlur={() => setFocus('')}
            placeholder="Name on Card"
            required
          />
        </div>
        <Link to={'/thanks'}><button type="submit" id='checkoutButton'onClick={() => { window.scrollTo(0, 0); }}>Buy Now</button></Link>
      </form>
    </div>
  );
}

export default CreditCardForm;