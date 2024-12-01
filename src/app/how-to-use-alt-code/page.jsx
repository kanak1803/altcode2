"use client";

import React from "react";

const HowToUseAltCode = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-teal-600 mb-8 text-center">
        How to Use Alt Codes
      </h1>
      <section className="bg-white shadow-md rounded-lg p-6 border border-gray-200 mb-8">
        <h2 className="text-2xl font-semibold text-teal-500 mb-4">
          What are Alt Codes?
        </h2>
        <p className="text-gray-700">
          Alt codes are keyboard shortcuts that allow you to type special
          characters or symbols by holding down the <strong>Alt</strong> key and
          typing a numeric code on the numeric keypad. These codes are
          incredibly useful for quickly inserting symbols like ©, ™, or ☺
          without having to search for them online.
        </p>
      </section>

      <section className="bg-gray-50 shadow-md rounded-lg p-6 border border-gray-200 mb-8">
        <h2 className="text-2xl font-semibold text-teal-500 mb-4">
          Steps to Use Alt Codes
        </h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-4">
          <li>
            Make sure your keyboard has a <strong>numeric keypad</strong>. If
            you're on a laptop, enable NumLock.
          </li>
          <li>
            Hold down the <strong>Alt</strong> key on your keyboard.
          </li>
          <li>
            While holding the Alt key, type the <strong>numeric code</strong>
            of the character you want to insert using the numeric keypad.
          </li>
          <li>
            Release the Alt key, and the character will appear in your text.
          </li>
        </ol>
      </section>

      <section className="bg-white shadow-md rounded-lg p-6 border border-gray-200 mb-8">
        <h2 className="text-2xl font-semibold text-teal-500 mb-4">
          Common Alt Codes
        </h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-teal-500 text-white">
              <th className="border border-gray-300 px-4 py-2">Character</th>
              <th className="border border-gray-300 px-4 py-2">Alt Code</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2 text-center">
                ☺
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                Alt + 1
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 text-center">
                ©
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                Alt + 0169
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 text-center">
                ™
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                Alt + 0153
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="bg-gray-50 shadow-md rounded-lg p-6 border border-gray-200">
        <h2 className="text-2xl font-semibold text-teal-500 mb-4">
          Notes and Tips
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-4">
          <li>
            Alt codes only work on the numeric keypad. They won’t work with the
            numbers on the top row of a standard keyboard.
          </li>
          <li>
            On laptops, ensure NumLock is turned on, or use the Function (Fn)
            key with the embedded numeric keypad.
          </li>
          <li>
            Some codes might not work on all systems, as Alt codes are based on
            the <strong>ASCII</strong> character set.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default HowToUseAltCode;
