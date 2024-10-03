import React, { useState } from 'react';
import Stepper from './Stepper';
import PrescriptionQuestion from './froms/PrescriptionQuestion';
import PrescriptionUpload from './froms/UploadPriscription';
import StepOne from "./steps/StepOne";
import StepTwo from "./steps/StepTwo";
import StepThree from "./steps/SteoThree";
import StepFour from "./steps/StepFour";
import GoalSelectionForm from './froms/GoalSelectionForm';
import UserInfoForm from './froms/UserInfoForm';
import WeightCalculation from './froms/WeightCalculation';
import BasicsUserInfo from './froms/BasicsUserInfo';
import PrimaryCareConfirmation from './froms/PrimaryCareConfirmation';
import HeartDiseaseForm from './froms/HeartDiseaseForm';
import AnyDiseaseForm from './froms/AnyDieseaseForm';
import Type2Diabetes from './froms/Type2Diabetes';
import DiabeticRetinopathy from './froms/DiabeticRetinopathy';
import AnyDisease2Form from './froms/AnyDiesease2Form';
import SearchAndSelectAllergies from './froms/SearchAndSelectAllergies';
import GLP1 from './froms/GLP1';

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5; // Total number of forms/steps in the multi-step process
  const [hasPrescription, setHasPrescription] = useState(false);

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleNextFromQuestion = (answer) => {
    setHasPrescription(answer);
    nextStep(); // Move to the next step
  };

  const handleNextFromUpload = () => {
    alert('Prescription uploaded! Moving to the next step.');
    nextStep();
  };

  const renderFormStep = () => {
    switch (currentStep) {
      case 1:
        return <PrescriptionQuestion handleNext={handleNextFromQuestion} />;
      case 2:
        return <PrescriptionUpload handleNext={handleNextFromUpload} />;
      case 3:
        return <StepThree />;
      case 4:
        return <StepFour />;
      case 5:
        return <StepFive />;
      default:
        return <PrescriptionQuestion handleNext={handleNextFromQuestion} />;
    }
  };

  return (
    <div className="">
      <div className="">
        {/* Stepper at the top */}
        <Stepper currentStep={currentStep} totalSteps={totalSteps} />
        
        {/* Form content */}
        {/* <div className="mb-6">{renderFormStep()}</div> */}
        <GoalSelectionForm/>
        <UserInfoForm/>
        <WeightCalculation/>
        <BasicsUserInfo/>
        <PrimaryCareConfirmation/>
        <HeartDiseaseForm/>
        <AnyDiseaseForm/>
        <Type2Diabetes/>
        <DiabeticRetinopathy/>
        <AnyDisease2Form/>
        <SearchAndSelectAllergies/>
        <GLP1/>
        
        {/* Navigation buttons */}
        {/* <div className="flex justify-between">
          {currentStep > 1 && (
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
              onClick={prevStep}
            >
              Back
            </button>
          )}
          {currentStep < totalSteps && (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={nextStep}
            >
              Next
            </button>
          )}
        </div> */}
      </div>
    </div>
  );
};

// Example steps 3, 4, 5

const StepFive = () => (
  <div>
    <h2 className="text-xl font-bold mb-4">Step 5</h2>
    <input type="text" className="border rounded p-2 w-full mb-4" placeholder="Step 5 input" />
  </div>
);

export default MultiStepForm;

