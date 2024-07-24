import React, { useEffect, useState } from 'react'
import "./styles.scss"
import heroimg from "../../assets/apexmain.png"
import aboutimg from "../../assets/apex-about.png"
import ServiceCard from '../../components/servicecard/ServiceCard'
import { serviceCards, slidecards } from '../../data/cards'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderCard from '../../components/Sliders/SliderCard'
import contact from "../../assets/contact.png"
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { GoMoveToTop } from "react-icons/go";
import { RxHamburgerMenu } from "react-icons/rx";
import Menu from '../../components/header/Menu'



const Home = () => {
    const [butt, setButt] = useState(false)

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        speed: 2000,
        responsive: [
            {
                breakpoint: 1324,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const handleScroll = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }
    useEffect(() => {
        const handleScrollVisibility = () => {
            window.scrollY > 300 ? setButt(true) : setButt(false);
        }
        window.addEventListener('scroll', handleScrollVisibility);
    }, [])
    return (
        <div className='home'>
            {
                butt ? <div className="scroll-top">
                    <GoMoveToTop className='top-ico' onClick={handleScroll} />
                </div> : null
            }
            <div className="hero">
                <div className="circle1"></div>
                <div className="circle2"></div>
                <div className="content">
                    <h4>SOUPARNA SHEE PRESENTS</h4>
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                    >APEX KNIGHTS
                    </motion.h1>
                    <motion.h2
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >Innovations</motion.h2>
                    <motion.img
                        initial={{ opacity: 0, scale: 0.4 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        src={heroimg}
                        alt=""
                        className='apex-img'
                    />
                </div>
                <div className="sidetext-about">
                    <p>
                        Apex Nights brings you innovative tech solutions for your business, we provide all It services
                    </p>
                    <Link className='button'>
                        Lets's Talk
                    </Link>
                </div>
                <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }} className="sidetext">
                    <h3>10+</h3>
                    <h3>TECHNOLOGIES</h3>
                </motion.div>
                <div className="sidetext2">
                    <h3>50%</h3>
                    <h3>FASTER SERVICES</h3>
                </div>
                <div className='service-texts'>
                    <span>Web-Design</span>
                    <span>Web-Development</span>
                    <span>Graphic Design</span>
                    <span>Management Softwares</span>
                    <span>App Development</span>
                    <span>AI-Based Softwares</span>
                </div>
            </div>

            <div className="about">
                <h1 className='heading-about'>About Us</h1>
                <div className="divider">
                    <motion.div className="left"
                        initial={{ opacity: 0, x: 90, scale: 0.2 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 0.9 }}
                    >
                        <div
                            className="first aboutdata"
                        >
                            <h1>What is Apex Knights ?</h1>
                            <p>Apex Knights is a It service provider , which brings you new and innovative solution to run and scale your business online</p>
                        </div>
                        <div className="second aboutdata">
                            <h1>Why Us ? </h1>
                            <ul>
                                <li>We provide best software solutions with new generation technologies.</li>
                                <li>90% faster than usual websites and software.</li>
                                <li>Faster Delivery and 24X7 Support on buying our maintenance plan.</li>
                            </ul>
                        </div>
                        <div className="third aboutdata">
                            <h1>What Next ? </h1>
                            <p>Our future plan is to drive more into Ai and help businesses to build their AI Presence in modern World , we will further provide coaching services .</p>
                        </div>
                    </motion.div>
                    <div className="right">
                        <motion.img initial={{ opacity: 0, x: 90, scale: 0.2 }}
                            whileInView={{ opacity: 1, x: 0, scale: 1 }}
                            transition={{ duration: 0.9 }} src={aboutimg} alt="" />
                    </div>
                </div>
            </div>
            <div className="service">
                <h1 className='apex-servicehead'>OUR SERVICES</h1>
                <div className="circle1"></div>
                <div className="circle2"></div>
                <motion.div className="servicecards" initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}>
                    {
                        serviceCards.map((card) => (
                            <ServiceCard key={card.id} card={card} />

                        )).slice(0, 4)
                    }
                </motion.div>
                <div className="butt">
                    <Link to={"/services"} className='button'>More Services</Link>
                </div>
            </div>
            <div className="experience">
                <h1 className='exp-head'>Works Done Before</h1>
                <div className="slidercards">
                    <Slider {...settings}>

                        {
                            slidecards.map((slides) => (
                                <SliderCard key={slides.id} slides={slides} />
                            ))
                        }
                    </Slider>
                </div>
            </div>
            <div className="contact">
                <h1 className='contact-head'>Send Us a quick message</h1>
                <div className="divider">
                    <div className="left">
                        <motion.img initial={{ opacity: 0, x: 90, scale: 0.2 }}
                            whileInView={{ opacity: 1, x: 0, scale: 1 }}
                            transition={{ duration: 0.9 }} src={contact} alt="" />
                    </div>
                    <div className="right">
                        <form>
                            <h2>Get in Touch with Us</h2>
                            <input type="text" placeholder='Enter Your Name' />
                            <input type="number" placeholder='Enter Your Number' />
                            <textarea type="text" placeholder='Enter Your Message' />
                            <button>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
