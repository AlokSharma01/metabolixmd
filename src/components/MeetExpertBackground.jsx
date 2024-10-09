import React from 'react'

const MeetExpertBackground = ({children }) => {
    return (
        <div className='md:h-[600px] min-w-[320px]  md:w-[500px] bg-white relative flex flex-col justify-end overflow-hidden '>

            <div className='h-[500px] bg-orange-400 rounded-t-3xl flex flex-col justify-end'>

                <div className='h-[400px] bg-[#c7c3b8] rounded-t-3xl'>
                    <div className='absolute top-0 -right-20  flex'>

                        <img src="/images/orange-icon.png" className=' h-10 absolute left-5 bottom-10' />
                        {children}
                    </div>
                </div>

            </div>

        </div>
    )
}

export default MeetExpertBackground