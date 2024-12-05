"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import data from "@/app/data/category";

const SubCategoryPage = () => {
  const { category, subcategory } = useParams();
  const categoryData = data[category];
  const subcategoryData = subcategory
    ? categoryData?.subcategories?.[subcategory]
    : null;

  const [layout, setLayout] = useState("grid");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copiedSymbol, setCopiedSymbol] = useState("");

  const handleCopySymbol = (symbol) => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(symbol);
      setCopiedSymbol(symbol);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const renderSymbolsGrid = (items) => (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
      {items.map((item, index) => (
        <div
          key={index}
          className="border text-center rounded-lg p-6 bg-gray-50 shadow-md hover:shadow-lg transition-all"
        >
          <button
            className="text-4xl text-center mb-4 cursor-pointer text-teal hover:scale-150 focus:outline-none"
            onClick={() => handleCopySymbol(item.symbol)}
            title={`Click to copy symbol: ${item.symbol}`}
            aria-label={`Copy symbol ${item.symbol}`}
          >
            {item.symbol}
          </button>
          <h2 className="text-xl font-semibold text-teal-600 text-center mb-2">
            {item.name}
          </h2>
          <p className="text-gray-500 text-sm mb-2">
            <strong>Unicode:</strong> {item.unicode}
          </p>
          <p className="text-gray-500 text-sm mb-2">
            <strong>Alt Code:</strong> {item.alt_code}
          </p>
          <p className="text-gray-500 text-sm mb-2">
            <strong>HTML Code:</strong> {item.html_code}
          </p>
          <p className="text-gray-500 text-sm mb-2">
            <strong>CSS Code:</strong> {item.css_code}
          </p>
        </div>
      ))}
    </div>
  );

  const renderSymbolsTable = (items) => (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border rounded-xl overflow-hidden border-gray-300">
        <thead>
          <tr className="bg-teal text-white">
            <th className="border border-gray-300 px-2 sm:px-4 py-2">Symbol</th>
            <th className="border border-gray-300 px-2 sm:px-4 py-2">Name</th>
            <th className="border border-gray-300 px-2 sm:px-4 py-2">
              Unicode
            </th>
            <th className="border border-gray-300 px-2 sm:px-4 py-2">
              Alt Code
            </th>
            <th className="border border-gray-300 px-2 sm:px-4 py-2">
              HTML Code
            </th>
            <th className="border border-gray-300 px-2 sm:px-4 py-2">
              CSS Code
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr
              key={index}
              className="cursor-pointer even:bg-gray-100 odd:bg-white hover:bg-teal-100 transition-colors duration-200"
              onClick={() => handleCopySymbol(item.symbol)}
              title={`Click to copy symbol: ${item.symbol}`}
              aria-label={`Copy symbol ${item.symbol}`}
            >
              <td className="border border-gray-300 px-2 sm:px-4 py-2 text-center text-lg sm:text-2xl hover:scale-150">
                {item.symbol}
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-2">
                {item.name}
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-2">
                {item.unicode}
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-2">
                {item.alt_code}
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-2">
                {item.html_code}
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-2">
                {item.css_code}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  if (!subcategoryData) {
    return (
      <div className="text-center mt-10">
        <h1 className="text-lg sm:text-3xl font-bold text-red-500">
          Subcategory not found!
        </h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-10 lg:px-6  flex flex-col md:flex-row md:space-x-6">
      <div className="flex-1">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-lg sm:text-xl bg-teal p-4 font-bold text-white border-b-2 lg:rounded-xl">
            {subcategoryData.info}
          </h1>
        </div>

        <h2 className="text-base sm:text-lg text-center font-medium text-gray-700 mb-4 bg-gray-100 p-4 rounded-lg shadow-sm">
          Below is the list of different{" "}
          <span className="text-teal font-semibold">
            {subcategory.replace(/([A-Z])/g, " $1")}
          </span>
          :
        </h2>

        <div className="mb-4 flex justify-end">
          <button
            onClick={() => setLayout(layout === "grid" ? "table" : "grid")}
            className="bg-teal-500 text-sm sm:text-base text-white px-4 sm:px-6 py-2 rounded-2xl shadow hover:bg-teal-600 transition-all whitespace-nowrap"
          >
            Switch to {layout === "grid" ? "Table" : "Grid"} View
          </button>
        </div>

        {layout === "grid"
          ? renderSymbolsGrid(subcategoryData.items)
          : renderSymbolsTable(subcategoryData.items)}

        {isModalOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            role="dialog"
          >
            <div className="bg-white text-teal rounded-lg shadow-lg p-6 max-w-sm w-full">
              <h2 className="text-lg sm:text-xl font-semibold mb-4">
                Symbol Copied!
              </h2>
              <p className="mb-4 text-sm sm:text-base">
                You have copied the symbol: <strong>{copiedSymbol}</strong>
              </p>
              <button
                onClick={closeModal}
                className="bg-teal text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-all"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="w-full md:w-64 bg-gradient-to-br from-teal via-teal to-blue-800 h-auto p-5 space-y-6 lg:rounded-xl text-white shadow-lg">
        <h2 className="text-base sm:text-2xl font-semibold border-b pb-3">
          {category.replace(/([A-Z])/g, " $1")}
        </h2>
        <div className="space-y-3">
          {categoryData?.subcategories &&
            Object.keys(categoryData.subcategories).map((subcat) => (
              <Link
                key={subcat}
                href={`/category/${category}/${subcat}`}
                className="block text-sm sm:text-lg bg-teal-600 hover:bg-teal-500 py-2 px-4 rounded-lg shadow-sm transition-all"
              >
                {subcat.replace(/([A-Z])/g, " $1")}
              </Link>
            ))}
        </div>
      </div>
      <button
        className="fixed bottom-4 right-4 bg-teal-500 text-white p-3 rounded-full shadow-lg hover:bg-teal-400"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑ Top
      </button>
    </div>
  );
};

export default SubCategoryPage;
