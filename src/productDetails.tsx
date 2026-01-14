import { getProductById } from "@/app/lib/api"

export default async function ProductDetails({
  params,
}: {
  params: { id: string }
}) {
  const product = await getProductById(params.id)

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <img src={product.image} className="h-64 mx-auto object-contain" />
      <h1 className="text-2xl font-bold mt-4">{product.title}</h1>
      <p className="text-gray-500">{product.category}</p>
      <p className="mt-4">{product.description}</p>
      <p className="text-xl font-bold mt-2">${product.price}</p>
    </div>
  )
}
