import Image from 'next/image'

interface Testimonial {
  content: string
  author: {
    name: string
    role: string
    avatar: string
  }
}

const testimonials: Testimonial[] = [
  {
    content:
      'Criar minha loja com o site.set foi a melhor decisão para o meu negócio. A plataforma é super intuitiva, e consigo colocar meus produtos à venda em poucos minutos.',
    author: {
      name: 'Annette Rowe',
      role: 'CEO na Anna Corp',
      avatar: '/testimonials/01.png',
    },
  },
  {
    content:
      'Transformar minha ideia em uma loja online foi fácil e rápido. Adorei as opções de personalização e a simplicidade para gerenciar os pedidos.',
    author: {
      name: 'Jacob Jones',
      role: 'CEO na JJ Corp',
      avatar: '/testimonials/02.png',
    },
  },
]

export function Testimonials() {
  return (
    <section className="container py-24">
      <div className="flex flex-col items-center gap-12">
        <h2 className="text-balance text-center text-3xl font-bold">
          Quem utiliza, aprova!
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author.name}
              className="flex flex-col gap-6 rounded-lg bg-card border p-12"
            >
              <p className="text-balance text-muted-foreground">
                {testimonial.content}
              </p>

              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.author.avatar}
                    alt={testimonial.author.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col">
                  <strong className="text-sm">{testimonial.author.name}</strong>
                  <span className="text-xs text-muted-foreground">
                    {testimonial.author.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 