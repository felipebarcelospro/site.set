import { NextResponse } from 'next/server'
import { prisma } from '@/shared/utils/prisma'
import { createPostSchema } from '@/shared/schemas/post'

export async function GET(request: Request) {
  try {
    const posts = await prisma.post.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })

    return NextResponse.json(posts)
  } catch (error) {
    return NextResponse.json(
      { message: 'Erro ao buscar posts' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const validatedData = createPostSchema.parse(body)

    const post = await prisma.post.create({
      data: validatedData
    })

    return NextResponse.json(post, { status: 201 })
  } catch (error: any) {
    if (error.name === 'ZodError') {
      return NextResponse.json(
        { message: 'Dados inválidos', errors: error.errors },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { message: 'Erro ao criar post' },
      { status: 500 }
    )
  }
} 