"use client"

export default function SearchBar({ value, onChange }: any) {
  return (
    <input
      className="border p-2 w-full rounded"
      placeholder="Search products..."
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  )
}
