import React from 'react'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

import { SiteLayout } from '@/shared/site/layouts/site-layout'

import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SiteLayout>      
      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights />
    </SiteLayout>
  )
} 