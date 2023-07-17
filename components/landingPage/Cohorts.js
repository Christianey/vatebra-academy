import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Cohorts = () => {
  return (
    <div className='relative text-center flex flex-col gap-12 justify-center items-center py-20 px-5 md:px-24'>
        <Image priority src='/cohortBg.svg' width={1000} height={5} alt="Why Background Image" className=' w-full -z-50 absolute right-0' />
        <div className='grid place-items-center'>
            <h1 className=' font-daxlineExtraBold text-4xl'>Past Cohorts</h1>
            <Image height={4} width={300} alt='line' src="/line.svg" />
        </div>
        <Image height={700} width={1800} alt='cohort' src="/cohortImg.svg" />
        <div>
            <Link href="/Gallery">
                <button className='bg-[#D40E1F] md:w-[max-content] py-3 px-24 md:px-44 hover:bg-black rounded-lg mx-auto xl:mx-0 text-white font-daxlineBold'>View More</button> 
            </Link>
        </div>
    </div>
  )
}

export default Cohorts