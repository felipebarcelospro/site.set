'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/shared/design-system/dialog'
import { Button } from '@/shared/design-system/button'
import { Input } from '@/shared/design-system/input'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/shared/design-system/form'
import { Check } from 'lucide-react'

const formSchema = z.object({
  email: z.string().email('E-mail inválido'),
})

type FormValues = z.infer<typeof formSchema>

interface WaitlistDialogProps {
  children: React.ReactNode
}

const testimonials = [
  { avatar: 'https://github.com/diego3g.png' },

  { avatar: 'https://github.com/jakeliny.png' },
  { avatar: 'https://github.com/felipebarcelospro.png' },
]

export function WaitlistDialog({ children }: WaitlistDialogProps) {
  const [open, setOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  })

  // Verifica se o usuário já está inscrito
  useEffect(() => {
    const email = localStorage.getItem('@site.set:waitlist-email')
    if (email) {
      setIsSubscribed(true)
    }
  }, [])

  async function onSubmit(data: FormValues) {
    try {
      setIsLoading(true)
      
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Erro ao cadastrar e-mail')
      }

      // Salva o email no localStorage
      localStorage.setItem('@site.set:waitlist-email', data.email)
      setIsSubscribed(true)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <div className="flex flex-col items-center gap-6 py-6">
          {isSubscribed ? (
            <>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/10">
                <Check className="h-6 w-6 text-green-500" />
              </div>

              <div className="flex flex-col items-center gap-2 text-center">
                <DialogTitle className="text-2xl font-bold">
                  Você está na lista!
                </DialogTitle>
                <p className="text-muted-foreground">
                  Obrigado por se juntar a nós, você será o primeiro a saber quando estivermos prontos!
                </p>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="flex -space-x-2">
                  {testimonials.map((testimonial, index) => (
                    <div 
                      key={index} 
                      className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-background"
                    >
                      <Image
                        src={testimonial.avatar}
                        alt=""
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  <strong className="text-green-500">1,500+</strong> pessoas já se inscreveram!
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center justify-center">
                <Image src="/logo.svg" alt="Site.Set" width={116} height={32} />
              </div>

              <div className="flex flex-col items-center gap-2 text-center">
                <DialogTitle className="text-2xl font-bold">
                  Entre para a lista de espera
                </DialogTitle>
                <p className="text-muted-foreground">
                  Seja o primeiro a saber quando lançarmos o Site.Set
                </p>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input 
                            type="email" 
                            placeholder="Seu melhor e-mail" 
                            className="h-12"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full h-12" 
                    disabled={isLoading}
                  >
                    {isLoading ? 'Cadastrando...' : 'Entrar para lista'}
                  </Button>
                </form>
              </Form>

              <div className="flex flex-col items-center gap-2">
                <div className="flex -space-x-2">
                  {testimonials.map((testimonial, index) => (
                    <div 
                      key={index} 
                      className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-background"
                    >
                      <Image
                        src={testimonial.avatar}
                        alt=""
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  Junte-se a <strong className="text-green-500">1,500+</strong> pessoas na lista de espera
                </p>
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
} 