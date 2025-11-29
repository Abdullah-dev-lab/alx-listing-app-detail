import React from "react";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm py-4 px-6 flex flex-col gap-4">
      <div className="flex items-center justify-between w-full">
        <div className="text-2xl font-bold text-blue-600 cursor-pointer">
          StayFinder
        </div>

        <div className="flex items-center w-1/2 max-w-lg border rounded-full overflow-hidden shadow-sm">
          <input
            type="text"
            placeholder="Search destinations, villas, rooms..."
            className="w-full px-4 py-2 outline-none"
          />
          <button className="px-4 py-2 bg-blue-600 text-white font-medium">
            Search
          </button>
        </div>

        <div className="flex items-center gap-3">
          <button className="px-4 py-2 text-blue-600 font-medium hover:underline">
            Sign In
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-full font-medium">
            Sign Up
          </button>
        </div>
      </div>

      <nav className="flex items-center gap-6 text-gray-600 font-medium overflow-x-auto">
        {[
          "Rooms",
          "Mansion",
          "Countryside",
          "Beach House",
          "City Apartment",
          "Farm Stay",
          "Luxury Suites",
        ].map((type) => (
          <span
            key={type}
            className="cursor-pointer hover:text-blue-600 whitespace-nowrap"
          >
            {type}
          </span>
        ))}
      </nav>
    </header>
  );
}