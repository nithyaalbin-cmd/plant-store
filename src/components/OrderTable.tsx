"use client";

import { Order } from "@/types";

interface OrderTableProps {
  orders: Order[];
  onDeliver: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function OrderTable({
  orders,
  onDeliver,
  onDelete,
}: OrderTableProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-x-auto">
      <table className="w-full">

        <thead className="bg-green-700 text-white">

          <tr>
            <th className="p-4 text-left">Customer</th>
            <th className="p-4 text-left">Phone</th>
            <th className="p-4 text-left">Product</th>
            <th className="p-4 text-left">Qty</th>
            <th className="p-4 text-left">Total</th>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-center">Actions</th>
          </tr>

        </thead>

        <tbody>

          {orders.map((order) => (

            <tr
              key={order.id}
              className="border-b hover:bg-gray-50"
            >

              <td className="p-4">{order.customer_name}</td>

              <td className="p-4">{order.phone}</td>

              <td className="p-4">{order.product_name}</td>

              <td className="p-4">{order.quantity}</td>

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

              <td className="p-4">

                <div className="flex gap-2 justify-center">

                  {order.status === "Pending" && (

                    <button
                      onClick={() => onDeliver(order.id)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg"
                    >
                      Deliver
                    </button>

                  )}

                  <button
                    onClick={() => onDelete(order.id)}
                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg"
                  >
                    Delete
                  </button>

                </div>

              </td>

            </tr>

          ))}

        </tbody>

      </table>
    </div>
  );
}