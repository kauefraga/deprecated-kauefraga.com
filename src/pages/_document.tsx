import React from 'react'
import Document, { DocumentProps, Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document<DocumentProps> {
  render(): JSX.Element {
    return (
      <Html lang="pt-br">
        <Head>
          <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
          <link rel="shortcut icon" type="image/png" href="https://github.com/kauefraga.png" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;600;700&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
