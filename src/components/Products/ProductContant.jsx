import React from 'react'
import AddToCart from './AddToCart'
import { FaXmark } from 'react-icons/fa6'
import { FaCheck } from 'react-icons/fa'
import AddToCartPop from './AddToCartPop'

const ProductContant = ({product}) => {

  return (
    <div>
        {product.type === "wig" && <div id='containerPop'>
            <div className='productImgBoxPop'><img className='productImgPop' src={product?.img} alt={product?.name} /></div>
            <div className='productData'>
              <div className='itemDataName'><div className='itemDataBoxTitle'>{product?.Color +"_"+ product?.Head_Size +"_"+ product?.Length}</div></div>
              <div className='itemDataPrice'> <div>{"$" +product?.Price}</div></div>
              <AddToCartPop product={product}/>
              <div className='itemData'>Length:  <div className='itemDataBox'>{product?.Length}</div></div>
              <div className='itemData'>Head Size: <div className='itemDataBox'>{product?.Head_Size}</div></div>
              <div className='itemData'>Color:  <div className='itemDataBox'>{product?.Color}</div></div>
              <div className='itemData'>Wig Type:  <div className='itemDataBox'>{product?.Wig_Type}</div></div>
              <div className='itemData'>Hair density:  <div className='itemDataBox'>{product?.hair_density}</div></div>
              <div className='itemData'>Hair type:  <div className='itemDataBox'>{product?.hair_type}</div></div>
              <div className='itemData'>Ear tabs: <div className='itemDataBox'>{product?.ear_tabs === "no"? <FaXmark /> : <FaCheck />}</div></div>
            </div>
          </div>}
          {product.type !== "wig" && 
          <div>
            <div id='containerPop'>
              <div className='productImgBoxPop'><img className='productImgPop' src={product?.img} alt={product?.name} /></div>
              <div className='productData'>
                <div className='itemDataName'><div className='itemDataBoxTitle'>{product?.name2}</div></div>
                <div className='itemDataPrice'> <div>{"$" +product?.Price}</div></div>
                <AddToCartPop product={product}/>
              </div>
            </div>
            <div className='itemDataBox2'>{product?.title}</div>
            <div className='itemDataBox3'>{product?.content}</div>
          </div>}
    </div>
  )
}

export default ProductContant