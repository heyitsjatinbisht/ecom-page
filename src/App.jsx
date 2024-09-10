import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import { products } from "./products";

function App() {
  const [filterCategory, setFilterCategory] = useState("");
  const [sortByPrice, setSortByPrice] = useState("");

  // Filtering and sorting logic
  const filteredProducts = products.filter((product) =>
    filterCategory ? product.category === filterCategory : true
  );

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortByPrice === "asc") return a.price - b.price;
    if (sortByPrice === "desc") return b.price - a.price;
    return 0;
  });

  return (
    <div className="App min-h-screen bg-gray-100">
      <Navbar
        filterCategory={filterCategory}
        sortByPrice={sortByPrice}
        setFilterCategory={setFilterCategory}
        setSortByPrice={setSortByPrice}
      />
      <ProductList products={sortedProducts} />
    </div>
  );
}

export default App;
