import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'

const FourthSection = () => {
    const [showModal, setShowModal] = useState(false)

  return (
    <>
        <div className='py-20 px-5 md:px-24'>
        <div className='grid place-items-center'>
            <div className='px-5 bg-white shadow-2xl py-16 rounded-3xl md:pt-10 justify-center text-center xl:text-left md:px-24 flex flex-col xl:flex-row items-center md:justify-between gap-5 md:gap-20'>
                <div className='z-[10000]'>
                    <Image height={646} width={634} alt='hero img' src="/whyDataImg.svg" />
                </div>

                <div className=' flex flex-col max-w-2xl gap-6'>
                    <h1 className='text-3xl font-daxlineExtraBold md:text-4xl'>Why Data School?</h1>

                    <h3 className=' font-daxlineExtraBold'>The Vatebra Program Data School aids with your quick transition into one of the most sought-after in the digital industry. </h3>

                    <h1 className='text-[#030303] font-daxlineMedium max-w-4xl opacity-90 md:text-base'>We assist you in accelerating your professional growth within a few months with a set of thoughtfully created business-focused data tools learning materials
                    </h1>

                   
                        {/* <h1 onClick={()=> setShowModal(!showModal)} className='bg-[#D40E1F] md:w-[max-content] py-3 px-24 hover:bg-black rounded-lg mx-auto xl:mx-0 text-white font-daxlineBold'>Get started</h1>  */}

                        <Link href='https://paystack.com/pay/f7jf3lscts' className='bg-[#D40E1F] md:w-[max-content] py-3 px-24 hover:bg-black rounded-lg mx-auto xl:mx-0 text-white font-daxlineBold'>Get started</Link> 
                     
                </div>

            </div>
            
        </div>

        </div>



        {showModal ? (
                        <>
                        <div
                            className="justify-center z-[50000] items-center flex overflow-x-hidden bg-black bg-opacity-70 overflow-y-auto fixed inset-0 outline-none focus:outline-none"
                        >
                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full p-5 bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 rounded-t">
                                <h3 className="text-2xl font-daxlineBold font-semibold">
                                    Personal Information
                                </h3>
                                
                                </div>
                                {/*body*/}
                                <div className="relative font-daxlineBold p-6 flex-auto">
                                <form className='flex flex-col gap-7 md:gap-10 '>
                                    <div className='flex flex-col md:flex-row gap-5'>
                                      <div>
                                          <h1 className='mb-3 opacity-75'>First name</h1>
                                          <input type="text" placeholder='Enter your first name' className='rounded-xl p-3 px-8' />
                                      </div>
                                      <div>
                                          <h1 className='mb-3 opacity-75'>Last name</h1>
                                          <input placeholder='Enter your last name' type="text" className='rounded-xl p-3 px-8' />
                                      </div>
                                    </div>

                                    <div className='flex flex-col md:flex-row gap-5'>
                                      <div>
                                          <h1 className='mb-3 opacity-75'>Email Address</h1>
                                          <input type="email" placeholder='Enter your email address' className='rounded-xl p-3 px-8' />
                                      </div>
                                      <div>
                                          <h1 className='mb-3 opacity-75'>Phone Number</h1>
                                          <input placeholder='Enter your phone number' type="number" className='rounded-xl p-3 px-8' />
                                      </div>
                                
                                    </div>

                                    <div className='flex flex-col md:flex-row gap-5'>
                                      <div>
                                          <h1 className='mb-3 opacity-75'>Occupation</h1>
                                          <input type="email" placeholder='Enter your email address' className='rounded-xl p-3 px-8' />
                                      </div>
                                      <div>
                                          <h1 className='mb-3 opacity-75'>Location</h1>
                                          <input placeholder='Enter your phone number' type="number" className='rounded-xl p-3 px-8' />
                                      </div>
                                
                                    </div>
                                </form>
                                {/* <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                    I always felt like I could do anything. That’s the main
                                    thing people are controlled by! Thoughts- their perception
                                    of themselves! Theyre slowed down by their perception of
                                    themselves. If youre taught you can’t do anything, you
                                    won’t do anything. I was taught I could do everything.
                                </p> */}
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-start p-6 rounded-b">
                                <button
                                    className="text-black opacity-80 background-transparent order-1 font-bold px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                >
                                    Go back
                                </button>
                                <button
                                    className="bg-[#D40E1F] text-white active:bg-emerald-600 px-14 cursor-pointer font-bold uppercase text-sm py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="submit"
                                    onClick={() => {setShowModal(false)}}
                                >
                                    Proceed
                                </button>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                        </>
        ) : null}
    </>
  )
}

export default FourthSection