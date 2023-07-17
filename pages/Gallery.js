import React, {useState, useContext, useEffect} from 'react'
import context from '../context/stateContext'
import TopSection from '@/components/GalleryPage/TopSection'
import MiddleSection from '@/components/GalleryPage/MiddleSection'
import Testimonials from '@/components/landingPage/Testimonials'


const Gallery = () => {

    const {page, setPage} = useContext(context)


    useEffect(() => {
      setPage('gallery')

      return () => setPage("")
    }, [setPage])

  return (
    <div>
       <TopSection /> 
       <MiddleSection />
       <Testimonials />
    </div>
  )
}

export default Gallery