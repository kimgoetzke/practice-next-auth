import Header from "./header"
import type { ReactNode } from "react"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <div className="w-full content-center justify-center">
        <div className="container mx-auto mt-2 w-6/12 content-center justify-center">
          <main className="">{children}</main>
        </div>
      </div>
    </>
  )
}
