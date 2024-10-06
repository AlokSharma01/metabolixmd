

import React, { useState } from 'react'

const BeforeWrapUp = () => {
    const [activeTab, setActiveTab] = useState("")

    const handleTab = (e) => {
        setActiveTab(e.currentTarget.id)
    }
    return (
        <div className="max-w-fit mx-auto">
            <div className="w-[500px]">
                <p>BEFORE WE WRAP UP</p>
                <h2 className="text-2xl font-semibold mb-6">
                   Is there anything else you want your healthcare provider to know about your health?
                </h2>
                <p className='text-zinc-500 font-semibold'>
                     include any additional details about teh condtions you have already reported.
                </p>

                <div onClick={handleTab} id="yes" className={`bg-white cursor-pointer border rounded-xl p-3 text-lg font-semibold mt-3 ${activeTab==="yes"?"border-primary border-2":""}`}>
                    Yes
                </div>
                <div onClick={handleTab} id="no" className={`bg-white cursor-pointer border rounded-xl p-3 text-lg font-semibold mt-3 ${activeTab==="no"?"border-primary border-2":""}`}>
                    No
                </div>

                <button
                    type="button"
                    className={`mt-6 p-3 text-white w-full py-3text-white font-semibold rounded-full bg-primary hover:bg-primary`}
                >
                    Continue
                </button>
            </div>
        </div>
    )
}

export default BeforeWrapUp