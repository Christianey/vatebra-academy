import {useState, useContext, useEffect} from 'react'
import context from '../context/stateContext'
import Hero from '@/components/TutorsPage/Hero'
import SomeOfOurTutors from '@/components/TutorsPage/SomeOfOurTutors'
import ValuableInsights from '@/components/getStartedPage/ValuableInsights'


const Tutors = () => {
    const {page, setPage} = useContext(context)


    useEffect(() => {
      setPage('tutors')
      return () => setPage("")
    }, [setPage])

  return (
    <div className=' md:px-[6.5rem] my-20'>
        <Hero />
        <SomeOfOurTutors />
        <ValuableInsights />
    </div>
  )
}

export default Tutors