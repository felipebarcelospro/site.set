import { useCallback } from 'react'
import { useClipboard } from './use-clipboard'
import { Linkedin, Facebook, Twitter, AtSign, Link2 } from 'lucide-react'

export type SocialProvider = 'linkedin' | 'facebook' | 'twitter' | 'threads' | 'clipboard'

interface ShareOptions {
  url: string
  title?: string
  text?: string
  clipboardTimeout?: number
}

interface ShareConfig {
  url: string
  title?: string
  text?: string
}

interface SocialProviderConfig {
  name: string
  icon: React.ReactNode
  getUrl: (config: ShareConfig) => string
}

const SOCIAL_PROVIDERS: Record<Exclude<SocialProvider, 'clipboard'>, SocialProviderConfig> = {
  linkedin: {
    name: 'LinkedIn',
    icon: <Linkedin className="h-4 w-4" />,
    getUrl: ({ url }) => 
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  },
  facebook: {
    name: 'Facebook',
    icon: <Facebook className="h-4 w-4" />,
    getUrl: ({ url }) => 
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  },
  twitter: {
    name: 'Twitter',
    icon: <Twitter className="h-4 w-4" />,
    getUrl: ({ url, title }) => 
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title || '')}`,
  },
  threads: {
    name: 'Threads',
    icon: <AtSign className="h-4 w-4" />,
    getUrl: ({ url, title }) => 
      `https://threads.net/intent/post?text=${encodeURIComponent(`${title || ''} ${url}`)}`,
  },
}

export function useShare({ url, title, text, clipboardTimeout }: ShareOptions) {
  const { copy, isCopied } = useClipboard({ timeout: clipboardTimeout })

  const getShareConfig = useCallback((): ShareConfig => ({
    url,
    ...(title && { title }),
    ...(text && { text }),
  }), [url, title, text])

  const share = useCallback(async (provider: SocialProvider) => {
    try {
      if (provider === 'clipboard') {
        return await copy(url)
      }

      const providerConfig = SOCIAL_PROVIDERS[provider]
      if (!providerConfig) {
        throw new Error(`Provider "${provider}" não suportado`)
      }

      const shareUrl = providerConfig.getUrl(getShareConfig())
      const windowFeatures = 'width=600,height=600,location=yes,status=yes'
      const shareWindow = window.open(shareUrl, '_blank', windowFeatures)

      if (!shareWindow) {
        throw new Error('Popup bloqueado pelo navegador')
      }

      return true
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Erro ao compartilhar no ${provider}:`, error.message)
        return false
      }

      console.error(`Erro desconhecido ao compartilhar no ${provider}:`, error)
      return false
    }
  }, [copy, url, getShareConfig])

  const shareNative = useCallback(async () => {
    if (!navigator?.share) {
      console.warn('Web Share API não suportada')
      return false
    }

    try {
      await navigator.share(getShareConfig())
      return true
    } catch (error) {
      if (error instanceof Error) {
        if (error.name === 'AbortError') return false
        console.error('Erro ao compartilhar:', error.message)
      }
      return false
    }
  }, [getShareConfig])

  const shareButtons = [
    ...Object.entries(SOCIAL_PROVIDERS).map(([key, provider]) => ({
      provider: key as SocialProvider,
      name: provider.name,
      icon: provider.icon,
      action: () => share(key as SocialProvider)
    })),
    {
      provider: 'clipboard' as SocialProvider,
      name: isCopied ? 'Link copiado!' : 'Copiar link',
      icon: <Link2 className="h-4 w-4" />,
      action: () => share('clipboard')
    }
  ]

  return {
    share,
    shareNative,
    isCopied,
    shareButtons
  }
} 