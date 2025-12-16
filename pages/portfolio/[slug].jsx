import React from 'react'
import Head from 'next/head'
import Link from 'next/link';
import { portfolioData } from '@/components/Portfolio/PortfolioData';
import { useLanguage } from '@/contexts/LanguageContext';

const ProjectPage = ({ project, prevProject, nextProject }) => {
    const { language } = useLanguage();
    const currentProject = project[language];
    const navTexts = portfolioData.navigation[language];

    const getLastWord = (str) => {
        const words = str.split(' ');
        return words[words.length - 1];
    };

    // Get the last word from project title
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
                        <div className="row">
                            <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                                <h1 className="display-3 fw-medium">{currentProject.title.replace(lastWord, '')} <span className="text-gradient">{lastWord}</span></h1>
                                <p>{currentProject.description}</p>
                            </div>
                        </div> {/* end row */}
                        <div className="row g-4 mt-5 justify-content-center">
                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading mb-1">{navTexts.services}:</h6>
                                    <ul className="list-inline-dot">
                                        {project.services.map((item, index) => (
                                            <li key={index}>
                                                {item.name}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="fancy-box">
                                    <h6 className="sm-heading mb-1">{navTexts.client}:</h6>
                                    <p>{currentProject.client}</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="fancy-box">
                                    {project.githubUrl ? (
                                        <>
                                            <h6 className="sm-heading mb-1">{navTexts.githubRepository}:</h6>
                                            <a className="link-hover" href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                                <span data-text={navTexts.viewOnGitHub}>{navTexts.viewOnGitHub}</span>
                                            </a>
                                        </>
                                    ) : (
                                        <>
                                            <h6 className="sm-heading mb-1">{navTexts.projectLink}:</h6>
                                            <Link className="link-hover" href={currentProject.projectLink.url}>
                                                <span data-text={currentProject.projectLink.title}>{currentProject.projectLink.title}</span>
                                            </Link>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div> {/* end row */}
                    </div> {/* end container */}
                </div>

                <div className="section-box">
                    <div className="section-sm bg-dark border-radius-1">
                        <div className="container">
                            {/* Navigation */}
                            <div className="row">
                                {prevProject ? (
                                    <div className="col-6">
                                        <Link href={`/portfolio/${prevProject.slug}`} className="button">
                                            <span data-text={navTexts.prev}>{navTexts.prev}</span>
                                        </Link>
                                    </div>
                                ) : (
                                    <div className="col-6">
                                        <button className="button btn-disabled" disabled>
                                            <span data-text={navTexts.prev}>{navTexts.prev}</span>
                                        </button>
                                    </div>
                                )}
                                {nextProject ? (
                                    <div className="col-6 text-end">
                                        <Link href={`/portfolio/${nextProject.slug}`} className="button">
                                            <span data-text={navTexts.next}>{navTexts.next}</span>
                                        </Link>
                                    </div>
                                ) : (
                                    <div className="col-6 text-end">
                                        <button className="button btn-disabled" disabled>
                                            <span data-text={navTexts.next}>{navTexts.next}</span>
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div> {/* end container */}
                    </div>
                </div>
            </main>
        </>
    )
}

export async function getStaticPaths() {
    // Generate paths for all your blog project
    const paths = portfolioData.projects.map((project) => ({
        params: { slug: project.slug },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const slug = params.slug;

    // Search for the blog project with the matching slug
    const project = portfolioData.projects.find((project) => project.slug === slug);

    if (!project) {
        return {
            notFound: true,
        };
    }

    const currentIndex = portfolioData.projects.findIndex((p) => p.slug === slug);
    const prevProject = currentIndex > 0 ? portfolioData.projects[currentIndex - 1] : null;
    const nextProject = currentIndex < portfolioData.projects.length - 1 ? portfolioData.projects[currentIndex + 1] : null;

    return {
        props: {
            project,
            prevProject,
            nextProject,
        },
    };
}


export default ProjectPage