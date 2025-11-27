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
            title: 'De QA Analyst a QA Lead: Lo que nadie te cuenta',
            slug: 'de-qa-analyst-a-qa-lead-lo-que-nadie-te-cuenta',
            description: 'Una mirada realista a los desafíos y aprendizajes que implica pasar de ejecutar pruebas a liderar equipos QA. Basado en tu experiencia en Vector Casa de Bolsa y otros proyectos ágiles.',
            keywords: 'QA Lead, Gestión Ágil, Automatización, Equipos, Jenkins, Documentación, Liderazgo QA',
            category: 'Liderazgo QA',
            date: '27 May 2025',
            postedBy: 'Jennifer Lozano',
            content: `
                <p>Pasar de QA Analyst a QA Lead suena como un ascenso natural. Pero detrás del título hay decisiones, dudas y mucha adaptación. Cuando asumí el liderazgo de QA en Vector Casa de Bolsa, no solo cambiaron mis responsabilidades: cambió mi forma de pensar. Ya no se trataba solo de ejecutar pruebas, sino de diseñar estrategias, coordinar entregas y cuidar la calidad desde una visión más amplia.</p>

                <h3>🔄 Lo que cambia (y no te dicen)</h3>
                <ul>
                    <li>De ejecutora a facilitadora: ahora tu trabajo es que otros puedan hacer el suyo con calidad.</li>
                    <li>Menos hands-on, más visión: debes confiar en tu equipo, priorizar y tomar decisiones rápidas.</li>
                    <li>La documentación importa más que nunca: lo que defines debe ser claro, replicable y defendible.</li>
                    <li>La empatía se vuelve estratégica: entender al equipo, al cliente y al usuario es parte del QA.</li>
                </ul>

                <h3>🧩 Retos reales</h3>
                <ul>
                    <li>Gestionar entregables sin perder la calidad.</li>
                    <li>Alinear expectativas entre producto, desarrollo y QA.</li>
                    <li>Defender tiempos de prueba en sprints ajustados.</li>
                    <li>Formar equipo sin perder el foco técnico.</li>
                </ul>

                <h3>🛠️ Lo que me ayudó</h3>
                <ul>
                    <li>Matrices de validación claras y compartidas.</li>
                    <li>Automatización con Jenkins para ganar tiempo.</li>
                    <li>Comunicación constante con desarrollo y producto.</li>
                    <li>Documentación funcional que traduce entre áreas.</li>
                </ul>

                <h3>✨ Lo que me llevo</h3>
                <p>Ser QA Lead no es solo un rol técnico: es un rol humano. Requiere estructura, pero también flexibilidad. Liderar es aprender a soltar, a confiar y a construir calidad como cultura, no solo como resultado.</p>

                <p><em>¿Has vivido esta transición? Comparte tu experiencia como QA Lead.</em></p>
            `,
            mainImage: PostImage,
            mainImageWide: MainImage,
            images: [
                { image: Image },
                { image: Image },
            ],
            tags: [
                { name: 'QA Lead' },
                { name: 'Gestión Ágil' },
                { name: 'Automatización' },
                { name: 'Equipos' },
                { name: 'Jenkins' },
                { name: 'Documentación' }
            ]
        },
        {
            title: 'Automatización sin perder el control: mi viaje con Cypress y Appium',
            slug: 'automatizacion-sin-perder-el-control-mi-viaje-con-cypress-y-appium',
            description: 'Un recorrido personal y profesional sobre cómo aprendí a usar Cypress y Appium para automatizar pruebas, manteniendo siempre la claridad, la documentación y el control del proceso.',
            keywords: 'QA, Cypress, Appium, Automatización, Jenkins, WebdriverIO, Pruebas Web, Pruebas Móviles, Automatización QA',
            category: 'Automatización QA',
            date: '16 May 2025',
            postedBy: 'Jennifer Lozano',
            content: `
                <p>Automatizar pruebas parece la solución mágica para ganar tiempo y eficiencia. Pero la realidad es que, si no se hace con orden, puede convertirse en un caos difícil de mantener. En mi experiencia, el verdadero reto no fue aprender las herramientas, sino integrarlas a procesos claros y sostenibles.</p>

                <h3>🚀 Mi inicio con Cypress</h3>
                <p>Cypress me permitió automatizar flujos web de manera rápida y visual. Lo que más valoré fue:</p>
                <ul>
                    <li>La facilidad de configurar pruebas de login y navegación.</li>
                    <li>La integración con pipelines en Jenkins para validaciones continuas.</li>
                    <li>La posibilidad de documentar cada paso con capturas y reportes claros.</li>
                </ul>

                <h3>📱 Mi experiencia con Appium</h3>
                <p>Appium abrió la puerta a pruebas móviles en Android e iOS. Aprendí que:</p>
                <ul>
                    <li>La configuración inicial puede ser compleja, pero vale la pena.</li>
                    <li>Validar interacciones móviles requiere pensar en gestos, tiempos y entornos reales.</li>
                    <li>La combinación con WebdriverIO me dio flexibilidad para distintos proyectos.</li>
                </ul>

                <h3>🧩 El equilibrio: automatizar sin perder control</h3>
                <p>Automatizar no significa dejar de lado lo manual. Para mí, el control está en:</p>
                <ul>
                    <li>Documentar siempre: cada script debe ser entendible por cualquier miembro del equipo.</li>
                    <li>Combinar pruebas: automatizadas para lo repetitivo, manuales para lo exploratorio.</li>
                    <li>Revisar resultados con mirada crítica: no confiar ciegamente en el "verde" del pipeline.</li>
                </ul>

                <h3>✨ Lo que aprendí</h3>
                <p>La automatización es una herramienta, no un fin. Cypress y Appium me enseñaron que la calidad no depende solo de la velocidad, sino de la claridad con la que gestionamos los procesos. Automatizar con control es asegurar que el sistema sea confiable hoy… y sostenible mañana.</p>

                <p><em>¿Qué herramienta de automatización te ha dado más control? Comparte tu experiencia.</em></p>
            `,
            mainImage: PostImage,
            mainImageWide: MainImage,
            images: [
                { image: Image },
                { image: Image },
            ],
            tags: [
                { name: 'QA' },
                { name: 'Cypress' },
                { name: 'Appium' },
                { name: 'Automatización' },
                { name: 'Jenkins' },
                { name: 'WebdriverIO' },
                { name: 'Pruebas Web' },
                { name: 'Pruebas Móviles' }
            ]
        },
    ],

};