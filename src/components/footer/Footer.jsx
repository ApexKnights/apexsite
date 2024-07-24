import React from 'react'
import "./styles.scss"
import { FaFacebookSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='footer'>
            <div className="comp1">
                <div className="info">
                    <h2>Apex Knights Innovations</h2>
                    <p>Our mission is to empower businesses with the tools and expertise needed to succeed in a competitive digital landscape. We are passionate about helping you achieve your goals through innovative solutions and exceptional service</p>
                </div>
                <div className="socials">
                    <a href="https://www.facebook.com/profile.php?id=61561851136450"> <FaFacebookSquare className='social-ico' /></a>

                    <a href="https://www.instagram.com/_apexknights/"> <BsInstagram className='social-ico' /></a>
                    <a href="https://github.com/ApexKnights"><FaGithub className='social-ico' /></a>
                </div>
                <div className="contact-footer">
                    <h3>Contact us on : -</h3>
                    <p> <b>Mobile</b> - +917980944720</p>
                    <p> <b>Email- </b>apexknights@gmail.com / devsouparno@gmail.com</p>
                    <p> <b>Address -</b> Bagnan, Howrah, West Bengal</p>
                </div>
            </div>
            <div className="comp2">
                <h3>All copyright reserved by Apex-Knights @ 2024</h3>
            </div>
        </div>
    )
}

export default Footer
