"use client"
import Image from 'next/image';
import Link from 'next/link';
import { Fragment, useState } from 'react'
import { FaArrowRight, FaSearch } from "react-icons/fa";
import { RiArrowDownSLine } from "react-icons/ri";
import ListLink from './listLink';

const callsToAction = [
  { name: 'Contact Us', href: '#', icon: FaArrowRight },
  { name: 'Search', href: '#', icon: FaSearch },
]


export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 mt-0" aria-label="Global">
        <Link href={'/'} className='cursor-pointer'>
            <Image src={"/zorfts-logo.svg"} width={220} height={37} alt='Zorfts Technologies Ltd' />
        </Link>

        <div>
            <ul className='flex justify-center items-center flex-row gap-x-3.5 font-light text-base'>
                <li><Link href={'/about'} className='no-underline cursor-pointer'>About</Link></li>
                <li className='px-2 flex gap-1 items-center flex-row'><Link href={'/services'} className='no-underline cursor-pointer'>Services</Link> <RiArrowDownSLine className='text-2xl' /></li>
                <li className='px-2'><Link href={'/partners'} className='no-underline cursor-pointer'>Partners</Link></li>
                <li className='px-2'>Portfolio</li>
                <li className='px-2 flex gap-1 items-center flex-row'>Technologies <RiArrowDownSLine className='text-2xl'/></li>
                <li className='px-2 cursor-pointer'><Link href={'/blog'}> Blog</Link></li>
                <li>Talents</li>
            </ul>
        </div>

        <div>
            <ul className='flex justify-center items-center flex-row gap-x-4'>
                <Link href={'contact'} className='w-200px py-3 px-5 text-white bg-[#004AAD] rounded-3xl flex items-center flex-row gap-2'><img src={'/vector-4.svg'} alt='icon' width={15.5} height={4} /> Contact Us</Link>
                <li><FaSearch className='text-2xl font-light'/></li>
            </ul>
        </div>
    </div>
  )
}
