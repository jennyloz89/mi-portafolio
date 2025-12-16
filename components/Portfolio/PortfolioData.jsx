// Imports removidos - ahora usamos iconos en lugar de imágenes

export const portfolioData = {
    ES: {
        mainData: {
            title: "Proyectos",
            title2: "Trabajos",
            title2Span: "Recientes",
            description: "Aquí comparto algunos de los proyectos donde he aplicado QA funcional, automatización y validación conversacional. Cada uno refleja mi enfoque en calidad, documentación clara y experiencia de usuario."
        },
    },
    EN: {
        mainData: {
            title: "Projects",
            title2: "Recent",
            title2Span: "Works",
            description: "Here I share some of the projects where I've applied functional QA, automation, and conversational validation. Each one reflects my focus on quality, clear documentation, and user experience."
        },
    },
    projects: [
        {
            slug: 'third',
            githubUrl: 'https://github.com/jennyloz89/cypress-login-saucedemo',
            icon: 'bi bi-shield-check',
            ES: {
                title: 'Cypress E2E – SauceDemo',
                description: 'Automatización de login en SauceDemo usando Cypress y buenas prácticas de QA. Este proyecto demuestra cómo validar el flujo de autenticación con credenciales válidas e inválidas, navegación al dashboard, verificación de elementos visibles y uso de fixtures para datos de prueba. Incluye Page Object Model (POM), comandos personalizados reutilizables y reportes con screenshots para trazabilidad.',
                content: '',
                client: 'Personal',
                projectLink: {
                    title: 'www.flatheme.net',
                    url: 'https://www.flatheme.net'
                },
            },
            EN: {
                title: 'Cypress E2E – SauceDemo',
                description: 'Login automation in SauceDemo using Cypress and QA best practices. This project demonstrates how to validate the authentication flow with valid and invalid credentials, navigation to the dashboard, verification of visible elements, and use of fixtures for test data. Includes Page Object Model (POM), reusable custom commands, and reports with screenshots for traceability.',
                content: '',
                client: 'Personal',
                projectLink: {
                    title: 'www.flatheme.net',
                    url: 'https://www.flatheme.net'
                },
            },
            services: [
                { name: 'JavaScript' },
                { name: 'Cypress' },
            ],
            categories: [
                { name: 'Category' },
                { name: 'Category' },
                { name: 'Category' }
            ],
        },
        {
            slug: 'mi-portafolio',
            githubUrl: 'https://github.com/jennyloz89/mi-portafolio',
            icon: 'bi bi-laptop',
            ES: {
                title: 'Mi Portafolio QA',
                description: 'Portafolio personal desarrollado con Next.js que muestra mi experiencia como QA. Incluye secciones de servicios, proyectos, automatización de pruebas, testing de APIs y metodologías ágiles. Implementa internacionalización (ES/EN), diseño responsive y navegación fluida con efectos visuales modernos.',
                content: 'Portafolio personal desarrollado con Next.js que demuestra mis habilidades técnicas y experiencia profesional. El proyecto incluye implementación de internacionalización para soportar español e inglés, diseño responsive optimizado para diferentes dispositivos, y una interfaz moderna con efectos de desvanecimiento y navegación suave.',
                client: 'Personal',
                projectLink: {
                    title: 'Repositorio GitHub',
                    url: 'https://github.com/jennyloz89/mi-portafolio'
                },
            },
            EN: {
                title: 'My QA Portfolio',
                description: 'Personal portfolio developed with Next.js showcasing my experience as a QA. Includes sections for services, projects, test automation, API testing, and agile methodologies. Implements internationalization (ES/EN), responsive design, and smooth navigation with modern visual effects.',
                content: 'Personal portfolio developed with Next.js demonstrating my technical skills and professional experience. The project includes internationalization implementation to support Spanish and English, responsive design optimized for different devices, and a modern interface with fade effects and smooth navigation.',
                client: 'Personal',
                projectLink: {
                    title: 'GitHub Repository',
                    url: 'https://github.com/jennyloz89/mi-portafolio'
                },
            },
            services: [
                { name: 'Next.js' },
                { name: 'React' },
                { name: 'SCSS' },
            ],
            categories: [
                { name: 'Web Development' },
                { name: 'Next.js' },
                { name: 'Personal Portfolio' }
            ],
        },
    ],
    navigation: {
        ES: {
            prev: 'Anterior',
            next: 'Siguiente',
            services: 'Servicios',
            client: 'Cliente',
            githubRepository: 'Repositorio GitHub',
            projectLink: 'Enlace del proyecto',
            viewOnGitHub: 'Ver en GitHub',
        },
        EN: {
            prev: 'Prev',
            next: 'Next',
            services: 'Services',
            client: 'Client',
            githubRepository: 'GitHub Repository',
            projectLink: 'Project link',
            viewOnGitHub: 'View on GitHub',
        },
    }
};