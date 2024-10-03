import React from 'react'

const CompareModule = ({ img1, img2, desc }) => {
    return (
        <div className='w-[1024px] m-auto mt-10'>
            <div className='flex  items-center justify-center'>
                <div style={{ backgroundImage: `url(${img1})` }} className='h-[500px] w-[400px]  rounded-3xl relative bg-cover bg-center bg-no-repeat'>
                    <div className='text-white absolute -left-10 bottom-14 font-semibold text-xl bg-primary rounded-xl max-w-fit text-center p-5 px-10'>
                        Before
                    </div>
                </div>
                <img src="/images/27.png" className='w-28' />
                <div style={{ backgroundImage: `url(${img2})` }} className='h-[500px] w-[400px]  rounded-3xl relative bg-cover bg-center bg-no-repeat'>
                    <div className='text-white absolute -left-10 bottom-14 font-semibold text-xl bg-orange-400 rounded-xl max-w-fit text-center p-5 px-10'>
                        After
                    </div>
                </div>
            </div>
            <p className='text-center mt-3'>
                {desc}
            </p>
        </div>
    )
}

export default CompareModule