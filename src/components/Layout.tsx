import { ReactNode, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className={`flex-grow transition-all duration-300 ${isMenuOpen ? 'blur-md pointer-events-none scale-[0.98]' : 'blur-0'}`}>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout