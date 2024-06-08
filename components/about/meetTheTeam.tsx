import Image from "next/image";
import React from "react";

const MeetTheTeam = () => {
  return (
    <section>
      <h2 className="text-2xl sm:text-3xl md:text-6xl text-left font-bold -tracking-[2.5px] text-zorft-blue">
        Meet our Team
      </h2>
      <p className="w-[440px] -tracking-[0.5px] text-[#5F5E6C] mt-5 md:text-lg">
        Lorem ipsum dolor sit amet consectetur. Quam libero tellus egestas
        convallis arcu. Purus tempus lectus imperdiet egestas libero et sit
        mauris. Quam accumsan imperdiet in neque{" "}
      </p>

      <div className="">
        <Image
          src="/team-member-4.jpg"
          alt="Zorft Team Member"
          width={510}
          height={740}
          className="w-full h-[402px] object-cover max-w-[402px]"
        />
      </div>
    </section>
  );
};

export default MeetTheTeam;
