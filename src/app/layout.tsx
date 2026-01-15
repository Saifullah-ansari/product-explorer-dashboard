import "./globals.css"
import { Providers } from "./provider"
import ThemeToggle from "@/app/components/theme"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className="min-h-screen">
        <Providers>
          <header className="border-b bg-white dark:bg-gray-900">

            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
             <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
  🛍 Product Explorer
</h1>

              <ThemeToggle />
            </div>
          </header>

          <main className="max-w-7xl mx-auto px-4 py-6">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
