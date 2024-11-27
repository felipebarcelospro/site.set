import Head from 'next/head'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export default function TermsOfUse() {
  return (
    <>
      <Head>
        <title>Termos de Uso - Site.Set</title>
        <meta
          name="description"
          content="Termos de Uso do Site.Set. Conheça as regras e condições para utilizar nossa plataforma."
        />
        <meta name="robots" content="noindex" />
        <link rel="canonical" href="https://site.set/termos-de-uso" />
      </Head>

      <main className="py-24">
        <div className="container">
          {/* Breadcrumb */}
          <nav aria-label="Navegação" className="mb-12">
            <ol className="flex items-center gap-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-foreground">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="h-4 w-4" />
              </li>
              <li aria-current="page">Termos de Uso</li>
            </ol>
          </nav>

          {/* Terms of Use */}
          <article className="prose prose-invert max-w-full bg-card rounded-lg p-6 md:p-12 border">
            <h1>Termos de Uso</h1>
            
            <p className="lead">
              Ao utilizar o Site.Set, você concorda com estes termos de uso. Por favor, leia-os atentamente.
            </p>

            <section>
              <h2>1. Aceitação dos Termos</h2>
              <p>
                Ao acessar e usar o Site.Set, você aceita e concorda em cumprir estes Termos de Uso e todas as leis e regulamentos aplicáveis.
              </p>
            </section>

            <section>
              <h2>2. Uso da Plataforma</h2>
              <p>
                Ao usar nossa plataforma, você concorda em:
              </p>
              <ul>
                <li>Fornecer informações verdadeiras e precisas</li>
                <li>Manter a segurança de sua conta</li>
                <li>Não violar direitos de propriedade intelectual</li>
                <li>Não usar a plataforma para atividades ilegais</li>
                <li>Não tentar acessar áreas restritas do sistema</li>
              </ul>
            </section>

            <section>
              <h2>3. Contas de Usuário</h2>
              <p>
                Para usar certos recursos da plataforma, você precisará criar uma conta. Você é responsável por:
              </p>
              <ul>
                <li>Manter a confidencialidade de sua senha</li>
                <li>Todas as atividades que ocorrem em sua conta</li>
                <li>Notificar imediatamente qualquer uso não autorizado</li>
              </ul>
            </section>

            <section>
              <h2>4. Conteúdo e Propriedade Intelectual</h2>
              <p>
                Todo o conteúdo disponível na plataforma, incluindo mas não limitado a textos, gráficos, logos, ícones, imagens, clipes de áudio, downloads digitais e compilações de dados, é propriedade do Site.Set ou de seus licenciadores e está protegido por leis de propriedade intelectual.
              </p>
            </section>

            <section>
              <h2>5. Limitação de Responsabilidade</h2>
              <p>
                O Site.Set não será responsável por:
              </p>
              <ul>
                <li>Danos indiretos, incidentais ou consequenciais</li>
                <li>Perda de dados ou lucros</li>
                <li>Interrupções no serviço</li>
                <li>Ações de terceiros na plataforma</li>
              </ul>
            </section>

            <section>
              <h2>6. Modificações dos Termos</h2>
              <p>
                Reservamos o direito de modificar estes termos a qualquer momento. Alterações significativas serão notificadas através da plataforma ou por e-mail.
              </p>
            </section>

            <section>
              <h2>7. Rescisão</h2>
              <p>
                Podemos encerrar ou suspender seu acesso à plataforma imediatamente, sem aviso prévio ou responsabilidade, por qualquer motivo, incluindo, sem limitação, a violação dos Termos.
              </p>
            </section>

            <section>
              <h2>8. Lei Aplicável</h2>
              <p>
                Estes termos serão regidos e interpretados de acordo com as leis do Brasil, independentemente de conflitos de disposições legais.
              </p>
            </section>

            <section>
              <h2>9. Contato</h2>
              <p>
                Para questões sobre estes termos, entre em contato:
              </p>
              <ul>
                <li>E-mail: legal@site.set</li>
                <li>Telefone: (11) 1234-5678</li>
              </ul>
            </section>

            <footer>
              <p className="text-sm text-muted-foreground">
                Última atualização: 27 de Novembro de 2023
              </p>
            </footer>
          </article>
        </div>
      </main>
    </>
  )
} 