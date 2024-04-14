"use client"
import Image from 'next/image';
import { Fragment, useState } from 'react'
import { FaArrowRight, FaSearch } from "react-icons/fa";
import { RiArrowDownSLine } from "react-icons/ri";

const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#' },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#'  },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#' },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#' },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#' },
]
const callsToAction = [
  { name: 'Contact Us', href: '#', icon: FaArrowRight },
  { name: 'Search', href: '#', icon: FaSearch },
]


export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 mt-0" aria-label="Global">
        <div>
            <Image src={"/zorfts-logo.svg"} width={220} height={37} alt='Zorfts Technologies Ltd' />
        </div>

        <div>
            <ul className='flex justify-center items-center flex-row gap-x-3.5 font-light text-base'>
                <li>About</li>
                <li className='px-2 flex gap-1 items-center flex-row'>Services <RiArrowDownSLine className='text-2xl' /></li>
                <li className='px-2'>Partners</li>
                <li className='px-2'>Portfolio</li>
                <li className='px-2 flex gap-1 items-center flex-row'>Technologies <RiArrowDownSLine className='text-2xl'/></li>
                <li className='px-2'>Blog</li>
                <li>Talents</li>
            </ul>
        </div>

        <div>
            <ul className='flex justify-center items-center flex-row gap-x-4'>
                <li className='w-200px py-3 px-5 text-white bg-[#004AAD] rounded-3xl flex items-center flex-row gap-2'><FaArrowRight /> Contact Us</li>
                <li><FaSearch className='text-2xl font-light'/></li>
            </ul>
        </div>
    </div>
  )
}
