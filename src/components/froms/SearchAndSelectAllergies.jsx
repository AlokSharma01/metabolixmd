import React from 'react'

const SearchAndSelectAllergies = () => {
    return (
        <div className="max-w-fit mx-auto">
            <div className="w-[500px]">
                <h2 className="text-2xl font-semibold mb-6">
                    Search and select all allergies you have
                </h2>
                <p className="my-5 font-semibold text-zinc-500">
                    Include allergies to prescription or over-the-counter medicine, herbs, vitamins, supplements, food, dyes or anything else.
                </p>

                <div className='text-sm bg-zinc-200 rounded-lg p-3'>
                    Our Clinicians use this information in determining a safe and effective treatment.
                </div>
                <input className='p-3 bg-white border outline-none mt-5 rounded-xl w-full'  type="search" placeholder='Search allergy name'/>

                <div className='p-3 font-medium text-center border cursor-pointer rounded-full mt-5'>
                    I don&apos;t have any allergies
                </div>
            </div>
        </div>
    )
}

export default SearchAndSelectAllergies