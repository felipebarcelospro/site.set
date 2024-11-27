import { NextResponse } from 'next/server'
import { prisma } from '@/shared/utils/prisma'
import { updatePostSchema } from '@/shared/schemas/post'

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const slug = (await params).slug

  try {
    const post = await prisma.post.findUnique({
      where: { slug }
    })

    if (!post) {
      return NextResponse.json(
        { message: 'Post não encontrado' },
        { status: 404 }
      )
    }

    return NextResponse.json(post)
  } catch (error) {
    return NextResponse.json(
      { message: 'Erro ao buscar post' },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const slug = (await params).slug

  try {
    const body = await request.json()
    const validatedData = updatePostSchema.parse(body)

    const post = await prisma.post.update({
      where: { slug },
      data: validatedData
    })

    return NextResponse.json(post)
  } catch (error: any) {
    if (error.name === 'ZodError') {
      return NextResponse.json(
        { message: 'Dados inválidos', errors: error.errors },
        { status: 400 }
      )
    }

    if (error.code === 'P2025') {
      return NextResponse.json(
        { message: 'Post não encontrado' },
        { status: 404 }
      )
    }

    return NextResponse.json(
      { message: 'Erro ao atualizar post' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const slug = (await params).slug

  try {
    await prisma.post.delete({
      where: { slug }
    })

    return new NextResponse(null, { status: 204 })
  } catch (error: any) {
    if (error.code === 'P2025') {
      return NextResponse.json(
        { message: 'Post não encontrado' },
        { status: 404 }
      )
    }

    return NextResponse.json(
      { message: 'Erro ao deletar post' },
      { status: 500 }
    )
  }
} 