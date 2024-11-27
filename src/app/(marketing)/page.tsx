import type { Metadata } from 'next'

import { Hero } from '@/shared/site/components/hero'
import { Features } from '@/shared/site/components/features'
import { Benefits } from '@/shared/site/components/benefits'
import { Testimonials } from '@/shared/site/components/testimonials'

export const metadata: Metadata = {
  title: 'Site.Set - Crie sua loja de afiliados',
  description: 'Crie sua loja de afiliados em menos de 5 minutos. Personalize, venda e gerencie seus produtos em um único lugar.',
  openGraph: {
    title: 'Site.Set - Crie sua loja de afiliados',
    description: 'Crie sua loja de afiliados em menos de 5 minutos. Personalize, venda e gerencie seus produtos em um único lugar.',
    url: 'https://site.set.vercel.app',
    type: 'website',
  },
}

export default function Home() {
  return (
    <article className="flex flex-col">
      <Hero />
      <Features />
      <Benefits />
      <Testimonials />
    </article>
  )
} 