import React from 'react'
import { servicesData } from './ServicesData'
import { useLanguage } from '@/contexts/LanguageContext';

const Services = () => {
    const { language } = useLanguage();
    const currentData = servicesData[language];
    
    return (
        <div id="services" className="section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <span className="title-heading text-white-04 d-block mb-3">{currentData.mainData.title}</span>
                        <div className="row g-4">
                            {currentData.services.map((item, index) => (
                                <div key={index} className="col-12 col-md-6 col-lg-3">
                                    <div className="service-card-horizontal">
                                        <div className="service-card-icon">
                                            <i className={item.bootstrapIcon}></i>
                                        </div>
                                        <h4 className="service-card-title">{item.title}</h4>
                                        <p className="service-card-description">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services