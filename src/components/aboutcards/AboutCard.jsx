import React from 'react'
import "./styles.scss"

const AboutCard = ({ abt }) => {
    return (
        <div className='about-card'>
            <img src={abt?.img} alt="" />
            <p>{abt?.desc}</p>
        </div>
    )
}

export default AboutCard
