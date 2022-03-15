// @ts-nocheck
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <title>Secret Code</title>
        <meta property="og:image" content="/og.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Secret Code" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Secret Code" />
        <meta property="og:description" content="Secret Code" />
        <meta property="og:image" content="/og.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="secret-code-omega.vercel.app" />
        <meta property="twitter:url" content="https://secret-code-omega.vercel.app/" />
        <meta name="twitter:title" content="Secret Code" />
        <meta name="twitter:description" content="Secret Code" />
        <meta name="twitter:image" content="/og.jpg" />
        <meta name="description" content="Secret Code" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito&display=swap"
          rel="stylesheet"
        />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3535688390656362" crossOrigin="anonymous"></script>
        <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}