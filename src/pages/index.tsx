import { GetStaticProps } from 'next'
import Head from 'next/head'

import { Hero } from '@/shared/site/components/hero'
import { Features } from '@/shared/site/components/features'
import { Benefits } from '@/shared/site/components/benefits'
import { Testimonials } from '@/shared/site/components/testimonials'
import { CTA } from '@/shared/site/components/cta'

export default function Home() {
  return (
    <>
      <Head>
        <title>Site.Set - Crie sua loja de afiliados</title>
        <meta
          name="description"
          content="Crie sua loja de afiliados em menos de 5 minutos. Personalize, venda e gerencie seus produtos em um único lugar."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://site.set" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Site.Set - Crie sua loja de afiliados" />
        <meta property="og:description" content="Crie sua loja de afiliados em menos de 5 minutos. Personalize, venda e gerencie seus produtos em um único lugar." />
        <meta property="og:url" content="https://site.set" />
      </Head>

      <article className="flex flex-col">
        <Hero />
        <Features />
        <Benefits />
        <Testimonials />
      </article>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 60 * 60 * 24, // 24 hours
  }
} 