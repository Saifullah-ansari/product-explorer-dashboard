"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-lg border px-3 py-1 text-sm
                 bg-white dark:bg-gray-700
                 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
      aria-label="Toggle dark mode"
    >
      {theme === "dark" ? "🌞 Light" : "🌙 Dark"}
    </button>
  )
}
