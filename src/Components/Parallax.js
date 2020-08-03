import React, { useEffect } from 'react'
import anime from 'animejs/lib/anime.es.js';
import { Parallax } from 'react-parallax'

const insideStyles = {
    opacity: 0,
    margin: 0,
    position: "absolute",
    top: "60%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: '100%'
};

const ReactParallax = (props) => {

    useEffect(() => {
        anime({
            targets: '#parallax-header',
            duration: 5000,
            delay: 1000,
            opacity: 1,
            translateY: -100
        });
    }, [])
    return (
        <div>
            <Parallax bgImage='./images/Crackers/3TS.JPG' blur={{ min: -15, max: 15 }} strength={500} className='parallax-header'>
                <div id='parallax-height'>
                    <div id='parallax-header' style={insideStyles} className='text-white text-center'>
                        <div className='container'>
                            <h1 className='font-60-px ' style={{ textShadow: '5px 5px 15px black' }}>
                                "We share the cultural value of Indonesia to the world through the native product."
                            </h1>
                            <div className='d-flex justify-content-center'>
                                <div className="hscroll-line" style={{ top: '500px' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </Parallax>
        </div >
    )
}

export default ReactParallax