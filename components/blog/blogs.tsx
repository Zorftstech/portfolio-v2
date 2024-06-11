"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { blogs } from '../data'

function Blogs() {
  return (
        <div className="mx-auto mt-12 grid max-w-lg gap-y-10 gap-x-5 lg:max-w-7xl lg:grid-cols-3 px-8 mb-8">
            {blogs.map(blog => (
                <div key={blog.id} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                    <div className="flex-shrink-0">
                        <Image width={500} height={192} className="h-48 w-full object-cover" src={blog.img} alt="blog-img" />
                    </div>
                    <div className="flex flex-1 flex-col justify-between bg-white p-6">
                        <div className="flex-1">
                            <a href={`/blog/blog?id=${blog.id}`} className="mt-2 block">
                                <p className="text-xl font-semibold text-gray-900">{blog.title}</p>
                                <p className="mt-3 text-base text-gray-500">{blog.description}</p>
                            </a>
                        </div>
                        <div className="mt-6 flex items-center">
                        <Link href={`/blog/blog?id=${blog.id}`}>see more</Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
  )
}

export default Blogs;
