const StepFour = ({ prevStep }) => {
    return (
      <div>
        <h2 className="text-xl font-semibold mb-4">Step 4: Review and Submit</h2>
        <p className="mb-4">Please review your information before submitting.</p>
  
        <div className="flex justify-between">
          <button
            onClick={prevStep}
            className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
          >
            Back
          </button>
          <button
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
          >
            Submit
          </button>
        </div>
      </div>
    );
  };
  
  export default StepFour;
  