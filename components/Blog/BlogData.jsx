import PostImage from '@/public/images/blog-img.jpg'
import MainImage from '@/public/images/blog-img-wide.jpg';
import Image from '@/public/images/blog-img.jpg';

export const blogData = {
    mainData: {
        title: "Journal",
        title2: "Blog",
        title2Span: "Posts",
        description: "Este espacio es mi bitácora profesional: escribo sobre lo que aprendo, lo que cuestiono y lo que me inspira en el mundo del QA. Desde flujos conversacionales hasta pruebas automatizadas, todo con mirada crítica y humana."
    },
    posts: [
        {
            title: 'Validar chatbots con empatía: más allá de los flujos',
            slug: 'validar-chatbots-con-empatia-mas-alla-de-los-flujos',
            description: 'Una reflexión sobre cómo validar chatbots va más allá de la lógica técnica, incorporando empatía, lenguaje humano y experiencia de usuario. Basado en tu trabajo con el chatbot educativo de UMM.',
            keywords: 'QA, Chatbots, Validación, Automatización, IA, QA Conversacional',
            category: 'QA Conversacional',
            date: '27 Nov 2025',
            postedBy: 'Jennifer Lozano',
            content: `
                <p>¿Qué significa realmente validar un chatbot? Muchos piensan en flujos, intents y respuestas correctas. Pero cuando el usuario está del otro lado, lo que importa es cómo se siente. En mi experiencia como QA, validar un chatbot no es solo verificar que funcione: es asegurar que comunique con empatía, claridad y propósito.</p>

                <h3>🔍 Más que pruebas funcionales</h3>
                <p>En proyectos como el chatbot educativo de la Universidad Metropolitana de Monterrey (UMM), mi rol fue diseñar pruebas que no solo detectaran errores, sino que evaluaran la experiencia conversacional. ¿Responde con cortesía? ¿Reconoce errores del usuario? ¿Guía sin frustrar?</p>

                <h3>🧪 ¿Cómo se valida la empatía?</h3>
                <ul>
                    <li>Simulando escenarios reales: usuarios confundidos, respuestas inesperadas, cambios de tema.</li>
                    <li>Evaluando tono y lenguaje: ¿el bot suena humano, respetuoso, útil?</li>
                    <li>Midiendo la tolerancia al error: ¿cómo responde ante frases incompletas o mal escritas?</li>
                </ul>

                <h3>🛠️ Herramientas y enfoque</h3>
                <p>Utilizo matrices de validación que combinan lógica de flujo con criterios de UX. Documentar hallazgos no es solo reportar bugs, sino proponer mejoras que humanicen la interacción. Trabajo con equipos de diseño, desarrollo y producto para alinear calidad técnica con experiencia emocional.</p>

                <h3>✨ QA con propósito</h3>
                <p>Validar con empatía es reconocer que detrás de cada clic hay una persona. Como QA, tengo la responsabilidad de cuidar esa conexión. Porque un chatbot no solo responde: representa a una marca, una institución, una intención.</p>

                <p><em>¿Has validado un chatbot con empatía? Cuéntame tu experiencia.</em></p>
            `,
            mainImage: PostImage,
            mainImageWide: MainImage,
            images: [
                { image: Image },
                { image: Image },
            ],
            tags: [
                { name: 'QA' },
                { name: 'Chatbots' },
                { name: 'Validación' },
                { name: 'Automatización' },
                { name: 'IA' }
            ]
        },
        {
            title: 'Blog Post Title',
            slug: 'blog-post-title-1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
            keywords: 'key1, key2, key3',
            category: 'Category',
            date: 'Oct 8',
            postedBy: 'Admin',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            mainImage: PostImage,
            mainImageWide: MainImage,
            images: [
                { image: Image },
                { image: Image },
            ],
            tags: [
                { name: 'Tag 1' },
                { name: 'Tag 2' },
                { name: 'Tag 3' }
            ]
        },
        {
            title: 'Blog Post Title',
            slug: 'blog-post-title-2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
            keywords: 'key1, key2, key3',
            category: 'Category',
            date: 'Oct 8',
            postedBy: 'Admin',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            mainImage: PostImage,
            mainImageWide: MainImage,
            images: [
                { image: Image },
                { image: Image },
            ],
            tags: [
                { name: 'Tag 1' },
                { name: 'Tag 2' },
                { name: 'Tag 3' }
            ]
        },
    ],

};