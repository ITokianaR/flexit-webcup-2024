
import React, { useState } from "react";

export default function ExamenDetails() {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { id: 1, text: "Option 1", isCorrect: false },
    { id: 2, text: "Option 2", isCorrect: true },
    { id: 3, text: "Option 3", isCorrect: false },
    { id: 4, text: "Option 4", isCorrect: false },
  ];

  const handleOptionClick = (option: any) => {
    setSelectedOption(option);
  };

  const renderOptions = options.map((option) => (
    <button
      key={option.id}
      className={`font-semibold bg-transparent border border-[#111827] rounded-lg px-4 py-2 m-2 hover:bg-[#E3651D] hover:border-none ${
        selectedOption === option ? "bg-blue-500 text-white" : ""
      }`}
      onClick={() => handleOptionClick(option)}
    >
      {option.text}
    </button>
  ));

  return (
    <div className="flex justify-center mt-8">
      <div className="w-3/4 bg-gray-900 h-[70vh] p-6 rounded-lg shadow-md flex justify-center items-center">
        <div className="flex flex-col w-2/3 items-center justify-center gap-8 rounded-2xl bg-gray-800">
          <h1 className="text-2xl text-white mt-4">Question goes here</h1>
          <div className="flex flex-col w-[80%] text-white">
            {renderOptions}
          </div>
          <button className="h-10 w-32 bg-[#E3651D] mb-8 text-white font-bold rounded-lg hover:bg-transparent hover:text-[#E3651D] hover:border hover:border-[#E3651D]">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
