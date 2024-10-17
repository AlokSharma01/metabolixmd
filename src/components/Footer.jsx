import React from 'react'

const Footer = () => {
  return (
    <section className=' bg-black p-5 py-20 flex items-center mt-auto'>
    <div className='flex w-full items-center gap-10'>
        <div className=' text-white'>
            <img src="/images/logo-white.png" className='w-96' />
            <p className='mt-10 '>
                Call: +123-456-7980
                <br />
                Email: hello@reallygreatsite.com
            </p>
            <p className='mt-10 font-medium'>
                Powered by MetabolixMD, 2024
            </p>

        </div>

    </div>
</section>
  )
}

export default Footer