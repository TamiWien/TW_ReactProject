import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import { FaRegEye } from 'react-icons/fa';
import ProductContant from './ProductContant';
import { FaXmark } from 'react-icons/fa6';

const PopUp = ({product}) => {
    const [open, setOpen] = useState(false);
  
    const handleOpen = () => {
      setOpen(true);
      console.log(product);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <div>
        <Button onClick={handleOpen} sx={{
            color: '#b18050',
            '&:hover': {
                color: '#c09972'
            }
          }}>
            <FaRegEye />
        </Button>
        <Dialog open={open} onClose={handleClose}>
        <Button onClick={handleClose}><FaXmark /></Button>
          <div style={{ padding: '20px' }}>
            <ProductContant product={product}></ProductContant>
          </div>
        </Dialog>
      </div>
    );
  };



export default PopUp;
