import '@/styles/_globals.scss'
import { AppProps } from 'next/app'

import { Layout } from '@/components/ui/layout/layout'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App
