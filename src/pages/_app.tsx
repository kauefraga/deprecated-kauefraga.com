import React from 'react'
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../styles/theme'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <meta name="description" content="Apenas um site pessoal. Autor: Kauê" />
        <title>Kauê Fraga</title>
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
