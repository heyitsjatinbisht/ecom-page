import React from "react";

const ProductList = ({ products }) => {
  return (
    <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <p className="text-gray-700">Category: {product.category}</p>
          <p className="text-gray-900">Price: ${product.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
