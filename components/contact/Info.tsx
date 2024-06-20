import React from "react";
import ListLink from "../listLink";

const InfoSection: React.FC = () => {
  return (
    <div className="mt-20">
      <h1 className="text-[64px] tracking-tighter text-start font-semibold text-[#004AAD]">
        Get in touch with us
      </h1>
      <p className="text-[#5F5E6C] tracking-tight">From groundbreaking ideas to ambitious expansions, our team is available 24/7 to answer your questions and fuel your success.</p>

      <div className="mt-10 flex justify-center items-start gap-6">
        <div className="mr-4 w-[25%]">
          <h4 className="text-[24px] font-semibold uppercase mb-8 text-[#3B3D3F] tracking-tight">
            Office
          </h4>
          <p className="text-[#5F5E6C] tracking-tight">
            Suite C1, Garima Complex, Bosso, Minna, Niger State
          </p>
        </div>

        <div className="h-[140px] w-[.8px] bg-slate-400" />
        {/*  ============== divider =============== */}

        <div className="mx-4 w-[25%]">
          <h4 className="text-[24px] font-semibold uppercase mb-8 text-[#3B3D3F] tracking-tight">
            phone
          </h4>
          <ul className="text-[#5F5E6C] tracking-tight">
            <ListLink url="tel:+447492651487" data="+44 749 2651 487" />
            <ListLink url="tel:08055932267" data="+234(0) 805 5932 267" />
            <ListLink data="+234(0) 813 0343 768" url="tel:08130343768" />
          </ul>
        </div>

        {/* =============== divider =============== */}
        <div className="h-[140px] w-[.8px] bg-slate-400" />
        {/*  =============== divider ============== */}

        <div className="mx-4 w-[25%]">
          <h4 className="text-[24px] font-semibold uppercase mb-8 text-[#3B3D3F] tracking-tight">
            mail
          </h4>
          <ul className="text-[#5F5E6C] tracking-tight">
            <ListLink
              data="zorftstech@gmail.com"
              url="mailto:zorftstech@gmail.com"
            />
            <ListLink
              url="mailto:info@zorftstech.com"
              data="info@zorftstech.com"
            />
          </ul>
        </div>

        {/* =============== divider =============== */}
        <div className="h-[140px] w-[.8px] bg-slate-400" />
        {/*  =============== divider ============== */}

        <div className="w-[25%] ml-6">
          <h4 className="text-[24px] font-semibold uppercase mb-8 text-[#3B3D3F] tracking-tight">
            Follow us
          </h4>
          <ul className="text-[#5F5E6C] tracking-tight">
            <ListLink
              url="https://www.linkedin.com/company/zorfts-technologies/"
              data="LinkedIn"
            />
            <ListLink url="https://twitter.com/zorftstech" data="Twitter" />
            <ListLink
              url="https://www.instagram.com/zorftstech?igsh=MXhndDB2dDk3OTE3Mw=="
              data="Instagram"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
