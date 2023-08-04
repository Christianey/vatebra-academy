import SoftwareAcademyPage from '@/components/SoftwareAcademyPage/SoftwareAcademyPage'
import Image from 'next/image'
import React from 'react'
import {useState, useContext, useEffect} from 'react'
import context from '../context/stateContext'
import Link from 'next/link'
import LearningModel from '@/components/landingPage/LearningModel'
import OurPrograms from '@/components/landingPage/OurPrograms'
import ValuableInsights from '@/components/getStartedPage/ValuableInsights'

const SoftwareAcademy = () => {
    const {page, setPage} = useContext(context)
    const [frontendModal, setFrontendModal] = useState(false)
    const [backend, setBackendModal] = useState(false)
    const [fullstackModal, setFullstackModal] = useState(false)
    const [dotnetstackModal, setDotnetstackModal] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [showModal2, setShowModal2] = useState(false)

    useEffect(() => {
      setPage('schools')
      return () => setPage("")
    }, [setPage])

    
  return (
    <>
        <div className='w-full'>
        <SoftwareAcademyPage />

        <div className='relative'>
            <div className='grid place-items-center'>
                <div className='px-5 pt-10 md:pt-10 justify-center text-center xl:text-left md:px-24 flex flex-col xl:flex-row items-center md:justify-between gap-10 md:gap-10 md:my-20'>
                    <div className='z-[10000]'>
                        <Image height={703} width={600} alt='hero img' src="/accelerate.svg" />
                    </div>

                    <div className=' flex flex-col max-w-lg gap-6'>
                        <h1 className='text-[#030303] font-daxlineBold text-xl max-w-4xl  md:text-2xl'>This 2 –month training is designed by top professionals to provide in-depth knowledge to beginners while also establishing a leading industry relationship that leads to job opportunities
                        </h1>
                        <div className='flex mx-auto md:mx-0 flex-col md:flex-row max-w-fit gap-5'>
                            {/* <div className='text-base hover:bg-[#6a6363] cursor-pointer bg-[#ACACAC] text-black font-daxlineBold px-7 py-3 rounded-lg flex gap-5'>
                                 <h1 className='text-white'>Download broachure</h1>
                                 <Image height={20} width={28} alt='line' src="/downloadLogo.svg" />
                            </div> */}
                            <h1 onClick={()=> setShowModal(!showModal)} className='bg-[#D40E1F] mx-auto md:mx-0 text-white hover:bg-black font-daxlineRegular cursor-pointer max-w-fit px-20 py-3 rounded-lg'>Get Started</h1>
                        </div>
                    </div>

                </div>
            </div>

        </div>

        <div style={{background: 'url(/programsBgImg.svg)'}} className='my-20 py-20'>
                <div className='mx-5'>
                    <div className='grid place-items-center'>
                        <h1 className=' font-daxlineExtraBold text-white text-4xl'>Programs</h1>
                        <div className='bg-white w-60 h-1'> </div>
                    </div>

                    <div className='grid place-items-center gap-10 mt-20'>
                        <div className=' text-white flex flex-col xl:flex-row  gap-5 justify-center'>
                            <div className=' md:w-[35rem] bg-white flex flex-col gap-10 p-10 rounded-3xl'>
                                <div className='flex gap-5 flex-wrap'>
                                    <h1 className='text-2xl font-daxlineExtraBold text-[#338603]'>Front-end Programming</h1>
                                    <h1 onClick={()=> setFrontendModal(!frontendModal)} className='border-gray-400 border text-black font-daxlineRegular hover:bg-gray-400 hover:text-white max-w-fit cursor-pointer px-5 p-1 rounded-full'>Program details</h1>
                                </div>
                                <p className=' text-lg font-daxlineBold text-[#E8AC28]'>Duration: [3 Month]</p>
                                <div className='flex flex-col md:flex-row max-w-fit gap-5'>
                                    <Link download="Vatebra Frontend" href='/Front end Dev.pdf' className='text-base border-2 hover:bg-slate-300 cursor-pointer bg-gray-400 text-black font-daxlineBold px-7 py-3 rounded-lg flex gap-5'>
                                        <h1 className=''>Download brochure</h1>
                                        <Image height={20} width={28} alt='line' src="/downloadLogo.svg" />
                                    </Link>
                                    <Link href='https://forms.office.com/Pages/ResponsePage.aspx?id=Mh3BWZEh3UuZrgByGktfMuEqhVoLQSNMpCGgmLjyMttUOVRWOFJQR01GMVhXV0w1S0RKMTBEOFZQMS4u' className='bg-[#D40E1F] font-daxlineRegular cursor-pointer max-w-fit px-10 py-3 rounded-lg'>Pay now</Link>
                                </div>
                            </div>
                            
                            <div className=' md:w-[35rem] bg-white flex flex-col gap-10 p-10 rounded-3xl'>
                                <div className='flex gap-5 flex-wrap'>
                                    <h1 className='text-2xl font-daxlineExtraBold text-[#338603]'>Back-end Programming</h1>
                                    <h1 onClick={()=> setBackendModal(!backend)} className='border-gray-400 border text-black font-daxlineRegular hover:bg-gray-400 hover:text-white max-w-fit cursor-pointer px-5 p-1 rounded-full'>Program details</h1>
                                </div>
                                <p className=' text-lg font-daxlineBold text-[#E8AC28]'>Duration: [3 Month]</p>
                                <div className='flex flex-col md:flex-row max-w-fit gap-5'>
                                    <Link download="Vatebra Backend" href='/Backend.pdf' className='text-base border-2 hover:bg-slate-300 cursor-pointer bg-gray-400 text-black font-daxlineBold px-7 py-3 rounded-lg flex gap-5'>
                                        <h1 className=''>Download brochure</h1>
                                        <Image height={20} width={28} alt='line' src="/downloadLogo.svg" />
                                    </Link>
                                    <Link href='https://forms.office.com/Pages/ResponsePage.aspx?id=Mh3BWZEh3UuZrgByGktfMuEqhVoLQSNMpCGgmLjyMttUOVRWOFJQR01GMVhXV0w1S0RKMTBEOFZQMS4u' className='bg-[#D40E1F] font-daxlineRegular cursor-pointer max-w-fit px-10 py-3 rounded-lg'>Pay now</Link>
                                </div>
                            </div>
                        </div>

                        <div className=' text-white flex flex-col xl:flex-row  gap-5 justify-center'>
                            <div className=' md:w-[35rem] bg-white flex flex-col gap-10 p-10 rounded-3xl'>
                                <div className='flex gap-5 flex-wrap'>
                                    <h1 className='text-2xl font-daxlineExtraBold text-[#338603]'>Full-stack Programming</h1>
                                    <h1 onClick={()=> setFullstackModal(!fullstackModal)} className='border-gray-400 border text-black font-daxlineRegular hover:bg-gray-400 hover:text-white max-w-fit cursor-pointer px-5 p-1 rounded-full'>Program details</h1>
                                </div>
                                <p className=' text-lg font-daxlineBold text-[#E8AC28]'>Duration: [3 Month]</p>
                                <div className='flex flex-col md:flex-row max-w-fit gap-5'>
                                    <Link download="Full stack Dev" href='/Full stack Dev.pdf' className='text-base border-2 hover:bg-slate-300 cursor-pointer bg-gray-400 text-black font-daxlineBold px-7 py-3 rounded-lg flex gap-5'>
                                        <h1 className=''>Download brochure</h1>
                                        <Image height={20} width={28} alt='line' src="/downloadLogo.svg" />
                                    </Link>
                                    <Link href='https://forms.office.com/Pages/ResponsePage.aspx?id=Mh3BWZEh3UuZrgByGktfMuEqhVoLQSNMpCGgmLjyMttUOVRWOFJQR01GMVhXV0w1S0RKMTBEOFZQMS4u' className='bg-[#D40E1F] font-daxlineRegular cursor-pointer max-w-fit px-10 py-3 rounded-lg'>Pay now</Link>
                                </div>
                            </div>
                            
                            <div className=' md:w-[35rem] bg-white flex flex-col gap-10 p-10 rounded-3xl'>
                                <div className='flex gap-5 flex-wrap'>
                                    <h1 className='text-2xl font-daxlineExtraBold text-[#338603]'>DotNet Stack Programming</h1>
                                    <h1 className='border-gray-400 border text-black font-daxlineRegular hover:bg-gray-400 hover:text-white max-w-fit cursor-pointer px-5 p-1 rounded-full'>Program details</h1>
                                </div>
                                <p className=' text-lg font-daxlineBold text-[#E8AC28]'>Duration: [3 Month]</p>
                                <div className='flex flex-col md:flex-row max-w-fit gap-5'>
                                    <div className='text-base border-2 hover:bg-slate-300 cursor-pointer bg-gray-400 text-black font-daxlineBold px-7 py-3 rounded-lg flex gap-5'>
                                        <h1 className=''>Download brochure</h1>
                                        <Image height={20} width={28} alt='line' src="/downloadLogo.svg" />
                                    </div>
                                    <Link href='https://forms.office.com/Pages/ResponsePage.aspx?id=Mh3BWZEh3UuZrgByGktfMuEqhVoLQSNMpCGgmLjyMttUOVRWOFJQR01GMVhXV0w1S0RKMTBEOFZQMS4u' className='bg-[#D40E1F] font-daxlineRegular cursor-pointer max-w-fit px-10 py-3 rounded-lg'>Pay now</Link>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
        </div>

        <LearningModel />
        <ValuableInsights />

        <div className='relative bg-[#E8AC28] bg-opacity-40 py-10'>
            <div className='grid place-items-center'>
                <div className='px-5 pt-10 md:pt-10 justify-center text-center xl:text-left md:px-24 flex flex-col xl:flex-row items-center md:justify-between gap-7 md:gap-10 md:my-20'>
                    <div className='z-[10000] xl:order-1'>
                        <Image height={500} width={800} alt='hero img' src="/manCoding.svg" />
                    </div>

                    <div className=' flex flex-col max-w-lg gap-6'>
                        <h1 className=' text-xl font-daxlineExtraBold'>Learn from seasoned industry experts and develop the ability to drive successful products.</h1>
                        <h1 className='text-[#030303] font-daxlineMedium text-base opacity-80 max-w-4xl  md:text-xl'>At Vatebra Academy, we strive to be a first-class post-graduate technology training institute that will positively impact the Information Technology space and the business environment of Sub-Saharan Africa by building best in-class technology experts.
                        </h1>
                        
                        <h1 onClick={()=> setShowModal(!showModal)} className='bg-[#D40E1F] md:w-[max-content] py-3 px-24 hover:bg-black rounded-lg mx-auto xl:mx-0 text-white font-daxlineBold'>Get started</h1> 
                       
                    </div>

                </div>
            </div>

        </div>

        {/* <div className=' bg-[#5CBF22] px-5 md:px-24 py-10 flex flex-col gap-10'>
            <div className='grid place-items-center'>
                <h1 className=' font-daxlineBold text-3xl text-white'>Product Management Programs</h1>
                <div className='h-1 w-[27rem] md:w-[35rem] rounded-3xl bg-white'></div>
            </div>
            <main className='flex flex-wrap justify-around gap-10'>
                <div className='flex flex-col gap-10'>
                    <h1 className='bg-white p-5 rounded-xl text-xl font-daxlineBold px-32'>Design Thinking</h1>
                    <h1 className='bg-white p-5 rounded-xl text-xl font-daxlineBold px-32'>Design Thinking</h1>
                </div>
                <div className='flex flex-col gap-10'>
                    <h1 className='bg-white p-5 rounded-xl text-xl font-daxlineBold px-32'>Design Thinking</h1>
                    <h1 className='bg-white p-5 rounded-xl text-xl font-daxlineBold px-32'>Design Thinking</h1>
                </div>
            </main>
        </div> */}

        
        </div>



        {frontendModal ? (
        <>
          <div
            className="justify-center z-[50000] items-center flex overflow-x-hidden bg-black bg-opacity-70 overflow-y-auto fixed inset-0 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-fit">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full p-5 bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 rounded-t">  
                </div>
                {/*body*/}
                <div className="relative font-daxlineBold p-6 flex-auto">
                  <form className='flex flex-col gap-7 md:gap-10 '>
                    <div className='flex flex-col xl:flex-row gap-5 xl:gap-32'>
                      <div>
                        <h1 className=' font-daxlineBold text-[#5CBF22] mb-5 text-2xl'>Frontend Programming</h1>
                        <h1 className='mb-3 font-daxlineMedium text-sm opacity-75 w-96 md:w-[45rem]'>This intensive training takes a hands-on approach to advancing you from Enthusiast/Zero Level to 
a Software Developer ready to build world-class tech solutions.
Learn how to create your own entire websites from scratch! starting with software engineering’s 
fundamentals. You would have mastered a specialty and learned the art of productive teamwork by 
the time this program is over</h1>
                       
                      </div>
                      <div>
                      <h1 className=' font-daxlineBold mb-5 text-2xl'>Classes</h1>
                        <h1 className='mb-3 font-daxlineMedium text-sm opacity-75'>Weekdays - 10:00AM - 12:00AM</h1>
                        <h1 className='mb-3 font-daxlineMedium text-sm opacity-75'>Weekdays - 10:00AM - 12:00AM</h1>
                        <h1 className='mb-3 font-daxlineMedium text-sm opacity-75'>Weekdays - 10:00AM - 12:00AM</h1>
                      </div>
                    </div>

                    <div className='flex flex-col md:flex-row w-full'>
                      <div className='w-full'>
                        <h1 className='mb-3 opacity-75'>Course Outline</h1>
                        <textarea readOnly value='This intensive training takes a hands-on approach to advancing you from Enthusiast/Zero Level to 
a Software Developer ready to build world-class tech solutions.
Learn how to create your own entire websites from scratch! starting with software engineering’s 
fundamentals. You would have mastered a specialty and learned the art of productive teamwork by 
the time this program is over' type="email" placeholder='Enter your email address' className=' border-opacity-10 border w-full h-32 py-5 p-3 px-8' />
                      </div>
                    </div>
                  </form>
                  {/* <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! Theyre slowed down by their perception of
                    themselves. If youre taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.
                  </p> */}
                </div>
                {/*footer*/}
                <div className="flex items-center justify-start p-6 rounded-b">
                  <button
                    className="text-black opacity-80 background-transparent order-1 font-bold px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setFrontendModal(false)}
                  >
                    Go back
                  </button>
                  <button
                    className="bg-[#D40E1F] text-white active:bg-emerald-600 px-14 cursor-pointer font-bold uppercase text-sm py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                    onClick={() => {setShowModal(true), setFrontendModal(false)}}
                  >
                    Proceed to payment
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
        ) : null}



        {backend ? (
        <>
          <div
            className="justify-center z-[50000] items-center flex overflow-x-hidden bg-black bg-opacity-70 overflow-y-auto fixed inset-0 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-fit">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full p-5 bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 rounded-t">  
                </div>
                {/*body*/}
                <div className="relative font-daxlineBold p-6 flex-auto">
                  <form className='flex flex-col gap-7 md:gap-10 '>
                    <div className='flex flex-col xl:flex-row gap-5 xl:gap-32'>
                      <div>
                        <h1 className=' font-daxlineBold text-[#5CBF22] mb-5 text-2xl'>Backend Programming</h1>
                        <h1 className='mb-3 font-daxlineMedium text-sm opacity-75 w-96 md:w-[45rem]'>This course is intended to serve as a job workshop. The main goal is to teach our students all the 
aspects of job prospecting necessary to find employment in three months.
Key Competencies: Cover letter, Industry-standard CV, Interview Demo-Class, LinkedIn Optimization</h1>
                       
                      </div>
                      <div>
                      <h1 className=' font-daxlineBold mb-5 text-2xl'>Classes</h1>
                        <h1 className='mb-3 font-daxlineMedium text-sm opacity-75'>Weekdays - 10:00AM - 12:00AM</h1>
                        <h1 className='mb-3 font-daxlineMedium text-sm opacity-75'>Weekdays - 10:00AM - 12:00AM</h1>
                        <h1 className='mb-3 font-daxlineMedium text-sm opacity-75'>Weekdays - 10:00AM - 12:00AM</h1>
                      </div>
                    </div>

                    <div className='flex flex-col md:flex-row w-full'>
                      <div className='w-full'>
                        <h1 className='mb-3 opacity-75'>Course Outline</h1>
                        <textarea readOnly value='This course is intended to serve as a job workshop. The main goal is to teach our students all the 
aspects of job prospecting necessary to find employment in three months.
Key Competencies: Cover letter, Industry-standard CV, Interview Demo-Class, LinkedIn Optimization' type="email" placeholder='Enter your email address' className=' border-opacity-10 border w-full h-32 py-5 p-3 px-8' />
                      </div>
                    </div>
                  </form>
                  {/* <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! Theyre slowed down by their perception of
                    themselves. If youre taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.
                  </p> */}
                </div>
                {/*footer*/}
                <div className="flex items-center justify-start p-6 rounded-b">
                  <button
                    className="text-black opacity-80 background-transparent order-1 font-bold px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setBackendModal(false)}
                  >
                    Go back
                  </button>
                  <button
                    className="bg-[#D40E1F] text-white active:bg-emerald-600 px-14 cursor-pointer font-bold uppercase text-sm py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                    onClick={() => {setShowModal(true), setBackendModal(false)}}
                  >
                    Proceed to payment
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
        ) : null}


        {fullstackModal ? (
        <>
          <div
            className="justify-center z-[50000] items-center flex overflow-x-hidden bg-black bg-opacity-70 overflow-y-auto fixed inset-0 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-fit">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full p-5 bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 rounded-t">  
                </div>
                {/*body*/}
                <div className="relative font-daxlineBold p-6 flex-auto">
                  <form className='flex flex-col gap-7 md:gap-10 '>
                    <div className='flex flex-col xl:flex-row gap-5 xl:gap-32'>
                      <div>
                        <h1 className=' font-daxlineBold text-[#5CBF22] mb-5 text-2xl'>Frontend Programming</h1>
                        <h1 className='mb-3 font-daxlineMedium text-sm opacity-75 w-96 md:w-[45rem]'>This course is intended to serve as a job workshop. The main goal is to teach our students all the 
aspects of job prospecting necessary to find employment in three months.
Key Competencies: Cover letter, Industry-standard CV, Interview Demo-Class, LinkedIn Optimization</h1>
                       
                      </div>
                      <div>
                      <h1 className=' font-daxlineBold mb-5 text-2xl'>Classes</h1>
                        <h1 className='mb-3 font-daxlineMedium text-sm opacity-75'>Weekdays - 10:00AM - 12:00AM</h1>
                        <h1 className='mb-3 font-daxlineMedium text-sm opacity-75'>Weekdays - 10:00AM - 12:00AM</h1>
                        <h1 className='mb-3 font-daxlineMedium text-sm opacity-75'>Weekdays - 10:00AM - 12:00AM</h1>
                      </div>
                    </div>

                    <div className='flex flex-col md:flex-row w-full'>
                      <div className='w-full'>
                        <h1 className='mb-3 opacity-75'>Course Outline</h1>
                        <textarea readOnly value='This course is intended to serve as a job workshop. The main goal is to teach our students all the 
aspects of job prospecting necessary to find employment in three months.
Key Competencies: Cover letter, Industry-standard CV, Interview Demo-Class, LinkedIn Optimization' type="email" placeholder='Enter your email address' className=' border-opacity-10 border w-full h-32 py-5 p-3 px-8' />
                      </div>
                    </div>
                  </form>
                  {/* <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! Theyre slowed down by their perception of
                    themselves. If youre taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.
                  </p> */}
                </div>
                {/*footer*/}
                <div className="flex items-center justify-start p-6 rounded-b">
                  <button
                    className="text-black opacity-80 background-transparent order-1 font-bold px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setFullstackModal(false)}
                  >
                    Go back
                  </button>
                  <button
                    className="bg-[#D40E1F] text-white active:bg-emerald-600 px-14 cursor-pointer font-bold uppercase text-sm py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                    onClick={() => {setShowModal(true), setFullstackModal(false)}}
                  >
                    Proceed to payment
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
        ) : null}


        {dotnetstackModal ? (
        <>
          <div
            className="justify-center z-[50000] items-center flex overflow-x-hidden bg-black bg-opacity-70 overflow-y-auto fixed inset-0 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-fit">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full p-5 bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 rounded-t">  
                </div>
                {/*body*/}
                <div className="relative font-daxlineBold p-6 flex-auto">
                  <form className='flex flex-col gap-7 md:gap-10 '>
                    <div className='flex flex-col xl:flex-row gap-5 xl:gap-32'>
                      <div>
                        <h1 className=' font-daxlineBold text-[#5CBF22] mb-5 text-2xl'>Frontend Programming</h1>
                        <h1 className='mb-3 font-daxlineMedium text-sm opacity-75 w-96 md:w-[45rem]'>This intensive training takes a hands-on approach to advancing you from Enthusiast/Zero Level to 
a Software Developer ready to build world-class tech solutions.
Learn how to create your own entire websites from scratch! starting with software engineering’s 
fundamentals. You would have mastered a specialty and learned the art of productive teamwork by 
the time this program is over</h1>
                       
                      </div>
                      <div>
                      <h1 className=' font-daxlineBold mb-5 text-2xl'>Classes</h1>
                        <h1 className='mb-3 font-daxlineMedium text-sm opacity-75'>Weekdays - 10:00AM - 12:00AM</h1>
                        <h1 className='mb-3 font-daxlineMedium text-sm opacity-75'>Weekdays - 10:00AM - 12:00AM</h1>
                        <h1 className='mb-3 font-daxlineMedium text-sm opacity-75'>Weekdays - 10:00AM - 12:00AM</h1>
                      </div>
                    </div>

                    <div className='flex flex-col md:flex-row w-full'>
                      <div className='w-full'>
                        <h1 className='mb-3 opacity-75'>Course Outline</h1>
                        <textarea readOnly value='This intensive training takes a hands-on approach to advancing you from Enthusiast/Zero Level to 
a Software Developer ready to build world-class tech solutions.
Learn how to create your own entire websites from scratch! starting with software engineering’s 
fundamentals. You would have mastered a specialty and learned the art of productive teamwork by 
the time this program is over' type="email" placeholder='Enter your email address' className=' border-opacity-10 border w-full h-32 py-5 p-3 px-8' />
                      </div>
                    </div>
                  </form>
                  {/* <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! Theyre slowed down by their perception of
                    themselves. If youre taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.
                  </p> */}
                </div>
                {/*footer*/}
                <div className="flex items-center justify-start p-6 rounded-b">
                  <button
                    className="text-black opacity-80 background-transparent order-1 font-bold px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setFrontendModal(false)}
                  >
                    Go back
                  </button>
                  <button
                    className="bg-[#D40E1F] text-white active:bg-emerald-600 px-14 cursor-pointer font-bold uppercase text-sm py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                    onClick={() => {setShowModal(true), setFrontendModal(false)}}
                  >
                    Proceed to payment
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
        ) : null}


        {showModal ? (
                        <>
                        <div
                            className="justify-center z-[50000] items-center flex overflow-x-hidden bg-black bg-opacity-70 overflow-y-auto fixed inset-0 outline-none focus:outline-none"
                        >
                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full p-5 bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 rounded-t">
                                <h3 className="text-2xl font-daxlineBold font-semibold">
                                    Personal Information
                                </h3>
                                
                                </div>
                                {/*body*/}
                                <div className="relative font-daxlineBold p-6 flex-auto">
                                <form className='flex flex-col gap-7 md:gap-10 '>
                                    <div className='flex flex-col md:flex-row gap-5'>
                                      <div>
                                          <h1 className='mb-3 opacity-75'>First name</h1>
                                          <input type="text" placeholder='Enter your first name' className='rounded-xl p-3 px-8' />
                                      </div>
                                      <div>
                                          <h1 className='mb-3 opacity-75'>Last name</h1>
                                          <input placeholder='Enter your last name' type="text" className='rounded-xl p-3 px-8' />
                                      </div>
                                    </div>

                                    <div className='flex flex-col md:flex-row gap-5'>
                                      <div>
                                          <h1 className='mb-3 opacity-75'>Email Address</h1>
                                          <input type="email" placeholder='Enter your email address' className='rounded-xl p-3 px-8' />
                                      </div>
                                      <div>
                                          <h1 className='mb-3 opacity-75'>Phone Number</h1>
                                          <input placeholder='Enter your phone number' type="number" className='rounded-xl p-3 px-8' />
                                      </div>
                                
                                    </div>

                                    <div className='flex flex-col md:flex-row gap-5'>
                                      <div>
                                          <h1 className='mb-3 opacity-75'>Occupation</h1>
                                          <input type="email" placeholder='Enter your email address' className='rounded-xl p-3 px-8' />
                                      </div>
                                      <div>
                                          <h1 className='mb-3 opacity-75'>Location</h1>
                                          <input placeholder='Enter your phone number' type="number" className='rounded-xl p-3 px-8' />
                                      </div>
                                
                                    </div>
                                </form>
                                {/* <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                    I always felt like I could do anything. That’s the main
                                    thing people are controlled by! Thoughts- their perception
                                    of themselves! Theyre slowed down by their perception of
                                    themselves. If youre taught you can’t do anything, you
                                    won’t do anything. I was taught I could do everything.
                                </p> */}
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-start p-6 rounded-b">
                                <button
                                    className="text-black opacity-80 background-transparent order-1 font-bold px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                >
                                    Go back
                                </button>
                                <button
                                    className="bg-[#D40E1F] text-white active:bg-emerald-600 px-14 cursor-pointer font-bold uppercase text-sm py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="submit"
                                    onClick={() => {setShowModal2(true), setShowModal(false)}}
                                >
                                    Proceed to payment
                                </button>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                        </>
        ) : null}

        {showModal2 ? (
                <>
                <div
                    className="justify-center z-[50000] items-center flex overflow-x-hidden bg-black bg-opacity-70 overflow-y-auto fixed inset-0 outline-none focus:outline-none"
                >
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full p-5 bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 rounded-t">
                        <h3 className="text-2xl font-daxlineBold font-semibold">
                            Personal Information
                        </h3>
                        
                        </div>
                        {/*body*/}
                        <div className="relative font-daxlineBold p-6 flex-auto">
                        <form className='flex flex-col gap-7 md:gap-10 '>
                            <div className='flex flex-col md:flex-row gap-5'>
                            <div>
                                <h1 className='mb-3 opacity-75'>First name</h1>
                                <input type="text" placeholder='Enter your first name' className='rounded-xl p-3 px-8' />
                            </div>
                            <div>
                                <h1 className='mb-3 opacity-75'>Last name</h1>
                                <input placeholder='Enter your last name' type="text" className='rounded-xl p-3 px-8' />
                            </div>
                            </div>

                            <div className='flex flex-col md:flex-row gap-5'>
                            <div>
                                <h1 className='mb-3 opacity-75'>Enter card number</h1>
                                <input type="number" placeholder='Enter your card number' className='rounded-xl p-3 px-8' />
                            </div>
                            <div>
                                <h1 className='mb-3 opacity-75'>Enter CVV</h1>
                                <input placeholder='Enter your CVV' type="tel" className='rounded-xl p-3 px-8' />
                            </div>
                            </div>
                        </form>
                        {/* <p className="my-4 text-slate-500 text-lg leading-relaxed">
                            I always felt like I could do anything. That’s the main
                            thing people are controlled by! Thoughts- their perception
                            of themselves! Theyre slowed down by their perception of
                            themselves. If youre taught you can’t do anything, you
                            won’t do anything. I was taught I could do everything.
                        </p> */}
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-start p-6 rounded-b">
                        <button
                            className="text-black opacity-80 background-transparent order-1 font-bold px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal2(false)}
                        >
                            Go back
                        </button>
                        <button
                            className="bg-[#D40E1F] text-white active:bg-emerald-600 px-14 cursor-pointer font-bold uppercase text-sm py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="submit"
                            // onClick={() => setShowModal(false)}
                        >
                            Proceed
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
        ) : null}
    </>
  )
}

export default SoftwareAcademy