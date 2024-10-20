import React, { useState } from 'react'

const GLP1 = ({onNext}) => {
    const [activeTab, setActiveTab] = useState("no")

    const handleTab = (e) => {
        setActiveTab(e.currentTarget.id)
    }
    return (
        <div className="w-full p-5 md:p-0 md:max-w-fit mx-auto">
            <div className="w-full md:w-[500px]">
                <h2 className="text-2xl font-semibold mb-6">
                   Do you have an allergy to GLP-1 agonist medications?
                </h2>
               

                <div onClick={handleTab} id="yes" className={`bg-white cursor-pointer border rounded-xl p-3 text-lg font-semibold mt-3 ${activeTab==="yes"?"border-primary border-2":""}`}>
                    Yes
                </div>
                <div onClick={handleTab} id="no" className={`bg-white cursor-pointer border rounded-xl p-3 text-lg font-semibold mt-3 ${activeTab==="no"?"border-primary border-2":""}`}>
                    No
                </div>

                <button
                    type="button"
                    className={`mt-6 p-3 text-white w-full py-3text-white font-semibold rounded-full bg-primary hover:bg-primary`}
                    onClick={()=>onNext({allergy_GLP_1:activeTab==="no"?false:true},"anyMedication")}
                >
                    Continue
                </button>
            </div>
        </div>
    )
}

export default GLP1