import React from 'react'
import { FaArrowRight, FaRegCheckCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Customization from '../Customization'

const Thanks = () => {
  return (
    <div>
    <div ></div>
    <FaRegCheckCircle className='faRegCheckCircle'  id='top'/>
    <div id='thanks'>Thank you for your purchase!</div>

    <Customization/>

    <Link id='backHome' to={'/'}>Return to the home page  <FaArrowRight /> </Link> 

    </div>
  )
}

export default Thanks