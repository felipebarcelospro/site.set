'use client'

import * as React from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/shared/utils/utils'

const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<'nav'> & {
    separator?: React.ReactNode
  }
>(({ className, separator = <ChevronRight className="h-4 w-4" />, ...props }, ref) => (
  <nav
    ref={ref}
    aria-label="Navegação"
    className={cn('flex', className)}
    {...props}
  />
))
Breadcrumb.displayName = 'Breadcrumb'

const BreadcrumbList = React.forwardRef<
  HTMLOListElement,
  React.ComponentPropsWithoutRef<'ol'>
>(({ className, ...props }, ref) => (
  <ol
    ref={ref}
    className={cn(
      'flex items-center gap-2 text-sm text-muted-foreground',
      className
    )}
    {...props}
  />
))
BreadcrumbList.displayName = 'BreadcrumbList'

const BreadcrumbItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<'li'>
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn('flex items-center gap-2', className)}
    {...props}
  />
))
BreadcrumbItem.displayName = 'BreadcrumbItem'

const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<typeof Link>
>(({ className, ...props }, ref) => (
  <Link
    ref={ref}
    className={cn('hover:text-foreground', className)}
    {...props}
  />
))
BreadcrumbLink.displayName = 'BreadcrumbLink'

const BreadcrumbSeparator = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<'li'>
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    aria-hidden="true"
    className={cn('opacity-50', className)}
    {...props}
  />
))
BreadcrumbSeparator.displayName = 'BreadcrumbSeparator'

const BreadcrumbPage = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<'li'>
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    aria-current="page"
    className={cn('text-primary font-bold line-clamp-1', className)}
    {...props}
  />
))
BreadcrumbPage.displayName = 'BreadcrumbPage'

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage
}
