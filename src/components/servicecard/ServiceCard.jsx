import React from 'react'
import "./styles.scss"

const ServiceCard = ({ card }) => {
    return (
        <div className="card">
            <img src={card.img} alt="" />
            <h2>{card.title}</h2>
            <p>{card.desc}</p>
        </div>
    )
}

export default ServiceCard
