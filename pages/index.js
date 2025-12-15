import Head from 'next/head'
import { mainData } from '@/lib/data'
import { About, Awards, Hero, Portfolio, Services } from '@/components'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Home() {
    const { language } = useLanguage();
    const currentMainData = mainData[language];
    
    return (
        <>
            <Head>
                <title>{currentMainData.websiteTitle}</title>
                <meta name="description" content={currentMainData.description} />
                <meta name="keywords" content={currentMainData.keywords} />
            </Head>
            <main>
                {/* Hero section */}
                <Hero />
                {/* About section */}
                <About />
                {/* Services section */}
                <Services />
                {/* Portfolio section */}
                <Portfolio />
                {/* Awards section */}
                <Awards />
                {/* Footer section */}
            </main>
        </>
    )
}
