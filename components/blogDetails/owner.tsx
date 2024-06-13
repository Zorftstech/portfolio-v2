"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { blogs, BlogDetails } from '../data';

const BlogDetail: React.FC = ()=> {
    const searchParams = useSearchParams();
    const title = searchParams.get('title');
    const [blogDetails, setBlogDetails] = useState<BlogDetails[]>([]);

    useEffect(() => {
        console.log('Title from searchParams:', title);
        if (title && typeof title === 'string') {
            const blog = blogs.find(blog => blog.title === title);
            console.log('Blog found:', blog);
            if (blog && blog.blog_details.length > 0) {
                setBlogDetails(blog.blog_details);
                console.log('Blog details set:', blog.blog_details);
            }
        }
    }, [title]);

    if (!blogDetails.length) {
        console.log('No blog details found');
        return <div className='text-white'>Blog not found</div>;
    }

    return (
        <div className="mx-auto flex flex-col max-w-7xl px-8 lg:p-8 lg:mb-8">
            {blogDetails.map(detail => (
                <div key={detail.id}>
                    <Image 
                        width={1200} 
                        height={480} 
                        className="object-cover rounded-lg" 
                        src={detail.img} 
                        alt="blog-img" 
                    />
                    <div className="grid lg:grid-cols-3 gap-5 align-center lg:mt-16 lg:mx-24">
                        <h2 className='text-[28px] lg:text-[40px] leading-[38px] lg:leading-[28.89px] text-[#5F5E6C] font-bold mt-5 lg:col-span-2'>{detail.title}</h2>
                        <div className="flex items-center">
                            <Image width={50} height={50} className="object-contain rounded-full" src={detail.img_b} alt="detail-img" />
                            <div className="ml-4">
                                <h4 className='text-lg font-semibold'>{detail.user}</h4>
                                    <span className='text-sm text-gray-600'>{detail.date}</span>
                                    <span className='text-sm text-gray-600 mx-2'>•</span>
                                    <span className='text-sm text-gray-600'>{detail.time}</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8">
                        <p className='text-base text-gray-500'>{}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default BlogDetail;
