import { Html, Head, Main, NextScript } from 'next/document'

// eslint-disable-next-line react/function-component-definition
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <script
        src="https://api-maps.yandex.ru/2.1/?apikey=0f05e97d-4eeb-476c-8d2d-8d653d4eaa8c&lang=ru_RU"
        type="text/javascript"
      ></script>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
