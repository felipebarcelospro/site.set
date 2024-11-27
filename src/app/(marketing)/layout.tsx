import { Header } from '@/shared/site/components/header'
import { Footer } from '@/shared/site/components/footer'
import { CTA } from '@/shared/site/components/cta'
import { Suspense } from 'react'

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative flex min-h-screen flex-col dark">
      <Header />
      <main className="flex-1 flex flex-col mb-12">
        <Suspense>
          {children}
        </Suspense>
      </main>
      <CTA/>
      <Footer />
    </div>
  )
} 