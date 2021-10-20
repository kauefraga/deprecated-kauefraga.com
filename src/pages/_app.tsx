import React from 'react'
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../styles/theme'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Kauê Fraga</title>
        <link rel="shortcut icon" href="https://github.com/kauefraga.png" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
