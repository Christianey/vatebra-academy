import Image from "next/image";
import React from "react";

const MiddleSection = () => {
  return (
    <div className="px-5 my-20 ">
      <h1 className=" font-daxlineMedium text-3xl">THE TEAM</h1>
      <div className="flex gap-2 wrap w-full flex-wrap justify-center">
        <Image
          height={500}
          width={300}
          src="/team.jpeg"
          alt="team"
          style={{ objectFit: "contain" }}
        />
        <Image
          height={500}
          width={300}
          src="/team1.jpeg"
          alt="team"
          style={{ objectFit: "contain" }}
        />
        <Image
          height={500}
          width={300}
          src="/team2.jpeg"
          alt="team"
          style={{ objectFit: "contain" }}
        />
        <Image
          height={500}
          width={300}
          src="/team3.jpeg"
          alt="team"
          style={{ objectFit: "contain" }}
        />
        <Image
          height={500}
          width={300}
          src="/team4.jpeg"
          alt="team"
          style={{ objectFit: "contain" }}
        />
        <Image
          height={500}
          width={300}
          src="/team5.jpeg"
          alt="team"
          style={{ objectFit: "contain" }}
        />
        <Image
          height={500}
          width={300}
          src="/team6.jpeg"
          alt="team"
          style={{ objectFit: "contain" }}
        />
        <Image
          height={500}
          width={300}
          src="/team7.jpeg"
          alt="team"
          style={{ objectFit: "contain" }}
        />
        <Image
          height={500}
          width={300}
          src="/team8.jpeg"
          alt="team"
          style={{ objectFit: "contain" }}
        />
        <Image
          height={500}
          width={300}
          src="/team9.jpeg"
          alt="team"
          style={{ objectFit: "contain" }}
        />
        <Image
          height={500}
          width={300}
          src="/team10.jpeg"
          alt="team"
          style={{ objectFit: "contain" }}
        />
        <Image
          height={500}
          width={300}
          src="/team11.jpeg"
          alt="team"
          style={{ objectFit: "contain" }}
        />
        <Image
          height={500}
          width={300}
          src="/team12.jpeg"
          alt="team"
          style={{ objectFit: "contain" }}
        />
        <Image
          height={500}
          width={300}
          src="/team13.jpeg"
          alt="team"
          style={{ objectFit: "contain" }}
        />
        {/* <div className='flex flex-col gap-5'>
            <h1 className=' font-daxlineMedium text-3xl'>DECEMBER COHORT (In pitcures)</h1>
            <Image height={500} width={400} src='/team' alt='team' />
        </div>

        <div className='flex flex-col gap-5'>
            <h1 className=' font-daxlineMedium text-3xl'>MARCH COHORT (In pitcures)</h1>
            <Image height={500} width={400} src='/team' alt='team' />
        </div>

        <div className='flex flex-col gap-5'>
            <h1 className=' font-daxlineMedium text-3xl'>JANUARY COHORT (In pitcures)</h1>
            <Image height={500} width={400} src='/team' alt='team' />
        </div> */}
      </div>
    </div>
  );
};

export default MiddleSection;
