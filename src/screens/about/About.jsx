import React from 'react'
import "./styles.scss"
import aboutimg from "../../assets/apex-about.png"
import { motion } from 'framer-motion'
import AboutCard from '../../components/aboutcards/AboutCard'
import { aboutcards, aboutcards2 } from '../../data/cards'

const About = () => {
    return (
        <div className='about'>
            <div className="about-sec">
                <div className="divider">
                    <motion.div className="left"
                        initial={{ opacity: 0, x: 90, scale: 0.2 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 0.9 }}
                    >
                        <div
                            className="first aboutdata"
                        >
                            <h1>ABOUT US</h1>
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
            <div className="more-about">
                <div className="aboutcard-left">
                    {
                        aboutcards.map((abt) => (
                            <motion.div initial={{ opacity: 0, x: 90, scale: 0.2 }}
                                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                transition={{ duration: 0.9 }} className="sidetext1" key={abt.id}>
                                <AboutCard abt={abt} />
                                <div className="hifen"></div>
                            </motion.div>
                        ))
                    }


                </div>
                <div className="line"></div>
                <div className="aboutcard-left">

                    {
                        aboutcards2.map((abt) => (
                            <motion.div initial={{ opacity: 0, x: 90, scale: 0.2 }}
                                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                transition={{ duration: 0.9 }} className="sidetext1" key={abt.id}>
                                <div className="hifen"></div>
                                <AboutCard abt={abt} />

                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default About
