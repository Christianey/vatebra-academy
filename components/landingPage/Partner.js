import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Partner = () => {
  return (
    <div className='mt-20 px-5 md:px-24 bg-[#ECEDEB] py-32'>
        <h1 className='text-center mb-10 px-10 font-daxlineBold text-3xl'>Partners</h1>
        <div className='flex p-2 items-center gap-10 md:gap-20 flex-wrap justify-center bg-[white]'>
            <Image height={91} width={192} src='P1Image.svg' alt='patner image' />
            <Image height={91} width={192} src='p2Image.svg' alt='patner image' />
            <Image height={91} width={192} src='p3Image.svg' alt='patner image' />
        </div>

    </div>
  )
}

export default Partner