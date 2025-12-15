import React from 'react'
import { Cursor, Footer, Header, LoadingScreen, ScrollToTop } from '@/components'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '@/styles/theme.scss'
import '@/styles/all.min.css'
import Head from 'next/head'
import { mainData } from '@/lib/data'
import { LanguageProvider } from '@/contexts/LanguageContext'


export default function App({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <LanguageProvider>
      {loading ? (
        <React.Fragment>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="shortcut icon" href={mainData.ES.favicon.src} />
          </Head>
          {/* Cursor */}
          <Cursor />

          {/* Header */}
          <Header />

          <Component {...pageProps} />

          {/* Footer */}
          <Footer />

          {/* Scroll To Top */}
          <ScrollToTop />
        </React.Fragment>
      ) : (
        <LoadingScreen />
      )}
    </LanguageProvider>
  )
}
