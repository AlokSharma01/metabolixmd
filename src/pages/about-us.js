import MeetExpertBackground from '@/components/MeetExpertBackground'
import NavBar from '@/components/NavBar'
import React from 'react'

const AboutUs = () => {
    return (
        <div>
            <NavBar />
            <div className='flex flex-col gap-10 mt-10 p-5'>
                <div className='flex flex-wrap gap-10 '>
                    <MeetExpertBackground>
                        <img src="/images/24.png" className='min-h-[600px] object-cover' />
                    </MeetExpertBackground>

                    <div className="md:mt-20">
                        <h3 className='text-4xl font-bold text-primary'>Ashley Donaldson, MSN, RN, FNP-BC</h3>
                        <p className='text-2xl  text-primary'>Advanced Nurse Practitioner and Consultant at MetabolixMD</p>
                    </div>
                </div>
                <div className='flex flex-wrap-reverse  gap-10 justify-end'>
                    <div className="md:mt-20">
                        <h3 className='text-4xl font-bold text-primary'>Raj sabar, MD</h3>
                        <p className='text-2xl  text-primary'>Consultant</p>
                    </div>
                    <MeetExpertBackground>
                        <img src="/images/25.png" className='min-h-[600px] object-cover' />
                    </MeetExpertBackground>


                </div>
                <div className='flex flex-wrap gap-10 '>
                    <MeetExpertBackground>
                        <img src="/images/mohit.png" className='min-h-[600px] object-cover' />
                    </MeetExpertBackground>

                    <div className="md:mt-20">
                        <h3 className='text-4xl font-bold text-primary'>Dr mohit chawla</h3>
                        <p className='text-2xl  text-primary'>Consultant Physician</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AboutUs