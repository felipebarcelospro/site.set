import { useCallback } from 'react'
import { useClipboard } from './use-clipboard'

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
  getUrl: (config: ShareConfig) => string
}

const SOCIAL_PROVIDERS: Record<Exclude<SocialProvider, 'clipboard'>, SocialProviderConfig> = {
  linkedin: {
    name: 'LinkedIn',
    getUrl: ({ url }) => 
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  },
  facebook: {
    name: 'Facebook',
    getUrl: ({ url }) => 
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  },
  twitter: {
    name: 'Twitter',
    getUrl: ({ url, title }) => 
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title || '')}`,
  },
  threads: {
    name: 'Threads',
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
      // Se for clipboard, usa o hook de clipboard
      if (provider === 'clipboard') {
        return await copy(url)
      }

      // Pega a configuração do provider
      const providerConfig = SOCIAL_PROVIDERS[provider]
      if (!providerConfig) {
        throw new Error(`Provider "${provider}" não suportado`)
      }

      // Gera a URL de compartilhamento
      const shareUrl = providerConfig.getUrl(getShareConfig())

      // Abre a URL em uma nova janela
      const windowFeatures = 'width=600,height=600,location=yes,status=yes'
      const shareWindow = window.open(shareUrl, '_blank', windowFeatures)

      // Verifica se a janela foi bloqueada
      if (!shareWindow) {
        throw new Error('Popup bloqueado pelo navegador')
      }

      return true
    } catch (error) {
      // Trata erros específicos
      if (error instanceof Error) {
        console.error(`Erro ao compartilhar no ${provider}:`, error.message)
        
        // Retorna false mas não rejeita a promise para manter a UI funcionando
        return false
      }

      // Trata erros desconhecidos
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
        // Ignora cancelamento do usuário
        if (error.name === 'AbortError') return false
        
        console.error('Erro ao compartilhar:', error.message)
      }
      return false
    }
  }, [getShareConfig])

  return {
    share,
    shareNative,
    isCopied,
    providers: {
      ...SOCIAL_PROVIDERS,
      clipboard: { name: 'Copiar link' }
    }
  }
} 