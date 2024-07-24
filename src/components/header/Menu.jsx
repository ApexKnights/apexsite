import React from 'react'
import { Link } from 'react-router-dom'
import { RxCross1 } from "react-icons/rx";


const Menu = ({ setHam }) => {
    return (
        <div className='menu'>

            <RxCross1 className='cross' onClick={() => setHam(false)} />
            <Link to={"/"} className='link' onClick={() => setHam(false)}>Home</Link>
            <Link to={"/about"} className='link' onClick={() => setHam(false)}>About</Link>
            <Link to={"/services"} className='link' onClick={() => setHam(false)}>Services</Link>
            <Link className='link' onClick={() => setHam(false)}>Pricing</Link>
            <Link to={"/contact"} className='link' onClick={() => setHam(false)}>Contact</Link>
        </div>
    )
}

export default Menu
