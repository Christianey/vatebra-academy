import {useState, useContext, useEffect} from 'react'
import context from '../context/stateContext'
import Image from 'next/image'
import Link from 'next/link'
import LearningModel from '@/components/landingPage/LearningModel'


const About = () => {
  const [showModal, setShowModal] = useState(false)

    const {page, setPage} = useContext(context)


    useEffect(() => {
      setPage('about')
      return () => setPage("")
    }, [setPage])
  
  return (
    <>
      <div>
        <div className='relative'>
          <Image height={600} width={1500} src='/aboutHeroImg.svg' alt='aboutHeroImg' className='w-full' />

          {/* Mission */}
          <div>
            <div className='flex flex-col xl:flex-row items-center bg-white shadow-2xl rounded-3xl md:rounded-[5rem] gap-10 md:mx-10 mx-5 px-5'>
              <div className='flex flex-col gap-5'>
                  <div>
                    <Image height={100} width={62} src='/quoteImg.svg' alt='aboutHeroImg' />
                  </div>
                  <div className=''>
                    <h1 className=' font-daxlineMedium text-3xl text-[#3C9518]'>OUR MISSION</h1>
                    <Image height={1} width={200} alt='line' src="/line.svg" />
                </div>
                <h2 className=' font-daxlineMedium'>Vatebra Academy strives to provide future-facing,
                  specialized and skill-based training in the technology 
                  ecosystem at a reasonable cost and atmosphere that delivers value for our customers. 
                </h2>
                
              </div>

              <Image height={100} width={100} src='/africanAmerican.svg' alt='aboutHeroImg' className='w-full' />
            </div>
            <Image className=' ml-10 md:mx-10 mx-5 px-5' height={101} width={82} alt='line' src="/aboutDots.svg" />
          </div>
          

          {/* Networking Opportunities */}
          <div className='flex flex-col xl:flex-row items-center mx-5 bg-[#5CBF22] md:mx-10 rounded-[3rem] gap-10 my-44 text-white pb-10 md:p-0'>
            <Image height={500} width={600} src='/groupPic.svg' alt='aboutHeroImg' className='' />
            <div className='px-10 mb:px-0 flex flex-col gap-5'>
              <h1 className=' font-daxlineBold text-2xl md:text-3xl'>Networking Opportunity</h1>
              <h1 className=' font-daxlineMedium text-md'>At Vatebra Academy, we strive to be a first-class post-graduate technology 
                training institute that will positively impact the Information Technology space 
                and the business environment of Sub-Saharan Africa by building best in-class technology experts.
              </h1>
              <h1 className=' font-daxlineMedium text-md'>Vatebra academy is incorporated in Nigeria with Registration Number 2594621 on the 6th of April 2018.</h1>
            </div>
          </div>


          {/* Certification */}
          <div className='my-44' style={{background: 'url(/certBg.svg'}}>
            <div  className='flex flex-col xl:flex-row items-center mx-5 shadow-2xl bg-white md:mx-10 rounded-[3rem] gap-10 pb-10 md:p-0'>
              <Image height={500} width={600} src='/aboutFemaleStudent.svg' alt='aboutHeroImg' className='md:order-1' />
              <div className='px-10 mb:px-0 flex flex-col gap-5'>
                <h1 className=' font-daxlineBold text-2xl md:text-3xl'>Certification</h1>
                <h1 className=' font-daxlineMedium text-md'>Vatebra Certificate Recognized across Africa, in the US and UK. We also work with our students to get globally recognized certificates in respective fields.
                </h1>
                <h1 className=' font-daxlineMedium text-md'>Vatebra academy is incorporated in Nigeria with Registration Number 2594621 on the 6th of April 2018.</h1>
                <h1 onClick={() => setShowModal(!showModal)} className='bg-[#D40E1F] cursor-pointer md:w-[max-content] py-3 px-24 hover:bg-black rounded-lg mx-auto xl:mx-0 text-white font-daxlineBold'>Get started</h1> 
              </div>
            </div>
          </div>

          {/* Not Alone */}
          <div className='bg-[#b7ea9a]  py-20 flex flex-col md:flex-row items-center justify-center px-5 md:px-10'>
            <div className=' p-4 border-l-2 border-t-2 border-b-2 rounded-[2rem]'>
              <Image priority height={500} width={500} src='/notAlone.svg' alt='aboutHeroImg' className='' />
            </div>

            <div className='bg-white flex flex-col gap-5 justify-center md:w-[40rem] py-10 md:py-24 px-5 md:pl-20 md:pr-44 rounded-[2rem]'>
              <h1 className=' font-daxlineBold text-3xl'>You are not alone</h1>
              <h1 className=' font-daxlineMedium opacity-60'>You have the opportunity to ask questions, join small groups for personal classwork, submit assignments and also get real-time feedback.</h1>
                  <h1 onClick={() => setShowModal(!showModal)} className='bg-[#D40E1F] md:w-[max-content] py-3 px-24 hover:bg-black rounded-lg mx-auto xl:mx-0 text-white font-daxlineBold'>Get started</h1> 
            </div>
          </div>

          {/* Learning Model */}
          <LearningModel />
        </div>
      </div>


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
                                          <input type="email" placeholder='Enter your Occupation' className='rounded-xl p-3 px-8' />
                                      </div>
                                      <div>
                                          <h1 className='mb-3 opacity-75'>Location</h1>
                                          <input placeholder='Enter your Location' type="number" className='rounded-xl p-3 px-8' />
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

export default About