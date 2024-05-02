"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Blogs() {
  return (
    <div className="mx-auto max-w-7xl  p-24 lg:px-8 mb-8">
        <h3>Blogs</h3>

        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">

            <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="flex-shrink-0">
                    <Image width={'100'} height={48} className="h-48 w-full object-cover" src={'/pexels-olly.jpg'} alt="blog-img" />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                    <div className="flex-1">
                        {/* <p className="text-sm font-medium text-indigo-600">
                            <a href="#" className="hover:underline">Article</a>
                        </p> */}
                        <a href="#" className="mt-2 block">
                            <p className="text-xl font-semibold text-gray-900">Boost your conversion rate</p>
                            <p className="mt-3 text-base text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.</p>
                        </a>
                    </div>
                    <div className="mt-6 flex items-center">
                        <Link href={'/blog'}>see more</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blogs