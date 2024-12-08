"use client";
import React from "react";
import { useParams } from "next/navigation";
import data from "@/app/data/category";
import mathSymbolsContent from "@/app/data/mathSymbolsContent.json"; // Import the JSON content
import UpButton from "@/app/components/UpButton";
import Link from "next/link";

const CategoryPage = () => {
  const { category } = useParams(); // Get the category from the URL
  const categoryData = data[category];
  console.log(categoryData);
  const spaceNamed = category.replace(/([A-Z])/g, " $1");
  // console.log(spaceNamed)

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
    <div className="container mx-auto mt-10 lg:px-6 flex flex-col md:flex-row md:space-x-6">
      {/* Main Content */}
      <div className="flex-1">
        {/* <h1 className="text-3xl font-bold text-center mb-5 text-teal">
          {category.replace(/([A-Z])/g, " $1")}
        </h1> */}
        {category === "MathsSymbols" && (
          <section className="mb-6 bg-white  px-7 sm:px-4 lg:px-10 rounded-lg text-teal-600 space-y-4">
            <h2 className="text-2xl font-semibold text-center mb-4">
              {`Introduction to ${spaceNamed}`}
            </h2>
            <p className="text-lg">{mathSymbolsContent.intro}</p>
            <h2 className="text-2xl font-semibold text-center mb-4">
              What Are Alt Codes?
            </h2>
            <p className="text-lg">{mathSymbolsContent.whatAreAltCodes}</p>
            <h2 className="text-2xl font-semibold text-center mb-4">
              {`How Do ${spaceNamed} Alt Codes Work?`}
            </h2>
            <p className="text-lg">{mathSymbolsContent.howMathAltCodesWork}</p>

            <div className="bg-teal-700 p-4 rounded-lg mt-6">
              <h3 className="text-xl font-semibold text-center text-white mb-4">
                Common Math Symbols
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {mathSymbolsContent.commonMathSymbols.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center space-y-2 hover:bg-teal-600 p-3 rounded-lg"
                  >
                    <span className="text-2xl text-white">
                      {item.symbol}
                    </span>
                    <div>
                      <h4 className="font-bold text-white">{item.name}</h4>
                      <p className="text-sm text-teal-200">{item.altCode}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {
              <section className="mb-6 bg-white p-4 rounded-lg text-teal-600 shadow-lg space-y-4">
                <h2 className="text-2xl font-bold">
                  Advantages of Using Alt Codes
                </h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li className="text-lg">
                    <strong>Efficiency:</strong> Alt codes offer a quick method
                    of immediately inputting {spaceNamed} rather than having to
                    look for them in menus or add photos.
                  </li>
                  <li className="text-lg">
                    <strong>Accuracy:</strong> By ensuring that the right
                    symbols are always inserted, alt codes lower the possibility
                    of errors.
                  </li>
                  <li className="text-lg">
                    <strong>Compatibility:</strong> Alt codes are flexible and
                    can be used with a variety of software applications,
                    including word processors such as Microsoft Word, Excel, and
                    even text-based editors.
                  </li>
                </ul>
              </section>
            }
            <section className="mb-6 bg-white p-4 rounded-lg text-teal-600 shadow-lg space-y-4">
              <h2 className="text-2xl font-bold">
                Troubleshooting Alt Code Issues
              </h2>
              <h3 className="text-xl font-semibold">
                Solving Problems with Alt Codes
              </h3>
              <p className="text-lg">
                Although alt codes are usually easy to use, users may
                occasionally run into problems. The following are some typical
                issues and fixes:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li className="text-lg">
                  <strong>Alt Code Not Working:</strong> Make sure Num Lock is
                  on. To make sure the numeric keypad is operating correctly,
                  try using a different keyboard.
                </li>
                <li className="text-lg">
                  <strong>Symbol Appears Incorrectly:</strong> Verify that you
                  entered the symbol's correct number. Typing the incorrect
                  number might occasionally result in unexpected characters.
                </li>
                <li className="text-lg">
                  <strong>Using a Laptop:</strong> Laptops do not have a full
                  numeric keypad. Thus, using function keys, such as “Fn” or
                  other key combinations to activate the numeric keypad can be
                  helpful.
                </li>
              </ul>
            </section>
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
      {/* Sidebar */}
      <div className="w-full md:w-auto bg-gradient-to-br from-teal via-teal to-blue-800 h-auto p-5 space-y-6 lg:rounded-xl text-white shadow-lg md:sticky md:top-0 mb-6 md:mb-0">
        <h2 className="text-2xl font-semibold border-b pb-3">
          {category.replace(/([A-Z])/g, " $1")}
        </h2>
        <div className="space-y-3">
          {categoryData?.subcategories &&
            Object.keys(categoryData.subcategories).map((subcat) => (
              <Link
                key={subcat}
                href={`/category/${category}/${subcat}`}
                className="block text-lg bg-teal-600 hover:bg-teal-500 py-2 px-4 rounded-lg shadow-sm"
              >
                {subcat.replace(/([A-Z])/g, " $1")}
              </Link>
            ))}
        </div>
      </div>
      <UpButton/>
    </div>
  );
};

export default CategoryPage;
