const StepOne = ({ nextStep }) => {
    return (
      <div>
        <h2 className="text-xl font-semibold mb-4">Step 1: Basic Information</h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Full Name</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
  
        <button
          onClick={nextStep}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Next
        </button>
      </div>
    );
  };
  
  export default StepOne;
  