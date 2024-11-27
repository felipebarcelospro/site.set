import Head from 'next/head'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Política de Privacidade - Site.Set</title>
        <meta
          name="description"
          content="Política de Privacidade do Site.Set. Saiba como tratamos seus dados e protegemos sua privacidade."
        />
        <meta name="robots" content="noindex" />
        <link rel="canonical" href="https://site.set/politica-de-privacidade" />
      </Head>

      <main className="flex-1 py-24">
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
              <li aria-current="page">Política de Privacidade</li>
            </ol>
          </nav>

          <article className="prose prose-invert max-w-full bg-card rounded-lg p-6 md:p-12 border">
            <h1>Política de Privacidade</h1>
            
            <p className="lead">
              Esta Política de Privacidade descreve como suas informações pessoais são coletadas, usadas e compartilhadas quando você utiliza o Site.Set.
            </p>

            <section>
              <h2>Informações que coletamos</h2>
              <p>
                Quando você cria uma conta no Site.Set, coletamos as seguintes informações:
              </p>
              <ul>
                <li>Nome completo</li>
                <li>Endereço de e-mail</li>
                <li>Informações de contato</li>
                <li>Dados de pagamento (processados de forma segura)</li>
              </ul>
            </section>

            <section>
              <h2>Como usamos suas informações</h2>
              <p>
                Utilizamos as informações coletadas para:
              </p>
              <ul>
                <li>Criar e gerenciar sua conta</li>
                <li>Processar seus pagamentos</li>
                <li>Enviar atualizações sobre sua conta</li>
                <li>Melhorar nossos serviços</li>
                <li>Prevenir fraudes</li>
              </ul>
            </section>

            <section>
              <h2>Compartilhamento de informações</h2>
              <p>
                Não vendemos suas informações pessoais. Compartilhamos suas informações apenas com:
              </p>
              <ul>
                <li>Provedores de serviços que nos ajudam a operar o Site.Set</li>
                <li>Autoridades quando exigido por lei</li>
              </ul>
            </section>

            <section>
              <h2>Segurança dos dados</h2>
              <p>
                Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações, incluindo:
              </p>
              <ul>
                <li>Criptografia de dados em trânsito e em repouso</li>
                <li>Controles de acesso rigorosos</li>
                <li>Monitoramento contínuo de segurança</li>
              </ul>
            </section>

            <section>
              <h2>Seus direitos</h2>
              <p>
                Você tem direito a:
              </p>
              <ul>
                <li>Acessar seus dados pessoais</li>
                <li>Corrigir dados imprecisos</li>
                <li>Solicitar a exclusão de seus dados</li>
                <li>Exportar seus dados</li>
                <li>Retirar seu consentimento</li>
              </ul>
            </section>

            <section>
              <h2>Contato</h2>
              <p>
                Para questões sobre esta política ou sobre seus dados pessoais, entre em contato:
              </p>
              <ul>
                <li>E-mail: privacidade@site.set</li>
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