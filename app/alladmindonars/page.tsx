"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";

interface Donar {
  id: string;
  name: string;
  email: string;
  registerNo: string;
  bloodGroup: string;
  department: string;
  avaliable: boolean;
  phone: string;
}

export default function AllDonarsPage() {
  const [donars, setDonars] = useState<Donar[]>([]);
  const [selectedDept, setSelectedDept] = useState<string | null>(null);
  const [selectedBlood, setSelectedBlood] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    // 🚨 If no token, redirect immediately
    if (!token) {
      window.location.href = "/signin";
      return;
    }

    const getData = async () => {
      try {
        const res = await fetch("/api/donar", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (res.status === 401) {
          // invalid/expired token → logout + redirect
          localStorage.removeItem("token");
          window.location.href = "/signin";
          return;
        }

        const data = await res.json();
        setDonars(data);
        setAuthorized(true);
      } catch (error) {
        console.error("Failed to fetch donors:", error);
        localStorage.removeItem("token");
        window.location.href = "/signin";
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  const departments = Array.from(new Set(donars.map((d) => d.department))).sort();
  const bloodGroups = Array.from(new Set(donars.map((d) => d.bloodGroup))).sort();

  const filteredDonars = donars.filter((donar) => {
    return (
      (!selectedDept || donar.department === selectedDept) &&
      (!selectedBlood || donar.bloodGroup === selectedBlood)
    );
  });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Checking access...
      </div>
    );
  }

  if (!authorized) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600 font-semibold">
        Redirecting to Sign In...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-red-600 mb-4 text-center">
          All Donors
        </h1>

        {/* Content */}
        <div className="flex flex-col sm:flex-row gap-6">
          {/* Filters */}
          <div className="w-full sm:w-1/4 border rounded-md shadow-sm bg-red-50 p-4">
            {/* Department Filter */}
            <h2 className="text-lg font-semibold mb-2 text-red-600">Department</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              <button
                onClick={() => setSelectedDept(null)}
                className={`text-sm px-2 py-1 rounded ${
                  !selectedDept
                    ? "bg-red-500 text-white"
                    : "bg-white border border-red-300"
                }`}
              >
                All
              </button>
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`text-sm px-2 py-1 rounded ${
                    selectedDept === dept
                      ? "bg-red-500 text-white"
                      : "bg-white border border-red-300"
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>

            {/* Blood Group Filter */}
            <h2 className="text-lg font-semibold mb-2 text-red-600">Blood Group</h2>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedBlood(null)}
                className={`text-sm px-2 py-1 rounded ${
                  !selectedBlood
                    ? "bg-red-500 text-white"
                    : "bg-white border border-red-300"
                }`}
              >
                All
              </button>
              {bloodGroups.map((bg) => (
                <button
                  key={bg}
                  onClick={() => setSelectedBlood(bg)}
                  className={`text-sm px-2 py-1 rounded ${
                    selectedBlood === bg
                      ? "bg-red-500 text-white"
                      : "bg-white border border-red-300"
                  }`}
                >
                  {bg}
                </button>
              ))}
            </div>
          </div>

          {/* Donor Cards */}
          <div className="w-full sm:w-3/4">
            {filteredDonars.length === 0 ? (
              <p className="text-gray-500">
                No donors found for selected filters.
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredDonars.map((donar) => (
                  <div
                    key={donar.id}
                    className="bg-red-50 border border-red-200 rounded-xl p-5 shadow hover:shadow-lg transition flex flex-col justify-between"
                  >
                    {/* Header */}
                    <div className="mb-3">
                      <h2 className="text-xl font-bold text-red-600">
                        {donar.name}
                      </h2>
                      <p className="text-sm text-gray-600">
                        🆔 Reg No: {donar.registerNo}
                      </p>
                    </div>

                    {/* Details */}
                    <div className="space-y-1 text-sm">
                      <p className="flex items-center gap-1 text-gray-700">
                        📧 <span>{donar.email}</span>
                      </p>
                      <p className="flex items-center gap-1 text-gray-700">
                        🏫 <span>{donar.department}</span>
                      </p>
                      <p className="flex items-center gap-1 text-gray-700">
                        🩸 <span>{donar.bloodGroup}</span>
                      </p>
                      <p className="flex items-center gap-1">
                        ✅ Available:{" "}
                        <span
                          className={`font-semibold ${
                            donar.avaliable ? "text-green-600" : "text-red-600"
                          }`}
                        >
                          {donar.avaliable ? "Yes" : "No"}
                        </span>
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="mt-4 flex justify-end">
                      <a
                        href={`tel:${donar.phone}`}
                        className="p-2 rounded-full bg-red-500 hover:bg-red-600 text-white shadow-md"
                      >
                        <Phone size={18} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
