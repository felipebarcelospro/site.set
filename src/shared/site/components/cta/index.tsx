import Image from 'next/image'
import { Button } from '@/shared/design-system/button'
import { WaitlistDialog } from '../waitlist-dialog'

export function CTA({ className }: { className?: string }) {
  return (
    <section className="py-24 bg-card border-t">
      <div className="container">
        <div className="flex flex-col items-center gap-6 text-center">
          <Image src="/store-icon.svg" alt="Criar loja" width={64} height={64} />

          <h2 className="text-balance text-3xl font-bold">
            Crie uma loja online e inicie
            <br /> suas vendas ainda hoje
          </h2>

          <WaitlistDialog>
            <Button size="lg" className="gap-2">
              Entrar para lista de espera
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.33334 8H12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 3.33337L12.6667 8.00004L8 12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Button>
          </WaitlistDialog>
        </div>
      </div>
    </section>
  )
} 