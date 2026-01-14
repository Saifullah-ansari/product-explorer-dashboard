"use client"

export default function CategoryFilter({ categories, value, onChange }: any) {
  return (
    <select
      className="rounded-lg border border-gray-300 px-4 py-2
                 focus:outline-none focus:ring-2 focus:ring-black"
      value={value}
      onChange={e => onChange(e.target.value)}
    >
      <option value="">All Categories</option>
      {categories.map((c: string) => (
        <option key={c}>{c}</option>
      ))}
    </select>
  )
}
