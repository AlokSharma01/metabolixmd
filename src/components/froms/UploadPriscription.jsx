import React, { useState } from 'react';

const UploadPrescription = () => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="max-w-fit mx-auto">
      <div className="w-[500px] text-center">
        <h2 className="text-2xl font-semibold mb-4">Upload prescription</h2>
        
        <div className="border-2 border-primary border-dashed rounded-lg p-10 mb-4">
          <div className="flex flex-col items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 mb-3 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1M4 12l4-4m0 0l4-4m-4 4v12"
              />
            </svg>
            <p className="text-gray-500">
              upload prescription in <span className="text-primary">jpg, png, pdf</span>
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center mb-4">
          <input
            type="checkbox"
            id="terms"
            checked={checked}
            onChange={handleCheckboxChange}
            className="w-5 h-5 accent-primary"
          />
          <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
            I agree to the <span className="font-semibold text-primary">terms & conditions</span> of metabolixMD.
          </label>
        </div>

        <button
          type="button"
          className={`mt-6 p-3 text-white w-full font-semibold rounded-full bg-primary hover:bg-primary-dark ${
            !checked ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={!checked}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default UploadPrescription;
