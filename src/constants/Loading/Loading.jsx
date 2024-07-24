import React from 'react'
import { motion } from 'framer-motion'
import mainimg from "../../assets/apexmain.png"
import { Hourglass, LineWave, Triangle } from 'react-loader-spinner'

const Loading = () => {

    return (
        <div className='loading'>
            <div className="circleload"></div>
            <Triangle
                visible={true}
                height="100"
                width="100"
                color="#e96479"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />

        </div>
    )
}

export default Loading
