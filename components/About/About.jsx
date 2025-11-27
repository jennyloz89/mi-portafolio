import React from 'react'
import Image from 'next/image'
import { aboutData } from './AboutData';
import Link from 'next/link';

const About = () => {
    return (
        <div className="container">
            <div className="row g-4 g-md-5">
                <div className="col-12 col-lg-4 order-lg-2 text-center">
                    {/* Hero Avatar */}
                    <div className="hero-avatar">
                        <Image src={aboutData.mainData.heroAvatar} alt="hero avatar" placeholder="blur" />
                    </div>
                    {/* end Hero Avatar */}
                </div>
                <div className="col-12 col-lg-4 order-lg-1">
                    <div className="row g-4 g-lg-5">
                        <div className="col-12 col-md-4 col-lg-12">
                            <h6 className="sm-heading">Biography</h6>
                            <p>{aboutData.mainData.biography}</p>
                        </div>
                        <div className="col-12 col-md-8 col-lg-12">
                            <h6 className="sm-heading">🛠️ Technology</h6>
                            <ul className="list-unstyled">
                                {aboutData.skills.map((item, index) => (
                                    <li key={index} className="mb-2"><strong>{item.category}:</strong> {item.items}</li>
                                ))}
                            </ul>
                        </div>
                    </div> {/* end row(inner) */}
                </div>
                <div className="col-12 col-md-12 col-lg-4 order-lg-3 text-lg-end">
                    <div className="row g-4 g-lg-5">
                        <div className="col-4 col-lg-12">
                            <h6 className="sm-heading">Projects Done</h6>
                            <h1 className="fw-light display-4 mb-0 line-height-110">{aboutData.mainData.projectsDone}</h1>
                        </div>
                        <div className="col-4 col-lg-12">
                            <h6 className="sm-heading">Years of Experience</h6>
                            <h1 className="fw-light display-4 mb-0 line-height-110">{aboutData.mainData.yearsOfExperience}+</h1>
                        </div>
                        <div className="col-4 col-lg-12">
                            <h6 className="sm-heading">Worldwide Clients</h6>
                            <h1 className="fw-light display-4 mb-0 line-height-110">{aboutData.mainData.worldwideClients}</h1>
                        </div>
                        <div className="col-12 col-lg-12 mt-3">
                            <h6 className="sm-heading">Connect</h6>
                            <ul className="list-inline justify-content-lg-end">
                                {aboutData.connect.map((item, index) => (
                                    <li key={index}>
                                        <Link className="button-circle button-circle-sm" href={item.url} aria-label="Social media link">
                                            <i className={item.bootstrapIcon}></i>
                                            <i className={item.bootstrapIcon}></i>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-12 col-lg-12">
                            <h6 className="sm-heading">Download CV</h6>
                            <div className="d-flex gap-2 flex-wrap justify-content-lg-end">
                                <a 
                                    href="/mi-portafolio/CV_Jennifer_Lozano_ES.pdf" 
                                    download 
                                    className="btn btn-outline-light btn-sm"
                                >
                                    <i className="bi bi-download me-2"></i>Español
                                </a>
                                <a 
                                    href="/mi-portafolio/CV_Jennifer_Lozano_EN.pdf" 
                                    download 
                                    className="btn btn-outline-light btn-sm"
                                >
                                    <i className="bi bi-download me-2"></i>English
                                </a>
                            </div>
                        </div>
                    </div> {/* end row(inner) */}
                </div>
            </div> {/* end row */}
        </div>
    )
}

export default About
