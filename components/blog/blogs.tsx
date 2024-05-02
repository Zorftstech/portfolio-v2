"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { blog } from '../data'

function Blogs() {
  return (
    <div className="mx-auto max-w-7xl  p-24 lg:px-8 mb-8">
        <h3 className='text-[32px] font-semibold'>Blogs</h3>

        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            {blog.map((item) => (
                <div className="flex flex-col overflow-hidden rounded-lg shadow-lg" key={item.id}>
                    <div className="flex-shrink-0">
                        <Image width={'100'} height={48} className="h-48 w-full object-cover" src={item.img} alt="blog-img" />
                    </div>
                    <div className="flex flex-1 flex-col justify-between bg-white p-6">
                        <div className="flex-1">
                            <a href="#" className="mt-2 block">
                                <p className="text-xl font-semibold text-gray-900">{item.title}</p>
                                <p className="mt-3 text-base text-gray-500">{item.description}</p>
                            </a>
                        </div>
                        <div className="mt-6 flex items-center">
                            <Link href={'/blog'} className='text-[#004AAD] underline'>see more</Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Blogs