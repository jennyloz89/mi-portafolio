import PortfolioImg from '@/public/images/portfolio-img.jpg';
import MainImage from '@/public/images/blog-img-wide.jpg';
import CypressImage from '@/public/images/cypress-saucedemo.png';

export const portfolioData = {
    mainData: {
        title: "Projects",
        title2: "Recent",
        title2Span: "Works",
        description: "Aquí comparto algunos de los proyectos donde he aplicado QA funcional, automatización y validación conversacional. Cada uno refleja mi enfoque en calidad, documentación clara y experiencia de usuario."
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
            duration: '121 hours',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            mainImage: PortfolioImg,
            mainImageWide: MainImage,
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
            duration: '121 hours',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            mainImage: PortfolioImg,
            mainImageWide: MainImage,
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
            title: 'Cypress Login – SauceDemo',
            slug: 'third',
            githubUrl: 'https://github.com/jennyloz89/cypress-login-saucedemo',
            description: 'Automatización de login en SauceDemo usando Cypress y buenas prácticas de QA. Este proyecto demuestra cómo validar el flujo de autenticación con credenciales válidas e inválidas, navegación al dashboard, verificación de elementos visibles y uso de fixtures para datos de prueba. Incluye Page Object Model (POM), comandos personalizados reutilizables y reportes con screenshots para trazabilidad.',
            services: [
                { name: 'List item' },
                { name: 'List item' },
            ],
            client: 'FlaTheme',
            projectLink: {
                title: 'www.flatheme.net',
                url: 'https://www.flatheme.net'
            },
            duration: '121 hours',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            mainImage: CypressImage,
            mainImageWide: MainImage,
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
    ]
};