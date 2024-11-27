import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container flex flex-col md:flex-row justify-between gap-4 md:gap-8 py-8">
        <div className="flex items-center justify-center md:justify-start gap-2">
          <Image src="/logo.svg" alt="Site.Set" width={115} height={32} className="text-white" />
        </div>

        <nav className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
          <Link href="/termos-de-uso" className="hover:text-primary">Termos de Uso</Link>
          <Link href="/politica-de-privacidade" className="hover:text-primary">Política de Privacidade</Link>
          <Link href="/enviar-feedback" className="hover:text-primary">Enviar feedback</Link>
        </nav>
      </div>
    </footer>
  )
} 