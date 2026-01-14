"use client"

interface PaginationProps {
  currentPage: number
  totalItems: number
  itemsPerPage: number
  onPageChange: (page: number) => void
}

export default function Pagination({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}: PaginationProps) {
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  if (totalPages <= 1) return null

  const canGoPrev = currentPage > 1
  const canGoNext = currentPage < totalPages

  return (
    <nav
      className="flex justify-center items-center gap-4 mt-8"
      aria-label="Pagination"
    >
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={!canGoPrev}
        className="px-4 py-2 rounded-lg border
                   disabled:opacity-50
                   focus:outline-none focus:ring-2 focus:ring-black
                   dark:focus:ring-white"
        aria-label="Previous page"
      >
        Prev
      </button>

      <span className="text-sm">
        Page <strong>{currentPage}</strong> of{" "}
        <strong>{totalPages}</strong>
      </span>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={!canGoNext}
        className="px-4 py-2 rounded-lg border
                   disabled:opacity-50
                   focus:outline-none focus:ring-2 focus:ring-black
                   dark:focus:ring-white"
        aria-label="Next page"
      >
        Next
      </button>
    </nav>
  )
}
