"use client"

export default function CategoryFilter({ categories, value, onChange }: any) {
  return (
    <select
      className="border p-2 rounded"
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
