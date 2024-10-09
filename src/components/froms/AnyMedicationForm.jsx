import { useState } from "react";

const AnyMedicationForm = ({onNext}) => {
  const [selectedMedications, setSelectedMedications] = useState([]);
  const medications = [
    "A GLP-1 agonist such as (but not limited to) semaglutide (Wegovy/Ozempic), liraglutide (Saxenda/Victoza), dulaglutide (Trulicity), tirzepatide (Zepbound/Mounjaro)",
    "Sulfonylureas such as (but not limited to) glipizide (Glucotrol), glimepiride (Amaryl)",
    "Insulin",
    "Warfarin (also called Jantoven or Coumadin) - a blood thinner that usually requires regular lab testing",
    "Meglitinides such as repaglinide or nateglinide",
    "Diuretics such as (but not limited to) furosemide (Lasix), bumetanide (Bumex), Hydrochlorothiazide/HCTZ",
    "Selective Serotonin Reuptake Inhibitor (SSRI) such as (but not limited to) citalopram (Celexa), fluoxetine (Prozac), escitalopram (Lexapro)",
    "Monoamine Oxidase Inhibitor (MAOI) such as (but not limited to) phenelzine (Nardil), selegiline (Emsam)",
    "None of the above",
  ];

  const handleCheckboxChange = (medication) => {
    setSelectedMedications((prev) =>
      prev.includes(medication)
        ? prev.filter((m) => m !== medication)
        : [...prev, medication]
    );
  };

  const isButtonDisabled = selectedMedications.length === 0;

  return (
    <div className="max-w-fit mx-auto">
      <div className="w-[500px]">
        <h2 className="text-2xl font-semibold mb-6">Do you currently take any of the following medications?</h2>
        <p className="my-5 font-semibold text-zinc-500">Select all that apply</p>
        <form>
          <div className="space-y-4">
            {medications.map((medication, index) => (
              <label
                key={index}
                className="flex items-center p-4 gap-2 border rounded-lg cursor-pointer hover:bg-gray-50"
              >
                <input
                  type="checkbox"
                  className="form-checkbox min-h-[20px] min-w-[20px] text-green-600"
                  checked={selectedMedications.includes(medication)}
                  onChange={() => handleCheckboxChange(medication)}
                />
                <span className=" text-gray-800">{medication}</span>
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
            onClick={()=>onNext({medications:selectedMedications},"ethnicity")}
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default AnyMedicationForm;
