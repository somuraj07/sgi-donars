"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigation = (path: string) => {
    setMenuOpen(false);
    router.push(path);
  };

  return (
    <>
      
      <nav className="bg-red-600 text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => handleNavigation("/")}>
            <span className="text-2xl">🩸</span>
            <span className="font-extrabold text-2xl tracking-tight">SGI Donors</span>
          </div>

          <div className="hidden sm:flex space-x-6">
            <button onClick={() => handleNavigation("/api/donar/new")} className="hover:text-yellow-200 font-medium">Register</button>
            <button onClick={() => handleNavigation("/alldonars")} className="hover:text-yellow-200 font-medium">All Donors</button>
            <button onClick={() => handleNavigation("/allfeedbacks")} className="hover:text-yellow-200 font-medium">About</button>
            <button onClick={() => handleNavigation("/signin")} className="hover:text-yellow-200 font-medium">Admin</button>

          </div>

          <div className="sm:hidden">
            <button onClick={() => setMenuOpen(true)} className="text-3xl">☰</button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 sm:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      
      <div
        className={`fixed right-0 top-16 w-1/2 max-h-[400px] bg-red-700 text-white z-50 rounded-bl-xl shadow-xl transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 sm:hidden`}
      >
        <div className="flex justify-between items-center p-4 border-b border-red-300">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={() => setMenuOpen(false)} className="text-xl font-bold">×</button>
        </div>

        <div className="flex flex-col px-6 py-4 space-y-4">
          <button onClick={() => handleNavigation("/api/donar/new")} className="hover:text-yellow-200 text-left font-medium">Register</button>
          <button onClick={() => handleNavigation("/alldonars")} className="hover:text-yellow-200 text-left font-medium">All Donors</button>
          <button onClick={() => handleNavigation("/allfeedbacks")} className="hover:text-yellow-200 text-left font-medium">About</button>
          <button onClick={() => handleNavigation("/signin")} className="hover:text-yellow-200 text-left font-medium">Admin</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
