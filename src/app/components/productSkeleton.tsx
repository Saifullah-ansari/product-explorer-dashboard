export default function ProductSkeleton() {
  return (
    <div className="animate-pulse rounded-xl border p-4
                    bg-white dark:bg-gray-800">
      <div className="h-40 bg-gray-200 dark:bg-gray-700 rounded mb-4" />
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2" />
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2" />
    </div>
  )
}
