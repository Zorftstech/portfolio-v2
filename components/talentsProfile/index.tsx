"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import BioData from "./bioData";
import { Talents, ITalent } from "../talents/data";
import RecentProjects from "./recentProjects";
import { SideWrapper } from "../shared/Wrappers";
import TalentsInOtherTechFied from "./talentsInOtherTechField";

const TalentsProfile: React.FC = () => {
  const searchParams = useSearchParams();
  const talentId = searchParams.get("id");
  const [talent, setTalent] = useState<ITalent | undefined>(Talents[0]);
  const [isTalentNotFound, setIsTalentNotFound] = useState(false);

  useEffect(() => {
    if (talentId !== null) {
      const currentTalent = Talents.find(talent => talent.id.toString() === talentId);
      if (currentTalent) {
        setTalent(currentTalent);
      } else {
        setIsTalentNotFound(true);
      }
    }
  }, [talentId]);

  if (isTalentNotFound) {
    return (
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-[64px] leading-[72px] font-semibold text-[#004AAD] tracking-tight">
            Talent not found
          </p>
          <p className="mt-2 text-base leading-7 text-gray-600">
            Sorry, we couldn’t find the talent you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/" className="rounded-3xl flex flex-row gap-2 bg-[#004AAD] py-3 px-8 text-white">
              Go back
            </Link>
          </div>
        </div>
      </main>
    );
  } else {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between">
        <SideWrapper>
          <BioData bioData={talent?.bio_data[0]} />
          <RecentProjects recentProjects={talent?.recent_projects} />
          <TalentsInOtherTechFied />
        </SideWrapper>
      </main>
    );
  }
};

export default TalentsProfile;
