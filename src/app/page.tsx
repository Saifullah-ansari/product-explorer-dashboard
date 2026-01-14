"use client"

import { useEffect, useState } from "react"
import { Product } from "@/app/types/product"
import { getProducts } from "@/app/lib/api"
import ProductCard from "@/app/components/ProductCard"
import SearchBar from "@/app/components/SearchBar"
import CategoryFilter from "@/app/components/CategoryFilter"
import { useFavorites } from "@/app/lib/favorites"
import Loader from "./components/Loader"



export default function Home() {
  const [products, setProducts] = useState<Product[]>([])
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("")
  const [showFav, setShowFav] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  const { favorites, mounted } = useFavorites()

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch(() => setError("Failed to load products"))
      .finally(() => setLoading(false))
  }, [])

  if (!mounted || loading) return <Loader />
  if (error) return <p className="p-4 text-red-500">{error}</p>

  const categories = [...new Set(products.map(p => p.category))]

  const filtered = products.filter(p => {
    if (showFav && !favorites.includes(p.id)) return false
    if (category && p.category !== category) return false
    if (!p.title.toLowerCase().includes(search.toLowerCase())) return false
    return true
  })

  return (
    <main className="p-4">
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <SearchBar value={search} onChange={setSearch} />
        <CategoryFilter
          categories={categories}
          value={category}
          onChange={setCategory}
        />
        <button
          onClick={() => setShowFav(!showFav)}
          className="border px-4 rounded"
        >
          Favorites
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filtered.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </main>
  )
}

