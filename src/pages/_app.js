import Layout from '../components/Layout'
import Link from 'next/link'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { linkResolver, repositoryName } from '../prismicio'


import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <PrismicProvider
    linkResolver={linkResolver}
    internalLinkComponent={({ href, ...props }) => (
      <Link href={href}>
        <a {...props} />
      </Link>
    )}
  >
    <PrismicPreview repositoryName={repositoryName}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </PrismicPreview>
    </PrismicProvider>
      )
}
