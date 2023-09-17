import React from 'react'
import { Link } from "react-router-dom";
import './index.scss'
const Button = ({action}) => {
  return (
    <div className='button'>
      {
        action === 'yes' ?(
          <Link to={"/"} style={{textDecoration: 'none'}} className='yes'><p>{action}</p></Link>
        ):(
          <Link to={"/"} style={{textDecoration: 'none'}} className='no'><p>{action}</p></Link>
        )
      }
        
    </div>
  )
}

export default Button