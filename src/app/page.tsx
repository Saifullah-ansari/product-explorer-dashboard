"use client"

import { useEffect, useState } from "react"
import { Product } from "@/app/types/product"
import { getProducts } from "@/app/lib/api"
import ProductCard from "@/app/components/ProductCard"
import SearchBar from "@/app/components/SearchBar"
import CategoryFilter from "@/app/components/CategoryFilter"
import ProductSkeleton from "@/app/components/productSkeleton"
import Pagination from "@/app/components/pagination"
import { useFavorites } from "@/app/lib/favorites"

export default function Home() {
  const [products, setProducts] = useState<Product[]>([])
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("")
  const [showFav, setShowFav] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [sort, setSort] = useState("")
  const [page, setPage] = useState(1)

  const ITEMS_PER_PAGE = 12
  const { favorites, mounted } = useFavorites()

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch(() => setError("Failed to load products"))
      .finally(() => setLoading(false))
  }, [])

  // Reset page when filters change
  useEffect(() => {
    setPage(1)
  }, [search, category, sort, showFav])

  if (!mounted || loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <ProductSkeleton key={i} />
        ))}
      </div>
    )
  }

  if (error) return <p className="p-4 text-red-500">{error}</p>

  const categories = [...new Set(products.map(p => p.category))]

  const filtered = products.filter(p => {
    if (showFav && !favorites.includes(p.id)) return false
    if (category && p.category !== category) return false
    if (!p.title.toLowerCase().includes(search.toLowerCase())) return false
    return true
  })

  const sorted = [...filtered].sort((a, b) => {
    if (sort === "low") return a.price - b.price
    if (sort === "high") return b.price - a.price
    return 0
  })

  const paginated = sorted.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  )

  return (
    <main className="p-4">
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <SearchBar value={search} onChange={setSearch} />

<select
  className="rounded-lg border px-4 py-2
             bg-white text-gray-900
             dark:bg-gray-800 dark:text-gray-100
             dark:border-gray-700
             focus:outline-none focus:ring-2
             focus:ring-black dark:focus:ring-white"
  value={sort}
  onChange={e => setSort(e.target.value)}
  aria-label="Sort products by price"
>
  <option value="">Sort by price</option>
  <option value="low">Low → High</option>
  <option value="high">High → Low</option>
</select>


        <CategoryFilter
          categories={categories}
          value={category}
          onChange={setCategory}
        />

        <button
          onClick={() => setShowFav(!showFav)}
          className="border px-4 py-2 rounded-lg"
        >
          Favorites
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {paginated.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <Pagination
        currentPage={page}
        totalItems={sorted.length}
        itemsPerPage={ITEMS_PER_PAGE}
        onPageChange={setPage}
      />
    </main>
  )
}
