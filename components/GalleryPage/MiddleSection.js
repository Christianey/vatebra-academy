import Image from 'next/image'
import React from 'react'

const MiddleSection = () => {
  return (
    <div className='px-5 md:px-24 my-20 flex flex-col gap-28'>
        <div className='flex flex-col gap-5'>
            <h1 className=' font-daxlineMedium text-3xl'>DECEMBER COHORT (In pitcures)</h1>
            <Image height={500} width={1500} src='/galleryImg1.svg' alt='galleryImg1.svg' />
        </div>

        <div className='flex flex-col gap-5'>
            <h1 className=' font-daxlineMedium text-3xl'>MARCH COHORT (In pitcures)</h1>
            <Image height={500} width={1500} src='/galleryImg1.svg' alt='galleryImg1.svg' />
        </div>

        <div className='flex flex-col gap-5'>
            <h1 className=' font-daxlineMedium text-3xl'>JANUARY COHORT (In pitcures)</h1>
            <Image height={500} width={1500} src='/galleryImg1.svg' alt='galleryImg1.svg' />
        </div>
    </div>
  )
}

export default MiddleSection