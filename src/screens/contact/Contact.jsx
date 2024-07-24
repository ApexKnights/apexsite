import React, { useState } from 'react'
import "./styles.scss"
import contact from "../../assets/contact2.jpg"
import axios from 'axios'
import { server } from '../../main'
import toast from 'react-hot-toast'
import { SiTicktick } from "react-icons/si";

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [messages, setMessages] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const submitHandler = async (e) => {
        e.preventDefault();
        try {

            const { data } = await axios.post(`${server}/api/email`, {
                name,
                email,
                messages
            }, {
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json"
                },
            })
            setEmail("")
            setMessages("")
            setName("")
            toast.success(data.message)
            setSubmitted(true)
            setTimeout(() => {
                setSubmitted(false)
            }, 10000)




        } catch (error) {
            toast.error("Somthing Went Wrong")
        }

    }
    return (
        <div className='contact-page'>
            <h1 className='contact-head-page'>Dont Forget To Contact Us</h1>
            <div className="circle1"></div>
            <div className="circle2"></div>
            {
                submitted ? <div className="submit-cover">
                    <SiTicktick className='tick' />
                    <h2>You message has been successfully submitted</h2>
                    <span>We will get back to you soon</span>
                </div> : <div className="contact-cover">
                    <div className="left">
                        <img src={contact} alt="" />
                    </div>
                    <div className="right">
                        <h3>Fill Up the form, We will connect to you shortly</h3>
                        <form onSubmit={submitHandler}>
                            <input type="text" placeholder='Enter Your name' onChange={(e) => setName(e.target.value)} />
                            <input type="email" placeholder='Enter Your Email' onChange={(e) => setEmail(e.target.value)} />
                            <textarea type="text" placeholder='Message' onChange={(e) => setMessages(e.target.value)} />
                            <button>Submit</button>
                        </form>
                    </div>
                </div>
            }


        </div>
    )
}

export default Contact
