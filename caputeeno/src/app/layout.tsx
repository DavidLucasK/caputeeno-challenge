import './globals.css'
import type { Metadata } from 'next'
import { Saira } from 'next/font/google'
import { Header } from '@/components/header'
import { FilterContextProvider } from '@/contexts/filter-context'
import { DefaultProviders } from '@/components/default-providers'
import { Footer } from '@/components/footer'

const saira = Saira({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'] 
})

export const metadata: Metadata = {
  title: 'Caputeeno - DavidLucasK',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={saira.className}>
        <DefaultProviders>
          <Header/>
          {children}
          <Footer/>
        </DefaultProviders>
      </body>
    </html>
  )
}
