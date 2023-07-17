import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'

const LearningModel = () => {
    const [showModal, setShowModal] = useState(false)
    const [showModal2, setShowModal2] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        setShowModal2(true)
        setShowModal(false)
    }

  return (
    <>
        <div className='py-20 px-5 md:px-24 w-full'>
            <div className='bg-gradient-to-br from-[#CEE6BB] to-[#CBD8AE] rounded-3xl md:rounded-[5rem] py-10 md:py-40 flex items-center justify-center flex-col gap-10 px-5'>
                <div className='grid place-items-center'>
                    <h1 className=' font-daxlineExtraBold text-3xl'>Learning Model</h1>
                    <Image height={4} width={300} alt='line' src="/line.svg" />
                </div>

                <div className='grid md:grid-cols-3 gap-6 md:gap-20'>
                    <div className='text-center bg-white py-5 rounded-xl p-5 px-10'>
                        <h3 className=' font-daxlineExtraBold'>Online Classes</h3>
                        <h3 className='opacity-90 font-daxlineMedium'>100% Online - Instructor-led</h3>
                    </div>

                    <div className='text-center bg-white py-5 rounded-xl p-5 px-10'>
                        <h3 className=' font-daxlineExtraBold'>Weekend Classes</h3>
                        <h3 className='opacity-90 font-daxlineMedium'>Saturday -10am and Sunday - 2pm WAT</h3>
                    </div>

                    <div className='text-center bg-white py-5 rounded-xl p-5 px-10'>
                        <h3 className='font-daxlineExtraBold'>Projects and homework</h3>
                        {/* <h3 className='opacity-60 font-daxlineRegular'>100% Online - Instructor-led</h3> */}
                    </div>

                    <div className='text-center bg-white py-5 rounded-xl p-5 px-10'>
                        <h3 className='font-daxlineExtraBold'>Final Projects with Consulting Practice </h3>
                        {/* <h3 className='opacity-90 font-daxlineMedium'> </h3> */}
                    </div>

                    <div className='text-center bg-white py-5 rounded-xl p-5 px-10'>
                        <h3 className='font-daxlineExtraBold'>Vatebra Hackathon to consolidate </h3>
                        {/* <h3 className='opacity-90 font-daxlineMedium'> </h3> */}
                    </div>

                    <div className='text-center bg-white py-5 rounded-xl p-5 px-10'>
                        <h3 className='font-daxlineExtraBold'>Alumni Community with HR Business Partners </h3>
                        <h3 className='opacity-90 font-daxlineMedium'> </h3>
                    </div>
                </div>

                {/* <div>
                    <h1 onClick={() => setShowModal(!showModal)} className='bg-[#D40E1F] cursor-pointer md:w-[max-content] py-3 px-24 md:px-44 hover:bg-black rounded-lg mx-auto xl:mx-0 text-white font-daxlineBold'>Get started</h1> 
                </div> */}

                <div>
                    <Link href='/GetStarted' className='bg-[#D40E1F] cursor-pointer md:w-[max-content] py-3 px-24 md:px-44 hover:bg-black rounded-lg mx-auto xl:mx-0 text-white font-daxlineBold'>Get started</Link> 
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
                            <form onSubmit={onSubmit} className="border-0 rounded-lg shadow-lg relative flex flex-col w-full p-5 bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 rounded-t">
                                <h3 className="text-2xl font-daxlineBold font-semibold">
                                    Personal Information
                                </h3>
                                
                                </div>
                                {/*body*/}
                                <div className="relative font-daxlineBold p-6 flex-auto">
                                <div className='flex flex-col gap-7 md:gap-10 '>
                                    <div className='flex flex-col md:flex-row gap-5'>
                                      <div>
                                          <h1 className='mb-3 opacity-75'>First name</h1>
                                          <input required type="text" placeholder='Enter your first name' className='rounded-xl p-3 px-8' />
                                      </div>
                                      <div>
                                          <h1 className='mb-3 opacity-75'>Last name</h1>
                                          <input required placeholder='Enter your last name' type="text" className='rounded-xl p-3 px-8' />
                                      </div>
                                    </div>

                                    <div className='flex flex-col md:flex-row gap-5'>
                                      <div>
                                          <h1 className='mb-3 opacity-75'>Email Address</h1>
                                          <input required type="email" placeholder='Enter your email address' className='rounded-xl p-3 px-8' />
                                      </div>
                                      <div>
                                          <h1 className='mb-3 opacity-75'>Phone Number</h1>
                                          <input required placeholder='Enter your phone number' type="number" className='rounded-xl p-3 px-8' />
                                      </div>
                                
                                    </div>

                                    <div className='flex flex-col md:flex-row gap-5'>
                                      <div>
                                          <h1 className='mb-3 opacity-75'>Occupation</h1>
                                          <input required type="email" placeholder='Enter your email address' className='rounded-xl p-3 px-8' />
                                      </div>
                                      <div>
                                          <h1 className='mb-3 opacity-75'>Location</h1>
                                          <input required placeholder='Enter your phone number' type="number" className='rounded-xl p-3 px-8' />
                                      </div>
                                
                                    </div>
                                </div>
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
                                <input
                                    className="bg-[#D40E1F] text-white active:bg-emerald-600 px-14 cursor-pointer font-bold uppercase text-sm py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="submit"
                                    value='Proceed'
                                />
                            
                                </div>
                            </form>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                        </>
        ) : null}

        {showModal2 ? (
                <>
                <div
                    className="justify-center z-[50000] items-center flex overflow-x-hidden bg-black bg-opacity-70 overflow-y-auto fixed inset-0 outline-none focus:outline-none"
                >
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <form className="border-0 rounded-lg shadow-lg relative flex flex-col w-full p-5 bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 rounded-t">
                        <h3 className="text-2xl font-daxlineBold font-semibold">
                            Personal Information
                        </h3>
                        
                        </div>
                        {/*body*/}
                        <div className="relative font-daxlineBold p-6 flex-auto">
                        <div className='flex flex-col gap-7 md:gap-10 '>
                            <div className='flex flex-col md:flex-row gap-5'>
                            <div>
                                <h1 className='mb-3 opacity-75'>First name</h1>
                                <input required type="text" placeholder='Enter your first name' className='rounded-xl p-3 px-8' />
                            </div>
                            <div>
                                <h1 className='mb-3 opacity-75'>Last name</h1>
                                <input required placeholder='Enter your last name' type="text" className='rounded-xl p-3 px-8' />
                            </div>
                            </div>

                            <div className='flex flex-col md:flex-row gap-5'>
                            <div>
                                <h1 className='mb-3 opacity-75'>Enter card number</h1>
                                <input required type="number" placeholder='Enter your card number' className='rounded-xl p-3 px-8' />
                            </div>
                            <div>
                                <h1 className='mb-3 opacity-75'>Enter CVV</h1>
                                <input required placeholder='Enter your CVV' type="tel" className='rounded-xl p-3 px-8' />
                            </div>
                            </div>
                        </div>
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
                            onClick={() => setShowModal2(false)}
                        >
                            Go back
                        </button>
                        <input
                            className="bg-[#D40E1F] text-white active:bg-emerald-600 px-14 cursor-pointer font-bold uppercase text-sm py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="submit"
                            value='Proceed'
                            // onClick={() => setShowModal(false)}
                        />
                        </div>
                    </form>
                    </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
        ) : null}
    </>
  )
}

export default LearningModel