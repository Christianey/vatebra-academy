import React from 'react'
import Image from 'next/image'

const SecondSection = () => {
  return (
    <div>
        <div className='mx-auto'>
          <Image height={289} width={1029} src='/secondSection.svg' alt='second section' className='mx-auto' />
        </div>
    </div>
  )
}

export default SecondSection