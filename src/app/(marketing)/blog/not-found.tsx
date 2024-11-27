import Link from 'next/link'
import { Button } from '@/shared/design-system/button'

export default function BlogNotFound() {
  return (
    <main className="flex flex-col py-24 flex-grow h-full">
      <div className="container flex flex-col items-center justify-center gap-4">
        <h2 className="text-2xl font-bold">Página não encontrada</h2>
        <p className="text-muted-foreground">
          A página que você está procurando não existe ou foi removida.
        </p>
        <Button asChild>
          <Link href="/blog">Voltar para o blog</Link>
        </Button>
      </div>
    </main>
  )
} 