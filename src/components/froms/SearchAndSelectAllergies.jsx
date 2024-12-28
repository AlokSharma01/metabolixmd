import React, { useState } from 'react';

const SearchAndSelectAllergies = ({ onNext }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedAllergies, setSelectedAllergies] = useState([]);
    const allergies = [
        "Peanuts",
        "Tree nuts",
        "Shellfish",
        "Fish",
        "Dairy",
        "Eggs",
        "Soy",
        "Wheat",
        "Gluten",
        "Pollen",
        "Dust mites",
        "Latex",
        "Medication",
        "Other",
    ];

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const toggleAllergySelection = (allergy) => {
        setSelectedAllergies((prevSelected) =>
            prevSelected.includes(allergy)
                ? prevSelected.filter((a) => a !== allergy)
                : [...prevSelected, allergy]
        );
    };

    const filteredAllergies = allergies.filter(allergy =>
        allergy.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="w-full p-5 md:p-0 md:max-w-fit mx-auto">
            <div className="w-full md:w-[500px]">
                <h2 className="text-2xl  mb-6 text-primary">
                Please list all your drug or food allergies.
                </h2>
                {/* <p className="my-5 font-semibold text-zinc-500">
                    Include allergies to prescription or over-the-counter medicine, herbs, vitamins, supplements, food, dyes or anything else.
                </p> */}

                {/* <div className='text-sm bg-zinc-200 rounded-lg p-3'>
                    Our Clinicians use this information in determining a safe and effective treatment.
                </div> */}
                <input
                    className='p-3 bg-white border outline-none mt-5 rounded-xl w-full'
                    type="search"
                    placeholder='Search allergy name'
                    value={searchTerm}
                    onChange={handleSearchChange}
                />

                <div className='mt-4'>
                    {filteredAllergies.map(allergy => (
                        <div
                            key={allergy}
                            className={`p-3 font-medium text-center border cursor-pointer rounded-full mt-2 
   ${selectedAllergies.includes(allergy) ? 'bg-primary text-white' : 'bg-white text-black'}`}
                            onClick={() => toggleAllergySelection(allergy)}
                        >
                            {allergy}
                        </div>
                    ))}
                </div>

                {
                    selectedAllergies.length > 0 ?
                        <div
                            className='p-3 font-medium text-center border cursor-pointer rounded-full mt-5 hover:text-white hover:bg-primary/50'
                            onClick={() => onNext({ allergies: selectedAllergies }, "glp1")} // Reset selected allergies
                        >
                            Continue
                        </div>
                        :
                        <div
                            className='p-3 font-medium text-center border cursor-pointer rounded-full mt-5'
                            onClick={() => onNext({}, "glp1")}  // Reset selected allergies
                        >
                            I don&apos;t have any allergies
                        </div>
                }
            </div>
        </div>
    );
};

export default SearchAndSelectAllergies;
