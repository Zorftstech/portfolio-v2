"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { blogs, BlogDetails } from '../data';

const Post: React.FC = () => {
    const searchParams = useSearchParams();
    const id = searchParams.get('id');
    const [bodyDetails, setBodyDetails] = useState<BlogDetails | null>(null);

    useEffect(() => {
        console.log('ID from searchParams:', id);
        if (id && typeof id === 'string') {
            const blog = blogs.find(blog => blog.id.toString() === id);
            console.log('Blog found:', blog);
            if (blog && blog.blog_details.length > 0) {
                setBodyDetails(blog.blog_details[0]); // Assuming there's only one blog detail per blog
                console.log('Blog details set:', blog.blog_details[0]);
            }
        }
    }, [id]);

    if (!bodyDetails) {
        console.log('No blog details found');
        return <div className='text-white'>Blog not found</div>;
    }

    return (
        <div className="mx-auto flex flex-col max-w-7xl p-8 mb-8">
             {bodyDetails.body.map(detail => (
                <div key={detail.id}>
                    <div className="align-center mx-24">
                        <p className='text-[20px] leading-[30px] text-[#5F5E6C]'>{detail.text_1}</p>
                        <Image width={840} height={310} className="object-contain rounded-lg my-9" src={detail.bannar} alt="detail-img" />
                        <p className='text-[20px] leading-[30px] text-[#5F5E6C]'>{detail.text_2}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Post;
