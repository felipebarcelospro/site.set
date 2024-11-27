import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const AUTH_TOKEN = process.env.API_AUTH_TOKEN
const PUBLIC_API_KEY = process.env.NEXT_PUBLIC_API_KEY

type RouteAuthMap = {
  [path: string]: {
    [method: string]: 'public' | 'private'
  } & { ALL?: 'public' | 'private' }
}

// Map routes to their required auth type
const routeAuthMap: RouteAuthMap = {
  '/api/posts': {
    GET: 'public',
    POST: 'private',
  },
  '/api/posts/search': {
    GET: 'public',
  },
  '/api/waitlist': {
    POST: 'public',
    GET: 'private',
  },
  // Default - all other API routes require private token
  '/api': {
    ALL: 'private'
  }
}

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname
  const method = request.method
  
  // Find most specific matching route config
  const routeConfig = Object.entries(routeAuthMap).find(([route]) => 
    path.startsWith(route)
  )?.[1]

  if (!routeConfig) {
    return NextResponse.next()
  }

  const authType = routeConfig[method as keyof typeof routeConfig] || routeConfig.ALL

  const authHeader = request.headers.get('authorization')
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return new NextResponse(
      JSON.stringify({ error: 'Missing or invalid authorization header' }),
      {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      }
    )
  }

  const token = authHeader.split(' ')[1]

  if (authType === 'public') {
    if (token !== PUBLIC_API_KEY) {
      return new NextResponse(
        JSON.stringify({ error: 'Invalid public API key' }),
        {
          status: 401,
          headers: { 'Content-Type': 'application/json' },
        }
      )
    }
  } else {
    if (token !== AUTH_TOKEN) {
      return new NextResponse(
        JSON.stringify({ error: 'Invalid private token' }),
        {
          status: 401,
          headers: { 'Content-Type': 'application/json' },
        }
      )
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/api/:path*',
}