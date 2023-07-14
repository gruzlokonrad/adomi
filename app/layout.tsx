import Script from 'next/script'
import './globals.scss'
import { Montserrat } from 'next/font/google'
import { Suspense } from 'react'
import Analytics from '@/components/analytics'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Website for your business',
  description: 'Website for small business',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body className={`${montserrat.className} flex flex-col h-screen`}>
        <Suspense>
          <Analytics />
        </Suspense>
        <main className='flex-grow'>
          {children}
        </main>
      </body>
    </html>
  )
}
