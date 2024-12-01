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
          className="px-6 py-3 text-center cursor-pointer text-teal hover:scale-150 text-xl"
          onClick={() => handleCopySymbol(item.symbol)}
          title="Click to copy"
        >
          {item.symbol}
        </td>
        <td className="px-6 py-3 text-center text-lg">{item.unicode}</td>
        <td className="px-6 py-3 text-center text-lg">{item.alt_code}</td>
        <td className="px-6 py-3 text-center text-lg">{item.html_code}</td>
        <td className="px-6 py-3 text-center text-lg">{item.css_code}</td>
      </tr>
    ));
  };

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

  return (
    <div className="container mx-auto mt-10 lg:px-1 sm:px-3 flex flex-col md:flex-row md:space-x-6">
      {/* Main Content */}
      <div className="flex-1 w-full mb-6 md:mb-0">
        {/* Information Section */}
        <section className="mb-8 bg-teal p-6 rounded-lg shadow-md border border-teal">
          <p className="text-lg text-white leading-relaxed">
            A thorough list of ALT code shortcuts for typing special characters
            and symbols that aren't on your keyboard may be found on this page.
            You may easily copy and paste these special characters into any text
            if your keyboard does not have a numeric keypad. To copy a symbol to
            your clipboard, simply click on it.
          </p>
          <p className="mt-4 text-white italic">
            Tip: This works best on Windows with a full-sized keyboard. On
            laptops, ensure
            <strong className="text-"> Num Lock</strong> is enabled.
          </p>
        </section>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white text-teal rounded-lg shadow-lg p-6 max-w-sm w-full transition-all transform scale-100 hover:scale-105">
              <h2 className="text-xl font-semibold mb-4">Symbol Copied!</h2>
              <p className="mb-4 text-lg">
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

        <h1 className="text-3xl font-bold text-center mb-5 text-teal">
          Alt Codes Table
        </h1>

        {Object.keys(data).map((category) => (
          <div key={category} className="mb-10" id={category}>
            <h2 className="text-2xl font-semibold mb-3 capitalize text-teal">
              {category.replace(/([A-Z])/g, " $1")}
            </h2>
            <div className="overflow-x-auto">
              <table className="table-auto min-w-full border-collapse border border-teal-200 rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-teal text-white sticky top-0 z-10">
                  <tr>
                    <th className="px-6 py-3 border text-sm md:text-lg">
                      Symbol
                    </th>
                    <th className="px-6 py-3 border text-sm md:text-lg">
                      Unicode
                    </th>
                    <th className="px-6 py-3 border text-sm md:text-lg">
                      Alt Code
                    </th>
                    <th className="px-6 py-3 border text-sm md:text-lg">
                      HTML Code
                    </th>
                    <th className="px-6 py-3 border text-sm md:text-lg">
                      CSS Code
                    </th>
                  </tr>
                </thead>
                <tbody>{renderTableRows(category)}</tbody>
              </table>
            </div>
          </div>
        ))}
        {/* Information Section */}
        <section className="mb-8 bg-teal p-6 rounded-lg shadow-md border border-teal">
          <h2 className="text-2xl font-extrabold text-white mb-4">
            What are ALT Codes?
          </h2>
          <p className="text-lg text-white leading-relaxed">
            ALT codes are a simple method to enter characters and symbols that
            aren't directly available on a standard keyboard. By holding down
            the <strong className="text-yellow-300">Alt</strong> key and typing
            a numeric code on the numeric keypad, you can type special
            characters like accents, mathematical symbols, or unique symbols.
          </p>
          <div className="mt-6 bg-white p-4 rounded-lg shadow-sm border-l-4 border-black">
            <h3 className="text-lg font-semibold text-teal-600 mb-2">
              How to Use ALT Codes:
            </h3>
            <ul className="list-disc list-inside text-teal-800">
              <li>
                Hold down the <strong className="text-teal-700">Alt</strong>{" "}
                key.
              </li>
              <li>
                Type the numeric code for your desired character using the
                numeric keypad.
              </li>
              <li>
                Release the <strong className="text-teal-700">Alt</strong> key,
                and the symbol will appear!
              </li>
            </ul>
          </div>
          <p className="mt-4 text-white italic">
            Tip: This works best on Windows with a full-sized keyboard. On
            laptops, ensure
            <strong className="text-"> Num Lock</strong> is enabled.
          </p>
        </section>
      </div>

      {/* Sidebar */}
      <div className="w-full md:w-64 bg-gradient-to-br from-teal via-teal to-blue-800 h-auto p-5 space-y-6 rounded-xl text-white shadow-lg md:sticky md:top-0">
        <h2 className="text-2xl font-semibold border-b pb-3">Categories</h2>
        <div className="space-y-3">
          {Object.keys(data).map((category) => (
            <a
              key={category}
              href={`#${category}`}
              className="block text-lg bg-teal-600 hover:bg-teal-500 py-2 px-4 rounded-lg shadow-sm transition-all"
            >
              {category.replace(/([A-Z])/g, " $1")}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
