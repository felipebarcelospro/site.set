import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import NextTopLoader from 'nextjs-toploader'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Site.Set - Crie sua loja de afiliados',
    template: '%s | Site.Set'
  },
  description: 'Crie sua loja de afiliados em menos de 5 minutos. Personalize, venda e gerencie seus produtos em um único lugar.',
  metadataBase: new URL('https://site.set.vercel.app.vercel.app'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="dark">
      <body className="min-h-screen bg-background font-sans antialiased">
        <NextTopLoader />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
} 