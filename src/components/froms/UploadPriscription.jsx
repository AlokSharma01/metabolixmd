import React, { useState } from 'react';

const PrescriptionUpload = ({ handleNext }) => {
  const [file, setFile] = useState(null);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleCheckboxChange = () => {
    setAcceptedTerms(!acceptedTerms);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md text-center">
      <h2 className="text-2xl font-bold mb-4">Upload Prescription</h2>

      <div className="border-2 border-dashed border-green-500 p-6 rounded-lg mb-4">
        <label className="cursor-pointer">
          <div className="flex justify-center items-center">
            <i className="text-green-500 text-3xl mb-2">&#128206;</i>
          </div>
          <p className="text-gray-500">upload prescription in .jpg, .png, .pdf</p>
          <input
            type="file"
            accept="image/*,application/pdf"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>
      </div>

      <div className="text-left mb-4">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-green-500 border-gray-300 rounded"
            checked={acceptedTerms}
            onChange={handleCheckboxChange}
          />
          <span className="text-sm">
            I agree to the <a href="#" className="text-green-500 underline">terms & conditions</a> of MetabolixMD.
          </span>
        </label>
      </div>

      <button
        className={`w-full py-2 text-white rounded-lg ${acceptedTerms ? 'bg-green-500' : 'bg-gray-300 cursor-not-allowed'}`}
        onClick={handleNext}
        disabled={!acceptedTerms}
      >
        Next
      </button>
    </div>
  );
};

export default PrescriptionUpload;
