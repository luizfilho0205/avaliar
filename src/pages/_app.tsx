import React from 'react'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { ThemeProvider } from '../contexts/ThemeContext'
import Layout from '../components/Layout'

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default appWithTranslation(App)
