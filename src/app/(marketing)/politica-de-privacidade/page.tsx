import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description: 'Política de Privacidade do Site.Set - Saiba como tratamos seus dados.',
  openGraph: {
    title: 'Política de Privacidade - Site.Set',
    description: 'Política de Privacidade do Site.Set - Saiba como tratamos seus dados.',
    url: 'https://site.set.vercel.app/politica-de-privacidade',
    type: 'website',
  },
}

export default function PrivacyPolicy() {
  return (
    <main className="flex flex-col py-24 flex-grow h-full">
      <div className="container">
        <div className="prose prose-invert mx-auto">
          <h1>Política de Privacidade</h1>

          <p>
            Esta Política de Privacidade descreve como suas informações pessoais são coletadas, 
            usadas e compartilhadas quando você visita ou faz uma compra no Site.Set.
          </p>

          <h2>1. Informações que coletamos</h2>
          <p>
            Quando você visita o site, coletamos automaticamente certas informações sobre seu 
            dispositivo, incluindo informações sobre seu navegador, endereço IP, fuso horário 
            e alguns dos cookies que estão instalados em seu dispositivo.
          </p>

          <h2>2. Como usamos suas informações</h2>
          <p>
            Usamos as informações que coletamos para:
          </p>
          <ul>
            <li>Processar seus pedidos e prevenir fraudes</li>
            <li>Comunicar-nos com você sobre promoções e atualizações</li>
            <li>Melhorar e personalizar sua experiência no site</li>
            <li>Cumprir obrigações legais</li>
          </ul>

          <h2>3. Compartilhamento de dados</h2>
          <p>
            Compartilhamos suas informações pessoais apenas quando necessário para:
          </p>
          <ul>
            <li>Processar pagamentos</li>
            <li>Cumprir obrigações legais</li>
            <li>Proteger nossos direitos e propriedades</li>
          </ul>

          <h2>4. Seus direitos</h2>
          <p>
            Você tem o direito de:
          </p>
          <ul>
            <li>Acessar seus dados pessoais</li>
            <li>Corrigir dados incorretos</li>
            <li>Solicitar a exclusão de seus dados</li>
            <li>Opor-se ao processamento de seus dados</li>
          </ul>

          <h2>5. Contato</h2>
          <p>
            Para mais informações sobre nossas práticas de privacidade ou para fazer uma 
            solicitação relacionada a seus dados, entre em contato conosco em:
          </p>
          <p>
            Email: suporte@site.set<br />
            Telefone: (00) 0000-0000
          </p>

          <h2>6. Atualizações</h2>
          <p>
            Esta política pode ser atualizada periodicamente. A versão mais recente estará 
            sempre disponível nesta página.
          </p>

          <p className="text-sm text-muted-foreground">
            Última atualização: 27 de Novembro de 2023
          </p>
        </div>
      </div>
    </main>
  )
} 