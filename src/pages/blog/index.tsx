import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { Search } from '@/shared/site/components/blog/search'
import { PostCard } from '@/shared/site/components/blog/post-card'
import { prisma } from '@/shared/utils/prisma'
import { CTA } from '@/shared/site/components/cta'

interface Post {
  slug: string
  title: string
  excerpt: string
  coverUrl: string
  createdAt: string
}

interface BlogProps {
  posts: Post[]
  query?: string
}

export default function Blog({ posts, query }: BlogProps) {
  const title = query 
    ? `Resultados para "${query}" - Blog Site.Set`
    : 'Blog - Site.Set'

  const description = query
    ? `Resultados de busca para "${query}" no blog do Site.Set. Encontre dicas e estratégias para seu negócio online.`
    : 'Dicas e estratégias para impulsionar seu negócio online. Aprenda como criar e gerenciar sua loja virtual.'

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://site.set/blog" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://site.set/blog" />
      </Head>

      <main className="flex flex-col py-24 flex-grow h-full">
        <header className="border-b pb-12">
          <div className="container space-y-6">
            <div className="flex flex-col gap-4">
              <span className="text-sm font-medium text-[#38BDF8]" aria-label="Seção">BLOG</span>
              <h1 className="text-balance text-left text-4xl font-bold md:text-5xl">
                {query 
                  ? `Resultados para "${query}"`
                  : 'Dicas e estratégias para impulsionar seu negócio'
                }
              </h1>
            </div>

            <Search />
          </div>
        </header>

        <section className="container py-12" aria-label="Lista de Posts">
          {posts.length > 0 ? (
            <div className="grid grid-cols-3 gap-8">
              {posts.map(post => (
                <PostCard 
                  key={post.slug} 
                  {...post} 
                  publishedAt={new Date(post.createdAt).toLocaleDateString('pt-BR')}
                  author={{
                    name: 'Felipe Barcelos',
                    avatar: 'https://github.com/felipebarcelospro.png'
                  }}
                />
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground border-dashed border-2 border-border p-12 rounded-lg" role="status">
              Nenhum post encontrado.
            </p>
          )}
        </section>
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<BlogProps> = async ({ query }) => {
  const searchQuery = query.q as string | undefined

  const posts = await prisma.post.findMany({
    where: searchQuery ? {
      OR: [
        { title: { contains: searchQuery } },
        { content: { contains: searchQuery } },
        { excerpt: { contains: searchQuery } },
      ],
    } : undefined,
    orderBy: {
      createdAt: 'desc'
    },
    select: {
      slug: true,
      title: true,
      excerpt: true,
      coverUrl: true,
      createdAt: true,
    }
  })

  return {
    props: {
      posts: posts.map(post => ({
        ...post,
        createdAt: post.createdAt.toISOString(),
      })),
      ...(searchQuery && { query: searchQuery }),
    },
  }
} 