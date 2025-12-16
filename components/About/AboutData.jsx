import HeroAvatar from '@/public/images/hero-avatar.jpg';

export const aboutData = {
    ES: {
        mainData: {
            heroAvatar: HeroAvatar,
            biography: "Ingeniero en Sistemas con más de 7 años de experiencia en el aseguramiento de la calidad (QA) para aplicaciones web, móviles y APIs. Especialista en pruebas funcionales, automatizadas y de regresión, con liderazgo en equipos ágiles (Scrum/Kanban). Actualmente enfocada en la validación de chatbots, centros de llamadas y sistemas con IA, garantizando experiencias digitales confiables y de alto rendimiento.",
            projectsDone: "20",
            yearsOfExperience: "7",
            worldwideClients: "50",
        },
    },
    EN: {
        mainData: {
            heroAvatar: HeroAvatar,
            biography: "Systems Engineer with over 7 years of experience in quality assurance (QA) for web, mobile, and API applications. Specialist in functional, automated, and regression testing, with leadership in agile teams (Scrum/Kanban). Currently focused on validating chatbots, call centers, and AI systems, ensuring reliable and high-performance digital experiences.",
            projectsDone: "20",
            yearsOfExperience: "7",
            worldwideClients: "50",
        },
    },
    skills: [
        { category: 'Automation', items: 'Cypress, WebdriverIO, Appium, Selenium, Postman, JMeter' },
        { category: 'Languages', items: 'JavaScript, TypeScript, SQL, Python' },
        { category: 'Tools', items: 'Jira, TestRail, Sentry, Jenkins, Git, CI/CD' },
        { category: 'Agile', items: 'Scrum, Kanban' },
    ],
    certifications: [
        { 
            name: 'ISTQB Foundation Level', 
            issuer: 'ISTQB', 
            certificateId: '',
            verifyUrl: null
        },
        { 
            name: 'Six Sigma Yellow Belt (SSYB™)', 
            issuer: 'SCRUMstudy', 
            certificateId: '636170',
            verifyUrl: 'https://www.6sigmastudy.com/certification/verify?type=SSYB&number=636170'
        },
        { 
            name: 'Scrum Fundamentals Certified (SFC™)', 
            issuer: 'SCRUMstudy', 
            certificateId: '624148',
            verifyUrl: 'https://www.scrumstudy.com/certification/verify?type=SFC&number=624148'
        },
    ],
    connect: [
        {
            url: 'mailto:jennyloz89@gmail.com',
            bootstrapIcon: 'bi bi-envelope',
        },
        {
            url: 'https://github.com/jennyloz89',
            bootstrapIcon: 'bi bi-github',
        },
        {
            url: 'https://www.linkedin.com/in/jenniferlozanop/',
            bootstrapIcon: 'bi bi-linkedin',
        },
        {
            url: 'tel:+528126562329',
            bootstrapIcon: 'bi bi-telephone',
        },
    ]
};
