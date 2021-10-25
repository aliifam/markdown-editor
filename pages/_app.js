import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return( 
    <>
      <Head>
        <title>Free Online Markdown Editor</title>
        <meta name="description" content="free online WYSIWYG markdown editor build with NextJS" />
        meta
      </Head>
    
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
