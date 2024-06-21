'use client'
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from "next/image";
import { careers, Careers } from "../data";

const JobForm: React.FC = () => {
    const searchParams = useSearchParams();
    const department = searchParams.get('department');
    const [career, setCareer] = useState<Careers | undefined>(careers[0]);
    const job_application = career?.job_application[0];
    const data = job_application?.personal_data[0];
    const [resumeFileName, setResumeFileName] = useState<string>('Upload Resume');
    const [coverLetterFileName, setCoverLetterFileName] = useState<string>('Upload Cover Letter');
    const [additionalAttachmentFileName, setAdditionalAttachmentFileName] = useState<string>('Upload Additional Attachment');

    useEffect(() => {
        if (department && typeof department === 'string') {
            const currentCareer = careers.find(career => career.department === department);
            if (currentCareer) {
                setCareer(currentCareer);
            }
        }
    }, [department]);

    if (!career) {
        return <div>Job form not found</div>;
    }

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>, setFileName: React.Dispatch<React.SetStateAction<string>>) => {
        if (event.target.files && event.target.files[0]) {
            setFileName(event.target.files[0].name);
        }
    };

    return (
        <div className="mt-10 lg:mt-52 pb-14 lg:pb-64">
            <div key={career.id}>
                <div className="w-[372px] lg:w-[1200px] text-start">
                    <h2 className="text-[28px] lg:text-[64px] leading-[38px] lg:leading-[80px] text-[#004AAD] font-bold lg:text-center">Apply for job as a {career.department}.</h2>
                </div>

                <div className="grid lg:grid-cols-2 lg:gap-x-28 gap-y-14 lg:gap-y-10 w-[372px] lg:w-[1200px] text-start lg:mt-44 py-16 lg:py-0">
                    <input 
                        type="text" 
                        className="text-[16px] lg:text-[20px] leading-[27px] lg:leading-[31px] text-[#121214] border-b-[1px] border-[#8E8E8E] focus:outline-none pb-5" 
                        value={data?.first_name} 
                        placeholder="First name" 
                    />
                    <input 
                        type="text" 
                        className="text-[16px] lg:text-[20px] leading-[27px] lg:leading-[31px] text-[#121214] border-b-[1px] border-[#8E8E8E] focus:outline-none pb-5" 
                        value={data?.last_name} 
                        placeholder="Last name" 
                    />
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        className="text-[16px] lg:text-[20px] leading-[27px] lg:leading-[31px] text-[#121214] border-b-[1px] border-[#8E8E8E] focus:outline-none pb-5" 
                        value={data?.email} 
                        placeholder="Email" 
                    />
                    <input 
                        type="text" 
                        className="text-[16px] lg:text-[20px] leading-[27px] lg:leading-[31px] text-[#121214] border-b-[1px] border-[#8E8E8E] focus:outline-none pb-5" 
                        value={data?.phone_number} 
                        placeholder="Phone number" 
                    />
                    <select 
                        className="text-[16px] lg:text-[20px] leading-[27px] lg:leading-[31px] text-[#8E8E8E] border-b-[1px] border-[#8E8E8E] bg-transparent focus:outline-none pb-5" 
                        value={data?.country || ''}
                    >
                        <option value="" disabled selected>Country</option>
                        <option value="USA">USA</option>
                        <option value="Canada">Canada</option>
                        <option value="UK">UK</option>
                    </select>
                    <input 
                        type="text" 
                        className="text-[16px] lg:text-[20px] leading-[27px] lg:leading-[31px] text-[#121214] border-b-[1px] border-[#8E8E8E] focus:outline-none pb-5" 
                        value={data?.address} 
                        placeholder="Address" 
                    />
                    <select 
                        className="text-[16px] lg:text-[20px] leading-[27px] lg:leading-[31px] text-[#8E8E8E] border-b-[1px] border-[#8E8E8E] bg-transparent focus:outline-none pb-5" 
                        value={data?.gender || ''}
                    >
                        <option value="" disabled selected>Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>


                <hr className="bg-[#E7E7E7] h-[1px] my-5 lg:my-24" />

                <div className="w-[372px] lg:w-[1200px] text-start mt-20 lg:mt-0">
                    <h4 className="text-[16px] lg:text-[32px] leading-[27px] lg:leading-[41.6px] text-[#3B3D3F] font-bold">Upload Resume/CV</h4>
                    <p className="text-[16px] lg:text-[24px] leading-[27px] lg:leading-[31.2px] text-[#5B5B5B] mt-4">
                        Maximum file size: 5 MB <br />
                        Maximum number of files: 10 <br />
                        Accepted file formats: docx, txt, pdf, doc
                    </p>
                    <button className='flex py-[16px] px-[24px] rounded-full border-[1px] border-[#E6EDF7] mt-5 lg:ml-5 relative cursor-pointer'>
                        <Image src={'/material-symbols_upload.svg'} alt="" width={24} height={4} className="" />
                        <label htmlFor="resume" className="text-[16px] lg:text-[14px] leading-[27px] lg:leading-[16.1px] text-[#3B3B3B] self-center ml-2">
                            {resumeFileName}
                        </label>
                        <input
                            type="file"
                            id="resume"
                            name="resume"
                            className="absolute inset-0 opacity-0 cursor-pointer"
                            onChange={(event) => handleFileChange(event, setResumeFileName)}
                        />
                    </button>

                    <hr className="bg-[#E7E7E7] h-[1px] my-10 lg:my-24" />

                    <h4 className="text-[16px] lg:text-[32px] leading-[27px] lg:leading-[41.6px] text-[#3B3D3F] font-bold">Upload Cover Letter</h4>
                    <button className='flex py-[16px] px-[24px] rounded-full border-[1px] border-[#E6EDF7] mt-5 lg:ml-5 relative cursor-pointer'>
                        <Image src={'/material-symbols_upload.svg'} alt="" width={24} height={4} className="" />
                        <label htmlFor="cover_letter" className="text-[16px] lg:text-[14px] leading-[27px] lg:leading-[16.1px] text-[#3B3B3B] self-center ml-2">
                            {coverLetterFileName}
                        </label>
                        <input
                            type="file"
                            id="cover_letter"
                            name="cover_letter"
                            className="absolute inset-0 opacity-0 cursor-pointer"
                            onChange={(event) => handleFileChange(event, setCoverLetterFileName)}
                        />
                    </button>

                    <hr className="bg-[#E7E7E7] h-[1px] my-10 lg:my-24" />

                    <h4 className="text-[16px] lg:text-[32px] leading-[27px] lg:leading-[41.6px] text-[#3B3D3F] font-bold">Additional attachment</h4>
                    <button className='flex py-[16px] px-[24px] rounded-full border-[1px] border-[#E6EDF7] mt-5 lg:ml-5 relative cursor-pointer'>
                        <Image src={'/material-symbols_upload.svg'} alt="" width={24} height={4} className="" />
                        <label htmlFor="additional_attachment" className="text-[16px] lg:text-[14px] leading-[27px] lg:leading-[16.1px] text-[#3B3B3B] self-center ml-2">
                            {additionalAttachmentFileName}
                        </label>
                        <input
                            type="file"
                            id="additional_attachment"
                            name="additional_attachment"
                            className="absolute inset-0 opacity-0 cursor-pointer"
                            onChange={(event) => handleFileChange(event, setAdditionalAttachmentFileName)}
                        />
                    </button>
                </div>

                <hr className="bg-[#E7E7E7] h-[1px] my-10 lg:my-24" />

                <button className="lg:justify-self-end flex py-[20px] px-[28px] rounded-full bg-[#00439D] w-[130px] justify-between my-7 lg:my-16">
                    <Image src={'/Vector-4.svg'} alt="" width={24} height={4} className="self-center" />
                    <span className="text-[14px] leading-[16.1px] text-[#E7E7E7]">Apply</span>
                </button>
            </div>
        </div>
    );
}

export default JobForm;
