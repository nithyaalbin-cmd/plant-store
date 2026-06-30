"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminSidebar() {
  const pathname = usePathname();

  const menuItems = [
    {
      name: "Dashboard",
      href: "/admin/dashboard",
      icon: "📊",
    },
    {
      name: "Products",
      href: "/admin/products",
      icon: "🌱",
    },
  ];

  return (
    <aside className="w-72 min-h-screen bg-green-800 text-white p-6">

      <h1 className="text-3xl font-bold mb-10">
        🌿 Amma Gardens
      </h1>

      <nav className="space-y-3">

        {menuItems.map((item) => (

          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition ${
              pathname === item.href
                ? "bg-green-600"
                : "hover:bg-green-700"
            }`}
          >
            <span>{item.icon}</span>

            <span>{item.name}</span>

          </Link>

        ))}

      </nav>

    </aside>
  );
}