import React from 'react';

const SectionHeading = ({ heading, text }) => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center lg:items-center gap-6 lg:gap-12 text-center lg:text-left">
        <h1 className="text-black bg-[#B9FF66] px-4 py-1 text-2xl font-medium rounded-md w-fit mx-auto lg:mx-0">
          {heading}
        </h1>
        <p className="max-w-2xl lg:max-w-xl mx-auto lg:mx-0">{text}</p>
      </div>
    </div>
  );
};

export default SectionHeading;
