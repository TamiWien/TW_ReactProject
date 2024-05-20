import React, { useEffect, useRef, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import getAllProducts from '../services/products';
import logo from '../logo.png'
import logo_dark from '../logo_dark.png'
import { FaBars, FaFacebook, FaInstagram, FaRegCopyright, FaRegHeart, FaTiktok, FaTimes, FaUserCircle, FaYoutube } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { toCartCount } from '../states/cartSlice';
import { FaCartShopping } from 'react-icons/fa6';

const Layout = () => {
  const secendMenuRef = useRef(null);
  const [productsList, setProductsList] = useState([])
  // const [keyFilter, setKeyFilter] = useState({});
  // const [valueFilter, setValueFilter] = useState({});

  const countCart = useSelector(toCartCount);

  const menuUp = () => {
    if (secendMenuRef.current) {
      secendMenuRef.current.style.display = 'block';
    }
  }
  // const menuOut = () => {
  //   if (secendMenuRef.current) {
  //     secendMenuRef.current.style.display = 'none';
  //   }
  // }
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

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);

  const navMenu = document.getElementById('navMenu');
  const Menu = document.getElementById('Menu');
  if (navMenu) {
    navMenu.style.display = mobileMenuOpen ? 'none' : 'block';
    Menu.style.height = mobileMenuOpen ? '60px' : '184px';
  }
  };

  // const handleFilterChange = (newKeyFilter, newValueFilter) => {
  //   setKeyFilter(newKeyFilter);
  //   setValueFilter(newValueFilter);
  // };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div id='Menu'>
          {!isScrolled && <div className='navIcoMenu' onClick={toggleMenu}>
            {mobileMenuOpen ? <FaTimes/> : <FaBars />}
          </div>}
          <div id='navMenu'>
              <NavLink className='nav' to="/"><img className='logoImg' src={logo_dark} alt='logoImg'></img></NavLink>
              <NavLink className='nav' to="/">Home page</NavLink>
              <NavLink className='nav' to="/ourStory">Our Story</NavLink>
              <NavLink className='nav' to="/contact">Contact Us</NavLink>             
              <NavLink className='nav' to="/store" >Store</NavLink>
              <>
              {/*//open menu/// <NavLink className='nav' to="/store" onMouseOver={menuUp} >Store
              {(
                <div ref={secendMenuRef} id='secendMenu' onMouseOut={menuOut}>
                  {[...new Set(productsList.map(c => c.Color))].map((Color, index) => (
                    <div key={index}>
                      <Link className='listMenu' to={'/store?index'} onClick={() => handleFilterChange({Color},'Color')}>{Color}</Link>
                    </div>
                  ))}
                  {productsList.map((c, index) => (
                    <div key={index}>
                      <NavLink className='listMenu' to={`/store/${c.name}`}>{c.name}</NavLink>
                    </div>
                  ))}
                </div>
              )}
              </NavLink> */}
              </>
          </div>
      </div>
      <div className='navIcoBox'>
                <NavLink className='navIco' to="/cart"><FaUserCircle /></NavLink>
                <NavLink className='navIco' to="/cart"><FaRegHeart /></NavLink>
                <NavLink className='navIco' to="/cart"><FaCartShopping />
                  {countCart>0 && <div id='CountCart'>{countCart}</div>}
                </NavLink>
              </div>
      <Outlet/>

      <div id='Footer'>
          <NavLink className='navFooter' to="/"><img className='logoImgFooter' src={logo} alt='logoImg'></img></NavLink>
          <div id='navMenuFooter'>
              <NavLink className='navFooter' to="/">Homepage</NavLink>
              <NavLink className='navFooter' to="/ourStory">Our Story</NavLink>
              <NavLink className='navFooter' to="/contact">Contact Us</NavLink>
              <NavLink className='navFooter' to="/store" onMouseOver={menuUp} >Store </NavLink>
          </div>
          <div className='navMenuFooter'>
                <div id='navMenuFooterIn'>
                  <b>Adress</b>
                  <p>299-213 Waverly Ave, Syracuse, NY 13210, US</p>
                  <iframe id='map' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2700.722049481831!2d-76.1310342112832!3d43.03988217745644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1siw!2sil!4v1714606781985!5m2!1siw!2sil"></iframe>
                </div>
          </div>
          <div className='navMenuFooter'>
              <div className='socialMedia'>
                <FaFacebook />
                <FaInstagram />
                <FaYoutube />
                <FaTiktok />
              </div>
                <div id='join'>JOIN US!</div>
                <div id='comp'>
                  <label class="abel">Email *</label>
                  <input name="email" type="email" id="email" />
                  <button class="email-button">Send</button>
                </div>
          </div>
      </div>
      <div id='by'><FaRegCopyright />Tamar Wienet</div>
    </>
  )
}

export default Layout