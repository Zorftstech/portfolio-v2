"use client"
import React from 'react'
import Blogs from './blogs'

function BlogCard() {
  return (
    <div className='mx-auto max-w-7xl p-24 lg:px-0 mb-8'>
      <h3 className='text-[50px] leading-[80px] text-[#3B3D3F] font-bold lg:px-8'>Blog</h3>
      <Blogs />
    </div>
  )
}

export default BlogCard