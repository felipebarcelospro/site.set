import Image from 'next/image'
import { Clock, Store } from 'lucide-react'
import { Button } from '@/shared/design-system/button'
import { WaitlistDialog } from '../waitlist-dialog'

export function Hero() {
  return (
    <section className="container relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[20rem] md:h-[36rem] items-center">
        <div className="flex flex-col items-center md:items-start gap-4 px-4 md:px-0">
          <h1 className="text-balance text-center md:text-left text-3xl md:text-4xl lg:text-5xl font-bold">
            Venda seus produtos como afiliado em um único lugar
          </h1>

          <div className="flex flex-col items-center md:items-start gap-2 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-[#38BDF8]" />
              <span>Crie o seu site em menos de 5 minutos</span>
            </div>

            <div className="flex items-center gap-2">
              <Store className="h-4 w-4 text-[#38BDF8]" />
              <span>Acompanhe e otimize seu negócio</span>
            </div>
          </div>

          <div className="flex flex-col gap-3 w-full md:w-auto">
            <WaitlistDialog>
              <Button size="lg" className="gap-2 w-full md:w-auto">
                Entrar para lista de espera
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.33334 8H12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 3.33337L12.6667 8.00004L8 12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Button>
            </WaitlistDialog>

            <span className="text-sm text-muted-foreground text-center md:text-left">
              Não precisa de cartão de crédito
            </span>
          </div>
        </div>

        <div className="relative h-[20rem] md:h-full order-first md:order-last">
          <Image
            src="/hero-pattern.svg"
            alt=""
            width={200}
            height={400}
            className="h-full w-auto object-contain"
          />
        </div>
      </div>
    </section>
  )
}