import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Contact = () => {
  const onSubmit = (e) => {
    e.preventDefault()
    alert('Thanks for your message')
  }
  return (
    <div className=''>
      <Image height={600} width={1500} src='/contactHeroImg.svg' alt='aboutHeroImg' className='w-full' />

      <form onSubmit={onSubmit} style={{background: 'url(/contactBgImg.svg)', backgroundRepeat: 'no-repeat'}} className='bg-[#F8F8F8] py-10 px-7 md:px-10'>
         <div className='flex flex-col gap-7 items-center font-daxlineBold bg-white py-20 rounded-3xl shadow-2xl px-7 md:px-20'>
            <h1 className=' text-3xl'>Send us a message</h1>
            <div className='flex justify-around gap-5 flex-wrap'>
              <input required className='md:w-56 w-full rounded-xl p-3 px-8' placeholder='Full Name *' type="text" />
              <input required className='md:w-56 w-full rounded-xl p-3 px-8' placeholder='Email address *' type="email" name="email" id="email" />
            </div>
            <div className='flex justify-around gap-5 flex-wrap'>
              <input required className='md:w-56 w-full rounded-xl p-3 px-8' placeholder='Phone number' type="tel" />
              <input required className='md:w-56 w-full rounded-xl p-3 px-8' type="text" placeholder='Subject' name="subject" id="subject" />
            </div>
            <textarea name="message" id="message" placeholder='Type your message' cols="30" rows="10" className='md:w-[30rem] w-full rounded-xl p-3 px-8'></textarea>
            <input required type='submit' className='bg-[#CB1829] md:w-96 w-52 py-3 hover:bg-black hover:text-white rounded-lg' value='Send Message' />
         </div>
      </form>

      <div className='mt-20'>
        <h1 className='text-center font-daxlineBold text-3xl mb-10'>Locate us on Google Map</h1>
          <Link href='https://www.google.ng/maps/place/Vatebra+Limited,+Nigeria/@6.4261328,3.4201013,17z/data=!3m1!4b1!4m6!3m5!1s0x103bf532fb4ccb4d:0x74f269fd220f0c3!8m2!3d6.4261275!4d3.4222953!16s%2Fg%2F11b7rxfs7b'>
          <Image height={900} width={2000} src='/map.svg' alt='map Img' className='w-full' />

          </Link>
      </div>
    </div>
  )
}

export default Contact