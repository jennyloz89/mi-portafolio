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
            slug: 'chatbot-validation',
            icon: 'bi bi-chat-dots',
            ES: {
                title: 'Chatbot Validation – Educational Flow Testing',
                description: 'Validación manual de flujos educativos en chatbot mediante pruebas funcionales exhaustivas. Este proyecto incluye la creación de casos de prueba, ejecución de pruebas manuales, validación de respuestas del chatbot, verificación de flujos conversacionales y documentación completa con evidencias (screenshots, logs y reportes detallados). Enfoque en calidad de experiencia conversacional y cobertura de escenarios educativos.',
                content: 'Proyecto de validación de chatbot enfocado en flujos educativos. Se realizaron pruebas manuales exhaustivas para validar la funcionalidad, usabilidad y precisión de las respuestas del chatbot en diferentes escenarios educativos. El proyecto incluye documentación completa con evidencias visuales, casos de prueba detallados y reportes de hallazgos.',
                client: 'UMM',
                projectLink: {
                    title: 'Ver Documentación',
                    url: 'https://github.com/jennyloz89/qa-chatbot-validation'
                },
            },
            EN: {
                title: 'Chatbot Validation – Educational Flow Testing',
                description: 'Manual validation of educational flows in chatbot through comprehensive functional testing. This project includes test case creation, manual test execution, chatbot response validation, conversational flow verification, and complete documentation with evidence (screenshots, logs, and detailed reports). Focus on conversational experience quality and educational scenario coverage.',
                content: 'Chatbot validation project focused on educational flows. Comprehensive manual testing was performed to validate functionality, usability, and accuracy of chatbot responses across different educational scenarios. The project includes complete documentation with visual evidence, detailed test cases, and findings reports.',
                client: 'UMM',
                projectLink: {
                    title: 'View Documentation',
                    url: 'https://github.com/jennyloz89/qa-chatbot-validation'
                },
            },
            services: [
                { name: 'Manual Testing' },
                { name: 'Chatbot QA' },
                { name: 'Documentation' },
            ],
            categories: [
                { name: 'Manual Testing' },
                { name: 'Chatbot Validation' },
                { name: 'Educational Technology' }
            ],
        },
        {
            slug: 'api-rest-postman-newman',
            icon: 'bi bi-code-slash',
            ES: {
                title: 'API REST Testing – Postman & Newman',
                description: 'Automatización de pruebas de APIs REST utilizando Postman para diseño y ejecución de colecciones de pruebas, integración con Newman para ejecución en línea de comandos (CLI) y configuración de pipelines CI/CD. Este proyecto incluye validación de endpoints, verificación de respuestas HTTP, manejo de autenticación, pruebas de carga y generación de reportes automatizados para integración continua.',
                content: 'Proyecto de automatización de pruebas de APIs REST que demuestra la integración de Postman con Newman para ejecutar pruebas automatizadas en entornos de CI/CD. Incluye colecciones de Postman bien estructuradas, scripts de pre-request y test, configuración de variables de entorno, ejecución mediante CLI y generación de reportes HTML/JSON para análisis de resultados.',
                client: 'Personal',
                projectLink: {
                    title: 'Repositorio GitHub',
                    url: 'https://github.com/jennyloz89/qa-api-postman'
                },
            },
            EN: {
                title: 'REST API Testing – Postman & Newman',
                description: 'REST API test automation using Postman for test collection design and execution, integration with Newman for command-line interface (CLI) execution, and CI/CD pipeline configuration. This project includes endpoint validation, HTTP response verification, authentication handling, load testing, and automated report generation for continuous integration.',
                content: 'REST API test automation project demonstrating Postman integration with Newman for running automated tests in CI/CD environments. Includes well-structured Postman collections, pre-request and test scripts, environment variable configuration, CLI execution, and HTML/JSON report generation for results analysis.',
                client: 'Personal',
                projectLink: {
                    title: 'GitHub Repository',
                    url: 'https://github.com/jennyloz89/qa-api-postman'
                },
            },
            services: [
                { name: 'Postman' },
                { name: 'Newman' },
                { name: 'CI/CD' },
            ],
            categories: [
                { name: 'API Testing' },
                { name: 'Test Automation' },
                { name: 'CI/CD' }
            ],
        },
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
            documentation: 'Documentación',
            viewDocumentation: 'Ver Documentación',
        },
        EN: {
            prev: 'Prev',
            next: 'Next',
            services: 'Services',
            client: 'Client',
            githubRepository: 'GitHub Repository',
            projectLink: 'Project link',
            viewOnGitHub: 'View on GitHub',
            documentation: 'Documentation',
            viewDocumentation: 'View Documentation',
        },
    }
};