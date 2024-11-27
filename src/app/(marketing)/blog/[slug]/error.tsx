'use client'

import { useEffect } from 'react'
import { Button } from '@/shared/design-system/button'

export default function PostError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="flex flex-col py-24 flex-grow h-full">
      <div className="container flex flex-col items-center justify-center gap-4">
        <h2 className="text-2xl font-bold">Artigo não encontrado!</h2>
        <p className="text-muted-foreground">
          Não foi possível carregar este artigo. Por favor, tente novamente.
        </p>
        <div className="flex gap-4">
          <Button onClick={reset}>Tentar novamente</Button>
          <Button variant="outline" asChild>
            <a href="/blog">Voltar para o blog</a>
          </Button>
        </div>
      </div>
    </main>
  )
} 