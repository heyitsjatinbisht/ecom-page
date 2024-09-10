import React from "react";

const Navbar = ({
  filterCategory,
  sortByPrice,
  setFilterCategory,
  setSortByPrice,
}) => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          <button
            onClick={() => setFilterCategory("")}
            className={`p-2 ${filterCategory === "" ? "bg-gray-600" : ""}`}
          >
            All
          </button>
          <button
            onClick={() => setFilterCategory("Dresses")}
            className={`p-2 ${
              filterCategory === "Dresses" ? "bg-gray-600" : ""
            }`}
          >
            Dresses
          </button>
          <button
            onClick={() => setFilterCategory("Jackets")}
            className={`p-2 ${
              filterCategory === "Jackets" ? "bg-gray-600" : ""
            }`}
          >
            Jackets
          </button>
          <button
            onClick={() => setFilterCategory("Coats")}
            className={`p-2 ${filterCategory === "Coats" ? "bg-gray-600" : ""}`}
          >
            Coats
          </button>
          <button
            onClick={() => setFilterCategory("Shorts")}
            className={`p-2 ${
              filterCategory === "Shorts" ? "bg-gray-600" : ""
            }`}
          >
            Shorts
          </button>
        </div>
        <div>
          <label className="mr-2">Sort by:</label>
          <select
            onChange={(e) => setSortByPrice(e.target.value)}
            value={sortByPrice}
            className="p-2 bg-gray-700 text-white"
          >
            <option value="">Select</option>
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
