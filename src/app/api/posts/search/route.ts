import { NextResponse } from 'next/server'
import { prisma } from '@/shared/utils/prisma'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('q')

  if (!query) {
    return NextResponse.json(
      { message: 'Query inválida' },
      { status: 400 }
    )
  }

  try {
    const posts = await prisma.post.findMany({
      where: {
        OR: [
          { title: { contains: query } },
          { content: { contains: query } },
          { excerpt: { contains: query } },
        ],
      },
      orderBy: {
        createdAt: 'desc',
      },
    })

    return NextResponse.json(posts)
  } catch (error) {
    return NextResponse.json(
      { message: 'Erro ao buscar posts' },
      { status: 500 }
    )
  }
} 