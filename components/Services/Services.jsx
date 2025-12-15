import React, { useEffect, useRef } from 'react'
import { servicesData } from './ServicesData'
import { useLanguage } from '@/contexts/LanguageContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Services = () => {
    const { language } = useLanguage();
    const currentData = servicesData[language];
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const sliderRef = useRef(null);

    const updateNavigation = (swiper) => {
        if (prevRef.current && nextRef.current) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.update();
        }
    };

    useEffect(() => {
        if (sliderRef.current) {
            updateNavigation(sliderRef.current);
        }
    }, []);
    
    return (
        <div id="services" className="section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <span className="title-heading text-white-04">{currentData.mainData.title}</span>
                            {/* Slider Nav */}
                            <div className="d-flex gap-2">
                                <button 
                                    ref={prevRef}
                                    className="swiper-services-prev button-circle cursor-link" 
                                    onClick={() => sliderRef.current?.slidePrev()} 
                                    aria-label="Previous"
                                >
                                    <i className="bi bi-arrow-left"></i>
                                    <i className="bi bi-arrow-left"></i>
                                </button>
                                <button 
                                    ref={nextRef}
                                    className="swiper-services-next button-circle cursor-link" 
                                    onClick={() => sliderRef.current?.slideNext()} 
                                    aria-label="Next"
                                >
                                    <i className="bi bi-arrow-right"></i>
                                    <i className="bi bi-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                        <Swiper
                            modules={[Navigation]}
                            onSwiper={(swiper) => {
                                sliderRef.current = swiper;
                                swiper.on('init', () => {
                                    updateNavigation(swiper);
                                });
                            }}
                            slidesPerView={1}
                            spaceBetween={30}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 30,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                                1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 30,
                                },
                                1200: {
                                    slidesPerView: 5,
                                    spaceBetween: 30,
                                },
                            }}
                            className="services-slider"
                        >
                            {currentData.services.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="service-card-horizontal">
                                        <div className="service-card-icon">
                                            <i className={item.bootstrapIcon}></i>
                                        </div>
                                        <h4 className="service-card-title">{item.title}</h4>
                                        <p className="service-card-description">{item.description}</p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services