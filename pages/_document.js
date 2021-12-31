import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <link rel='shortcut icon' type='image/x-icon' href='/img/favicon.ico' />
          <meta name="author" content="khrakib.com" />
          <meta name="keywords" content="software engineer, kh rakib, rakib, developer, dev rakib, kausar, engineer rakib" />
          <meta name="description" content="My work timings are pretty flexible which makes me overlap my work hours with all time zones for communication and status sharing!" />
        </Head>
        <body className='antialiased bg-white dark:bg-gray-700'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument