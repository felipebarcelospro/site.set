import type { Metadata } from 'next'
import { Search } from '@/shared/site/components/blog/search'
import { PostCard } from '@/shared/site/components/blog/post-card'
import { searchPosts } from '@/shared/site/actions/blog'

interface PageProps {
  searchParams: Promise<{ searchTerm?: string }> 
}

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const { searchTerm } = await searchParams

  const title = searchTerm 
    ? `Resultados para "${searchTerm}" - Blog Site.Set`
    : 'Blog - Site.Set'

  const description = searchTerm
    ? `Resultados de busca para "${searchTerm}" no blog do Site.Set. Encontre dicas e estratégias para seu negócio online.`
    : 'Dicas e estratégias para impulsionar seu negócio online. Aprenda como criar e gerenciar sua loja virtual.'

  return {
    title,
    description,
    metadataBase: new URL('https://site.set.vercel.app'),
    openGraph: {
      title,
      description,
      type: 'website',
      url: 'https://site.set.vercel.app/blog',
    },
    alternates: {
      canonical: 'https://site.set.vercel.app/blog',
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default async function Blog({ searchParams }: PageProps) {
  const { searchTerm } = await searchParams

  const posts = await searchPosts({ searchTerm })

  return (
    <main className="flex flex-col py-24 flex-grow h-full">
      <header className="border-b pb-8 md:pb-12">
        <div className="container space-y-6">
          <div className="flex flex-col gap-4 px-4 md:px-0">
            <span className="text-sm font-medium text-[#38BDF8] text-center md:text-left" aria-label="Seção">BLOG</span>
            <h1 className="text-balance text-center md:text-left text-3xl md:text-4xl max-w-2xl font-bold">
              {searchTerm ? `Resultados para "${searchTerm}"` : 'Dicas e estratégias para impulsionar seu negócio'}
            </h1>
          </div>

          <Search />
        </div>
      </header>

      <section className="container py-8 md:py-12 px-4 md:px-8" aria-label="Lista de Posts">
        {posts.success && posts.data.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {posts.data.map(post => (
              <PostCard 
                {...post} 
                key={post.slug} 
                publishedAt={new Date(post.createdAt).toLocaleDateString('pt-BR')}
                author={{
                  name: 'Felipe Barcelos',
                  avatar: 'https://github.com/felipebarcelospro.png'
                }}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground border-dashed border-2 border-border p-8 md:p-12 rounded-lg" role="status">
            Nenhum post encontrado.
          </p>
        )}
      </section>
    </main>
  )
} 