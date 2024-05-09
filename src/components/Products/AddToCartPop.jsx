import React, { useEffect, useState } from 'react'
import { useDispatch , useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { setAddToCart, toCart } from '../../states/cartSlice';
import getAllProducts from '../../services/products';
import Loader from '../Loader';
import { FaRegCheckCircle, FaRegHeart } from 'react-icons/fa';

const AddToCartPop = ({product}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [item, setItem] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    console.log(product)
    //API    
    const fetchData = async () => {
      try {
        const products = await getAllProducts();
        const foundItem = products.find(c => c.name === product.name);
        setItem(foundItem);
        
      } catch (error) {
        setError("error123" + error.message);
      } finally {
      setIsLoading(false);
  }
    }
    useEffect(() => {
      fetchData()
    }, [])

    const arrCart = useSelector(toCart);

    const [quantity, setQuantity] = useState(1);

    const handleChange = (e) => {
      const newQuantity = parseInt(e.target.value, 10);
      setQuantity(newQuantity);
    };

    const [open, setOpen] = useState(false);

    const handleClick = () => {
      dispatch(setAddToCart({ item, quantity }));
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
  };

   if(error){
    return <div>Error: {error}</div>;
  }  
    
  return (
    <div>
      {isLoading ? <Loader/> : (
        <>
          <input id='addToCartInput' placeholder='1' value={quantity} type='number' min="1" onChange={handleChange}/> <FaRegHeart id='svgCart' />
          <div id='addToCartButtonBox' ><button id='addToCartButton' onClick={handleClick}>Add To Cart</button></div>
          <div>
            {open && <div id="alertoPop">
              <button onClick={handleClose}>X</button>
              Item successfully added! <FaRegCheckCircle /> 
            </div>}   
          </div>
        </>
      )}
    </div>
  )
}

export default AddToCartPop