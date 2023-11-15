import React, { ReactNode } from 'react'
import { Header } from '@/components/ui/header/header'
import { Footer } from '@/components/ui/footer/footer'
type LayoutType = {
  children: ReactNode
}

export const Layout = ({ children }: LayoutType) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
