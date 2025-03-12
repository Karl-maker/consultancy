
import { Header } from "./Header"
import { Sidebar } from "./Sidebar"
import { Footer } from '@/components/layout/Footer'
import { CookieBanner } from '@/components/CookieBanner'

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <div className="flex flex-1 pt-16">
        <Sidebar className="w-64 border-r hidden md:block" />
        <main className="flex-1 w-full">
          <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10 lg:py-12">
            {children}
          </div>
        </main>
      </div>
      <Footer />
      <CookieBanner />
    </div>
  )
}
