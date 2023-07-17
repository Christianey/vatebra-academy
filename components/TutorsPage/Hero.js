import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='px-5'>
        <h1 className=' font-daxlineBold md:text-6xl text-5xl text-center md:text-left'>Meet our Tutors</h1>
         <div className='flex flex-col xl:flex-row items-center gap-5 bg-[#5CBF22] py-5 px-5 rounded-3xl my-10'>
            <Image height={100} width={600} src='/tutorsHeroImg.svg' alt='tutorsHeroImg' />
            <h1 className='w-80 md:w-[35rem] font-daxlineBold text-2xl md:ml-10 text-center xl:text-left text-white justify-between'>Our trainers are industry professionals with many years of real-world experience. They have spent many hours teaching students of varying skill levels.</h1>
         </div>
    </div>
  )
}

export default Hero