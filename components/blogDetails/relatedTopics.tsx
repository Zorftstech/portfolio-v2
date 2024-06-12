"use client"
import React from 'react'
import Blogs from '../blog/blogs'

const RelatedTopics: React.FC = () => {
  return (
    <div className='mx-auto max-w-7xl lg:p-24 lg:px-0 mb-8 h-[480px] lg:h-[600px] overflow-hidden'>
      <Blogs />
    </div>
  )
}

export default RelatedTopics