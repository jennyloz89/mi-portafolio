import React, { useEffect, useRef } from 'react';
import { portfolioData } from './PortfolioData';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';


const Portfolio = () => {
    const { language } = useLanguage();
    const currentData = portfolioData[language];
    const projects = portfolioData.projects;
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const sliderRef = useRef(null);
    const sliderContainerRef = useRef(null);

    const updateNavigation = (swiper) => {
        if (prevRef.current && nextRef.current) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.update();
        }
    };

    const updateFadeGradients = (swiper) => {
        if (!sliderContainerRef.current) return;
        
        const container = sliderContainerRef.current;
        const isAtStart = swiper.isBeginning;
        const isAtEnd = swiper.isEnd;

        if (isAtStart) {
            container.style.setProperty('--fade-left-opacity', '0');
        } else {
            container.style.setProperty('--fade-left-opacity', '1');
        }

        if (isAtEnd) {
            container.style.setProperty('--fade-right-opacity', '0');
        } else {
            container.style.setProperty('--fade-right-opacity', '1');
        }
    };

    useEffect(() => {
        if (sliderRef.current) {
            updateNavigation(sliderRef.current);
            updateFadeGradients(sliderRef.current);
            
            sliderRef.current.on('slideChange', () => {
                updateFadeGradients(sliderRef.current);
            });
            
            sliderRef.current.on('reachBeginning', () => {
                updateFadeGradients(sliderRef.current);
            });
            
            sliderRef.current.on('reachEnd', () => {
                updateFadeGradients(sliderRef.current);
            });
        }
    }, []);

    return (
        <div id="portfolio" className="section-box">
            <div className="section-sm bg-dark border-radius-1">
                <div className="container">
                    <div className="row mb-4 mb-lg-5">
                        <div className="col-12">
                            <div className="d-flex justify-content-between align-items-start flex-wrap gap-3">
                                <div className="flex-grow-1">
                                    <span className="title-heading text-white-04 d-block mb-2">{currentData.mainData.title}</span>
                                    <h1 className="display-3 fw-medium mb-3">{currentData.mainData.title2} <span className="text-gradient">{currentData.mainData.title2Span}</span></h1>
                                    <p className="mb-0">{currentData.mainData.description}</p>
                                </div>
                                {/* Slider Nav */}
                                <div className="d-flex gap-2">
                                    <button className="swiper-portfolio-prev button-circle cursor-link" onClick={() => sliderRef.current?.slidePrev()} aria-label="Previous">
                                        <i className="bi bi-arrow-left"></i>
                                        <i className="bi bi-arrow-left"></i>
                                    </button>
                                    <button className="swiper-portfolio-next button-circle cursor-link" onClick={() => sliderRef.current?.slideNext()} aria-label="Next">
                                        <i className="bi bi-arrow-right"></i>
                                        <i className="bi bi-arrow-right"></i>
                                    </button>
                                </div>
                                {/* end Slider Nav */}
                            </div>
                        </div>
                    </div> {/* end row */}
                    <div ref={sliderContainerRef} className="portfolio-slider-wrapper">
                        <Swiper
                            onSwiper={(swiper) => {
                                sliderRef.current = swiper;
                                swiper.on('init', () => {
                                    updateNavigation(swiper);
                                    updateFadeGradients(swiper);
                                });
                            }}
                            onSlideChange={(swiper) => {
                                updateFadeGradients(swiper);
                            }}
                            onReachBeginning={(swiper) => {
                                updateFadeGradients(swiper);
                            }}
                            onReachEnd={(swiper) => {
                                updateFadeGradients(swiper);
                            }}
                            slidesPerView={1}
                            spaceBetween={30}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 24,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 24,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                            }}
                            className="portfolio-slider"
                        >
                        {projects.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="portfolio-box">
                                    {/* Icon */}
                                    <div className="portfolio-img">
                                        <Link href={`portfolio/${item.slug}`}>
                                            <div className="portfolio-icon-wrapper">
                                                <i className={item.icon}></i>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Caption */}
                                    <h2 className="mb-0">
                                        <Link className="portfolio-caption" href={`portfolio/${item.slug}`}>
                                            <i className="bi bi-arrow-right"></i>
                                            {item[language].title}
                                        </Link>
                                    </h2>
                                </div>
                            </SwiperSlide>
                        ))}
                        </Swiper>
                    </div>
                </div> {/* end container */}
            </div>
        </div>
    )
}

export default Portfolio