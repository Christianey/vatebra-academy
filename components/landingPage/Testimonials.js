import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Testimonials = () => {
    const [count, setCount] = useState(1)

    const onClick = (type) => {
        if (type === 'left') {
            setCount(prev => prev - 1)
        } else {
            setCount(prev => prev + 1)
        }

    }


  return (
   <div className=' grid relative place-content-center bg-[#F4E4C6]  mb-20 bg-transparent md:shadow-2xl md:mx-24 rounded-3xl md:rounded-[5rem] py-32'>
        {/* <Image priority src='/cohortBg.svg' width={1000} height={5} alt="Why Background Image" className=' w-full -z-50 absolute top-10 right-0' /> */}
        <div className='shadow-2xl w-full bg-white p-5 rounded-3xl md:rounded-[5rem] relative md:w-[55rem] md:h-[30rem]'>
            <h1 className='text-center mb-10 px-10 font-daxlineBold text-3xl'>Testimonials from Alumni</h1>
            <div className={`${count === 1 ? 'bg-[#5CBF22]' : count === 2 ? 'bg-[#E8AC28]' : 'bg-[#5CBF22]'} flex animate__animated animate__fadeIn gap- py-10 md:py-20 md:absolute md:top-12 md:ml-5 rounded-3xl md:rounded-[5rem] px-3 md:px-12 pb-10 md:w-[50rem] max-w-max text-center mt-5`}>
                <Image onClick={() => onClick('left')} width={48} height={48} src='sliderLeftArrow.svg' alt='avatar1' className={`hidden ${count === 1 ? 'md:hidden' : 'md:block'} cursor-pointer`} />
                <div className='flex flex-col items-center gap-5'>
                    <h1 className='text-white'>{`${count === 1 ? 'My Name is Busayo Ajakaiye, I studied Economics from the Lagos State University.  I currently work as a Relationship Manager in one of the leading Nigerian Banks. A friend referred Vatebra to me. The learning experience has been good.  The learning is interactive, you can always reach-out to the Academy anytime any day, there are also recorded classes to refresh your learning. The trainers are partners in progress.  That is how they all presented themselves. If you are still contemplating on joining Vatebra Academy, there is no need to contemplate, quickly join the moving train.  ' : count === 2 ? 'My name is Robert Ogirri and I manage a company at executive level. I had no experience in tech. Closest thing to IT are basic appreciation courses all my working career. I initially wanted to take the program abroad but another participant in the program Fikayokemi Ogunleye convinced me that Vatebra would deliver even better quality at a lower cost  like the cordiality and ease of learning with Vatebra. The commitment to ensuring we are learning and the tools deployed in ensuring this The Trainers are excellent. I had an issue once and reached out one on one and she was very helpful and followed up to ensure all was okay.' : 'My name is Lukman Waliyullahi Olalekan, an aspiring Product Manager. I currently work with AFEX Commodity Exchange as a Warehouse Manager. My anxiety then was high and was ready to join any available cohort to start the learning and Vatebra was the first that I came across with and the learning can be virtual. I like the way the learning module has been selected with no rush and the facilitators have been awesome with us. The Product lead (Uduak) has been helpful as she always tried to take revision of any missed class and I do gain a lot from her wireframe teaching as I am now mastering my wireframe skills too. I hope one day myself can start teaching some cohorts on Product Management  ' }`}
                    </h1>
                    <Image width={150} height={150} src={`${count === 1 ? '/Busayo.png' : count === 2 ? '/Robert.png' : '/Waliyulahi.png' }`} alt='avatars' />
                    <div className='flex justify-center items-center gap-3 text-white'>
                        <h1 className=' font-daxlineMedium'>{count === 1 ? 'Busayo Ajakaiye' : count === 2 ? 'Robert Ogirri' : 'Lukman Waliyullahi Olalekan'}</h1>
                        <div className=' h-5 w-1 bg-white'></div>
                        <h1 className=' font-daxlineRegular text-sm'>{count === 1 ? 'Product Academy' : count === 2 ? 'Data Academy' : 'Product Academy'}</h1>
                    </div>
                    <div className='md:hidden flex gap-5'>
                        <Image onClick={() => onClick('left')}  width={48} height={48} src='sliderLeftArrow.svg' alt='avatar1' className={`${count === 1 ? 'hidden' : 'block'} cursor-pointer`} />
                        <Image onClick={() => onClick('right')} width={48} height={48} src='sliderRightArrow.svg' alt='avatar1' className={`${count === 3 ? 'hidden' : 'block'} cursor-pointer`} />
                    </div>
                </div>

                <Image onClick={() => onClick('right')} width={48} height={48} src='sliderRightArrow.svg' alt='avatar1' className={`hidden ${count === 3 ? 'md:hidden' : 'md:block'} cursor-pointer`} />
            </div>

            
            
        </div>
   </div>
  )
}

export default Testimonials