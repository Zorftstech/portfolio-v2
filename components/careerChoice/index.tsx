"use client";
import { fetchSingleCareerOpenings } from "@/lib/apis/request";
import { ICareerOpenings } from "@/lib/types";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Department from "./department";
import JobForm from "./jobApplication";
import Link from "next/link";

export interface ICareerInnerPageProps {
  openingDetails: ICareerOpenings | undefined;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const CareerInnerPage = () => {
  const searchParams = useSearchParams();
  const openingId = searchParams.get("id");
  const [openingDetails, setOpeningDetails] = useState<ICareerOpenings>();
  const [isLoading, setIsLoading] = useState(true);
  const [isOpeningNotFound, setIsOpeningNotFound] = useState(false);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    if (openingId !== null) {
      fetchSingleCareerOpenings(openingId).then((res) => {
        if (res?.success) {
          setOpeningDetails(res?.data);
        } else {
          setIsOpeningNotFound(true);
        }
      });
    } else {
      setIsOpeningNotFound(true);
    }
  }, [openingId]);
  if (isOpeningNotFound) {
    return (
      <div className="text-center pt-40 ">
        <p className="text-[64px] leading-[72px] font-semibold text-[#004AAD] tracking-tight">
          This Job opening is no longer available
        </p>

        <p className="mt-2 text-base leading-7 text-gray-600">
          Sorry, we couldn’t find the Service you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/careers"
            className="rounded-3xl flex flex-row gap-2 bg-[#004AAD] py-3 px-8 text-white"
          >
            Go back
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <>
        {currentPage === 1 && (
          <Department
            setCurrentPage={setCurrentPage}
            openingDetails={openingDetails}
          />
        )}
        {currentPage === 2 && (
          <JobForm
            setCurrentPage={setCurrentPage}
            openingDetails={openingDetails}
          />
        )}
      </>
    );
  }
};

export default CareerInnerPage;
