import React from "react";

function UpButton() {
  return (
    <div>
      <button
        className="fixed bottom-4 right-4 bg-teal-400 px-6 text-white p-3 rounded-2xl shadow-lg hover:bg-teal-200 hover:text-black"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </button>
    </div>
  );
}

export default UpButton;
