import React from 'react';
import { portfolioData } from './PortfolioData';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';


const Portfolio = () => {
    const { language } = useLanguage();
    const currentData = portfolioData[language];
    const projects = portfolioData.projects;
    const groups = portfolioData.groups || [];

    // Agrupar proyectos por group (mantener orden de groups)
    let projectsByGroup = groups.map((gr) => ({
        ...gr,
        projects: projects.filter((p) => p.group === gr.id),
    })).filter((gr) => gr.projects.length > 0);

    // Proyectos sin group van a "Otros"
    const ungrouped = projects.filter((p) => !p.group);
    if (ungrouped.length > 0) {
        projectsByGroup = [...projectsByGroup, {
            id: 'other',
            ES: { title: 'Otros proyectos' },
            EN: { title: 'Other projects' },
            projects: ungrouped,
        }];
    }
    // Sin grupos definidos: mostrar todos en una sola sección
    if (projectsByGroup.length === 0 && projects.length > 0) {
        projectsByGroup = [{
            id: 'all',
            ES: { title: currentData.mainData.title2 + ' ' + currentData.mainData.title2Span },
            EN: { title: currentData.mainData.title2 + ' ' + currentData.mainData.title2Span },
            projects,
        }];
    }

    return (
        <div id="portfolio" className="section-box">
            <div className="section-sm bg-dark border-radius-1">
                <div className="container">
                    <div className="row mb-4 mb-lg-5">
                        <div className="col-12">
                            <span className="title-heading text-white-04 d-block mb-2">{currentData.mainData.title}</span>
                            <h1 className="display-3 fw-medium mb-3">{currentData.mainData.title2} <span className="text-gradient">{currentData.mainData.title2Span}</span></h1>
                            <p className="mb-0">{currentData.mainData.description}</p>
                        </div>
                    </div>

                    {projectsByGroup.map((group) => (
                        <div key={group.id} className="portfolio-group mb-5">
                            <h2 className="h4 text-white-08 mb-3 mb-md-4">{group[language].title}</h2>
                            <div className="row g-4">
                                {group.projects.map((item, index) => (
                                    <div key={item.slug} className="col-12 col-sm-6 col-lg-4">
                                        <div className="portfolio-box">
                                            <div className="portfolio-img">
                                                <Link href={`portfolio/${item.slug}`}>
                                                    <div className="portfolio-icon-wrapper">
                                                        <i className={item.icon}></i>
                                                    </div>
                                                </Link>
                                            </div>
                                            <h2 className="mb-0">
                                                <Link className="portfolio-caption" href={`portfolio/${item.slug}`}>
                                                    <i className="bi bi-arrow-right"></i>
                                                    {item[language].title}
                                                </Link>
                                            </h2>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
