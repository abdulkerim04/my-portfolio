import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import { I18nProvider } from '../providers/I18nProvider'
import Layout from '../components/Layout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Abdulkerim Işık - Portfolio',
  description: 'Bilgisayar Mühendisliği öğrencisi | Medeniyet Üniversitesi | Modern web geliştirme ve tasarım uzmanı',
}

function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <I18nProvider>
            <Layout>
              {children}
            </Layout>
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout