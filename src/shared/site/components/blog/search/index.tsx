'use client'

import { Search as SearchIcon } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'

interface SearchFormData {
  q: string
}

export function Search() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const { register, handleSubmit } = useForm<SearchFormData>({
    defaultValues: {
      q: searchParams.get('q') || ''
    }
  })

  async function handleSearch(data: SearchFormData) {
    const params = new URLSearchParams()
    if (data.q) params.set('q', data.q)    
    router.push(`/blog${params.toString() ? `?${params.toString()}` : ''}`)
  }

  return (
    <form onSubmit={handleSubmit(handleSearch)} className="relative">
      <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      
      <input
        type="search"
        placeholder="Buscar"
        className="h-10 w-72 bg-transparent border-b pl-9 text-sm outline-none"
        {...register('q')}
      />
    </form>
  )
}