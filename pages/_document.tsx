// @ts-nocheck
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  useEffect(() => {
    window.OneSignal = window.OneSignal || [];
    OneSignal.push(function () {
      OneSignal.init({
        appId: process.env.NEXT_PUBLIC_ONESIGNAL_ID,
        notifyButton: {
          enable: true,
        },

        allowLocalhostAsSecureOrigin: true,
      });
    });

    return () => {
      window.OneSignal = undefined;
    };
  }, []);

  return (
    <Html>
      <Head>
        <title>Secret Code</title>
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