import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className='Header_main'>
        <div className="header_second_main">
            <div className="logo_div">
                <h1 className='a'>A+</h1>
                <p className='studio'>studio</p>
            </div>
                <div className="navbar_div">
                    <ul className="navbar_ul">
                        <li className="navbar_li">Home</li>
                        <li className="navbar_li">What We Do</li>
                        <li className="navbar_li">Service</li>
                        <li className="navbar_li">Project</li>
                        <li className="navbar_li">Blog</li>
                        <li className="navbar_li">Contact</li>
                    </ul>

                </div>
        </div>
        
    </div>
  )
}

export default Header