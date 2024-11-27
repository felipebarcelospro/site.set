#!/usr/bin/env node
import { Command } from 'commander'
import OpenAI from 'openai'
import { zodResponseFormat } from 'openai/helpers/zod'
import { readFileSync } from 'fs'
import { resolve } from 'path'
import { config } from 'dotenv'
import { PrismaClient } from '@prisma/client'
import { openAIPostSchema } from '../src/shared/schemas/post'
import ora from 'ora'

// Carrega as variáveis de ambiente
config()

// Inicializa o OpenAI e Prisma
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

const prisma = new PrismaClient()

// Lê o guia de escrita do blog
const getBlogGuidelines = () => {
  const guidelinesPath = resolve(__dirname, '../docs/prompts/blog-guidelines.md')
  return readFileSync(guidelinesPath, 'utf-8')
}

const program = new Command()

program
  .name('site.set')
  .description('CLI para gerenciar o blog do Site.Set')
  .version('1.0.0')

program
  .command('create-post')
  .description('Cria um novo post para o blog usando IA')
  .argument('[tema]', 'Tema do artigo a ser criado (opcional)')
  .action(async (tema: string) => {
    const spinner = ora('Gerando artigo...').start()

    try {
      // Lê o guia de escrita
      const guidelines = getBlogGuidelines()

      // Pega a URL de todos os posts já existentes
      const existingPosts = await prisma.post.findMany({
        select: {
          title: true,
          slug: true,
        },
      })

      // Gera o artigo com a OpenAI
      spinner.text = 'Consultando a OpenAI...'
      const completion = await openai.beta.chat.completions.parse({
        model: 'gpt-4o',
        messages: [
          {
            role: 'system',
            content: `Você é um redator especializado em marketing digital e vendas online.
            
            Use estas diretrizes para criar o artigo:            
            ${guidelines}

            Use os títulos e slugs dos artigos existentes para não repetir o mesmo tema. 
            ${existingPosts.map(post => `- ${post.title} (${post.slug})`).join('\n')}
            OBS: Use tb para fazer links para os artigos existentes de forma organica no meio do artigo.
            
            Se o usuario, não passar um tema, pode seguir as diretrizes, crie um artigo que seja relevante para o blog e que ainda, 
            não foi criado anteriormente.
            Pode usar imagens no corpo do artigo, mas não é obrigatório. Além de que, não precisa ter a imagem da capa no corpo do artigo.
            A coverUrl PRECISA sempre ter a URL da imagem valida.
            Use images do Pexels ou Unsplash, porém, não use imagens com direitos autorais.
            Gere um artigo completo seguindo EXATAMENTE o formato especificado no schema.
            O artigo deve ser informativo, envolvente e otimizado para SEO.`
          },
          {
            role: 'user',
            content: `Crie um artigo sobre: ${tema || 'unknown'}`
          }
        ],
        response_format: zodResponseFormat(openAIPostSchema, 'post'),
        temperature: 0.5,
      })

      const post = completion.choices[0].message.parsed?.post

      if (!post) {
        throw new Error('Resposta da OpenAI inválida')
      }
      // Salva o post no banco
      spinner.text = 'Salvando no banco de dados...'
      await prisma.post.create({
        data: {
          title: post.title,
          slug: post.slug,
          excerpt: post.excerpt,
          content: post.content,
          coverUrl: post.coverUrl,
        },
      })

      spinner.succeed('Artigo criado com sucesso!')
      console.log('\nDetalhes do artigo:')
      console.log(`Título: ${post.title}`)
      console.log(`Slug: ${post.slug}`)
      console.log(`Palavras-chave: ${post.seoKeywords.join(', ')}`)
      console.log(`\nURL: https://site.set/blog/${post.slug}`)

    } catch (error) {
      spinner.fail('Erro ao criar artigo')
      
      if (error instanceof Error) {
        console.error('\nDetalhes do erro:', error.message)
      } else {
        console.error('\nErro desconhecido:', error)
      }
      
      process.exit(1)
    } finally {
      await prisma.$disconnect()
    }
  })

program.parse() 