import React, { useState } from 'react';

const UploadPrescription = () => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="max-w-fit mx-auto">
      <div className="w-full md:w-[500px] text-center">
        <h2 className="text-2xl font-semibold mb-4">Upload prescription</h2>
        
        <div className="border-2 border-primary border-dashed rounded-lg p-10 mb-4">
          <div className="flex flex-col items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#365d56" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-upload"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
            <p className="text-gray-500">
              upload prescription in <span className="text-primary">jpg, png, pdf</span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 justify-center mb-4">
          <input
            type="checkbox"
            id="terms"
            checked={checked}
            onChange={handleCheckboxChange}
            className="min-h-[20px] min-w-[20px] accent-primary"
          />
          <label htmlFor="terms" className=" text-sm text-gray-600">
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
