import Image from 'next/image'
import React from 'react'

const Characteristics = () => {
  return (
    <div className='px-5 md:px-24 py-20'>
       
        <div className='flex flex-col md:flex-row items-center justify-center gap-5 md:gap-44 md:flex-wrap py-10 md:py-32 rounded-3xl md:rounded-[5rem] shadow-2xl shado'>
            <div className=' w-72 flex flex-col gap-3 justify-center items-center md:items-start md:text-start text-center'>
                <Image height={111} width={112} src='/mobility.svg' alt='mobility img' />
                <h1 className=' font-daxlineBold text-2xl'>Mobility</h1>
                <p className=' font-daxlineMedium text-[#1F2829]'>We believe that any place with internet connection 
                    is a great place to learn and take advantage of, 
                    so we leverage on the possibilities to keep you informed.
                </p>
            </div>

            <div className=' w-72 flex flex-col gap-3 justify-center items-center text-center md:items-start md:text-start '>
                <Image height={111} width={112} src='/qualitative.svg' alt='mobility img' />
                <h1 className=' font-daxlineBold text-2xl'>Qualitative <br /> Assessment</h1>
                <p className=' font-daxlineMedium text-[#1F2829]'>We provide assessments that will test your 
                ability to understand topics without the pressure of taking an actual exam.
                </p>
            </div>

            <div className=' w-72 flex flex-col gap-3 justify-center items-center text-center md:items-start md:text-start '>
                <Image height={111} width={112} src='/exception.svg' alt='mobility img' />
                <h1 className=' font-daxlineBold text-2xl'>Exceptional <br /> Delivery</h1>
                <p className=' font-daxlineMedium text-[#1F2829]'>Our training and delivery method are expository
                and includes real-life examples given to explain concepts better.
                </p>
            </div>

            <div className=' w-72 flex flex-col gap-3 justify-center items-center text-center md:items-start md:text-start '>
                <Image height={111} width={112} src='/onlinesession.svg' alt='mobility img' />
                <h1 className=' font-daxlineBold text-2xl'>Online / in-person Sessions</h1>
                <p className=' font-daxlineMedium text-[#1F2829]'>We offer our best-in-class training in a variant 
                of options suit your need. These include our fully online option or hybrid.
                </p>
            </div>

            <div className=' w-72 flex flex-col gap-3 justify-center items-center text-center md:items-start md:text-start '>
                <Image height={111} width={112} src='/support.svg' alt='support img' />
                <h1 className=' font-daxlineBold text-2xl'>Full Online Option & Support</h1>
                <p className=' font-daxlineMedium text-[#1F2829]'>Either you are on the full online program or hybrid, 
                we have online support including chat support to make your learning comfortable.
                </p>
            </div>

            <div className=' w-72 flex flex-col gap-3 justify-center items-center text-center md:items-start md:text-start '>
                <Image height={111} width={112} src='/easy.svg' alt='mobility img' />
                <h1 className=' font-daxlineBold text-2xl'>Easy Accessibility</h1>
                <p className=' font-daxlineMedium text-[#1F2829]'>We have made our programs assessable 
                as they can be taken anytime during the course to help professionals learn better and faster.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Characteristics