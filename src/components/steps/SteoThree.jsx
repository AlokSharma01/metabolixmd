const StepThree = ({ nextStep, prevStep }) => {
    return (
      <div>
        <h2 className="text-xl font-semibold mb-4">Step 3: Health Conditions</h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Do you have any conditions?</label>
          <select multiple className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
            <option>Heart Disease</option>
            <option>High Blood Pressure</option>
            <option>Diabetes</option>
          </select>
        </div>
  
        <div className="flex justify-between">
          <button
            onClick={prevStep}
            className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
          >
            Back
          </button>
          <button
            onClick={nextStep}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Next
          </button>
        </div>
      </div>
    );
  };
  
  export default StepThree;
  