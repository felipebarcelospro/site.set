import { Shield, Store, Headphones } from 'lucide-react'

export function Benefits() {
  return (
    <section className="container py-24">
      <div className="flex flex-col items-center gap-12">
        <h2 className="text-balance text-center text-3xl font-bold">
          Sua loja de afiliados, simples,
          <br /> do jeito que deveria ser
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="flex flex-col text-left gap-2 rounded-lg bg-card border p-12">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10 mb-4">
              <Shield className="h-6 w-6 text-blue-500" />
            </div>

            <strong>Personalize seu site</strong>
            <p className="text-sm text-muted-foreground">
              Adicione sua logo, favicon, cores de acordo com a sua marca e muito mais de cara.
            </p>
          </div>

          <div className="flex flex-col text-left gap-2 rounded-lg bg-card border p-12">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10 mb-4">
              <Store className="h-6 w-6 text-blue-500" />
            </div>

            <strong>Venda de qualquer loja</strong>
            <p className="text-sm text-muted-foreground">
              Não importa a loja, o Site.Set permite que você crie e venda de qualquer opção de afiliado.
            </p>
          </div>

          <div className="flex flex-col text-left gap-2 rounded-lg bg-card border p-12">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10 mb-4">
              <Headphones className="h-6 w-6 text-blue-500" />
            </div>

            <strong>Receba suporte amigável</strong>
            <p className="text-sm text-muted-foreground">
              Nossa equipe estará sempre pronta para te ajudar com o que você precisar.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 