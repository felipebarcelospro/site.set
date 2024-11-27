import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container flex justify-between gap-8 py-8">
        <div className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Site.Set" width={115} height={32} className="text-white" />
        </div>

        <nav className="flex items-center gap-4 text-sm text-muted-foreground">
          <Link href="/termos-de-uso" className="hover:text-primary">Termos de Uso</Link>
          <Link href="/politica-de-privacidade" className="hover:text-primary">Política de Privacidade</Link>
          <Link href="/enviar-feedback" className="hover:text-primary">Enviar feedback</Link>
        </nav>
      </div>
    </footer>
  )
} 