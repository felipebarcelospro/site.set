import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/shared/design-system/button'

export function Features() {
  return (
    <section className="container grid gap-6 pb-8 pt-6 md:grid-cols-2 md:py-10">
      <div className="flex flex-col gap-2 rounded-lg bg-card border p-12">
        <span className="text-xs font-bold uppercase text-blue-500">Simples</span>
        <h2 className="text-2xl font-bold">
          Crie um catálogo de produtos online em poucos minutos
        </h2>
      </div>

      <div className="flex flex-col gap-2 rounded-lg bg-card border p-12">
        <span className="text-xs font-bold uppercase text-blue-500">Prático</span>
        <h2 className="text-2xl font-bold">
          Venda para seu público através de uma plataforma única
        </h2>
      </div>

      <div className="col-span-full flex flex-col gap-2">        
        <div className="grid grid-cols-2 gap-4 rounded-lg bg-card border p-12">
          <div className='flex flex-col'>
            <span className="text-xs font-bold uppercase text-blue-500">
              Personalizado
            </span>
            
            <h2 className="text-2xl font-bold">
              Tenha uma loja online personalizada com a cara da sua marca
            </h2>

            <Button asChild className="w-fit gap-2 mt-auto">
              <Link href="/criar-loja">
                Criar loja grátis
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.33334 8H12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 3.33337L12.6667 8.00004L8 12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </Button>
          </div>

          <div className="w-full overflow-hidden">
            <Image
              src="/features.svg"
              alt="Preview da loja"
              width={440}
              height={327}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
} 