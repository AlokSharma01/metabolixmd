

import { useState } from "react";

const AnyDisease2Form = () => {
  const [selectedGoals, setSelectedGoals] = useState([]);
  const goals = [
    "Chronic condidiasis (fungal infectons)",
    "Eating disorder",
    "Gout",
    "History of suicide attempt or history of suicidal ideation",
    "Lymphedema or chronic lower extremity swelling where other causes have been ruled out",
    "Metabolic syndrome",
    "Obstructive sleep apnea",
    "Osteoarthritis",
    "Tinea infextions (skin folds",
    "No, I have not been diagnosed with any of these condtions",
  ];

  const handleCheckboxChange = (goal) => {
    setSelectedGoals((prev) =>
      prev.includes(goal)
        ? prev.filter((g) => g !== goal)
        : [...prev, goal]
    );
  };

  const isButtonDisabled = selectedGoals.length === 0;

  return (
    <div className="max-w-fit mx-auto">
      <div className="w-[500px]">
        <h2 className="text-2xl font-semibold mb-6">
          Do you currently have, or have you ever been diagnosed with, any of these additional following conditions?
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
            className={`mt-6 w-full py-3  text-white font-semibold rounded-full ${
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

export default AnyDisease2Form;
