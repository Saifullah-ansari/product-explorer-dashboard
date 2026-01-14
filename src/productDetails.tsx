import { getProductById } from "@/app/lib/api"

export default async function ProductDetails({
  params,
}: {
  params: { id: string }
}) {
  const product = await getProductById(params.id)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="bg-white rounded-xl p-6 flex justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="h-80 object-contain"
        />
      </div>

      <div>
        <h1 className="text-3xl font-bold">{product.title}</h1>
        <p className="text-gray-500 mt-1">{product.category}</p>

        <p className="mt-4 text-gray-700 leading-relaxed">
          {product.description}
        </p>

        <p className="text-2xl font-bold mt-6">${product.price}</p>
      </div>
    </div>
  )
}
