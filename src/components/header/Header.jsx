import React, { useState } from 'react'
import "./styles.scss"
import { Link } from 'react-router-dom'
import logo from "../../assets/APEX.png"
import { RxHamburgerMenu } from "react-icons/rx";

import Menu from './Menu'

const Header = () => {
    const [ham, setHam] = useState(false)
    return (
        <div className='header'>
            <Link to={"/"}>
                <img src={logo} alt="" />
            </Link>
            <div className="links">
                <Link to={"/"} className='link'>Home</Link>
                <Link to={"/about"} className='link'>About</Link>
                <Link to={"/services"} className='link'>Services</Link>
                <Link className='link'>Pricing</Link>
                <Link to={"/contact"} className='link'>Contact</Link>
            </div>
            <div className="ham">
                <RxHamburgerMenu className='ico' onClick={() => setHam(!ham)} />
            </div>
            {
                ham ? <Menu setHam={setHam} /> : null
            }

        </div>
    )
}

export default Header
