"use client";

import { useState } from "react";

interface CheckoutFormProps {
  productName: string;
  quantity: number;
  total: number;
  onSubmit: (data: {
    customer_name: string;
    phone: string;
    house_name: string;
    place: string;
    district: string;
    pincode: string;
    landmark: string;
  }) => void;
}

const districts = [
  "Thiruvananthapuram",
  "Kollam",
  "Pathanamthitta",
  "Alappuzha",
  "Kottayam",
  "Idukki",
  "Ernakulam",
  "Thrissur",
  "Palakkad",
  "Malappuram",
  "Kozhikode",
  "Wayanad",
  "Kannur",
  "Kasaragod",
];

export default function CheckoutForm({
  productName,
  quantity,
  total,
  onSubmit,
}: CheckoutFormProps) {
  const [form, setForm] = useState({
    customer_name: "",
    phone: "",
    house_name: "",
    place: "",
    district: "",
    pincode: "",
    landmark: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (
      !form.customer_name ||
      !form.phone ||
      !form.house_name ||
      !form.place ||
      !form.district ||
      !form.pincode
    ) {
      alert("Please fill all required fields.");
      return;
    }

    onSubmit(form);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-xl p-8 space-y-6"
    >
      <h2 className="text-3xl font-bold text-green-700">
        Delivery Details
      </h2>

      <input
        type="text"
        name="customer_name"
        placeholder="Full Name"
        value={form.customer_name}
        onChange={handleChange}
        className="w-full border rounded-lg p-3"
      />

      <input
        type="tel"
        name="phone"
        placeholder="WhatsApp Number"
        value={form.phone}
        onChange={handleChange}
        className="w-full border rounded-lg p-3"
      />

      <input
        type="text"
        name="house_name"
        placeholder="House Name"
        value={form.house_name}
        onChange={handleChange}
        className="w-full border rounded-lg p-3"
      />

      <input
        type="text"
        name="place"
        placeholder="Place"
        value={form.place}
        onChange={handleChange}
        className="w-full border rounded-lg p-3"
      />

      <select
        name="district"
        value={form.district}
        onChange={handleChange}
        className="w-full border rounded-lg p-3"
      >
        <option value="">Select District</option>

        {districts.map((district) => (
          <option key={district} value={district}>
            {district}
          </option>
        ))}
      </select>

      <input
        type="text"
        name="pincode"
        placeholder="Pincode"
        value={form.pincode}
        onChange={handleChange}
        className="w-full border rounded-lg p-3"
      />

      <input
        type="text"
        name="landmark"
        placeholder="Landmark (Optional)"
        value={form.landmark}
        onChange={handleChange}
        className="w-full border rounded-lg p-3"
      />

      <div className="border-t pt-6 space-y-2">
        <h3 className="text-xl font-bold">
          Order Summary
        </h3>

        <p>
          <strong>Product:</strong> {productName}
        </p>

        <p>
          <strong>Quantity:</strong> {quantity}
        </p>

        <p className="text-2xl font-bold text-green-700">
          ₹{total}
        </p>
      </div>

      <button
        type="submit"
        className="w-full bg-green-700 hover:bg-green-800 text-white py-4 rounded-xl font-semibold"
      >
        Place Order
      </button>
    </form>
  );
}