import React from 'react'
import Head from 'next/head'
import Link from 'next/link';
import { portfolioData } from '@/components/Portfolio/PortfolioData';
import { useLanguage } from '@/contexts/LanguageContext';

const ProjectPage = ({ project, prevProject, nextProject }) => {
    const { language } = useLanguage();
    const currentProject = project[language];
    const navTexts = portfolioData.navigation[language];
    const metrics = project.metrics?.[language] || [];

    const getLastWord = (str) => {
        const words = str.split(' ');
        return words[words.length - 1];
    };

    const lastWord = getLastWord(currentProject.title);

    return (
        <>
            <Head>
                <title>{currentProject.title}</title>
                <meta name="description" content={currentProject.description} />
                <meta name="keywords" content={project.keywords} />
            </Head>

            <main>
                <div className="section">
                    <div className="container">

                        {/* ── Header ── */}
                        <div className="row">
                            <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                                <h1 className="display-3 fw-medium">
                                    {currentProject.title.replace(lastWord, '')}
                                    <span className="text-gradient">{lastWord}</span>
                                </h1>
                                <p>{currentProject.description}</p>

                                {/* Categories */}
                                {project.categories?.length > 0 && (
                                    <div className="d-flex flex-wrap gap-2 mt-3">
                                        {project.categories.map((cat, i) => (
                                            <span key={i} style={{
                                                fontSize: '11px',
                                                fontWeight: 600,
                                                padding: '3px 10px',
                                                borderRadius: '20px',
                                                border: '1px solid rgba(255,255,255,0.15)',
                                                color: 'rgba(255,255,255,0.6)',
                                                letterSpacing: '.04em',
                                            }}>
                                                {cat.name}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* ── Metrics ── */}
                        {metrics.length > 0 && (
                            <div className="row mt-5">
                                <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                                    <p className="sm-heading mb-3 text-center">{navTexts.metrics}</p>
                                    <div className="d-flex flex-wrap gap-3 justify-content-center">
                                        {metrics.map((m, i) => (
                                            <div key={i} style={{
                                                background: 'rgba(255,255,255,0.04)',
                                                border: '1px solid rgba(255,255,255,0.1)',
                                                borderRadius: '10px',
                                                padding: '14px 20px',
                                                minWidth: '100px',
                                                textAlign: 'center',
                                            }}>
                                                <div style={{
                                                    fontSize: '22px',
                                                    fontWeight: 700,
                                                    background: 'linear-gradient(135deg, #a855f7, #7c3aed)',
                                                    WebkitBackgroundClip: 'text',
                                                    WebkitTextFillColor: 'transparent',
                                                    lineHeight: 1.2,
                                                }}>
                                                    {m.value}
                                                </div>
                                                <div style={{
                                                    fontSize: '11px',
                                                    color: 'rgba(255,255,255,0.45)',
                                                    marginTop: '4px',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '.06em',
                                                }}>
                                                    {m.label}
                                                </div>
                                            </div>
                                        ))}

                                        {/* CI badge si tiene githubUrl */}
                                        {project.githubUrl && (
                                            <div style={{
                                                background: 'rgba(255,255,255,0.04)',
                                                border: '1px solid rgba(255,255,255,0.1)',
                                                borderRadius: '10px',
                                                padding: '14px 20px',
                                                minWidth: '100px',
                                                textAlign: 'center',
                                            }}>
                                                <div style={{ marginBottom: '4px' }}>
                                                    <img
                                                        src={`${project.githubUrl}/actions/workflows/${project.ciWorkflow || 'api-tests.yml'}/badge.svg`}
                                                        alt="CI Status"
                                                        style={{ height: '20px' }}
                                                        onError={(e) => { e.target.style.display = 'none'; }}
                                                    />
                                                </div>
                                                <div style={{
                                                    fontSize: '11px',
                                                    color: 'rgba(255,255,255,0.45)',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '.06em',
                                                }}>
                                                    {navTexts.ciStatus}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* ── Detail boxes ── */}
                        <div className="row g-4 mt-4 portfolio-detail-boxes">

                            {/* Servicios / Stack */}
                            <div className="col-12 col-sm-6 col-lg">
                                <div className="fancy-box h-100 d-flex flex-column">
                                    <h6 className="sm-heading mb-3">{navTexts.services}</h6>
                                    <div className="d-flex flex-wrap gap-2 flex-grow-1">
                                        {project.services.map((item, index) => (
                                            <span key={index} style={{
                                                fontSize: '12px',
                                                padding: '3px 9px',
                                                borderRadius: '20px',
                                                background: 'rgba(168,85,247,0.12)',
                                                border: '1px solid rgba(168,85,247,0.3)',
                                                color: 'rgba(216,180,254,0.9)',
                                                fontWeight: 500,
                                            }}>
                                                {item.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* GitHub */}
                            <div className="col-12 col-sm-6 col-lg">
                                <div className="fancy-box h-100 d-flex flex-column">
                                    <h6 className="sm-heading mb-2">{navTexts.githubRepository}</h6>
                                    {project.githubUrl ? (
                                        <a className="link-hover mt-auto" href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                            <span data-text={navTexts.viewOnGitHub}>{navTexts.viewOnGitHub}</span>
                                        </a>
                                    ) : (
                                        <a className="link-hover mt-auto" href={currentProject.projectLink?.url} target="_blank" rel="noopener noreferrer">
                                            <span data-text={currentProject.projectLink?.title}>{currentProject.projectLink?.title}</span>
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Reporte funcional */}
                            {currentProject.reportLink && (
                                <div className="col-12 col-sm-6 col-lg">
                                    <div className="fancy-box h-100 d-flex flex-column">
                                        <h6 className="sm-heading mb-2">{navTexts.documentation}</h6>
                                        <a className="link-hover mt-auto" href={currentProject.reportLink.url} target="_blank" rel="noopener noreferrer">
                                            <span data-text={currentProject.reportLink.title}>{currentProject.reportLink.title}</span>
                                        </a>
                                    </div>
                                </div>
                            )}

                            {/* Reporte de carga */}
                            {currentProject.loadReportLink && (
                                <div className="col-12 col-sm-6 col-lg">
                                    <div className="fancy-box h-100 d-flex flex-column">
                                        <h6 className="sm-heading mb-2">{navTexts.loadReport}</h6>
                                        <a className="link-hover mt-auto" href={currentProject.loadReportLink.url} target="_blank" rel="noopener noreferrer">
                                            <span data-text={currentProject.loadReportLink.title}>{currentProject.loadReportLink.title}</span>
                                        </a>
                                    </div>
                                </div>
                            )}

                            {/* Cliente — solo si no es Personal */}
                            {currentProject.client && currentProject.client !== 'Personal' && (
                                <div className="col-12 col-sm-6 col-lg">
                                    <div className="fancy-box h-100 d-flex flex-column">
                                        <h6 className="sm-heading mb-2">{navTexts.client}</h6>
                                        <p className="mb-0 flex-grow-1">{currentProject.client}</p>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                </div>

                {/* ── Navigation ── */}
                <div className="section-box">
                    <div className="section-sm bg-dark border-radius-1">
                        <div className="container">
                            <div className="row">
                                <div className="col-6">
                                    {prevProject ? (
                                        <Link href={`/portfolio/${prevProject.slug}`} className="button button-nav">
                                            <span data-text={navTexts.prev}>{navTexts.prev}</span>
                                        </Link>
                                    ) : (
                                        <button className="button button-nav btn-disabled" disabled>
                                            <span data-text={navTexts.prev}>{navTexts.prev}</span>
                                        </button>
                                    )}
                                </div>
                                <div className="col-6 text-end">
                                    {nextProject ? (
                                        <Link href={`/portfolio/${nextProject.slug}`} className="button button-nav">
                                            <span data-text={navTexts.next}>{navTexts.next}</span>
                                        </Link>
                                    ) : (
                                        <button className="button button-nav btn-disabled" disabled>
                                            <span data-text={navTexts.next}>{navTexts.next}</span>
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export async function getStaticPaths() {
    const paths = portfolioData.projects.map((project) => ({
        params: { slug: project.slug },
    }));
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const slug = params.slug;
    const project = portfolioData.projects.find((p) => p.slug === slug);
    if (!project) return { notFound: true };

    const currentIndex = portfolioData.projects.findIndex((p) => p.slug === slug);
    const prevProject = currentIndex > 0 ? portfolioData.projects[currentIndex - 1] : null;
    const nextProject = currentIndex < portfolioData.projects.length - 1 ? portfolioData.projects[currentIndex + 1] : null;

    return { props: { project, prevProject, nextProject } };
}

export default ProjectPage