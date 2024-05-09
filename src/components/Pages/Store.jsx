import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import getAllProducts from '../../services/products';
import Filter from '../Products/Filter';

const Store = () => {   
  const [productsList, setProductsList] = useState([]);
  const [keyFilter, setKeyFilter] = useState({type: 'wig'});
  const [valueFilter, setValueFilter] = useState('type');
  const [itemType, setItemType] = useState('wig');

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

  const handleFilterChange = (newKeyFilter, newValueFilter, type) => {
    setKeyFilter(newKeyFilter);
    setValueFilter(newValueFilter);
    setItemType(type);

    console.log('my type is:'+itemType);
    // document.title = `${newValueFilter} wigs`;
    window.scrollTo(0, 0);
  }

  const handleItemChange = () => {
    setItemType = false;
  }

  return (
    <div className='contant'>
        <div className='coun2'>
          <div>
          <h4>Filter by</h4>
          {[...new Set(productsList.map(c => c.type))].map((type, index) => (
            <div key={index}>
              <Link className='list' onClick={() => handleFilterChange({type},'type',{type}.type)}><h5>All {type.charAt(0).toUpperCase() + type.slice(1)}s</h5></Link>
            </div>
          ))}
          {/* <Link className='list' onClick={() => handleFilterChange(productsList.type,'wig')}><h5>All Wigs</h5></Link> */}
          {/* <Link className='list' onClick={() => handleItemChange({})}><h5>Complementary Items</h5></Link> */}
          </div>
          <div>
          <h5>Color</h5>
          {[...new Set(productsList.map(c => c.Color))].map((Color, index) => (
            <div key={index}>
              <Link className='list' onClick={() => handleFilterChange({Color},'Color','wig')}>{Color}</Link>
            </div>
          ))}
          </div>
          <div>
          <h5>Length</h5>
          {[...new Set(productsList.map(c => c.Length))].map((Length, index) => (
            <div key={index}>
              <Link className='list' onClick={() => handleFilterChange({Length}, 'Length','wig')}>{Length}</Link>
            </div>
          ))}
          </div>
          <div>
          <h5>Head Size</h5>
          {[...new Set(productsList.map(c => c.Head_Size))].map((Head_Size, index) => (
            <div key={index}>
              <Link className='list' onClick={() => handleFilterChange({Head_Size}, 'Head_Size','wig')}>{Head_Size}</Link>
            </div>
          ))}
          </div>
        </div>
        <Filter keyFilter={keyFilter} valueFilter={valueFilter} itemType={itemType}/>        
    </div>

  )
}

export default Store