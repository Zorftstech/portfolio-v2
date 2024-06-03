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
        <div className="mx-auto flex flex-col max-w-7xl p-8 mb-32">
             {bodyDetails.body.map(detail => (
                <div key={detail.id} className='w-[998px]'>
                    <div className="align-center w-[400px] lg:w-[830px]">
                        <p className='text-[18px] leading-[30px] text-[#5F5E6C]'>
                            In the world of fruits, few things can rival the vibrant allure and refreshing burst of flavor offered by a perfectly ripe orange. From its sun-kissed hue to its tangy sweetness, the humble orange is a true superstar of the produce aisle. But what makes fresh oranges so special? Join us as we peel back the layers and delve into the juicy tale of these citrus wonders, from tree to table.
                        </p>
                        <h3 className='text-[20px] leading-[30px] text-[#5F5E6C] font-bold mt-7 mb-3'>The Essence of Freshness: From Orchard to Market</h3>
                        <p className='text-[18px] leading-[30px] text-[#5F5E6C]'>
                            It all begins in the lush orchards where rows of citrus trees sway in the gentle breeze. Here, under the warm embrace of the sun, oranges ripen to perfection, soaking up nutrients from the rich soil below. Cultivated with care and attention to detail, each fruit is handpicked at the peak of its freshness, ensuring that only the finest specimens make their way to market. A Burst of Sunshine: Nutritional Benefits of Fresh Oranges Beyond their irresistible taste, fresh oranges are packed with essential vitamins and minerals that nourish the body and invigorate the senses. Rich in vitamin C, antioxidants, and fiber, these citrus gems offer a host of health benefits, from boosting immunity to supporting digestion. With every juicy bite, you&apos;re not just indulging in a delicious treat – you&apos;re giving your body a dose of pure sunshine. 
                        </p>
                        <h3 className='text-[20px] leading-[30px] text-[#5F5E6C] font-bold mt-7 mb-3'>Versatile and Vibrant: Creative Ways to Enjoy Fresh Oranges </h3>
                        <p className='text-[18px] leading-[30px] text-[#5F5E6C]'>
                            Whether squeezed into a glass of morning juice, tossed into a vibrant salad, or blended into a refreshing smoothie, there are countless ways to incorporate fresh oranges into your culinary repertoire. Get creative in the kitchen and experiment with new flavor combinations – from zesty marinades to decadent desserts, the possibilities are endless.
                        </p>
                        <Image width={840} height={310} className="object-contain rounded-lg my-9" src={detail.bannar} alt="detail-img" />
                        <h3 className='text-[20px] leading-[30px] text-[#5F5E6C] font-bold mt-7 mb-3'>From Farm to Fork: Supporting Sustainable Agriculture </h3>
                        <p className='text-[18px] leading-[30px] text-[#5F5E6C]'>
                            Behind every fresh orange is a dedicated community of farmers and producers committed to sustainable agriculture practices. By choosing locally sourced produce and supporting small-scale growers, you&apos;re not just enjoying superior quality and flavor – you&apos;re also contributing to a healthier planet. From reducing carbon emissions to preserving biodiversity, every purchase makes a difference. <br /> The Sweet Taste of Satisfaction: A Conclusion Worth Savoring <br /> As we conclude our journey through the world of fresh oranges, we&apos;re left with a profound appreciation for nature&apos;s bounty and the simple pleasures it provides. Whether enjoyed solo as a midday snack or incorporated into your favorite recipes, the humble orange reminds us to slow down, savor the moment, and embrace the joy of delicious, wholesome food. So go ahead, sink your teeth into a juicy slice of sunshine – your taste buds will thank you.
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Post;
