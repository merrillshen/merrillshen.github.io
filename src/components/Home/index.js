import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LogoTitle1 from '../../assets/images/M.png';
import LogoTitle2 from '../../assets/images/S.png';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import './index.scss'
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray1 =  "errill".split("") 
    const nameArray2 = "hen".split("")
    const jobArray =  "Software Engineer".split("") 
    
    useEffect(() => {
        const timer = setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 5300)
        return () => clearTimeout(timer)
      }, [])

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1> 
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <img src={LogoTitle1} class="M" alt="developer" />
                <AnimatedLetters letterClass={letterClass} strArray={nameArray1} idx={15}/>
                <img src={LogoTitle2} class="S" alt="developer" />
                <AnimatedLetters letterClass={letterClass} strArray={nameArray2} idx={21}/>
                <br />
                <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={24}/>
                </h1>
                <h2>Backend Developer / Mechanical Engineer</h2>
                <Link to ="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo />
        </div>
        <Loader type="ball-scale-ripple-multiple" />
        </>
    )
}

export default Home