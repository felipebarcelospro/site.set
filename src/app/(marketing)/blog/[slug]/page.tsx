import Image from 'next/image'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import { prisma } from '@/shared/utils/prisma'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/shared/design-system/breacrump'
import { SharePost } from '@/shared/site/components/blog/share-post'
import { getPostBySlug } from '@/shared/site/actions/blog'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params

  const post = await getPostBySlug({ slug })

  if (!post.data) {
    return {
      title: 'Artigo não encontrado',
      description: 'O artigo que você está procurando não foi encontrado.',
    }
  }

  return {
    title: `${post.data.title} - Blog Site.Set`,
    description: post.data.excerpt,
    metadataBase: new URL('https://site.set.vercel.app'),
    alternates: {
      canonical: `https://site.set.vercel.app/blog/${post.data.slug}`,
    },
    openGraph: {
      title: post.data.title,
      description: post.data.excerpt,
      type: 'article',
      url: `https://site.set.vercel.app/blog/${post.data.slug}`,
      images: [
        {
          url: post.data.coverUrl,
          width: 1200,
          height: 630,
          alt: post.data.title,
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
    },
    authors: [{ name: 'Felipe Barcelos' }],
    publisher: 'Site.Set'
  }
}

export default async function Post({ params }: PageProps) {
  const { slug } = await params
  
  const post = await getPostBySlug({ slug })

  if (!post.data) {
    notFound()
  }

  const publishedDate = new Date(post.data.createdAt).toLocaleDateString('pt-BR')
  const postUrl = `https://site.set.vercel.app/blog/${post.data.slug}`


  return (
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
              {post.data.title}
            </BreadcrumbPage>
          </BreadcrumbList>            
        </Breadcrumb>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 lg:gap-12">
          {/* Article Content */}
          <article className='bg-card border rounded-lg overflow-hidden'>
            {/* Featured Image */}
            <figure className="relative aspect-[16/10] w-full overflow-hidden rounded-lg">
              <Image
                src={post.data.coverUrl}
                alt=""
                fill
                className="object-cover"
                priority
              />
            </figure>

            {/* Article Header */}
            <header className="p-4 md:p-6 lg:p-12 pb-0">
              <h1 className="mb-6 text-balance text-2xl md:text-3xl lg:text-4xl font-bold">
                {post.data.title}
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

                  <time dateTime={post.data.createdAt} className="text-sm text-muted-foreground">
                    {publishedDate}
                  </time>
                </div>
              </div>
            </header>

            {/* Article Content */}
            <div className="prose prose-invert max-w-none p-4 md:p-6 lg:p-12">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {post.data.content}
              </ReactMarkdown>
            </div>
          </article>

          {/* Sidebar */}
          <aside aria-label="Compartilhar post" className="space-y-6">
            <SharePost url={postUrl} title={post.data.title} text={post.data.excerpt} />
          </aside>
        </div>
      </div>
    </main>
  )
}

export async function generateStaticParams() {
  const posts = await prisma.post.findMany({
    select: {
      slug: true,
    },
  })

  return posts.map((post) => ({
    slug: post.slug,
  }))
} 