import React from 'react'
import Image from 'next/image'


const TopSection = () => {
  return (
    <div>
        <div>
            <Image width={1000} height={500} src='/galleryHeroImg.svg' alt='galleryHeroImg' className='w-screen' />
        </div>
    </div>
  )
}

export default TopSection