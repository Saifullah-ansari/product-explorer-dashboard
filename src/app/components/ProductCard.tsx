"use client"

import { Product } from "@/app/types/product"
import { useFavorites } from "@/app/lib/favorites"
import Link from "next/link"

export default function ProductCard({ product }: { product: Product }) {
  const { favorites, toggleFavorite, mounted } = useFavorites()
  if (!mounted) return null

  const isFav = favorites.includes(product.id)

  return (
    <div
      className="group rounded-xl border shadow-sm transition
                 bg-white text-gray-900
                 dark:bg-gray-800 dark:text-gray-100
                 hover:shadow-lg overflow-hidden"
    >
      <Link href={`/products/${product.id}`}>
        <div className="h-48 flex items-center justify-center p-4">
          <img
            src={product.image}
            alt={product.title}
            className="h-full object-contain group-hover:scale-105 transition"
          />
        </div>
      </Link>

      <div className="p-4 flex flex-col gap-1">
        <h3 className="font-semibold line-clamp-2">
          {product.title}
        </h3>

        <p className="text-sm text-gray-500 dark:text-gray-400">
          {product.category}
        </p>

        <div className="flex items-center justify-between mt-2">
          <span className="font-bold text-lg">
            ${product.price}
          </span>

          <button
            onClick={() => toggleFavorite(product.id)}
            aria-label={isFav ? "Remove from favorites" : "Add to favorites"}
            className="text-xl focus:outline-none
                       focus:ring-2 focus:ring-black dark:focus:ring-white"
          >
            {isFav ? "❤️" : "🤍"}
          </button>
        </div>
      </div>
    </div>
  )
}
