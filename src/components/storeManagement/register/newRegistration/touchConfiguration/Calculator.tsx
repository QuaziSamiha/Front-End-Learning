"use client";

import { FaDeleteLeft } from "react-icons/fa6";

// =========== CALCULATOR BUTTON SEQUENCE =======
const data = [
  { label: "7" },
  { label: "8" },
  { label: "9" },
  { label: "4" },
  { label: "5" },
  { label: "6" },
  { label: "1" },
  { label: "2" },
  { label: "3" },
  { label: "0" },
  { label: "00" },
  { label: "." },
];

const Calculator = () => {
  return (
    <div className="w-full bg-bgPrimary text-white text-sm font-semibold h-full flex flex-col">
      <div className="pt-10 pb-2 border-b-2 border-violetQuinary flex w-full px-10">
        <FaDeleteLeft size={20} className="rotate-180" />
        <div className="flex justify-end items-center flex-1">$</div>
      </div>
      <div className="grid grid-cols-3 grid-rows-4 gap-3 p-2 h-full">
        {data.map((datum, index) => (
          <div
            key={index}
            className="flex justify-center items-center bg-blueTernary hover:bg-blueQuaternary rounded-md"
          >
            {datum.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
