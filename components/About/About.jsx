import React from 'react'
import Image from 'next/image'
import { aboutData } from './AboutData';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
    const { language } = useLanguage();
    const currentData = aboutData[language];
    const skills = aboutData.skills;
    const certifications = aboutData.certifications;
    const connect = aboutData.connect;
    
    return (
        <div className="container">
            <div className="row g-4 g-md-5">
                <div className="col-12 col-lg-4 order-lg-2 text-center">
                    {/* Hero Avatar */}
                    <div className="hero-avatar">
                        <Image src={currentData.mainData.heroAvatar} alt="hero avatar" placeholder="blur" />
                    </div>
                    {/* end Hero Avatar */}
                </div>
                <div className="col-12 col-lg-4 order-lg-1">
                    <div className="row g-4 g-lg-5">
                        <div className="col-12 col-md-4 col-lg-12">
                            <h6 className="sm-heading">{language === 'ES' ? 'Biografía' : 'Biography'}</h6>
                            <p>{currentData.mainData.biography}</p>
                        </div>
                        <div className="col-12 col-md-8 col-lg-12">
                            <h6 className="sm-heading">🛠️ {language === 'ES' ? 'Tecnología' : 'Technology'}</h6>
                            <ul className="list-unstyled">
                                {skills.map((item, index) => (
                                    <li key={index} className="mb-2"><strong>{item.category}:</strong> {item.items}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-12 col-md-8 col-lg-12">
                            <h6 className="sm-heading">🏆 {language === 'ES' ? 'Certificaciones' : 'Certifications'}</h6>
                            <ul className="list-unstyled">
                                {certifications.map((cert, index) => (
                                    <li key={index} className="mb-2">
                                        {cert.verifyUrl ? (
                                            <a 
                                                href={cert.verifyUrl} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="text-decoration-none"
                                                style={{ color: 'inherit' }}
                                            >
                                                <strong>{cert.name}:</strong> {cert.issuer}
                                            </a>
                                        ) : (
                                            <>
                                                <strong>{cert.name}:</strong> {cert.issuer}
                                            </>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div> {/* end row(inner) */}
                </div>
                <div className="col-12 col-md-12 col-lg-4 order-lg-3 text-lg-end">
                    <div className="row g-4 g-lg-5">
                        <div className="col-4 col-lg-12">
                            <h6 className="sm-heading">{language === 'ES' ? 'Proyectos Completados' : 'Projects Done'}</h6>
                            <h1 className="fw-light display-4 mb-0 line-height-110">{currentData.mainData.projectsDone}</h1>
                        </div>
                        <div className="col-4 col-lg-12">
                            <h6 className="sm-heading">{language === 'ES' ? 'Años de Experiencia' : 'Years of Experience'}</h6>
                            <h1 className="fw-light display-4 mb-0 line-height-110">{currentData.mainData.yearsOfExperience}+</h1>
                        </div>
                        <div className="col-12 col-lg-12 mt-3">
                            <h6 className="sm-heading">{language === 'ES' ? 'Conectar' : 'Connect'}</h6>
                            <ul className="list-inline justify-content-lg-end">
                                {connect.map((item, index) => (
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
                            <div className="d-flex align-items-center gap-3 justify-content-lg-end">
                                <h6 className="sm-heading mb-0">{language === 'ES' ? 'Descargar CV' : 'Download CV'}</h6>
                                <a 
                                    href={language === 'ES' ? "/CV_Jennifer_Lozano_ES.pdf" : "/CV_Jennifer_Lozano_EN.pdf"}
                                    download 
                                    className="button-circle button-circle-sm"
                                    aria-label={language === 'ES' ? 'Descargar CV en español' : 'Download CV in English'}
                                >
                                    <i className="bi bi-download"></i>
                                    <i className="bi bi-download"></i>
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
