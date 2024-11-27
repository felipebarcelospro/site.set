import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import { GetStaticPaths, GetStaticProps } from 'next'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { ChevronRight, Facebook, Linkedin, Link2, MessageSquare, Twitter, AtSign } from 'lucide-react'
import { prisma } from '@/shared/utils/prisma'
import { Button } from '@/shared/design-system/button'
import { CTA } from '@/shared/site/components/cta'
import { useShare, type SocialProvider } from '@/shared/site/hooks/use-share'

interface Post {
  title: string
  slug: string
  content: string
  coverUrl: string
  createdAt: string
  excerpt: string
}

interface PostProps {
  post: Post
}

export default function Post({ post }: PostProps) {
  const publishedDate = new Date(post.createdAt).toLocaleDateString('pt-BR')
  const postUrl = `https://site.set/blog/${post.slug}`

  const { share, isCopied } = useShare({
    url: postUrl,
    title: post.title,
    text: post.excerpt,
    clipboardTimeout: 2000,
  })

  // Mapeamento de ícones por provider
  const providerIcons: Record<SocialProvider, React.ReactNode> = {
    linkedin: <Linkedin className="h-4 w-4" aria-hidden="true" />,
    facebook: <Facebook className="h-4 w-4" aria-hidden="true" />,
    twitter: <Twitter className="h-4 w-4" aria-hidden="true" />,
    threads: <AtSign className="h-4 w-4" aria-hidden="true" />,
    clipboard: <Link2 className="h-4 w-4" aria-hidden="true" />,
  }

  // Cores por provider
  const providerColors: Record<SocialProvider, string> = {
    linkedin: 'bg-[#0077B5]',
    facebook: 'bg-[#1877F2]',
    twitter: 'bg-[#000000]',
    threads: 'bg-[#101010]',
    clipboard: 'bg-card',
  }

  const shareButtons: SocialProvider[] = ['linkedin', 'facebook', 'twitter', 'threads', 'clipboard']

  return (
    <>
      {/* SEO */}
      <Head>
        <title>{post.title} - Blog Site.Set</title>
        <meta name="description" content={post.excerpt} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://site.set/blog/${post.slug}`} />

        {/* Article Metadata */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content={`https://site.set/blog/${post.slug}`} />
        <meta property="og:image" content={post.coverUrl} />
        <meta property="article:published_time" content={post.createdAt} />
        <meta property="article:author" content="Felipe Barcelos" />

        {/* Schema.org Article Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": post.title,
            "description": post.excerpt,
            "image": post.coverUrl,
            "datePublished": post.createdAt,
            "author": {
              "@type": "Person",
              "name": "Felipe Barcelos"
            }
          })}
        </script>
      </Head>

      <main className="flex flex-col gap-12 pt-24">
        <div className="container space-y-12">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Navegação">
            <ol className="flex items-center gap-2 text-sm text-muted-foreground">
              <li>
                <Link href="/blog" className="hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="h-4 w-4" />
              </li>
              <li aria-current="page" className='text-primary font-bold'>
                {post.title}
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-[1fr_300px] gap-12">
            {/* Article Content */}
            <article className='bg-card border rounded-lg overflow-hidden'>
              {/* Featured Image */}
              <figure className="relative aspect-[16/10] w-full overflow-hidden rounded-lg">
                <Image
                  src={post.coverUrl}
                  alt=""
                  fill
                  className="object-cover"
                  priority
                />
              </figure>

              {/* Article Header */}
              <header className="p-12 pb-0">
                <h1 className="mb-6 text-balance text-4xl font-bold">
                  {post.title}
                </h1>

                {/* Author Info */}
                <div className="flex items-center gap-3">
                  <Image
                    src="https://github.com/felipebarcelospro.png"
                    alt="Felipe Barcelos"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />

                  <div className="flex flex-col">
                    <strong className="text-sm">Felipe Barcelos</strong>
                    <time dateTime={post.createdAt} className="text-sm text-muted-foreground">
                      {publishedDate}
                    </time>
                  </div>
                </div>
              </header>

              {/* Article Content */}
              <div className="prose prose-invert max-w-none p-12">
                <ReactMarkdown 
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h1: ({ children }) => (
                      <h2 className="mb-4 text-3xl font-bold">{children}</h2>
                    ),
                    h2: ({ children }) => (
                      <h3 className="mb-4 mt-8 text-2xl font-bold">{children}</h3>
                    ),
                    a: ({ href, children }) => (
                      <a href={href} className="text-blue-500 hover:underline">
                        {children}
                      </a>
                    ),
                    ul: ({ children }) => (
                      <ul className="mb-4 list-disc pl-6">{children}</ul>
                    ),
                    ol: ({ children }) => (
                      <ol className="mb-4 list-decimal pl-6">{children}</ol>
                    ),
                    p: ({ children }) => (
                      <p className="mb-4 leading-relaxed text-muted-foreground">{children}</p>
                    ),
                  }}
                >
                  {post.content}
                </ReactMarkdown>
              </div>
            </article>

            {/* Sidebar */}
            <aside aria-label="Compartilhar post" className="space-y-6">
              <div className="rounded-lg bg-card p-6">
                <h2 className="mb-4 text-sm font-medium">Compartilhar</h2>
                
                <div className="space-y-3">
                  {shareButtons.map(provider => (
                    <Button
                      key={provider}
                      onClick={() => share(provider)}
                      variant="outline"
                      className="w-full justify-start gap-2"
                      aria-label={`Compartilhar no ${provider}`}
                    >
                      {providerIcons[provider]}
                      {provider === 'clipboard' 
                        ? (isCopied ? 'Link copiado!' : 'Copiar link')
                        : provider.charAt(0).toUpperCase() + provider.slice(1)
                      }
                    </Button>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await prisma.post.findMany({
    select: {
      slug: true,
    },
  })

  return {
    paths: posts.map(post => ({
      params: { slug: post.slug }
    })),
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps<PostProps> = async ({ params }) => {
  const slug = params?.slug

  if (typeof slug !== 'string') {
    return {
      notFound: true
    }
  }

  const post = await prisma.post.findUnique({
    where: { slug },
    select: {
      slug: true,
      title: true,
      content: true,
      coverUrl: true,
      createdAt: true,
      excerpt: true,
    }
  })

  if (!post) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      post: {
        ...post,
        createdAt: post.createdAt.toISOString(),
      }
    },
    revalidate: 60 * 60, // 1 hour
  }
} 