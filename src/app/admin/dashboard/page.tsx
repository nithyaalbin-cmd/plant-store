"use client";

import { useEffect, useState } from "react";
import { getOrders } from "@/data/getOrders";

export default function AdminDashboard() {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadOrders() {
      const data = await getOrders();
      setOrders(data);
      setLoading(false);
    }

    loadOrders();
  }, []);

  const pendingOrders = orders.filter(
    (order) => order.status === "Pending"
  ).length;

  const deliveredOrders = orders.filter(
    (order) => order.status === "Delivered"
  ).length;

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-green-50">
        <h1 className="text-3xl font-bold text-green-700">
          Loading Orders...
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-green-50 p-8">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold text-green-700 mb-10">
          Amma Gardens Admin
        </h1>

        {/* Stats */}

        <div className="grid md:grid-cols-3 gap-6 mb-10">

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-gray-500">
              Total Orders
            </h2>

            <p className="text-5xl font-bold text-green-700 mt-3">
              {orders.length}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-gray-500">
              Pending Orders
            </h2>

            <p className="text-5xl font-bold text-yellow-500 mt-3">
              {pendingOrders}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-gray-500">
              Delivered Orders
            </h2>

            <p className="text-5xl font-bold text-green-600 mt-3">
              {deliveredOrders}
            </p>
          </div>

        </div>

        {/* Orders Table */}

        <div className="bg-white rounded-2xl shadow-lg overflow-x-auto">

          <table className="w-full">

            <thead className="bg-green-700 text-white">

              <tr>

                <th className="text-left p-4">
                  Customer
                </th>

                <th className="text-left p-4">
                  Phone
                </th>

                <th className="text-left p-4">
                  Product
                </th>

                <th className="text-left p-4">
                  Qty
                </th>

                <th className="text-left p-4">
                  Total
                </th>

                <th className="text-left p-4">
                  Status
                </th>

              </tr>

            </thead>

            <tbody>

              {orders.map((order) => (

                <tr
                  key={order.id}
                  className="border-b hover:bg-gray-50"
                >

                  <td className="p-4">
                    {order.customer_name}
                  </td>

                  <td className="p-4">
                    {order.phone}
                  </td>

                  <td className="p-4">
                    {order.product_name}
                  </td>

                  <td className="p-4">
                    {order.quantity}
                  </td>

                  <td className="p-4 font-semibold">
                    ₹{order.total}
                  </td>

                  <td className="p-4">

                    <span
                      className={`px-3 py-1 rounded-full text-white ${
                        order.status === "Pending"
                          ? "bg-yellow-500"
                          : "bg-green-600"
                      }`}
                    >
                      {order.status}
                    </span>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </main>
  );
}