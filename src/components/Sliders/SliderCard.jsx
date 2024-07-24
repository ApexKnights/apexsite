import React from 'react'
import "./styles.scss"

const SliderCard = ({ slides }) => {
    return (
        <div className="cards">
            <img src={slides.img} alt="" />
            <p>" {slides.desc} "</p>
        </div>
    )
}

export default SliderCard
