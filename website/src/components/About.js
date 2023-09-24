import './About.css'
import Animation from './Animation'

import React, { useState, useEffect } from 'react';

function About() {

    function getScreenWidth(){
        return window.innerWidth;
    } 

    const [screenWidth, setScreenWidth] = useState(getScreenWidth());

    useEffect(() => {
        const updateDimension = () => {
            setScreenWidth(getScreenWidth())
        }
        window.addEventListener('resize', updateDimension);
        
        return(() => {
            window.removeEventListener('resize', updateDimension);
        })
    }, [screenWidth])

    return (
        <div className='about'>
            {screenWidth  > 720 ? 
                <>
                    <div className='content'>
                        <div className='heading'>Who we are</div>
                        <div className='bodyText'>
                            <p>Welcome to <strong>Bioinformatics @ GT</strong>, a new registered student organization at Georgia Tech! Our mission is to be the bridge that connects students to opportunities in research and industry within computational biology.</p>
                            <p>Bioinformatics is the intersection of biology, computer science, and math to solve biological problems through understanding data. With how interdisciplinary bioinformatics can be, we've only scratched the surface of what bioinformatics is capable of doing, and in the coming years, there will be significantly more advancement in the field. We've recently partnered with the GT College of Sciences and the Bioinformatics graduate program and are now a direct link between undergraduate communities and graduate research and industry connections. Learn more about us below.</p>
                        </div>
                        <a href="https://linktr.ee/gtbioinformatics" target='_blank' rel="noreferrer">
                            <button class="joinButton">
                                Join us
                            </button>
                        </a>
                    </div>
                    <div className='animation'>
                        <Animation />
                    </div>
                </>
            : 
                <div className='mobileContent'>
                    <div className='heading'>Who we are</div>
                    <div className='bodyText'>
                        <p>Welcome to <strong>Bioinformatics @ GT</strong>, a new registered student organization at Georgia Tech! Our mission is to be the bridge that connects students to opportunities in research and industry within computational biology.</p>
                        <p>Bioinformatics is the intersection of biology, computer science, and math to solve biological problems through understanding data. With how interdisciplinary bioinformatics can be, we've only scratched the surface of what bioinformatics is capable of doing, and in the coming years, there will be significantly more advancement in the field. We've recently partnered with the GT College of Sciences and the Bioinformatics graduate program and are now a direct link between undergraduate communities and graduate research and industry connections. Learn more about us below.</p>
                    </div>
                    <a href="https://linktr.ee/gtbioinformatics" target='_blank' rel="noreferrer">
                        <button class="joinButton">
                            Join us
                        </button>
                    </a>
                </div>
            }
        </div>
    );
}

export default About;