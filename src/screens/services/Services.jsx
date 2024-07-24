import React from 'react'
import "./styles.scss"
import { motion } from 'framer-motion'
import serviceimg from "../../assets/serviceimg.png"
import { serviceCards } from '../../data/cards'
import ServiceCard from '../../components/servicecard/ServiceCard'

const Services = () => {
    return (
        <div className='services'>
            <div className="sec1">
                <div className="circle1"></div>
                <div className="circle2"></div>
                <div className="content">
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                    >APEX KNIGHTS SERVICES
                    </motion.h1>
                    <motion.h4
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >We focus on understanding and addressing your unique business challenges, ensuring solutions that deliver real value.</motion.h4>
                    <motion.img
                        initial={{ opacity: 0, scale: 0.4 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        src={serviceimg}
                        alt=""
                        className='apex-img'

                    />
                </div>
            </div>
            <motion.div className="servicecards" initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}>
                {
                    serviceCards.map((card) => (
                        <ServiceCard key={card.id} card={card} />

                    ))
                }
            </motion.div>
        </div>
    )
}

export default Services
