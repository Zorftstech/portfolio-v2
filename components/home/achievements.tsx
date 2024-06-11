import React from "react";

const AchievementsSection: React.FC = () => {
  return (
    <div className="flex items-center justify-center flex-col py-24">
      <div className="grid lg:grid-cols-2 gap-y-10 lg:flex-nowrap justify-center items-start w-[100%]">
        {/* =========== achievements texts =============== */}
        <div className="w-[380px] lg:w-[428.15px]">
          <h2 className="text-[28px] lg:text-[64px] leading-[38px] lg:leading-[72px] font-semibold text-[#004AAD] mb-2">
            Here are some of our achievements
          </h2>
          <p className="text-base text-gray ">
            Below are some stats that shows our progress since we began offering
            our services
          </p>
        </div>

        {/* =================== achievements scores */}
        <div className="w-[] grid grid-cols-2 gap-4 text-[#fff]">
          <div className="w-[178px] lg:w-[303px] h-[199.22px] lg:h-[340px] bg-[#336EBD] rounded-3xl flex justify-between items-start flex-col text-start px-4 py-6">
            <div className="text-[#fff]">
              <h2 className="text-[40px] lg:text-[64px] leading-[48px] lg:leading-[82px]">2018</h2>
              <p className="text-[11px] lg:text-[15px] leading-[16px] lg:leading-[23px]">Founded</p>
            </div>

            <div>
              <p className="text-[11px] lg:text-[15px] leading-[16px] lg:leading-[22px]">
                Below are some stats that shows our progress since we began
                offering our services
              </p>
            </div>
          </div>
          <div className="w-[178px] lg:w-[303px] h-[199.22px] lg:h-[340px] bg-[#5486C8] rounded-3xl flex justify-between items-start flex-col text-start px-4 py-6">
            <div className="text-[#fff]">
              <h2 className="text-[40px] lg:text-[64px] leading-[48px] lg:leading-[82px]">50+</h2>
              <p className="text-[11px] lg:text-[15px] leading-[16px] lg:leading-[23px]">Projects</p>
            </div>

            <div>
              <p className="text-[11px] lg:text-[15px] leading-[16px] lg:leading-[22px]">
                Below are some stats that shows our progress since we began
                offering our services
              </p>
            </div>
          </div>
          <div className="w-[178px] lg:w-[303px] h-[199.22px] lg:h-[340px] bg-[#00439D] rounded-3xl flex justify-between items-start flex-col text-start px-4 py-6">
            <div className="text-[#fff]">
              <h2 className="text-[40px] lg:text-[64px] leading-[48px] lg:leading-[82px]">20+</h2>
              <p className="text-[11px] lg:text-[15px] leading-[16px] lg:leading-[23px]">Staffs</p>
            </div>

            <div>
              <p className="text-[11px] lg:text-[15px] leading-[16px] lg:leading-[22px]">
                Below are some stats that shows our progress since we began
                offering our services
              </p>
            </div>
          </div>
          <div className="w-[178px] lg:w-[303px] h-[199.22px] lg:h-[340px] bg-[#8AACD9] rounded-3xl flex justify-between items-start flex-col text-start px-4 py-6">
            <div className="text-[#fff]">
              <h2 className="text-[40px] lg:text-[64px] leading-[48px] lg:leading-[82px]">100+</h2>
              <p className="text-[11px] lg:text-[15px] leading-[16px] lg:leading-[23px]">Happy clients</p>
            </div>

            <div>
              <p className="text-[11px] lg:text-[15px] leading-[16px] lg:leading-[22px]">
                Below are some stats that shows our progress since we began
                offering our services
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementsSection;
