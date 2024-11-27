import { Header } from '@/shared/site/components/header'
import { Footer } from '@/shared/site/components/footer'
import { CTA } from '../components/cta'

interface SiteLayoutProps {
  children: React.ReactNode
}

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col dark">
      <Header />
      <main className="flex-1 flex flex-col mb-12">{children}</main>
      <CTA/>
      <Footer />
    </div>
  )
} 