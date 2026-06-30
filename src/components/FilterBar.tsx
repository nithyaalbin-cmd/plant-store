"use client";

interface FilterBarProps {
  filter: "All" | "Pending" | "Delivered";
  onChange: (filter: "All" | "Pending" | "Delivered") => void;
}

export default function FilterBar({
  filter,
  onChange,
}: FilterBarProps) {
  const filters: ("All" | "Pending" | "Delivered")[] = [
    "All",
    "Pending",
    "Delivered",
  ];

  return (
    <div className="flex gap-3 mb-6 flex-wrap">
      {filters.map((item) => (
        <button
          key={item}
          onClick={() => onChange(item)}
          className={`px-5 py-2 rounded-xl font-semibold transition ${
            filter === item
              ? "bg-green-700 text-white"
              : "bg-white border border-gray-300 hover:bg-gray-100"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}