import type React from "react"
import { Header } from "./header"
import { Footer } from "./footer"

interface PageLayoutProps {
  children: React.ReactNode
  title?: string
  description?: string
}

export function PageLayout({ children, title, description }: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {(title || description) && (
          <div className="border-b bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {title && <h1 className="font-sans text-3xl font-bold text-foreground mb-2">{title}</h1>}
              {description && <p className="text-muted-foreground text-lg">{description}</p>}
            </div>
          </div>
        )}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">{children}</div>
      </main>
      <Footer />
    </div>
  )
}
