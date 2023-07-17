import context from '../context/stateContext'
import {useState, useContext, useEffect} from 'react'
import Image from 'next/image'
import SecondSection from '@/components/DataAcademyPage/SecondSection'
import ThridSection from '@/components/DataAcademyPage/ThridSection'
import FourthSection from '@/components/DataAcademyPage/FourthSection'
import LearningModel from '@/components/landingPage/LearningModel'
import Testimonials from '@/components/landingPage/Testimonials'


const DataAcademy = () => {

  const {page, setPage} = useContext(context)


    useEffect(() => {
      setPage('schools')
      return () => setPage("")
    }, [setPage])


  return (
    <div className=''>
        <Image height={600} width={1500} src='/dataAcademyHeaderImg.svg' alt='aboutHeroImg' className='w-full' />
       <div className=''>
          <div>
              <div className='flex flex-col justify-center items-center text-center my-20 gap-10'>
                <h1 className='font-daxlineMedium text-xl md:text-3xl md:w-[53rem]'>This intensive training takes a hands-on approach to advancing you from Enthusiast/Zero Level to <span className=' font-daxlineBold md:text-3xl text-[#CB1829]'> Data Scientist </span> ready to hit the market.</h1>
              </div>
          </div>

          <ThridSection />
          <Testimonials />
          <SecondSection />
          <FourthSection />
          <LearningModel />
       </div>
    </div>
  )
}

export default DataAcademy