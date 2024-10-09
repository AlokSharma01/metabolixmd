import React, { useState,useEffect } from 'react';
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

const MultiStepForm = () => {
  const [activeForm, setActiveForm] = useState("prescriptionQuestion");
  const [isClient, setIsClient] = useState(false);
  const [formData, setFormData] = useState({
    accomplish_with_body_program: "",
    height: { feet: 0, inch: 0 },
    weight: 0,
    gender: "",
    dob: null,
    zipCode: "",
    seen_primary_care_provider: false,
    heart_condition: "",
    hormone_kidney_liver_condition: "",
    type_2_diabetes: "",
    diabetic: "",
    additional_condition: [],
    allergies: [],
    allergy_GLP_1: false,
    medications: [],
    describe_yourself: []
  });

  const handleNextForm = (nextForm, data) => {
    setFormData({ ...formData, ...data });
    // Set the next form based on the passed "nextForm" or default to the next in sequence
    setActiveForm(nextForm || getNextFormKey(activeForm));
  };

  const getNextFormKey = (currentForm) => {
    const formOrder = [
      "prescriptionQuestion",
      "goalSelection",
      "userInfo",
      "weightCalculation",
      "basicsUserInfo",
      "primaryCareConfirmation",
      "heartDisease",
      "anyDisease",
      "type2Diabetes",
      "diabeticRetinopathy",
      "anyDisease2",
      "searchAndSelectAllergies",
      "glp1",
      "anyMedication",
      "ethnicity",
      "labTest",
      "beforeWrapUp"
    ];
    const currentIndex = formOrder.indexOf(currentForm);
    return formOrder[currentIndex + 1] || "beforeWrapUp"; // Default to last step if none
  };

  const handleSubmit = () => {
    // Submit the collected data (formData) to the backend
    console.log("Final data:", formData);
    // You can now send formData to your backend
  };

  useEffect(() => {
    setIsClient(true); // Ensures rendering only on client-side
  }, []);

  if (!isClient) {
    return null; // Prevents hydration error by not rendering on the server
  }

  return (
    <div className="multi-step-form  bg-[#d3d2cc]">
      {activeForm === "prescriptionQuestion" && (
        <PrescriptionQuestion onNext={(data, next) => handleNextForm(next, data)} />
      )}
      {activeForm === "uploadPrescription" && (
        <PrescriptionUpload onNext={(data, next) => handleNextForm(next, data)} />
      )}
      {activeForm === "goalSelection" && (
        <GoalSelectionForm onNext={(data, next) => handleNextForm(next, data)} />
      )}
      {activeForm === "userInfo" && (
        <UserInfoForm onNext={(data, next) => handleNextForm(next, data)} />
      )}
      {activeForm === "weightCalculation" && (
        <WeightCalculation data={formData} onNext={(data, next) => handleNextForm(next, data)} />
      )}
      {activeForm === "basicsUserInfo" && (
        <BasicsUserInfo onNext={(data, next) => handleNextForm(next, data)} />
      )}
      {activeForm === "primaryCareConfirmation" && (
        <PrimaryCareConfirmation onNext={(data, next) => handleNextForm(next, data)} />
      )}
      {activeForm === "heartDisease" && (
        <HeartDiseaseForm onNext={(data, next) => handleNextForm(next, data)} />
      )}
      {activeForm === "anyDisease" && (
        <AnyDiseaseForm onNext={(data, next) => handleNextForm(next, data)} />
      )}
      {activeForm === "type2Diabetes" && (
        <Type2Diabetes onNext={(data, next) => handleNextForm(next, data)} />
      )}
      {activeForm === "diabeticRetinopathy" && (
        <DiabeticRetinopathy onNext={(data, next) => handleNextForm(next, data)} />
      )}
      {activeForm === "anyDisease2" && (
        <AnyDisease2Form onNext={(data, next) => handleNextForm(next, data)} />
      )}
      {activeForm === "searchAndSelectAllergies" && (
        <SearchAndSelectAllergies onNext={(data, next) => handleNextForm(next, data)} />
      )}
      {activeForm === "glp1" && (
        <GLP1 onNext={(data, next) => handleNextForm(next, data)} />
      )}
      {activeForm === "anyMedication" && (
        <AnyMedicationForm onNext={(data, next) => handleNextForm(next, data)} />
      )}
      {activeForm === "ethnicity" && (
        <EthnicityForm onNext={(data, next) => handleNextForm(next, data)} />
      )}
      {activeForm === "labTest" && (
        <LabTestForm onNext={(data, next) => handleNextForm(next, data)} />
      )}
      {activeForm === "beforeWrapUp" && (
        <BeforeWrapUp onSubmit={handleSubmit} />
      )}

      {/* <PrescriptionQuestion />
      <PrescriptionUpload />
      <GoalSelectionForm />
      <UserInfoForm />
      <WeightCalculation data={formData}/>
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
      <LabTestForm />
      <BeforeWrapUp /> */}
    </div>
  );
};

export default MultiStepForm;
