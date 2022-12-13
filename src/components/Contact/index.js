import emailjs from '@emailjs/browser'
import { useEffect, useRef, useState } from 'react'
import { MapContainer, Marker, Popup , TileLayer } from 'react-leaflet'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        const timer = setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
        return () => clearTimeout(timer)
      }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm('service_86e27il','template_xycqkd6',refForm.current,'HNbSGFQjN_R1c4JHF')
            .then(
                () => {
                    alert('Message Successfully Sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send message, please try again.')
                }
            )
    }

    return (
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass}
                    strArray={"Contact me".split("")}
                    idx={15}
                    />
                </h1>
                <p>
                If you'd like to work together on a project or just head out for 
                a drink, don't hesitate to connect with me through the form below!
                </p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type="text" name="name" placeholder="Name" required />
                            </li>
                            <li className='half'>
                                <input type="email" name="email" placeholder="Email" required />
                            </li>
                            <li>
                                <input placeholder="Subject" type="text" name="subject" required />
                            </li>
                            <li>
                                <textarea placeholder="Message" name="message" required />
                            </li>
                            <li>
                                <input type="submit" className='flat-button' value="SEND" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className='info-map'>
                Merrill Shen
                <br />
                Currently in: Singapore
                <br />
                <span>merrillshen@gmail.com</span>
            </div>
            <div className='map-wrap'>
                <MapContainer center={[1.305, 103.905]} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[1.305, 103.905]}>
                    <Popup>I don't actually live here but am around the area!</Popup>
                    </Marker>
                </MapContainer>

            </div>
        </div>
        <Loader type="ball-scale-ripple-multiple" />
        </>
    )
}

export default Contact