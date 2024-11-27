import Link from 'next/link'
import Image from 'next/image'

interface Author {
  name: string
  avatar: string
}

interface PostCardProps {
  slug: string
  title: string
  excerpt: string
  coverUrl: string
  publishedAt: string
  author: Author
}

export function PostCard({ slug, title, excerpt, coverUrl, publishedAt, author }: PostCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="group flex flex-col gap-4 bg-card p-4 rounded-lg border">
      <div className="relative aspect-video w-full overflow-hidden rounded-lg">
        <Image
          src={coverUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col gap-4">
        <time className="text-sm text-muted-foreground">{publishedAt}</time>

        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="line-clamp-2 text-muted-foreground">{excerpt}</p>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative h-6 w-6 overflow-hidden rounded-full">
            <Image
              src={author.avatar}
              alt={author.name}
              fill
              className="object-cover"
            />
          </div>

          <span className="text-sm text-muted-foreground">{author.name}</span>
        </div>
      </div>
    </Link>
  )
} 