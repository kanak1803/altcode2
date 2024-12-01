"use client";
import React from "react";
import { useParams } from "next/navigation";
import data from "@/app/data/category";

const CategoryPage = () => {
  const { category } = useParams(); // Get the category from the URL
  const categoryData = data[category];

  if (!categoryData) {
    return (
      <div className="text-center mt-10">
        <h1 className="text-3xl font-bold text-red-500">Category not found!</h1>
        <p className="mt-4 text-lg">
          The category "{category}" does not exist.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-10 px-4 flex flex-col md:flex-row md:space-x-6">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-gradient-to-br from-teal via-teal to-blue-800 h-auto p-5 space-y-6 rounded-xl text-white shadow-lg md:sticky md:top-0 mb-6 md:mb-0">
        <h2 className="text-2xl font-semibold border-b pb-3">{category}</h2>
        <div className="space-y-3">
          {categoryData?.subcategories &&
            Object.keys(categoryData.subcategories).map((subcat) => (
              <a
                key={subcat}
                href={`/category/${category}/${subcat}`}
                className="block text-lg bg-teal-600 hover:bg-teal-500 py-2 px-4 rounded-lg shadow-sm"
              >
                {subcat.replace(/([A-Z])/g, " $1")}
              </a>
            ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <h1 className="text-3xl font-bold text-center mb-5 text-teal">
          {category.replace(/([A-Z])/g, " $1")}
        </h1>
        {categoryData.info && (
          <section className="mb-6 bg-teal p-4 rounded-lg text-white shadow-md">
            <p>{categoryData.info}</p>
          </section>
        )}
        {categoryData.items && (
          <div className="overflow-x-auto">
            <table className="table-auto min-w-full border-collapse border border-teal-200 rounded-xl shadow-lg">
              <thead className="bg-teal text-white">
                <tr>
                  <th className="px-6 py-3 border">Symbols</th>
                  <th className="px-6 py-3 border">Name</th>
                  <th className="px-6 py-3 border">Unicode</th>
                  <th className="px-6 py-3 border">Alt Code</th>
                  <th className="px-6 py-3 border">HTML Code</th>
                  <th className="px-6 py-3 border">CSS Code</th>
                </tr>
              </thead>
              <tbody>
                {categoryData.items.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b even:bg-gray-100 odd:bg-white hover:bg-teal-100 transition-colors"
                  >
                    <td className="px-6 py-3 text-center">{item.symbol}</td>
                    <td className="px-6 py-3 text-center">{item.name}</td>
                    <td className="px-6 py-3 text-center">{item.unicode}</td>
                    <td className="px-6 py-3 text-center">{item.alt_code}</td>
                    <td className="px-6 py-3 text-center">{item.html_code}</td>
                    <td className="px-6 py-3 text-center">{item.css_code}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
