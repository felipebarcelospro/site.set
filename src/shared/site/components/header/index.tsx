'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { cn } from '@/shared/utils/utils'
import { Button } from '@/shared/design-system/button'

export function Header() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Site.Set" width={116} height={32} />
          </Link>
        </div>

        <div className="flex items-center gap-6">
          <nav className="flex items-center gap-6">
            <Link
              href="/"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === "/" ? "text-blue-500" : "text-muted-foreground"
              )}
            >
              Home
            </Link>
            <Link
              href="/blog"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname.startsWith("/blog") ? "text-blue-500" : "text-muted-foreground"
              )}
            >
              Blog
            </Link>
          </nav>

          <Button variant="secondary" asChild>
            <Link href="/comecar">Começar</Link>
          </Button>
        </div>
      </div>
    </header>
  )
} 