import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const OurPrograms = () => {
  return (
    <div className='relative flex flex-col gap-20 justify-center items-center py-20 px-5 md:px-24'>
        <Image priority src='/ourProgramsBg.svg' width={1000} height={5} alt="Why Background Image" className='top-44 w-full md:top-5 -z-50 absolute right-0' />
        <div className=' xl:w-[60rem]'>
            <div className='grid place-items-center'>
                <h1 className=' font-daxlineBold text-4xl'>Our Programs</h1>
                <Image height={4} width={300} alt='line' src="/line.svg" />
            </div>
            <h4 className='mt-5 text-center opacity-90 font-daxlineBold'>Vatebra Academy strives to provide future-facing, 
            specialized and skill-based training in the technology ecosystem at a reasonable 
            cost and atmosphere that delivers value for our and the society at large.
            </h4>
        </div>


        <div className='flex flex-wrap items-center justify-center gap-20'>
            <Link href="/DataAcademy" className=' bg-white flex flex-col gap-4 items-center md:w-[30rem] px-4 pt-3 shadow-md rounded-2xl pb-9'>
                <Image priority height={402} width={757} src='/dataAcademy.svg' alt='dataAcademy' />
                <div className='flex flex-col md:flex-row md:justify-between items-center w-full'>
                    <h1 className='font-daxlineExtraBold text-2xl'>Data Academy</h1>
                    <h1 className=' px-10 py-[2px] pt-1 font-daxlineRegular rounded-md text-base text-white hover:bg-black bg-[#CB1829]'>Get Started</h1>
                </div>
                <h4 className=''>This intensive training takes a hands-on approach to advancing you from 
                    Enthusiast/Zero Level to Product Manager ready to build world-class products. This2 –month training 
                    is designed by top professionals to provide in-depth knowledge to beginners while also establishing 
                    a leading industry relationship that leads to job opportunities.
                </h4>
            </Link>


            <Link href="/ProductAcademy" className=' bg-white flex flex-col gap-4 items-center md:w-[30rem] px-4 pt-3 shadow-md rounded-2xl pb-9'>
                <Image priority height={402} width={757} src='/productAcademy.svg' alt='dataAcademy' />
                <div className='flex flex-col md:flex-row md:justify-between items-center w-full'>
                    <h1 className='font-daxlineExtraBold text-2xl'>Product Academy</h1>
                    <h1 className=' px-10 py-[2px] pt-1 font-daxlineRegular rounded-md text-base text-white hover:bg-black bg-[#CB1829]'>Get Started</h1>
                </div>
                <h4 className=''>This intensive training takes a hands-on approach to advancing you from 
                Enthusiast/Zero Level to Product Manager ready to build world-class products. This2 –month training 
                is designed by top professionals to provide in-depth knowledge to beginners while also establishing 
                a leading industry relationship that leads to job opportunities.
            </h4>
            </Link>

            <Link href="/ProductAcademy" className=' bg-white flex flex-col gap-4 items-center md:w-[30rem] px-4 pt-3 shadow-md rounded-2xl pb-9'>
                <Image priority height={402} width={757} src='/designAcademy.svg' alt='dataAcademy' />
                <div className='flex flex-col md:flex-row md:justify-between items-center w-full'>
                    <h1 className='font-daxlineExtraBold text-2xl'>Design Academy</h1>
                    <h1 className=' px-10 py-[2px] pt-1 font-daxlineRegular rounded-md text-base text-white hover:bg-black bg-[#CB1829]'>Get Started</h1>
                </div>                
                <h4 className=''>This 1-month training program is designed by top professionals to teach
                 you the newest design thinking, sketching, wireframing, and prototyping techniques. The 
                 Vatebra Academy UI/UX Design program was developed as project-based learning to aid in 
                 your development of user experience design abilities for digital products.
            </h4>
            </Link>

            <Link href="/SoftwareAcademy" className=' bg-white flex flex-col gap-4 items-center md:w-[30rem] px-4 pt-3 shadow-md rounded-2xl pb-9'>
                <Image priority height={402} width={757} src='/softwareAcademy.svg' alt='dataAcademy' />
                <div className='flex flex-col md:flex-row md:justify-between items-center w-full'>
                    <h1 className='font-daxlineExtraBold text-2xl'>Software Academy</h1>
                    <h1 className=' px-10 py-[2px] pt-1 font-daxlineRegular rounded-md text-base text-white hover:bg-black bg-[#CB1829]'>Get Started</h1>
                </div>
                <h4 className=''>The goal of this course is to quickly advance you from complete novice to skilled 
                software developer: either Front-End, Back-End, Full-Stack or Dotnet Stack software developer. You 
                will begin creating actual websites, basic applications and implementing key APIs right after the 
                second class in this practical course.
            </h4>
            </Link>
        </div>
        
    </div>
  )
}

export default OurPrograms