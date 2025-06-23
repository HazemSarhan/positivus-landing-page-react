import React, { useState } from 'react';
import { FaMinus } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';

const WorkingProcessCard = ({ id, title, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`rounded-3xl p-8 shadow-[0_4px_0_0_#000] border border-black my-5 transition-all duration-600 ${
        isOpen ? 'bg-[#B9FF66]' : 'bg-[#F3F3F3]'
      }`}
    >
      {/* Header Row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <p className="text-3xl font-bold">{id}</p>
          <h3 className="text-lg font-medium">{title}</h3>
        </div>
        <button
          className="text-2xl rounded-full bg-[#F3F3F3] p-2 border border-black cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaMinus /> : <FaPlus />}
        </button>
      </div>

      {/* Divider + Text */}
      {isOpen && (
        <div className="mt-4 transition-all duration-600">
          <hr className="border-black my-4" />
          <p className="text-sm leading-relaxed text-black">{text}</p>
        </div>
      )}
    </div>
  );
};
export default WorkingProcessCard;
