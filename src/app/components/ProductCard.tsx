"use client"

import { Product } from "@/app/types/product"
import { useFavorites } from "@/app/lib/favorites"
import Link from "next/link"

export default function ProductCard({ product }: { product: Product }) {
  const { favorites, toggleFavorite, mounted } = useFavorites()

  if (!mounted) return null // 🔥 hydration safe

  const isFav = favorites.includes(product.id)

  return (
    <div className="border rounded-lg p-4 flex flex-col">
      <Link href={`/products/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="h-40 object-contain mx-auto"
        />
        <h3 className="mt-2 font-semibold">{product.title}</h3>
      </Link>

      <p className="text-sm text-gray-500">{product.category}</p>
      <p className="font-bold">${product.price}</p>

      <button
        onClick={() => toggleFavorite(product.id)}
        className="mt-auto text-sm text-blue-600"
      >
        {isFav ? "★ Remove Favorite" : "☆ Add Favorite"}
      </button>
    </div>
  )
}
