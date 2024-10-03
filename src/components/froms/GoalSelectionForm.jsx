import { useState } from "react";

const GoalSelectionForm = () => {
  const [selectedGoals, setSelectedGoals] = useState([]);
  const goals = [
    "Lose weight",
    "Improve my general physical health",
    "Improve another health condition",
    "Increase confidence about my appearance",
    "Increase energy for activities I enjoy",
    "I have another goal not listed above",
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
          What do you want to accomplish with the our Body Program?
        </h2>
        <p className="my-5 font-semibold text-zinc-500">I Want to...</p>
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

export default GoalSelectionForm;
