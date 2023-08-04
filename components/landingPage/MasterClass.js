import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const MasterClass = () => {
  return (
    <div className='relative text-center flex flex-col gap-20 justify-center items-center py-20 px-5 md:px-24'>
        <Image priority src='/masterclassBg.svg' width={1000} height={5} alt="Why Background Image" className='top-32 w-full md:-top-96 -z-50 absolute right-0' />
        <div className=' xl:w-[60rem]'>
            <div className='grid place-items-center'>
                <h1 className=' font-daxlineBold text-4xl'>Our Masterclass</h1>
                <Image height={4} width={300} alt='line' src="/line.svg" />
            </div>
            <h4 className='mt-5 opacity-90 font-daxlineBold'>Vatebra Academy strives to provide future-facing, 
                specialized and skill-based training in the technology 
                ecosystem at a reasonable cost and atmosphere that delivers 
                value for our and the society at large.
            </h4>
        </div>

        <div className="embed-responsive embed-responsive-21by9 relative w-full lg:w-[1300px] rounded-3xl overflow-hidden" style={{paddingTop: "42.857143%"}}>
          <iframe className="embed-responsive-item px-5 md:px-24 absolute top-0 right-0 bottom-0 left-0 w-full h-full" 
            src="https://www.youtube.com/embed/ScnwH1K-cIQ?enablejsapi=1&origin=https%3A%2F%2Fmdbootstrap.com" 
            allowFullScreen data-gtm-yt-inspected-2340190_699="true" id={240632615} 
          />
        </div>

        <a target='_blank' href='https://forms.office.com/Pages/ResponsePage.aspx?id=Mh3BWZEh3UuZrgByGktfMuEqhVoLQSNMpCGgmLjyMttUQ0lEWllQVERJWVdTWFdUODlTQllCNlZRVS4u' className='bg-[#D40E1F] md:w-[max-content] py-3 px-24 hover:bg-black rounded-lg mx-auto xl:mx-0 text-white font-daxlineBold'>Get started</a> 
    </div>
  ) 
}

export default MasterClass