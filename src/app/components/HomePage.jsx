"use client";
import React, { useState } from "react";
import data from "../data/data.json";

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copiedSymbol, setCopiedSymbol] = useState("");

  const renderTableRows = (category) => {
    return data[category].map((item, index) => (
      <tr
        key={index}
        className="border-b even:bg-gray-100 odd:bg-white hover:bg-teal-100 transition-colors duration-200"
      >
        <td
          className="px-4 sm:px-6 py-2 sm:py-3 text-center cursor-pointer text-teal hover:scale-150 text-base sm:text-lg md:text-xl"
          onClick={() => handleCopySymbol(item.symbol)}
          title="Click to copy"
        >
          {item.symbol}
        </td>
        <td className="px-4 sm:px-6 py-2 sm:py-3 text-center text-sm sm:text-base md:text-lg">
          {item.unicode}
        </td>
        <td className="px-4 sm:px-6 py-2 sm:py-3 text-center text-sm sm:text-base md:text-lg">
          {item.alt_code}
        </td>
        <td className="px-4 sm:px-6 py-2 sm:py-3 text-center text-sm sm:text-base md:text-lg">
          {item.html_code}
        </td>
        <td className="px-4 sm:px-6 py-2 sm:py-3 text-center text-sm sm:text-base md:text-lg">
          {item.css_code}
        </td>
      </tr>
    ));
  };

  const handleCopySymbol = (symbol) => {
    if (typeof window !== "undefined") {
      navigator.clipboard
        .writeText(symbol)
        .then(() => {
          setCopiedSymbol(symbol);
          setIsModalOpen(true);
        })
        .catch((err) => {
          console.error("Failed to copy text: ", err);
          // Optionally display a message to the user if it fails
        });
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto mt-10 flex flex-col md:flex-row md:space-x-6 lg:px-6">
      {/* Main Content */}
      <div className="flex-1 w-full mb-6 md:mb-0">
        {/* Information Section */}
        <section className="mb-6 sm:mb-8 bg-gradient-to-r from-teal-500 to-teal-700 p-4 sm:p-6 lg:rounded-lg shadow-md border border-teal">
          <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed tracking-wide">
            Discover a comprehensive list of ALT code shortcuts for typing
            special characters and symbols not found on your keyboard. Easily
            copy and paste these symbols into any text if your keyboard lacks a
            numeric keypad. Simply click a symbol to copy it to your clipboard.
          </p>
        </section>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white text-teal rounded-lg shadow-lg p-6 max-w-sm w-full transition-all transform scale-100 hover:scale-105">
              <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-4">
                Symbol Copied!
              </h2>
              <p className="mb-4 text-sm sm:text-base md:text-lg">
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

        <h1 className="text-lg sm:text-2xl md:text-3xl font-bold text-center mb-10 text-teal">
          Alt Codes Table
        </h1>

        {Object.keys(data).map((category) => (
          <div key={category} className="mb-10" id={category}>
            {/* <h2 className="text-lg text-center sm:text-xl md:text-2xl font-semibold mb-3 capitalize text-teal">
              {category.replace(/([A-Z])/g, " $1")}
            </h2> */}
            <div className="overflow-x-auto">
              <table className="table-auto min-w-full border-collapse border border-teal-200 rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-teal text-white sticky top-0 z-10">
                  <tr>
                    <th className="px-4 sm:px-6 py-2 sm:py-3 border text-xs sm:text-sm md:text-lg">
                      Symbol
                    </th>
                    <th className="px-4 sm:px-6 py-2 sm:py-3 border text-xs sm:text-sm md:text-lg">
                      Unicode
                    </th>
                    <th className="px-4 sm:px-6 py-2 sm:py-3 border text-xs sm:text-sm md:text-lg">
                      Alt Code
                    </th>
                    <th className="px-4 sm:px-6 py-2 sm:py-3 border text-xs sm:text-sm md:text-lg">
                      HTML Code
                    </th>
                    <th className="px-4 sm:px-6 py-2 sm:py-3 border text-xs sm:text-sm md:text-lg">
                      CSS Code
                    </th>
                  </tr>
                </thead>
                <tbody>{renderTableRows(category)}</tbody>
              </table>
            </div>
          </div>
        ))}
      </div>

      {/* Sidebar */}
      <div className="sidebar w-full md:w-64 bg-gradient-to-br from-teal via-teal to-blue-800 h-auto p-4 sm:p-5 space-y-6 lg:rounded-xl text-white shadow-lg md:sticky md:top-0">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold border-b pb-2 sm:pb-3">
          Categories
        </h2>
        <div className="space-y-2 sm:space-y-3">
          {Object.keys(data).map((category) => (
            <a
              key={category}
              href={`#${category}`}
              className="block text-sm sm:text-base bg-teal-600 hover:bg-teal-500 py-2 px-3 sm:py-2 sm:px-4 rounded-lg shadow-sm transition-all"
            >
              {category.replace(/([A-Z])/g, " $1")}
            </a>
          ))}
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        className="fixed bottom-4 right-4 bg-teal-400 px-6 text-white p-3 rounded-2xl shadow-lg hover:bg-teal-200 hover:text-black"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </button>
    </div>
  );
};

export default HomePage;
