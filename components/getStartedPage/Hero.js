import React from 'react'
import Image from 'next/image'
import Link from "next/link";
import { useRouter } from 'next/router';

const Hero = () => {
  const router = useRouter()

  const handleClick = ()=> {
    router.push('/GetStarted')
  }

  return (
    <>
  
    <div className='relative md:py-20 pb-20'>
        {/* <Image priority src='/heroBgImg.svg' width={1780} height={1056} alt="Hero Background Image" className=' -z-50 absolute top-0 right-0' /> */}
        <div className='px-5 pt-10 md:pt-10 justify-center text-center xl:text-left md:px-24 flex flex-col xl:flex-row items-center md:justify-between gap-10 md:gap-5'>
            <div className='flex flex-col max-w-2xl gap-6'>
                <h1 className='text-3xl font-daxlineBold md:text-4xl text-[#5cbf22]'>Building the Next Generation <br /> of Tech Talent</h1>
                <h1 className='text-[#030303] font-daxlineMedium max-w-4xl text-lg md:text-xl'>Learn from IT specialists and professionals, 
                with years of experience in the field. The curriculum for our courses is tailored to match industry standards,
                with an emphasis on practical, hands-on skills learning.
                </h1>
                <button onClick={handleClick} className='bg-[#D40E1F] md:w-[max-content] py-2 px-24 hover:bg-black rounded-lg mx-auto xl:mx-0 text-white font-daxlineBold'>Enroll Now</button>  
            </div>

            <div className='z-[10000]'>
                <Image height={703} width={745} alt='hero img' src="/getStartedHeroBg.svg" />
            </div>
        </div>

        <div className='px-5 md:px-24'>
            <Image height={26} width={186} src="dotImg1.svg" alt="dot img1" />
            <div className='bg-gradient-to-r from-green-500 to-red-500 h-1 w-[70%] mt-10'></div>
        </div>
    </div>
  </>
  )
}

export default Hero