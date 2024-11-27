import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Termos de Uso',
  description: 'Termos de Uso do Site.Set - Conheça as regras e condições de uso da plataforma.',
  openGraph: {
    title: 'Termos de Uso - Site.Set',
    description: 'Termos de Uso do Site.Set - Conheça as regras e condições de uso da plataforma.',
    url: 'https://site.set.vercel.app/termos-de-uso',
    type: 'website',
  },
}

export default function TermsOfUse() {
  return (
    <main className="flex flex-col py-24 flex-grow h-full">
      <div className="container">
        <div className="prose prose-invert mx-auto">
          <h1>Termos de Uso</h1>

          <p>
            Ao acessar e usar o Site.Set, você concorda com estes termos. Por favor, 
            leia-os atentamente antes de usar nossos serviços.
          </p>

          <h2>1. Aceitação dos Termos</h2>
          <p>
            Ao acessar ou usar o Site.Set, você concorda em ficar vinculado a estes Termos 
            de Uso e todas as leis e regulamentos aplicáveis.
          </p>

          <h2>2. Uso do Serviço</h2>
          <p>
            Você concorda em:
          </p>
          <ul>
            <li>Fornecer informações verdadeiras e precisas</li>
            <li>Manter a confidencialidade de sua conta</li>
            <li>Não usar o serviço para fins ilegais</li>
            <li>Não violar direitos de propriedade intelectual</li>
          </ul>

          <h2>3. Contas de Usuário</h2>
          <p>
            Para usar certos recursos do Site.Set, você precisa criar uma conta. Você é 
            responsável por:
          </p>
          <ul>
            <li>Manter a segurança de sua senha</li>
            <li>Todas as atividades em sua conta</li>
            <li>Atualizar suas informações quando necessário</li>
          </ul>

          <h2>4. Propriedade Intelectual</h2>
          <p>
            Todo o conteúdo do Site.Set é protegido por direitos autorais e outras leis 
            de propriedade intelectual.
          </p>

          <h2>5. Limitação de Responsabilidade</h2>
          <p>
            O Site.Set não se responsabiliza por:
          </p>
          <ul>
            <li>Danos indiretos ou consequentes</li>
            <li>Perda de dados ou lucros</li>
            <li>Interrupções do serviço</li>
          </ul>

          <h2>6. Modificações</h2>
          <p>
            Reservamos o direito de modificar estes termos a qualquer momento. As 
            alterações entram em vigor imediatamente após sua publicação.
          </p>

          <h2>7. Contato</h2>
          <p>
            Para questões sobre estes termos, entre em contato:
          </p>
          <p>
            Email: suporte@site.set<br />
            Telefone: (00) 0000-0000
          </p>

          <p className="text-sm text-muted-foreground">
            Última atualização: 27 de Novembro de 2023
          </p>
        </div>
      </div>
    </main>
  )
} 