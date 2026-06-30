"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "@/data/signIn";

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    setLoading(true);

    const success = await signIn(email, password);

    setLoading(false);

    if (success) {
      router.push("/admin/dashboard");
    } else {
      alert("Invalid email or password.");
    }
  }

  return (
    <main className="min-h-screen bg-green-50 flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-10">

        <h1 className="text-4xl font-bold text-center text-green-700">
          Amma Gardens
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-10">
          Admin Login
        </p>

        <div className="space-y-6">

          <div>
            <label className="block font-semibold mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-xl px-4 py-3"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded-xl px-4 py-3"
            />
          </div>

        </div>

        <button
          onClick={handleLogin}
          disabled={loading}
          className="mt-10 w-full bg-green-700 hover:bg-green-800 disabled:bg-gray-400 text-white py-4 rounded-xl text-lg font-semibold transition"
        >
          {loading ? "Signing In..." : "Login"}
        </button>

      </div>

    </main>
  );
}