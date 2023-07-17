import React, {useContext} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import context from '@/context/stateContext'



const BusinessTraining = () => {
    const {showModal, setShowModal} = useContext(context)

  return (
    <div className='py-20 px-5 md:px-24'>
        <div className='grid place-items-center'>
            <div className='px-5 bg-white shadow-2xl py-16 rounded-3xl md:pt-10 justify-center text-center xl:text-left md:px-24 flex flex-col xl:flex-row items-center md:justify-between gap-5 md:gap-20'>
                <div className='z-[10000]'>
                    <Image height={646} width={634} alt='hero img' src="/bTraining.svg" />
                </div>

                <div className=' flex flex-col max-w-2xl gap-6'>
                    <h1 className='text-3xl md:text-4xl font-daxlineExtraBold'>Corporate/Custom Training</h1>

                    <h3 className=' font-daxlineExtraBold'>Our company offers IT training services for businesses looking
                     to upskill their employees in a variety of technical areas. location or remotely via online platforms.</h3>

                    <h1 className='text-[#030303] font-daxlineMedium max-w-4xl opacity-90 md:text-base'>Our training programs are customized to meet the specific needs of each company, 
                        and can be delivered onsite at the client’s location or remotely via online platforms.
                        Our team of experienced trainers has a deep understanding of a wide range of IT technologies and is able to
                        effectively convey complex concepts in a way that is easy for learners to understand. We offer both group training 
                        sessions and one-on-one instruction to ensure that all attendees are able to fully grasp the material.
                    </h1>

                    
                        {/* <h1 onClick={() => setShowModal(!showModal)} className='bg-[#D40E1F] md:w-[max-content] py-3 px-24 hover:bg-black rounded-lg mx-auto xl:mx-0 text-white font-daxlineBold'>Get started</h1>  */}

                        <Link href='/GetStarted' className='bg-[#D40E1F] md:w-[max-content] py-3 px-24 hover:bg-black rounded-lg mx-auto xl:mx-0 text-white font-daxlineBold'>Get started</Link> 
                    
                </div>

            </div>
            
        </div>

    </div>
  )
}

export default BusinessTraining