import PortfolioImg from '@/public/images/portfolio-img.png';
import CypressImage from '@/public/images/cypress-saucedemo.png';
import ChatbotImage from '@/public/images/chatbot-testing.png';
import ApiImage from '@/public/images/api-testing.png';

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
            title: 'Project Title Here',
            slug: 'first',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
            services: [
                { name: 'List item' },
                { name: 'List item' },
            ],
            client: 'FlaTheme',
            projectLink: {
                title: 'www.flatheme.net',
                url: 'https://www.flatheme.net'
            },
            content: '',
            mainImage: ChatbotImage,
            mainImageWide: PortfolioImg,
            images: [
                { image: PortfolioImg },
                { image: PortfolioImg },
            ],
            categories: [
                { name: 'Category' },
                { name: 'Category' },
                { name: 'Category' }
            ],
        },
        {
            title: 'Project Title Here',
            slug: 'second',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
            services: [
                { name: 'List item' },
                { name: 'List item' },
            ],
            client: 'FlaTheme',
            projectLink: {
                title: 'www.flatheme.net',
                url: 'https://www.flatheme.net'
            },
            content: '',
            mainImage: ApiImage,
            mainImageWide: PortfolioImg,
            images: [
                { image: PortfolioImg },
                { image: PortfolioImg },
            ],
            categories: [
                { name: 'Category' },
                { name: 'Category' },
                { name: 'Category' }
            ],
        },
        {
            title: 'Cypress E2E – SauceDemo',
            slug: 'third',
            githubUrl: 'https://github.com/jennyloz89/cypress-login-saucedemo',
            description: 'Automatización de login en SauceDemo usando Cypress y buenas prácticas de QA. Este proyecto demuestra cómo validar el flujo de autenticación con credenciales válidas e inválidas, navegación al dashboard, verificación de elementos visibles y uso de fixtures para datos de prueba. Incluye Page Object Model (POM), comandos personalizados reutilizables y reportes con screenshots para trazabilidad.',
            services: [
                { name: 'JavaScript' },
                { name: 'Cypress' },
            ],
            client: 'Personal',
            projectLink: {
                title: 'www.flatheme.net',
                url: 'https://www.flatheme.net'
            },
            content: '',
            mainImage: CypressImage,
            mainImageWide: PortfolioImg,
            images: [
                { image: PortfolioImg },
                { image: PortfolioImg },
            ],
            categories: [
                { name: 'Category' },
                { name: 'Category' },
                { name: 'Category' }
            ],
        },
        {
            title: 'Mi Portafolio QA Analyst',
            slug: 'mi-portafolio',
            githubUrl: 'https://github.com/jennyloz89/mi-portafolio',
            description: 'Portafolio personal desarrollado con Next.js que muestra mi experiencia como QA Analyst. Incluye secciones de servicios, proyectos, automatización de pruebas, testing de APIs y metodologías ágiles. Implementa internacionalización (ES/EN), diseño responsive y navegación fluida con efectos visuales modernos.',
            services: [
                { name: 'Next.js' },
                { name: 'React' },
                { name: 'SCSS' },
            ],
            client: 'Personal',
            projectLink: {
                title: 'GitHub Repository',
                url: 'https://github.com/jennyloz89/mi-portafolio'
            },
            content: 'Portafolio personal desarrollado con Next.js que demuestra mis habilidades técnicas y experiencia profesional. El proyecto incluye implementación de internacionalización para soportar español e inglés, diseño responsive optimizado para diferentes dispositivos, y una interfaz moderna con efectos de desvanecimiento y navegación suave.',
            mainImage: PortfolioImg,
            mainImageWide: PortfolioImg,
            images: [
                { image: PortfolioImg },
                { image: PortfolioImg },
            ],
            categories: [
                { name: 'Web Development' },
                { name: 'Next.js' },
                { name: 'Personal Portfolio' }
            ],
        },
    ]
};