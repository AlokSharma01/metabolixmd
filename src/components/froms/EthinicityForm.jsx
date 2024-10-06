import { useState } from "react";

const EthnicityForm = () => {
  const [selectedEthnicities, setSelectedEthnicities] = useState([]);
  const ethnicities = [
    "White",
    "Hispanic or Latino",
    "Black or African American",
    "Native American or American Indian",
    "Asian / Pacific Islander",
    "Other",
    "I prefer not to answer",
  ];

  const handleCheckboxChange = (ethnicity) => {
    setSelectedEthnicities((prev) =>
      prev.includes(ethnicity)
        ? prev.filter((e) => e !== ethnicity)
        : [...prev, ethnicity]
    );
  };

  const isButtonDisabled = selectedEthnicities.length === 0;

  return (
    <div className="max-w-fit mx-auto">
      <div className="w-[500px]">
        <h2 className="text-2xl font-semibold mb-6">How would you describe yourself?</h2>
        <p className="my-5 font-semibold text-zinc-500">Select all that apply</p>
        <form>
          <div className="space-y-4">
            {ethnicities.map((ethnicity, index) => (
              <label
                key={index}
                className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50"
              >
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-green-600"
                  checked={selectedEthnicities.includes(ethnicity)}
                  onChange={() => handleCheckboxChange(ethnicity)}
                />
                <span className="ml-3 text-gray-800">{ethnicity}</span>
              </label>
            ))}
          </div>

          <button
            type="button"
            className={`mt-6 w-full py-3 text-white font-semibold rounded-full ${
              isButtonDisabled
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-primary hover:bg-primary"
            }`}
            disabled={isButtonDisabled}
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default EthnicityForm;
