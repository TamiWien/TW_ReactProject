import React, { useEffect, useState } from 'react';
import getAllProducts from '../../services/products';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { FaRegCheckCircle } from 'react-icons/fa';
import { FaCartArrowDown } from 'react-icons/fa6';
import { setAddToCart } from '../../states/cartSlice';
import { useDispatch } from 'react-redux';
import PopUp from './PopUp';

const Filter = ({ keyFilter, valueFilter, itemType }) => {
  const [productsList, setProductsList] = useState([]);
  const dispatch = useDispatch();
  const [item, setItem] = useState();
  const [isTypeWig, setIsTypeWig] = useState(true);

  useEffect(() => {
    console.log('Key Filter:', keyFilter);
        console.log('Value Filter:', valueFilter);
        console.log('isTypeWig:', isTypeWig);
        console.log('itemType:', itemType);
  }, []);

  useEffect(() => {
    setIsTypeWig(itemType === 'wig');
  }, [itemType]);

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

    const [open, setOpen] = useState(false);

  const handleClick = (itemName) => {
    const foundItem = productsList.find(item => item.name === itemName);
    if (foundItem) {
      setItem(foundItem);
      dispatch(setAddToCart({ item: foundItem, quantity: 1 }));

      setOpen(prevOpen => {
        if (prevOpen) {
            setTimeout(() => {
                setOpen(true); 
            }, 500); 
        } else {
            setOpen(true);
        }
        return !prevOpen;
    });
    }
  };

    const handleClose = () => {
      setOpen(false);
  };

  return (
    <div className='coun1'>
      {isTypeWig && (
      <div>
        <h1>{valueFilter !== "type" ? keyFilter[valueFilter] : 'All'} wigs</h1>
        <div className={`notification ${open ? 'open' : 'closed'}`}>
          {open && <div id="alertoCart">
            <button onClick={handleClose}>X</button>
            Item successfully added! <FaRegCheckCircle /> 
          </div>}   
        </div>
        <div className='containerItem'>
          {productsList
            .filter(product => {
              for (let key in keyFilter) {
                if (product[key] !== keyFilter[key]) {
                  return false;
                }
              }
              return true;
            })
            .map((product, index) => (
              <div key={index} className='itemBox'>
                <div className='QuickPurchase'>
                  <div className='QuickPurchaseNavs'>
                      <PopUp className='QuickPurchaseSvg' product={product}></PopUp>
                      <div onClick={() => handleClick(product.name)} className={classNames('QuickPurchaseSvg', 'svgRight')}>
                      <FaCartArrowDown />
                      </div>
                  </div>
              </div>
              <Link className='item'
              style={{ backgroundImage: `url(${product.img})`}}
              to={product.name}>
              </Link>
              <div className='itemName'>
                  {product.name +" " + product.Length +" Wig ("+ product.Head_Size + ")"}
                  <div className='itemPrice'>${product.Price.toLocaleString()}</div>
                </div>
              </div>
            ))}
        </div>
      </div>
      )}

    {!isTypeWig && (
      <div>
        <h1>Complementary Products</h1>
        <div className={`notification ${open ? 'open' : 'closed'}`}>
          {open && <div id="alertoCart">
            <button onClick={handleClose}>X</button>
            Item successfully added! <FaRegCheckCircle /> 
          </div>}   
        </div>
        <div className='containerItem'>
          {productsList
            .filter(product => {
              for (let key in keyFilter) {
                if (product[key] !== keyFilter[key]) {
                  return false;
                }
              }
              return true;
            })
            .map((product, index) => (
              <div key={index} className='itemBox'>
                <div className='QuickPurchase'>
                  <div className='QuickPurchaseNavs'>
                      <PopUp className='QuickPurchaseSvg' product={product}></PopUp>
                      <div onClick={() => handleClick(product.name)} className={classNames('QuickPurchaseSvg', 'svgRight')}>
                      <FaCartArrowDown />
                      </div>
                  </div>
              </div>
              <Link className='item'
              style={{ backgroundImage: `url(${product.img})`}}
              to={product.name}>
              </Link>
              <div className='itemName'>
                  {product.name2}
                  <div className='itemPrice'>${product.Price.toLocaleString()}</div>
                </div>
              </div>
            ))}
        </div>
      </div>
      )}
    </div>
  );
};




export default Filter