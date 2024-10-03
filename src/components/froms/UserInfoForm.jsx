import { useState } from "react";

const UserInfoForm = () => {
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");
  const [weight, setWeight] = useState("");

  const isButtonDisabled = !feet || !inches || !weight;

  return (
    <div className="max-w-fit mx-auto">
      <div className="w-[500px]">
        <h2 className="text-2xl font-semibold mb-6">
          Let’s start with where you are now
        </h2>

        {/* Height Section */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Your height
          </label>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Feet"
              className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              value={feet}
              onChange={(e) => setFeet(e.target.value)}
            />
            <input
              type="text"
              placeholder="Inches"
              className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              value={inches}
              onChange={(e) => setInches(e.target.value)}
            />
          </div>
        </div>

        {/* Weight Section */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Your current weight
          </label>
          <input
            type="text"
            placeholder="Pounds"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>

        {/* Continue Button */}
        <button
          type="button"
          className={`w-full py-3 rounded-full text-white font-semibold ${
            isButtonDisabled
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-primary "
          }`}
          disabled={isButtonDisabled}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default UserInfoForm;
