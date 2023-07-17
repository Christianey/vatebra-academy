import Image from 'next/image'
import React, {useContext} from 'react'
import Link from 'next/link'
import context from '@/context/stateContext'



const WhyVatebra = () => {
    const {showModal, setShowModal} = useContext(context)

  return (
    <>
        <div className='relative '>
            <div className='grid place-items-center'>
                <Image priority src='/whyImgblur.svg' width={1000} height={5} alt="Why Background Image" className='top-72 w-full md:top-5 -z-50 absolute right-0' />
                <div className='px-5 pt-10 md:pt-10 justify-center text-center xl:text-left md:px-24 flex flex-col xl:flex-row items-center md:justify-between md:gap-5'>
                    <div className='z-[10000]'>
                        <Image height={703} width={745} alt='hero img' src="/whyImg.svg" />
                    </div>

                    <div className=' flex flex-col max-w-2xl gap-6'>
                        <h1 className='text-3xl font-daxlineBold md:text-4xl'>Why Vatebra Academy?</h1>
                        <h1 className='text-[#030303] font-daxlineMedium max-w-4xl md:text-base'>Vatebra Academy is set up to bridge the digital skill gap in the areas of technology. It is also positioned to revolutionize the IT industry by providing quality tech training and certification.
                        </h1>
                        <h1 className='text-[#030303] font-daxlineMedium max-w-4xl  md:text-base'>At Vatebra Academy,
                        we strive to be a first-class post-graduate technology training institute that will
                        positively impact the Information Technology space and the business environment of 
                        Sub-Saharan Africa by building best in-class technology experts.
                        </h1>
                       
                        {/* <h1 onClick={() => setShowModal(!showModal)} className='bg-[#D40E1F] md:w-[max-content] cursor-pointer py-3 px-24 hover:bg-black rounded-lg mx-auto xl:mx-0 text-white font-daxlineBold'>Get started</h1>  */}
                        <Link href='/GetStarted' className='bg-[#D40E1F] md:w-[max-content] cursor-pointer py-3 px-24 hover:bg-black rounded-lg mx-auto xl:mx-0 text-white font-daxlineBold'>Get started</Link> 
                        
                    </div>

                </div>
                <Link href='/Tutors'>
                    <Image  className='hidden xl:block pl-5 my-40' src='/aboutmeBg.svg' width={1300} height={401} alt="Why Background Image" />
                </Link>
            </div>

        </div>


    </>
  )
}

export default WhyVatebra