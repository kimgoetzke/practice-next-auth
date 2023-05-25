import Header from "./header"
import type { ReactNode } from "react"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <div className={inter.className}>
        <main>{children}</main>
      </div>
    </>
  )
}
