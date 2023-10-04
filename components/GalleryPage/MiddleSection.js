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
          src="/Team.jpeg"
          alt="team"
          style={{ objectFit: "contain" }}
        />
        <Image
          height={500}
          width={300}
          src="/Team1.jpeg"
          alt="team"
          style={{ objectFit: "contain" }}
        />
        <Image
          height={500}
          width={300}
          src="/Team2.jpeg"
          alt="team"
          style={{ objectFit: "contain" }}
        />
        <Image
          height={500}
          width={300}
          src="/Team3.jpeg"
          alt="team"
          style={{ objectFit: "contain" }}
        />
        <Image
          height={500}
          width={300}
          src="/Team4.jpeg"
          alt="team"
          style={{ objectFit: "contain" }}
        />
        <Image
          height={500}
          width={300}
          src="/Team5.jpeg"
          alt="team"
          style={{ objectFit: "contain" }}
        />
        <Image
          height={500}
          width={300}
          src="/Team6.jpeg"
          alt="team"
          style={{ objectFit: "contain" }}
        />
        <Image
          height={500}
          width={300}
          src="/Team7.jpeg"
          alt="team"
          style={{ objectFit: "contain" }}
        />
        <Image
          height={500}
          width={300}
          src="/Team8.jpeg"
          alt="team"
          style={{ objectFit: "contain" }}
        />
        <Image
          height={500}
          width={300}
          src="/Team9.jpeg"
          alt="team"
          style={{ objectFit: "contain" }}
        />
        <Image
          height={500}
          width={300}
          src="/Team10.jpeg"
          alt="team"
          style={{ objectFit: "contain" }}
        />
        <Image
          height={500}
          width={300}
          src="/Team11.jpeg"
          alt="team"
          style={{ objectFit: "contain" }}
        />
        <Image
          height={500}
          width={300}
          src="/Team12.jpeg"
          alt="team"
          style={{ objectFit: "contain" }}
        />
        <Image
          height={500}
          width={300}
          src="/Team13.jpeg"
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
