import React, { useState } from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {

    const [menu, setMenu] = useState("shop")

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src="" alt="" />
        <p>Shopper</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none'}} to="/">Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("classic")}}><Link style={{textDecoration: 'none'}} to="/classic">Classic</Link>{menu==="classic"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("modern")}}><Link style={{textDecoration: 'none'}} to="/modern">Modern</Link>{menu==="modern"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("antic")}}><Link style={{textDecoration: 'none'}} to="/antic">Antic</Link>{menu==="antic"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login"><button>Login</button></Link>
      </div>
    </div>
  )
}

export default NavBar