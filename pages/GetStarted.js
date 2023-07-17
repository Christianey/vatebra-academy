import React from 'react'
import Hero from '@/components/getStartedPage/Hero'
import Academies from '@/components/getStartedPage/Academies'
import Academies2 from '@/components/getStartedPage/Academies2'
import ValuableInsights from '@/components/getStartedPage/ValuableInsights'
import WhyVatebra from '@/components/landingPage/WhyVatebra'
import Image from 'next/image'
import Link from 'next/link'


const GetStarted = () => {
  return (
    <div>
      <Link href='/MakePayment'>
        <Image height={600} width={1500} src='/getStartedHeroImg.svg' alt='aboutHeroImg' className='w-full' />
      </Link>
       <Academies />
       <Academies2 />
       <div className='relative '>
        <div className='grid place-items-center'>
            <div className='px-5 mb-20 pt-10 md:pt-10 justify-center text-center xl:text-left md:px-24 flex flex-col xl:flex-row items-center md:justify-between md:gap-5'>
                <div className='z-[10000]'>
                    <Image height={703} width={745} alt='hero img'  src='/valuableInsightImg.svg' />
                </div>

                <div className=' flex flex-col max-w-2xl gap-6'>
                    <h1 className='text-3xl font-daxlineBold md:text-4xl'>Valuable Insights</h1>
                    
                    <h1 className='text-[#030303] font-daxlineMedium max-w-4xl  md:text-base'>You will gain valuable insights into the industry through our in-depth discussions and various guest lectures by industry experts, which will be hosted by our very own tutors.
                    </h1>

                    <Link href="/MakePayment">
                    <button className='bg-[#D40E1F] md:w-[max-content] py-3 px-24 hover:bg-black rounded-lg mx-auto xl:mx-0 text-white font-daxlineBold'>Enroll Now</button> 
                    </Link> 
                </div>

            </div>
        </div>

    </div>
    </div>
  )
}

export default GetStarted