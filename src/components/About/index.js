import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect,useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGitAlt, faGolang, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import { faC } from '@fortawesome/free-solid-svg-icons'
import Loader from 'react-loaders'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timer = setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
        return () => clearTimeout(timer)
      }, [])

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={"About me".split("")}
                    idx={15} 
                    />
                </h1>
                <p>
                I am currently a graduate from Imperial College
                 London with a Bachelors in Mechanical engineering. 
                 However, having a strong aspiration to be a 
                </p>
                <p>
                 Experience wise,    
                </p>
                <p>
                 On a personal note, I aspire to open up my own business one day,
                 either selling bak chor mee or a fancy western dining experience. 
                 I also like to drink. Socially and responsibly.     
                </p>

            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'> 
                        <FontAwesomeIcon icon={faPython} color="#366d9a" />
                    </div>
                    <div className='face2'> 
                        <FontAwesomeIcon icon={faGolang} color="#00AED8"/>
                    </div>
                    <div className='face3'> 
                        <FontAwesomeIcon icon={faC} color="#273295"/>
                    </div>
                    <div className='face4'> 
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                    </div>
                    <div className='face5'> 
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                    </div>
                    <div className='face6'> 
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28"/>
                    </div>
                </div>
            </div>
        </div>
        <Loader type="ball-scale-ripple-multiple" />
        </>
    )
}

export default About