"use client";

import { useEffect, useState } from "react";

interface Donar {
  id: string;
  name: string;
  email: string;
  registerNo: string;
  bloodGroup: string;
  department: string;
  avaliable: boolean;
}

export default function AllDonarsPage() {
  const [donars, setDonars] = useState<Donar[]>([]);
  const [selectedDept, setSelectedDept] = useState<string | null>(null);
  const [selectedBlood, setSelectedBlood] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false); 

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("/api/donar");
        const data = await res.json();
        setDonars(data);
      } catch (error) {
        console.error("Failed to fetch donors:", error);
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

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-red-600 mb-4 text-center">
          All Donors
        </h1>

        {/* Toggle button for mobile */}
        <div className="sm:hidden mb-4 flex justify-end">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="bg-red-500 text-white px-4 py-2 rounded shadow"
          >
            {showFilters ? "Hide Filters" : "Show Filters"}
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-col sm:flex-row gap-6">
          {/* Filters */}
          <div
            className={`w-full sm:w-1/4 border rounded-md shadow-sm bg-red-50 p-4 transition-all duration-300 ${
              showFilters ? "block" : "hidden"
            } sm:block`}
          >
            {/* Department Filter */}
            <h2 className="text-lg font-semibold mb-2 text-red-600">Department</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              <button
                onClick={() => setSelectedDept(null)}
                className={`text-sm px-2 py-1 rounded ${
                  !selectedDept ? "bg-red-500 text-white" : "bg-white border border-red-300"
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
                  !selectedBlood ? "bg-red-500 text-white" : "bg-white border border-red-300"
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
            {loading ? (
              <p className="text-gray-500">Loading donors...</p>
            ) : filteredDonars.length === 0 ? (
              <p className="text-gray-500">No donors found for selected filters.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {filteredDonars.map((donar) => (
                  <div
                    key={donar.id}
                    className="bg-white border border-red-200 rounded-lg p-4 shadow hover:shadow-md transition"
                  >
                    <h2 className="text-lg font-bold text-red-600 mb-1">{donar.name}</h2>
                    <p className="text-sm">📧 {donar.email}</p>
                    <p className="text-sm">🆔 Reg No: {donar.registerNo}</p>
                    <p className="text-sm">🏫 {donar.department}</p>
                    <p className="text-sm">🩸 {donar.bloodGroup}</p>
                    <p className="text-sm mt-1">
                      ✅ Available:{" "}
                      <span className={donar.avaliable ? "text-green-600" : "text-red-600"}>
                        {donar.avaliable ? "Yes" : "No"}
                      </span>
                    </p>
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
