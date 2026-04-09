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
    groups: [
        { id: 'api', ES: { title: 'Proyectos de API' }, EN: { title: 'API Projects' } },
        { id: 'e2e', ES: { title: 'Automatización E2E' }, EN: { title: 'E2E Automation' } },
        { id: 'manual', ES: { title: 'Pruebas manuales y validación' }, EN: { title: 'Manual Testing & Validation' } },
        { id: 'web', ES: { title: 'Desarrollo web' }, EN: { title: 'Web Development' } },
    ],
    projects: [
        {
            slug: 'cypress-login-saucedemo',
            group: 'e2e',
            githubUrl: 'https://github.com/jennyloz89/cypress-login-saucedemo',
            ciWorkflow: 'cypress.yml',
            icon: 'bi bi-shield-check',
            ES: {
                title: 'SauceDemo — Cypress E2E',
                description: 'Automatización de login en SauceDemo usando Cypress y buenas prácticas de QA. Incluye reportes HTML con Mochawesome, pipeline CI/CD con GitHub Actions y publicación de reportes en GitHub Pages. Valida el flujo de autenticación con credenciales válidas e inválidas, navegación al dashboard, verificación de elementos visibles y uso de fixtures. Page Object Model (POM), comandos personalizados reutilizables y trazabilidad con screenshots.',
                content: 'Proyecto E2E con Cypress sobre SauceDemo: reportes HTML generados con Mochawesome, ejecución en CI con GitHub Actions y reportes publicados en GitHub Pages.',
                client: 'Personal',
                projectLink: {
                    title: 'Repositorio GitHub',
                    url: 'https://github.com/jennyloz89/cypress-login-saucedemo'
                },
                reportLink: {
                    title: 'Ver reporte de pruebas (Mochawesome)',
                    url: 'https://jennyloz89.github.io/cypress-login-saucedemo/'
                },
            },
            EN: {
                title: 'SauceDemo — Cypress E2E',
                description: 'Login automation in SauceDemo using Cypress and QA best practices. Includes HTML reports with Mochawesome, CI/CD pipeline with GitHub Actions, and reports published on GitHub Pages. Validates authentication flow with valid and invalid credentials, dashboard navigation, visible elements verification, and fixture usage. Page Object Model (POM), reusable custom commands, and screenshot traceability.',
                content: 'E2E project with Cypress on SauceDemo: HTML reports with Mochawesome, CI execution with GitHub Actions, and reports published on GitHub Pages.',
                client: 'Personal',
                projectLink: {
                    title: 'GitHub Repository',
                    url: 'https://github.com/jennyloz89/cypress-login-saucedemo'
                },
                reportLink: {
                    title: 'View test report (Mochawesome)',
                    url: 'https://jennyloz89.github.io/cypress-login-saucedemo/'
                },
            },
            services: [
                { name: 'JavaScript' },
                { name: 'Cypress' },
                { name: 'Mochawesome' },
                { name: 'GitHub Actions' },
            ],
            categories: [
                { name: 'E2E Testing' },
                { name: 'Test Automation' },
                { name: 'CI/CD' }
            ],
            metrics: {
                ES: [
                    { value: '31', label: 'Tests' },
                    { value: '2', label: 'Spec' },
                    { value: '0', label: 'Fallos' },
                ],
                EN: [
                    { value: '31', label: 'Tests' },
                    { value: '2', label: 'Spec' },
                    { value: '0', label: 'Failures' },
                ],
            },
        },
        {
            slug: 'saucedemo-playwright',
            group: 'e2e',
            githubUrl: 'https://github.com/jennyloz89/saucedemo-playwright',
            ciWorkflow: 'e2e-tests.yml',
            hubReportUrl: 'https://jennyloz89.github.io/saucedemo-playwright/',
            icon: 'bi bi-play-circle',
            ES: {
                title: 'SauceDemo — Playwright TypeScript',
                description: 'Suite E2E con Playwright y TypeScript sobre SauceDemo: casos de login, inventario (inventory) y checkout; suites de regresión y smoke con etiquetas @regression y @smoke. Page Object Model (POM), fixtures, casos con @problem-user y @known-bug para bugs documentados. CI/CD con GitHub Actions y reportes HTML en GitHub Pages (functional + smoke y regresión).',
                content: 'Automatización E2E con Playwright: flujos críticos (smoke), cobertura ampliada (regression), POM en TypeScript y pipeline en GitHub Actions (workflow e2e-tests). Reportes HTML publicados en GitHub Pages.',
                client: 'Personal',
                projectLink: {
                    title: 'Repositorio GitHub',
                    url: 'https://github.com/jennyloz89/saucedemo-playwright'
                },
                reportLink: {
                    title: 'Ver reporte Functional + Smoke',
                    url: 'https://jennyloz89.github.io/saucedemo-playwright/functional/index.html'
                },
                loadReportLink: {
                    title: 'Ver reporte de regresión',
                    url: 'https://jennyloz89.github.io/saucedemo-playwright/regression/index.html',
                    sectionHeading: 'Regresión',
                },
            },
            EN: {
                title: 'SauceDemo — Playwright TypeScript',
                description: 'E2E suite with Playwright and TypeScript on SauceDemo: login, inventory, and checkout test cases; regression and smoke suites tagged @regression and @smoke. Page Object Model (POM), fixtures, @problem-user and @known-bug cases for documented defects. CI/CD with GitHub Actions and HTML reports on GitHub Pages (functional + smoke and regression).',
                content: 'Playwright E2E automation: critical flows (smoke), broader coverage (regression), TypeScript POM, and GitHub Actions pipeline (e2e-tests workflow). HTML reports published on GitHub Pages.',
                client: 'Personal',
                projectLink: {
                    title: 'GitHub Repository',
                    url: 'https://github.com/jennyloz89/saucedemo-playwright'
                },
                reportLink: {
                    title: 'View Functional + Smoke report',
                    url: 'https://jennyloz89.github.io/saucedemo-playwright/functional/index.html'
                },
                loadReportLink: {
                    title: 'View regression report',
                    url: 'https://jennyloz89.github.io/saucedemo-playwright/regression/index.html',
                    sectionHeading: 'Regression',
                },
            },
            services: [
                { name: 'TypeScript' },
                { name: 'Playwright' },
                { name: 'Page Object Model' },
                { name: 'GitHub Actions' },
            ],
            categories: [
                { name: 'E2E Testing' },
                { name: 'Test Automation' },
                { name: 'CI/CD' },
                { name: 'SauceDemo' },
            ],
            metrics: {
                ES: [
                    { value: '26', label: 'Tests' },
                    { value: '2', label: 'Suites' },
                    { value: '0', label: 'Fallos' },
                ],
                EN: [
                    { value: '26', label: 'Tests' },
                    { value: '2', label: 'Suites' },
                    { value: '0', label: 'Failures' },
                ],
            },
        },
        {
            slug: 'mi-portafolio',
            group: 'web',
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
        {
            slug: 'pokeapi-qa-portfolio',
            group: 'api',
            githubUrl: 'https://github.com/jennyloz89/pokeapi-qa-portfolio',
            icon: 'bi bi-bug',
            ES: {
                title: 'PokeAPI QA Portfolio',
                description: 'Suite de pruebas de QA sobre la API pública de Pokémon (PokeAPI) con Postman y Newman. Incluye diseño de tests, validación de contrato con JSON Schema (tv4), reportes HTML con newman-reporter-htmlextra, pipeline CI/CD con GitHub Actions y reportes publicados en GitHub Pages.',
                content: 'Proyecto de QA sobre PokeAPI: pruebas funcionales y de regresión, validación de endpoints y de estructura de respuestas. Herramientas: Postman (diseño y scripts), Newman (ejecución CLI), newman-reporter-htmlextra (reportes HTML), GitHub Actions (CI/CD en cada push), GitHub Pages (reportes públicos), JSON Schema tv4 (validación de contrato). Reporte disponible en GitHub Pages.',
                client: 'Personal',
                projectLink: {
                    title: 'Repositorio GitHub',
                    url: 'https://github.com/jennyloz89/pokeapi-qa-portfolio'
                },
                reportLink: {
                    title: 'Ver reporte de pruebas',
                    url: 'https://jennyloz89.github.io/pokeapi-qa-portfolio/reports/report.html'
                },
                loadReportLink: {
                    title: 'Ver reporte de pruebas de carga (k6)',
                    url: 'https://jennyloz89.github.io/pokeapi-qa-portfolio/reports/k6-report.html'
                },
            },
            EN: {
                title: 'PokeAPI QA Portfolio',
                description: 'QA test suite on the public Pokémon API (PokeAPI) with Postman and Newman. Includes test design, contract validation with JSON Schema (tv4), HTML reports with newman-reporter-htmlextra, CI/CD with GitHub Actions, and reports on GitHub Pages.',
                content: 'QA project on PokeAPI: functional and regression tests, endpoint and response structure validation. Tools: Postman (design and scripts), Newman (CLI runner), newman-reporter-htmlextra (HTML reports), GitHub Actions (CI/CD on every push), GitHub Pages (public reports), JSON Schema tv4 (contract validation). Report available on GitHub Pages.',
                client: 'Personal',
                projectLink: {
                    title: 'GitHub Repository',
                    url: 'https://github.com/jennyloz89/pokeapi-qa-portfolio'
                },
                reportLink: {
                    title: 'View test report',
                    url: 'https://jennyloz89.github.io/pokeapi-qa-portfolio/reports/report.html'
                },
                loadReportLink: {
                    title: 'View load test report (k6)',
                    url: 'https://jennyloz89.github.io/pokeapi-qa-portfolio/reports/k6-report.html'
                },
            },
            services: [
                { name: 'Postman' },
                { name: 'Newman' },
                { name: 'newman-reporter-htmlextra' },
                { name: 'GitHub Actions' },
                { name: 'GitHub Pages' },
                { name: 'JSON Schema (tv4)' },
            ],
            categories: [
                { name: 'API Testing' },
                { name: 'REST API' },
                { name: 'CI/CD' },
                { name: 'Quality Assurance' }
            ],
            metrics: {
                ES: [
                    { value: '14', label: 'Requests' },
                    { value: '43', label: 'Assertions' },
                    { value: '0', label: 'Fallos' },
                ],
                EN: [
                    { value: '14', label: 'Requests' },
                    { value: '43', label: 'Assertions' },
                    { value: '0', label: 'Failures' },
                ],
            },
        },
        {
            slug: 'restfulbooker-pytest',
            group: 'api',
            githubUrl: 'https://github.com/jennyloz89/restfulbooker-pytest',
            icon: 'bi bi-filetype-py',
            ES: {
                title: 'Restful-Booker — API Testing (pytest)',
                description: 'Suite de pruebas de API sobre Restful-Booker con Python, pytest y requests: autenticación, operaciones CRUD sobre bookings, validación de esquemas JSON y fixtures reutilizables. Incluye pipeline CI/CD con GitHub Actions y generación de reportes HTML.',
                content: 'Proyecto de API testing con pytest: cobertura de auth, CRUD, validación de contrato con esquemas, integración continua en GitHub Actions y reportes HTML.',
                client: 'Personal',
                projectLink: {
                    title: 'Repositorio GitHub',
                    url: 'https://github.com/jennyloz89/restfulbooker-pytest'
                },
                reportLink: {
                    title: 'Ver reporte de pruebas (pytest-html)',
                    url: 'https://jennyloz89.github.io/restfulbooker-pytest/?sort=result'
                },
            },
            EN: {
                title: 'Restful-Booker — API Testing (pytest)',
                description: 'API testing suite for Restful-Booker using Python, pytest, and requests: authentication, CRUD operations on bookings, JSON schema validation, and reusable fixtures. Includes CI/CD with GitHub Actions and HTML report generation.',
                content: 'pytest-based API testing project: auth and CRUD coverage, schema validation, continuous integration with GitHub Actions, and HTML reports.',
                client: 'Personal',
                projectLink: {
                    title: 'GitHub Repository',
                    url: 'https://github.com/jennyloz89/restfulbooker-pytest'
                },
                reportLink: {
                    title: 'View test report (pytest-html)',
                    url: 'https://jennyloz89.github.io/restfulbooker-pytest/?sort=result'
                },
            },
            services: [
                { name: 'Python' },
                { name: 'pytest' },
                { name: 'pytest-html' },
                { name: 'requests' },
                { name: 'GitHub Actions' },
                { name: 'Schema validation' },
            ],
            categories: [
                { name: 'API Testing' },
                { name: 'REST API' },
                { name: 'Python' },
                { name: 'CI/CD' },
            ],
            metrics: {
                ES: [
                    { value: '16', label: 'Tests' },
                    { value: '0', label: 'Fallos' },
                    { value: '10s', label: 'Duración' },
                ],
                EN: [
                    { value: '16', label: 'Tests' },
                    { value: '0', label: 'Failures' },
                    { value: '10s', label: 'Duration' },
                ],
            },
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
            loadReport: 'Pruebas de carga',
            reportIndex: 'Índice de reportes',
            reportIndexLink: 'Abrir en GitHub Pages',
            metrics: 'Métricas',
            ciStatus: 'CI',
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
            loadReport: 'Load testing',
            reportIndex: 'Report index',
            reportIndexLink: 'Open on GitHub Pages',
            metrics: 'Metrics',
            ciStatus: 'CI',
        },
    }
};
