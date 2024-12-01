"use client";

import React, { useState } from "react";

const AsciiArtEditor = () => {
  const [asciiArt, setAsciiArt] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const asciiCharacters = [
    "☺", "☻", "♥", "♦", "♣", "♠", "•", "◘", "○", "◙", "♂", "♀", "♪", "♫", "☼", 
    "►", "◄", "↕", "‼", "¶", "§", "▬", "↨", "↑", "↓", "→", "←", "∟", "↔", "▲", "▼", 
    "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", 
    ">", "?", "@", "[", "^", "]", "_", "`", "{", "}", "|", "~", "⌂", "é", "â", "ä", "à", 
    "å", "ç", "ê", "ë", "è", "ï", "î", "ì", "Ä", "Å", "É", "æ", "Æ", "ô", "ö", "ò", "û", 
    "ù", "ÿ", "Ö", "Ü", "¢", "£", "¥", "₧", "ƒ", "á", "í", "ó", "ú", "ñ", "Ñ", "ª", "º", 
    "¿", "⌐", "¬", "½", "¼", "¡", "«", "»", "░", "▒", "▓", "│", "┤", "╡", "╢", "╖", "╕", 
    "╣", "║", "╗", "╝", "╜", "╛", "┐", "└", "┴", "┬", "├", "─", "┼", "╞", "╟", "╚", "╔", 
    "╩", "╦", "╠", "═", "╬", "╧", "╨", "╤", "╥", "╙", "╘", "╒", "╓", "╫", "╪", "┘", "┌", 
    "█", "▄", "▌", "▀", "▐", "α", "ß", "Γ", "π", "Σ", "σ", "µ", "τ", "Φ", "Θ", "Ω", "δ", 
    "∞", "φ", "ε", "∩", "≡", "±", "≥", "≤", "⌠", "⌡", "÷", "≈", "°", "∙", "√", "ⁿ", "²", 
    "■", "ü"
  ];

  const handleCharacterClick = (char) => {
    setAsciiArt((prev) => prev + char);
  };

  const handleSelectAll = () => {
    navigator.clipboard.writeText(asciiArt);
    setIsModalOpen(true);
  };

  const handleClearText = () => {
    setAsciiArt("");
  };

  const handleTextareaChange = (e) => {
    setAsciiArt(e.target.value);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDownloadText = () => {
    const blob = new Blob([asciiArt], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "ascii_art.txt";
    link.click();
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-center text-teal-600">
        ASCII Art Editor
      </h1>

      {/* Description */}
      <section className="mb-8 text-center bg-teal p-4 rounded-lg shadow-md border">
        <h2 className="text-2xl font-bold text-white mb-2">What's This?</h2>
        <p className="text-white">
          Alt codes ASCII art editor helps you to generate ASCII special
          characters on a textarea. Simply click on the characters to generate
          your ASCII art. Each time you push the ASCII character, it will be
          added to the textarea, and you will be able to see a live preview of
          your art. After you finish, click "Select All & Copy" or "Download Text".
        </p>
        <p className="text-white mt-2 italic">It's limited only by your imagination!</p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
        {/* Left Column: Textarea */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold mb-4 text-teal-500">
            Preview Your ASCII Art
          </h2>
          <textarea
            className="w-full h-64 p-4 border border-gray-300 rounded-lg resize-none"
            value={asciiArt}
            onChange={handleTextareaChange}
          ></textarea>
          <div className="flex gap-4 mt-4">
            <button
              onClick={handleSelectAll}
              className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600"
            >
              Select All & Copy
            </button>
            <button
              onClick={handleClearText}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            >
              Clear Text
            </button>
            <button
              onClick={handleDownloadText}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Download Text
            </button>
          </div>
        </div>

        {/* Right Column: ASCII Characters */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold mb-4 text-teal-500">
            ASCII Characters
          </h2>
          {/* <input
            type="text"
            placeholder="Search characters..."
            className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
            onChange={(e) => setSearchTerm(e.target.value)}
          /> */}
          <div className="grid grid-cols-6 gap-2 overflow-y-auto max-h-96">
            {asciiCharacters
              .filter((char) => char.includes(searchTerm))
              .map((char, index) => (
                <button
                  key={index}
                  className="bg-teal text-white font-bold p-2 rounded-lg hover:bg-teal-300 hover:text-black hover:scale-125 hover:shadow-lg active:bg-teal-400 transition-all duration-150"
                  onClick={() => handleCharacterClick(char)}
                >
                  {char}
                </button>
              ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <h3 className="text-xl font-bold mb-4 text-teal-500">Text Copied!</h3>
            <p className="text-gray-700 mb-4">
              Your ASCII art has been copied to the clipboard. Here's your creation:
            </p>
            <p className="text-teal-600 font-mono whitespace-pre-line mb-4">
              {asciiArt}
            </p>
            <button
              onClick={closeModal}
              className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AsciiArtEditor;
