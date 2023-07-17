import React from 'react'
import Image from 'next/image'
import SecondSection from '../DataAcademyPage/SecondSection'

const ProductAcademyPage = () => {
  return (
    <div>
        <Image height={600} width={1500} src='/productAcademyImg.svg' alt='aboutHeroImg' className='w-full' />
        <div className='mx-5'>
            <div>
                <div className='flex flex-col justify-center items-center text-center my-20 gap-10'>
                    <h1 className='font-daxlineMedium text-xl md:text-3xl md:w-[53rem]'>This intensive training takes a hands-on approach to advancing you from Enthusiast/Zero Level to <span className=' font-daxlineBold md:text-3xl text-[#CB1829]'> Product Manager </span> ready to hit the market.</h1>
                    <SecondSection />
                </div>
            </div>
          </div>
    </div>
  )
}

export default ProductAcademyPage