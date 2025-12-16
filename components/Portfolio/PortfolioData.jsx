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
            title: 'Mi Portafolio QA',
            slug: 'mi-portafolio',
            githubUrl: 'https://github.com/jennyloz89/mi-portafolio',
            description: 'Portafolio personal desarrollado con Next.js que muestra mi experiencia como QA. Incluye secciones de servicios, proyectos, automatización de pruebas, testing de APIs y metodologías ágiles. Implementa internacionalización (ES/EN), diseño responsive y navegación fluida con efectos visuales modernos.',
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