import Image from 'next/image'
import React from 'react'
import Link from 'next/link'


const ValuableInsights = () => {
  return (
    <div>
        <div className='flex flex-col xl:flex-row items-center mx-5 md:mx-24 bg-[#5CBF22] rounded-[3rem] gap-10 my-32 text-white pb-10 md:p-0'>
          <Image priority height={500} width={400} src='/valuableInsightImg.svg' alt='aboutHeroImg' className='md:-ml-7 w-96 rounded-[3rem]' />
          <div className='px-10 mb:px-0 flex flex-col p-5 gap-5'>
              <div className='flex items-center gap-5'>
                <h1 className=' font-daxlineBold text-2xl md:text-3xl'>Valuable Insights</h1>
                <Image priority height={10} width={50} src='/graphImg.svg' alt='aboutHeroImg'/>
              </div>
                <h1 className=' font-daxlineMedium text-md'>At Vatebra Academy, we strive to be a first-class post-graduate technology 
                training institute that will positively impact the Information Technology space 
                and the business environment of Sub-Saharan Africa by building best in-class technology experts.
                </h1>
                <h1 className=' font-daxlineMedium text-md'>Vatebra academy is incorporated in Nigeria with Registration Number 2594621 on the 6th of April 2018.</h1>

                <Link href="/GetStarted">
                    <button className='bg-[#D40E1F] md:w-[max-content] py-3 md:px-24 px-20 hover:bg-black rounded-lg mx-auto xl:mx-0 text-white font-daxlineBold'>Get started</button> 
                </Link> 
          </div>
        </div>
    </div>
  )
}

export default ValuableInsights