import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Footer.css'

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="Footer">
      <h4>@SB Foods - Have a feast with the tasty food everyday....</h4>
      <div className="footer-body">

        <ul>
          <li onClick={()=>navigate('/category/Briyani')}>Briyani</li>
          <li onClick={()=>navigate('/category/Pizza')}>Pizza</li>
        </ul>

        <ul>
          <li onClick={()=>navigate('/category/Beverages')}>Beverages</li>
          <li onClick={()=>navigate('/category/Burger')}>Burger</li>
        </ul>

        <ul>
          <li onClick={()=>navigate('/category/Pulav')}>Pulav's</li>
          <li onClick={()=>navigate('/category/Chicken Roll')}>Chicken Roll</li>
        </ul>

        <ul>
          <li onClick={()=>navigate('/category/Fried Momo')}>Fried Momo's</li>
          <li onClick={()=>navigate('/category/Chicken')}>Chicken</li>
        </ul>

        <ul>
          <li onClick={()=>navigate('/category/Sandwich')}>Sandwich</li>
          <li onClick={()=>navigate('/category/BBQ')}>BBQ</li>
        </ul>


      </div>
      <div className="footer-bottom">
        <p>@ sb-foods.com - All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer