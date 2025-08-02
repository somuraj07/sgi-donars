"use client";

import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

export default function DonarForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    registerNo: "",
    phone: "",
    bloodGroup: "",
    department: "",
    avaliable: true,
  });

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/donar", form);
      toast.success("Donor created successfully!");
      setForm({
        name: "",
        email: "",
        registerNo: "",
        phone: "",
        bloodGroup: "",
        department: "",
        avaliable: true,
      });
    } catch (err) {
      toast.error("Error creating donor");
      console.error(err);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4 bg-red-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-red-700 text-center">Donor Registration</h1>
      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full border border-red-200 p-2 rounded bg-white text-black"
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full border border-red-200 p-2 rounded bg-white text-black"
          required
        />

        <input
          type="text"
          placeholder="Register No"
          value={form.registerNo}
          onChange={(e) => setForm({ ...form, registerNo: e.target.value })}
          className="w-full border border-red-200 p-2 rounded bg-white text-black"
          required
        />

        <input
          type="text"
          placeholder="Phone Number"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="w-full border border-red-200 p-2 rounded bg-white text-black"
          required
        />

        <input
          type="text"
          placeholder="Department"
          value={form.department}
          onChange={(e) => setForm({ ...form, department: e.target.value })}
          className="w-full border border-red-200 p-2 rounded bg-white text-black"
          required
        />

        {/* Mini Blood Group Drawer */}
        <div className="relative">
          <p className="mb-1 font-semibold text-red-700">Blood Group:</p>
          <button
            type="button"
            onClick={() => setDrawerOpen(!drawerOpen)}
            className="w-full bg-white border border-red-300 p-2 rounded text-left text-black"
          >
            {form.bloodGroup || "Select Blood Group"}
          </button>

          {drawerOpen && (
            <div className="absolute left-0 top-full mt-1 w-full bg-white border border-red-300 rounded shadow-md z-10 max-h-40 overflow-y-auto">
              {bloodGroups.map((group) => (
                <button
                  key={group}
                  onClick={() => {
                    setForm({ ...form, bloodGroup: group });
                    setDrawerOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-red-100 text-black"
                >
                  {group}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Available Checkbox */}
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={form.avaliable}
            onChange={(e) => setForm({ ...form, avaliable: e.target.checked })}
          />
          <label className="text-sm text-black">Available to donate</label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-red-600 text-white p-2 rounded hover:bg-red-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
