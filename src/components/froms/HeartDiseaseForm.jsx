

import { useState } from "react";

const HeartDiseaseForm = () => {
  const [selectedGoals, setSelectedGoals] = useState([]);
  const goals = [
    "Atrial fibrillation or flutter",
    "Tachycardia (episodes of rapid heart rate)",
    "Heart failure",
    "heart disease, stroke, or peripheral vascular disease",
    "Prolonged QT interval",
    "Other heart rythm issues or ECG abnormalities",
    "Hypertension (high blood pressure)",
    "Hyperlipidemia (high cholesterol)",
    "Hypertringlyceridemia (high triglycerides)",
    "No, I have not been diagnoased with any of these heart conditions",
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
          Do you currently have, or have you ever been diagnosed with, any of the following heart or heart-related conditions?
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
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default HeartDiseaseForm;
