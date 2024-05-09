import React from 'react'
import { FaReply } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div id='p404'>
      <h1>404</h1>
      <h2>Page is Not Found</h2>
        <h3>
        "Oops! <br/>
        It looks like something went askew on our wig-tastic journey. <br/>
        The wig you're after seems to be taking a breather. <br/>
        No worries, though! Let's steer back to the main path. <br/>
        <br/>
        Click the button below to return to wig wonderland and continue your style exploration!"
        <br/><br/>
        <Link to="../" id='goBack404'><FaReply /></Link>  
        </h3>  
        <br/><br/>  
      </div>
  )
}

export default NotFound