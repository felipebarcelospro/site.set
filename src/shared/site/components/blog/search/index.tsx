import { Search as SearchIcon } from 'lucide-react'
import { useRouter } from 'next/router'
import { useState, useCallback } from 'react'

export function Search() {
  const router = useRouter()
  const [query, setQuery] = useState('')

  const handleSearch = useCallback((event: React.FormEvent) => {
    event.preventDefault()
    
    if (query.trim()) {
      router.push(`/blog?q=${encodeURIComponent(query)}`)
    }
  }, [query, router])

  return (
    <form onSubmit={handleSearch} className="relative">
      <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Buscar"
        className="h-10 w-72 bg-transparent border-b pl-9 text-sm outline-none"
      />
    </form>
  )
} 