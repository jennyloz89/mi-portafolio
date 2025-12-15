import React from 'react'
import { awardsData } from './AwardsData'
import { useLanguage } from '@/contexts/LanguageContext';

const Awards = () => {
    const { language } = useLanguage();
    const currentData = awardsData[language];
    const awards = awardsData.awards;
    
    return (
        <div id="awards" className="section pt-0 pb-0">
            <div className="container">
                <div className="row g-3 g-xl-4">
                    <div className="col-12 col-xl-4">
                        <span className="title-heading text-white-04">{currentData.mainData.title}</span>
                        <h1 className="display-3 fw-medium mb-0">{currentData.mainData.title2}<span className="text-gradient">{currentData.mainData.title2Span}</span></h1>
                    </div>
                    <div className="col-12 col-xl-8">
                        <div className="row g-3">
                            {awards.map((item, index) => (
                                <div key={index} className="col-12 col-md-6">
                                    <div className="fancy-box">
                                        <h4>{item.title}</h4>
                                        <h6 className="sm-heading text-white-04 mb-2">{item.date}</h6>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div> {/* end row(inner) */}
                    </div>
                </div> {/* end row */}
            </div> {/* end container */}
        </div>
    )
}

export default Awards