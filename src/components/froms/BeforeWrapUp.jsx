

import React, { useState } from 'react'
import { ClipLoader } from 'react-spinners'

const BeforeWrapUp = ({ onSubmit, loading }) => {
    const [activeTab, setActiveTab] = useState("")

    const handleTab = (e) => {
        setActiveTab(e.currentTarget.id)
    }
    return (
        <div className="w-full p-5 md:p-0 md:max-w-fit mx-auto">
            <div className="w-full md:w-[500px]">
                <p>BEFORE WE WRAP UP</p>
                <h2 className="text-2xl  mb-6 text-primary">
                    Is there anything else you want your healthcare provider to know about your health?
                </h2>
                <p className='text-zinc-500 font-semibold'>
                    Include any additional details about the conditions you have already reported.
                </p>

                <div onClick={handleTab} id="yes" className={`bg-white cursor-pointer border rounded-xl p-3 text-lg font-semibold mt-3 ${activeTab === "yes" ? "border-primary border-2" : ""}`}>
                    Yes
                </div>
                <div onClick={handleTab} id="no" className={`bg-white cursor-pointer border rounded-xl p-3 text-lg font-semibold mt-3 ${activeTab === "no" ? "border-primary border-2" : ""}`}>
                    No
                </div>
                <button
                    type="button"
                    className={`mt-6 hover:bg-primary/90  p-3 text-white w-full py-3text-white font-semibold rounded-full bg-primary hover:bg-primary`}

                    onClick={onSubmit}
                    disabled={loading}
                >

                    {loading ? <ClipLoader size={24} color="white" /> : "Continue"}
                </button>
            </div>
        </div>
    )
}

export default BeforeWrapUp