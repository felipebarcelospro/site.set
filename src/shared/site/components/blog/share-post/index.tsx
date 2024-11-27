'use client'

import { Button } from '@/shared/design-system/button'
import { useShare } from '@/shared/site/hooks/use-share'

interface SharePostProps {
  url: string
  title: string
  text?: string
}

export function SharePost({ url, title, text }: SharePostProps) {
  const { shareButtons } = useShare({
    url,
    title,
    text,
    clipboardTimeout: 2000
  })

  return (
    <div className="rounded-lg bg-card p-4 md:p-6">
      <h2 className="mb-4 text-sm font-medium">Compartilhar</h2>
      
      <div className="space-y-3">
        {shareButtons.map(provider => (
          <Button
            key={provider.provider}
            onClick={() => provider.action()}
            variant="outline"
            className="w-full justify-start gap-2"
            aria-label={`Compartilhar no ${provider.name}`}
          >
            {provider.icon}
            {provider.name}
          </Button>
        ))}
      </div>
    </div>
  )
}
