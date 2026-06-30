"use client";

import { useEffect, useMemo, useState } from "react";

import { Order } from "@/types";
import { getOrders } from "@/data/getOrders";
import { updateOrderStatus } from "@/data/updateOrderStatus";
import { deleteOrder } from "@/data/deleteOrder";
import { signOut } from "@/data/signOut";

import OrderTable from "@/components/OrderTable";
import SearchBar from "@/components/SearchBar";
import FilterBar from "@/components/FilterBar";
import AdminGuard from "@/components/AdminGuard";

import { useRouter } from "next/navigation";

type FilterType = "All" | "Pending" | "Delivered";

export default function AdminDashboard() {
  const router = useRouter();

  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<FilterType>("All");

  async function loadOrders() {
    setLoading(true);

    const data = await getOrders();

    setOrders(data);

    setLoading(false);
  }

  useEffect(() => {
    loadOrders();
  }, []);

  async function handleDeliver(id: number) {
    const success = await updateOrderStatus(id);

    if (success) {
      await loadOrders();
    } else {
      alert("Failed to update order.");
    }
  }

  async function handleDelete(id: number) {
    if (!window.confirm("Delete this order?")) return;

    const success = await deleteOrder(id);

    if (success) {
      await loadOrders();
    } else {
      alert("Failed to delete order.");
    }
  }

  async function handleLogout() {
    await signOut();
    router.replace("/admin/login");
  }

  const filteredOrders = useMemo(() => {
    const query = search.toLowerCase().trim();

    return orders.filter((order) => {
      const matchesSearch =
        order.customer_name.toLowerCase().includes(query) ||
        order.phone.toLowerCase().includes(query) ||
        order.product_name.toLowerCase().includes(query);

      const matchesFilter =
        filter === "All" || order.status === filter;

      return matchesSearch && matchesFilter;
    });
  }, [orders, search, filter]);

  const pendingOrders = orders.filter(
    (order) => order.status === "Pending"
  ).length;

  const deliveredOrders = orders.filter(
    (order) => order.status === "Delivered"
  ).length;

  return (
    <AdminGuard>

      <main className="min-h-screen bg-green-50 p-8">

        <div className="max-w-7xl mx-auto">

          <div className="flex justify-between items-center mb-10">

            <h1 className="text-5xl font-bold text-green-700">
              Amma Gardens Admin
            </h1>

            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-xl"
            >
              Logout
            </button>

          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-gray-500">Total Orders</h2>
              <p className="text-5xl font-bold text-green-700 mt-3">
                {orders.length}
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-gray-500">Pending Orders</h2>
              <p className="text-5xl font-bold text-yellow-500 mt-3">
                {pendingOrders}
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-gray-500">Delivered Orders</h2>
              <p className="text-5xl font-bold text-green-600 mt-3">
                {deliveredOrders}
              </p>
            </div>

          </div>

          <SearchBar
            value={search}
            onChange={setSearch}
          />

          <FilterBar
            filter={filter}
            onChange={setFilter}
          />

          <OrderTable
            orders={filteredOrders}
            onDeliver={handleDeliver}
            onDelete={handleDelete}
          />

        </div>

      </main>

    </AdminGuard>
  );
}