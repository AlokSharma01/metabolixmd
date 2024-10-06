import React, { useState } from 'react';
import Stepper from './Stepper';
import PrescriptionQuestion from './froms/PrescriptionQuestion';
import PrescriptionUpload from './froms/UploadPriscription';

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
import AnyMedicationForm from './froms/AnyMedicationForm';
import EthnicityForm from './froms/EthinicityForm';
import LabTestForm from './froms/LabTestForm';
import BeforeWrapUp from './froms/BeforeWrapUp';
import UploadPriscription from './froms/UploadPriscription';

const MultiStepForm = () => {
  const [activeForm, setActiveForm] = useState("prescriptionQuestion")

  const [formData, setformData] = useState({})




  return (
    <div className="">
      <div className="">

        <PrescriptionQuestion />
        <UploadPriscription/>
        <GoalSelectionForm />
        <UserInfoForm />
        <WeightCalculation />
        <BasicsUserInfo />
        <PrimaryCareConfirmation />
        <HeartDiseaseForm />
        <AnyDiseaseForm />
        <Type2Diabetes />
        <DiabeticRetinopathy />
        <AnyDisease2Form />
        <SearchAndSelectAllergies />
        <GLP1 />
        <AnyMedicationForm />
        <EthnicityForm />
        <BeforeWrapUp />
        <LabTestForm />


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

