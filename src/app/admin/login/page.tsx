"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    if (
      username === "admin" &&
      password === "amma123"
    ) {
      router.push("/admin/dashboard");
    } else {
      alert("Invalid username or password.");
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
              Username
            </label>

            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
          className="mt-10 w-full bg-green-700 hover:bg-green-800 text-white py-4 rounded-xl text-lg font-semibold transition"
        >
          Login
        </button>

      </div>

    </main>
  );
}