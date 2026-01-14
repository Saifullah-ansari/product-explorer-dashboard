"use client"

export default function SearchBar({ value, onChange }: any) {
  return (
    <input
      className="w-full rounded-lg border border-gray-300 px-4 py-2
                 focus:outline-none focus:ring-2 focus:ring-black"
      placeholder="Search products..."
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  )
}
