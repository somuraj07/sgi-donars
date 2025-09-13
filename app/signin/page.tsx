"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/admin/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form), // now sends { username, password }
      });

      if (!res.ok) {
        alert("Invalid credentials");
        return;
      }

      const { token } = await res.json();
      localStorage.setItem("token", token);

      // ✅ Redirect to /alladmindonars
      router.push("/alladmindonars");
    } catch (error) {
      console.error("Signin failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="w-full max-w-md bg-red-50 border border-red-200 shadow-md rounded-xl p-8">
        <h1 className="text-3xl font-bold text-center text-red-600 mb-6">
          🩸 Sign In
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-red-600 mb-1">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-red-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-red-600 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-red-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-semibold shadow-md transition"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
