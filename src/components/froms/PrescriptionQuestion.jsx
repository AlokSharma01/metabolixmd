import React from 'react';

const PrescriptionQuestion = ({ handleNext }) => {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md text-center">
      <div className="flex justify-between items-center">
        <div className="flex-grow h-1 bg-green-500"></div>
        <div className="ml-2">
          <i className="text-green-500 text-xl">&#10084;</i>
        </div>
      </div>

      <h1 className="text-green-600 font-semibold text-2xl mt-4">
        MetabolixMD
      </h1>
      <p className="text-gray-700 mt-2 text-lg">
        Do you have a prescription?
      </p>

      <div className="mt-6 space-y-4">
        <button
          className="w-full py-2 border rounded-lg border-gray-300 hover:bg-gray-100 text-gray-700"
          onClick={() => handleNext(true)}
        >
          Yes
        </button>
        <button
          className="w-full py-2 border rounded-lg border-gray-300 hover:bg-gray-100 text-gray-700"
          onClick={() => handleNext(false)}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default PrescriptionQuestion;
