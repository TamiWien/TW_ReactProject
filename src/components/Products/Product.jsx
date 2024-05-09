import { Link, useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import getAllProducts from '../../services/products';
import { FaXmark } from 'react-icons/fa6';
import { FaCheck, FaReply } from 'react-icons/fa';
import AddToCart from './AddToCart';

const Product = () => {
    const {name} = useParams();
    const navigate = useNavigate();
    const [item, setItem] = useState();
    const [isTypeWig, setIsTypeWig] = useState(true);

    const fetchData = async () => {
      try {
        const products = await getAllProducts();
        const foundItem = products.find(c => c.name === name);
        foundItem ? setItem(foundItem) : navigate("/");
        console.log(foundItem);
        console.log(foundItem.type);
        setIsTypeWig(foundItem.type === "wig");
        console.log(isTypeWig);

      } catch (error) {
        console.log(error.message)
      }
    }
    useEffect(() => {
      fetchData();
    }, [])
  

  return (
    <div id='box'>
      {isTypeWig && (
      <div>
        <h1>{item?.name}</h1>
        <div id='container'>
            <div className='productImgBox'><img className='productImg' src={item?.img} alt={item?.name} /></div>
            <div className='productData'>
              <div className='itemDataName'><div className='itemDataBoxTitle'>{item?.name +"_"+ item?.Head_Size +"_"+ item?.Length}</div></div>
              <div className='itemDataPrice'> <div>{"$" +item?.Price}</div></div>
              <AddToCart/>
              <div className='itemData'>Length:  <div className='itemDataBox'>{item?.Length}</div></div>
              <div className='itemData'>Head Size: <div className='itemDataBox'>{item?.Head_Size}</div></div>
              <div className='itemData'>Color:  <div className='itemDataBox'>{item?.Color}</div></div>
              <div className='itemData'>Wig Type:  <div className='itemDataBox'>{item?.Wig_Type}</div></div>
              <div className='itemData'>Hair density:  <div className='itemDataBox'>{item?.hair_density}</div></div>
              <div className='itemData'>Hair type:  <div className='itemDataBox'>{item?.hair_type}</div></div>
              <div className='itemData'>Ear tabs: <div className='itemDataBox'>{item?.ear_tabs === "no"? <FaXmark /> : <FaCheck />}</div></div>
            </div>
          </div>
        <div>
          <p className='description'>
            <h4 className='h4Description'>Description:</h4>
            <p className='pDescription'>
              Please note actual colors may vary. It is important to note that the hair may look slightly different in person than what you see on your computer monitor. This is due to the fact that every computer/phone monitor, lighting, and setting, all have a different capability to display colors and that everyone sees these colors differently. I try to edit my photos to show the products as life-like as possible, but please understand the actual color may vary slightly from your monitor. With that being said, I cannot guarantee that the color you see accurately portrays the true color of the product.
              <br/><br/>
              All orders (except final sale pieces) have a 2 day return policy from day of receiving. (For example, if you receive it on monday, have it back to the post office with tracking by wednesday. If you receive it on friday or saturday, have it back to the post office with tracking by monday.) Buyer pays for return costs. All items must be returned in its original state. Returns are also obligated to pay a 10% restocking fee.
              <br/><br/>
              Please read the FAQ section on the website for more info on returns. WigWorld is not responsible for any custom fees for international orders. The price does not include custom fees, as custom fees vary country to country and are out of my control.
            </p>
          </p>
          <Link to="../" id='goBack' onClick={() => { window.scrollTo(0, 0); }}><FaReply />Back</Link>
        </div>
        </div>
      )}

    {!isTypeWig && (
      <div>
        <h1>{item?.name}</h1>
        <div id='container'>
            <div className='productImgBox'><img className='productImg' src={item?.img} alt={item?.name} /></div>
            <div className='productData'>
              <div className='itemDataName'><div className='itemDataBoxTitle'>{item?.name2}</div></div>
              <div className='itemDataPrice'> <div>{"$" +item?.Price}</div></div>
              <AddToCart/>
            </div>
          </div>
          <div className='itemDetails'>
            <div className='itemDataBox2'>{item?.title}</div>
            <div className='itemDataBox3'>{item?.content}</div>
          </div>
        <div>
          <p className='description'>
            <h4 className='h4Description'>Description:</h4>
            <p className='pDescription'>
              All orders (except final sale pieces) have a 2 day return policy from day of receiving. Buyer pays for return costs. All items must be returned in its original state. Returns are also obligated to pay a 10% restocking fee.
              <br/><br/>
              Please read the FAQ section on the website for more info on returns. WigWorld is not responsible for any custom fees for international orders. The price does not include custom fees, as custom fees vary country to country and are out of my control.
            </p>
          </p>
          <Link to="../" id='goBack' onClick={() => { window.scrollTo(0, 0); }}><FaReply />Back</Link>
        </div>
        </div>
      )}
    </div>
    
  )
}

export default Product