import PageLayout from '@/components/PageLayout'

import '@/styles/globals.css'

import '@/styles/prism.css'


export default function App({ Component, pageProps }) {
  return <PageLayout>
    <Component {...pageProps} />
  </PageLayout>
}
