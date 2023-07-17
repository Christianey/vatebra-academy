import React from 'react'
import Image from 'next/image'
import SecondSection from '../DataAcademyPage/SecondSection'

const SoftwareAcademyPage = () => {
  return (
    <div>
        <Image height={600} width={1500} src='/SoftwareAcademyImg.svg' alt='aboutHeroImg' className='w-full' />
        <div className='mx-5'>
            <div>
                <div className='flex flex-col justify-center items-center text-center my-20 gap-10'>
                    <h1 className='font-daxlineMedium text-xl md:text-3xl md:w-[53rem]'>Begin creating actual websites, basic applications and implementing key APIs right after the second class in this practical course. </h1>
                    <SecondSection />
                </div>
            </div>
          </div>
    </div>
  )
}

export default SoftwareAcademyPage