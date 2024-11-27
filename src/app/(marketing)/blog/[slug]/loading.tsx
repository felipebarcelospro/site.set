export default function PostLoading() {
  return (
    <main className="flex flex-col py-24 flex-grow h-full">
      <article className="container">
        <div className="flex items-center gap-2 mb-12">
          <div className="h-4 w-20 bg-muted rounded animate-pulse" />
          <div className="h-4 w-4 bg-muted rounded animate-pulse" />
          <div className="h-4 w-16 bg-muted rounded animate-pulse" />
          <div className="h-4 w-4 bg-muted rounded animate-pulse" />
          <div className="h-4 w-48 bg-muted rounded animate-pulse" />
        </div>

        <header className="flex flex-col gap-8 border-b pb-8">
          <div className="space-y-4">
            <div className="h-4 w-24 bg-muted rounded animate-pulse" />
            <div className="h-12 w-3/4 bg-muted rounded animate-pulse" />
          </div>

          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-muted animate-pulse" />
            <div className="space-y-2">
              <div className="h-4 w-32 bg-muted rounded animate-pulse" />
              <div className="h-3 w-24 bg-muted rounded animate-pulse" />
            </div>
          </div>

          <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-muted animate-pulse" />
        </header>

        <div className="prose prose-invert mx-auto mt-8 w-full max-w-3xl space-y-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="space-y-4">
              {i % 3 === 0 && (
                <div className="h-8 w-2/3 bg-muted rounded animate-pulse" />
              )}
              <div className="space-y-2">
                <div className="h-4 w-full bg-muted rounded animate-pulse" />
                <div className="h-4 w-full bg-muted rounded animate-pulse" />
                <div className="h-4 w-4/5 bg-muted rounded animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </article>
    </main>
  )
} 