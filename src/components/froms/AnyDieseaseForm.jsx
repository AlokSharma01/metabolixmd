import { useState } from "react";

const AnyDiseaseForm = ({ onNext }) => {
  const [selectedGoals, setSelectedGoals] = useState([]);

  // List of conditions
  const goals = [
    "Multiple Endocrine Neoplasia syndrome type 2 (MEN2)",
    "Personal history of thyroid cancer",
    "Family history of thyroid cancer",
    "Chronic kidney disease",
    "Diabetes requiring insulin",
    "Prediabetes and Insulin resistance",
    "Fatty liver disease (NAFLD or NASH)",
    "Kidney stones",
    "Liver cirrhosis or end stage liver disease",
    "Hypothyroidism (low functioning thyroid)",
    "Hypothyroidism (high functioning thyroid)",
    "Grave disease",
    "Other thyroid issues",
    "Syndrome of inappropriate antidiuretic hormones (SIADH)",
    "No, I have not been diagnosed with any of these conditions",
  ];

  // Handle checkbox toggle
  const handleCheckboxChange = (goal) => {
    setSelectedGoals((prev) =>
      prev.includes(goal)
        ? prev.filter((g) => g !== goal)
        : [...prev, goal]
    );
  };

  const isButtonDisabled = selectedGoals.length === 0;

  // Handle form submission
  const handleNext = () => {
    const data = {
      disease_conditions: selectedGoals,
    };
    onNext(data); // Replace 'nextStep' with the actual identifier for the next step
  };

  return (
    <div className="max-w-fit mx-auto">
      <div className="w-[500px]">
        <h2 className="text-2xl font-semibold mb-6">
          Do you currently have, or have you ever been diagnosed with, any of these hormone, kidney, or liver conditions?
        </h2>
        <p className="my-5 font-semibold text-zinc-500">Select all that apply</p>
        <form>
          <div className="space-y-4">
            {goals.map((goal, index) => (
              <label
                key={index}
                className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50"
              >
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-green-600"
                  checked={selectedGoals.includes(goal)}
                  onChange={() => handleCheckboxChange(goal)}
                />
                <span className="ml-3 text-gray-800">{goal}</span>
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
            onClick={handleNext}
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default AnyDiseaseForm;
