import Image from 'next/image'
import { Clock, Store } from 'lucide-react'
import { Button } from '@/shared/design-system/button'
import { WaitlistDialog } from '../waitlist-dialog'

export function Hero() {
  return (
    <section className="container relative">
      <div className="grid grid-cols-2 gap-8 h-[40rem] items-center">
        <div className="flex flex-col items-start gap-4">
          <h1 className="text-balance text-left text-4xl font-bold md:text-5xl">
            Venda seus produtos como afiliado em um único lugar
          </h1>

          <div className="flex flex-col items-start gap-2 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-[#38BDF8]" />
              <span>Crie o seu site em menos de 5 minutos</span>
            </div>

            <div className="flex items-center gap-2">
              <Store className="h-4 w-4 text-[#38BDF8]" />
              <span>Acompanhe e otimize seu negócio online</span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <WaitlistDialog>
              <Button size="lg" className="gap-2">
                Entrar para lista de espera
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.33334 8H12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 3.33337L12.6667 8.00004L8 12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Button>
            </WaitlistDialog>

            <span className="text-sm text-muted-foreground">
              Não precisa de cartão de crédito
            </span>
          </div>
        </div>

        <div className="relative h-full">
          <Image
            src="/hero-pattern.svg"
            alt=""
            width={200}
            height={400}
            className="h-full w-auto"
          />
        </div>
      </div>
    </section>
  )
} 