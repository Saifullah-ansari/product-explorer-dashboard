"use client"

import { useEffect, useState } from "react"

export function useFavorites() {
  const [favorites, setFavorites] = useState<number[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem("favorites")
    setFavorites(stored ? JSON.parse(stored) : [])
  }, [])

  const toggleFavorite = (id: number) => {
    const updated = favorites.includes(id)
      ? favorites.filter(f => f !== id)
      : [...favorites, id]

    setFavorites(updated)
    localStorage.setItem("favorites", JSON.stringify(updated))
  }

  return { favorites, toggleFavorite, mounted }
}
