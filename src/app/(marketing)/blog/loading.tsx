export default function BlogLoading() {
  return (
    <main className="flex flex-col py-24 flex-grow h-full">
      <header className="border-b pb-8 md:pb-12">
        <div className="container space-y-6">
          <div className="flex flex-col gap-4 px-4 md:px-0">
            <div className="h-4 w-24 bg-muted rounded animate-pulse" />
            <div className="h-12 w-3/4 bg-muted rounded animate-pulse" />
          </div>

          <div className="relative">
            <div className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 rounded bg-muted animate-pulse" />
            <div className="h-10 w-72 bg-transparent border-b pl-9" />
          </div>
        </div>
      </header>

      <section className="container py-8 md:py-12 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="group flex flex-col gap-4 bg-card p-3 md:p-4 rounded-lg border">
              {/* Cover Image */}
              <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-muted animate-pulse" />
              
              {/* Content */}
              <div className="flex flex-col gap-3 md:gap-4">
                {/* Published Date */}
                <div className="h-4 w-24 bg-muted rounded animate-pulse" />

                {/* Title and Excerpt */}
                <div className="flex flex-col gap-1.5 md:gap-2">
                  <div className="h-6 w-full bg-muted rounded animate-pulse" />
                  <div className="h-4 w-full bg-muted rounded animate-pulse" />
                </div>

                {/* Author */}
                <div className="flex items-center gap-2 mt-auto">
                  <div className="relative h-5 w-5 md:h-6 md:w-6 overflow-hidden rounded-full bg-muted animate-pulse" />
                  <div className="h-3 w-24 bg-muted rounded animate-pulse" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
} 