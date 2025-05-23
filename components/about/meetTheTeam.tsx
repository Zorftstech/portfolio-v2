"use client";
import { fetchTeamMembers } from "@/lib/apis/request";
import { ITeamMember } from "@/lib/types";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const MeetTheTeam = () => {
  const [data, setData] = useState<ITeamMember[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchTeamMembers().then((res) => {
      setData(res?.data.results);
      setIsLoading(false);
    });
  }, []);

  return (
    <section>
      <h2 className="text-2xl sm:text-3xl md:text-6xl text-left font-bold -tracking-[2.5px] text-zorft-blue mt-24 lg:mt-60">
        Meet our Team
      </h2>
      <p className="w-[380px] lg:w-[590px] -tracking-[0.5px] text-[#5F5E6C] mt-5 md:text-lg">
      Get to know the passionate and talented individuals who make <span className="font-bold text-zorft-blue">Zorfts Technologies Ltd</span> tick! Our team is a diverse group of experts, each bringing a unique blend of skills and experience to the table. We&apos;re all united by a common goal: to create exceptional solutions that empower our clients and push the boundaries of what&apos;s possible.
      </p>

      <div className="mb-32 mt-10 flex flex-wrap justify-center gap-2.5 lg:gap-5">
        {data?.map((item) => (
          <div
            key={item?.id}
            className="relative flex w-[calc(50%-10px)] lg:w-[160px] lg:hover:w-[320px] group transition-all duration-300 rounded-xl"
          >
            <Image
              src={item?.profile_picture || "/team-member-4.jpg"}
              alt="Zorft Team Member"
              width={510}
              height={740}
              className="w-full h-[230px] xs:h-[325px] sm:h-[420px] md:h-[500px] lg:h-[402px] object-cover max-w-[402px] rounded-xl"
            />
            <div
              className="absolute bottom-0 bg-[#E6EDF7] text-[#5F5E6C] w-full tracking-tight rounded-b-xl pl-6 py-3
            lg:opacity-0 lg:group-hover:opacity-100 lg:lg:invisible group-hover:visible transition-all duration-300"
            >
              <h3 className="font-bold text-base md:text-2xl capitalize">
                {item?.first_name} {item?.last_name}
              </h3>
              <p className="text-sm md:text-base capitalize ">{item?.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MeetTheTeam;
