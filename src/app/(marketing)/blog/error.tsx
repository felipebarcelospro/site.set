'use client'

import { useEffect } from 'react'
import { Button } from '@/shared/design-system/button'

export default function BlogError({
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
        <h2 className="text-2xl font-bold">Algo deu errado!</h2>
        <p className="text-muted-foreground">
          Ocorreu um erro ao carregar o blog. Por favor, tente novamente.
        </p>
        <Button onClick={reset}>Tentar novamente</Button>
      </div>
    </main>
  )
} 