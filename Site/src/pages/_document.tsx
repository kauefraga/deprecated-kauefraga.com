import React from 'react'
import Document, { DocumentProps, Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document<DocumentProps> {
  render(): JSX.Element {
    return (
      <Html lang="pt-br">
        <Head>
          <link rel="icon" type="image/png" href="https://github.com/kauefraga.png" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;600;700" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
