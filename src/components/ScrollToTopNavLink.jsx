import React from 'react';
import { NavLink } from 'react-router-dom';

const ScrollToTopNavLink = (props) => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <NavLink {...props} onClick={scrollToTop} />
  );
};

export default ScrollToTopNavLink;
