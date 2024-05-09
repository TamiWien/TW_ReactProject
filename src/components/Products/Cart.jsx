import React, { useEffect, useState } from 'react'
import { setAddToCart, setRemoveFromCart, toCart, toCartSum } from '../../states/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import getAllProducts from '../../services/products'
import { FaTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Cart = () => {
    
    const sumCart = useSelector(toCartSum)
    const arrCart = useSelector(toCart)
    const dispatch = useDispatch();

    const [quantity, setQuantity] = useState();
    const [productsList, setProductsList] = useState([])

  const fetchData = async () =>{
    try {
      const products = await getAllProducts();
      setProductsList(products)
    } catch (error) {
      console.log(error.massage)
    }
    }

  useEffect (() =>{
    fetchData()
  },[] )

  const handleClickP = (itemName) => {
    const foundItem = productsList.find(item => item.name === itemName);
    if (foundItem) {
      setQuantity(quantity + 1);
      dispatch(setAddToCart({ item: foundItem, quantity: 1 }));
    }
  };
  
  const handleClickM = (itemName) => {
    const foundItem = arrCart.find(item => item.item.name === itemName);
    if (foundItem) {
        if (foundItem.quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
            dispatch(setAddToCart({ item: foundItem.item, quantity: -1 }));
        } else {
            dispatch(setRemoveFromCart({ name: foundItem.item.name }));
        }
    }
};

  return (
    <div className='boxContant'>
      <div className='contant'>
        <div id='myCart'>
          <h4 className='h4'>My cart</h4>
          {arrCart.map((c, index) => (
            <div key={index} id='productCart'>
              <div id='myCartContant'>
                <img id='productImgCart' src={c.item.img} alt={c.item.name}></img>
                {c.item.type === "wig" && <div id='productDataCart'>
                  <Link to={'../store/'+c.item.name}><h5 className='h5'>{c.item.name +"_" +c.item.Length+"_" +c.item.Head_Size}</h5></Link>
                  <p className='itemDataCart'>Color:  {c.item.Color}</p>
                  <p className='itemDataCart'>Length:  {c.item.Length}</p>
                  <p className='itemDataCart'>Head Size:  {c.item.Head_Size}</p>
                  <p className='itemDataCart'>Price:  ${c.item.Price}</p>
                </div>}
                {c.item.type !== "wig" && <div id='productDataCart'>
                  <Link to={'../store/'+c.item.name}><h5 className='h5'>{c.item.name2}</h5></Link>
                  <p className='itemDataCart'>{c.item.title}</p>
                </div>}
                <div id='quantityInputBox'>
                  <button className='quantityInput' onClick={() => handleClickM(c.item.name)}>-</button>
                  {c.quantity}
                  <button className='quantityInput' onClick={() => handleClickP(c.item.name)}>+</button>
                </div>
                <div className='itemDataCart'>
                  ${(c.quantity * c.item.Price).toLocaleString()}
                </div>
                <div className='itemDataCart'>
                <button className='quantityInputX' onClick={() => dispatch(setRemoveFromCart({ name: c.item.name }))}><FaTrashAlt /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div id='orderSummary'>
          <h4 className='h4'>Order summary</h4>
          <p className='h5'>Subtotal: ${sumCart.toLocaleString()}</p>
          <p className='h5'>Delivery: $40</p>
          <h4 className='h4'></h4>
          <p className='h5'>Total ${(sumCart + 40).toLocaleString()}</p>
          <Link to={sumCart> 0 ? '/checkout' : ''}><button id='checkoutButton' >Checkout</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Cart