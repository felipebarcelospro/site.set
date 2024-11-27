import Image from 'next/image'
import Head from 'next/head'

import { GetStaticPaths, GetStaticProps } from 'next'
import { prisma } from '@/shared/utils/prisma'
import { Button } from '@/shared/design-system/button'
import { useShare } from '@/shared/site/hooks/use-share'
import { Markdown } from '@/shared/design-system/markdown'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/shared/design-system/breacrump'

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

  const { shareButtons } = useShare({
    url: postUrl,
    title: post.title,
    text: post.excerpt,
    clipboardTimeout: 2000,
  })

  
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
        <div className="container space-y-12 px-4 md:px-8">
          {/* Breadcrumb Navigation */}
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Site.Set</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbPage>
                {post.title}
              </BreadcrumbPage>
            </BreadcrumbList>            
          </Breadcrumb>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 lg:gap-12">
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
              <header className="p-4 md:p-6 lg:p-12 pb-0">
                <h1 className="mb-6 text-balance text-2xl md:text-3xl lg:text-4xl font-bold">
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
              <div className="prose prose-invert max-w-none p-4 md:p-6 lg:p-12">
                <Markdown content={post.content} />
              </div>
            </article>

            {/* Sidebar */}
            <aside aria-label="Compartilhar post" className="space-y-6">
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