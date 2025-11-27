import React from 'react'
import { heroData } from './HeroData'

const Hero = () => {
    return (
        <div id="about" className="hero-section">
            <div className="container text-center">
                <div className="row">
                    <div className="col-12">
                        <h1 className="hero-heading display-1 fw-bold mb-0">
                            <span style={{ color: 'white' }}>{heroData.mainData.greeting} </span>
                            <span style={{ color: '#E91E63' }}>{heroData.mainData.name}</span>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero