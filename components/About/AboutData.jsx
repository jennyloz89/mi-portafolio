import HeroAvatar from '@/public/images/hero-avatar.jpg';

export const aboutData = {
    mainData: {
        heroAvatar: HeroAvatar,
        biography: "Ingeniero en Sistemas con más de 7 años de experiencia en el aseguramiento de la calidad (QA) para aplicaciones web, móviles y APIs. Especialista en pruebas funcionales, automatizadas y de regresión, con liderazgo en equipos ágiles (Scrum/Kanban). Actualmente enfocada en la validación de chatbots, centros de llamadas y sistemas con IA, garantizando experiencias digitales confiables y de alto rendimiento.",
        projectsDone: "20",
        yearsOfExperience: "7",
        worldwideClients: "50",
    },
    skills: [
        { category: 'QA & Testing', items: 'Pruebas funcionales, regresión, exploratorias, UAT' },
        { category: 'Automation', items: 'Cypress, WebdriverIO, Appium, Postman' },
        { category: 'Languages', items: 'JavaScript, TypeScript, SQL' },
        { category: 'Tools', items: 'Jira, Sentry, Jenkins' },
        { category: 'Agile', items: 'Scrum, Kanban' },
        { category: 'Soft Skills', items: 'Documentación clara, mejora continua, enfoque en experiencia de usuario' },
    ],
    connect: [
        {
            url: '#',
            bootstrapIcon: 'bi bi-facebook',
        },
        {
            url: '#',
            bootstrapIcon: 'bi bi-twitter',
        },
        {
            url: '#',
            bootstrapIcon: 'bi bi-instagram',
        },
    ]
};
