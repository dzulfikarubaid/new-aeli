import Link from 'next/link'
import React, { useState } from 'react'
import {FaPen, FaPenSquare, FaSearch, FaTimes} from 'react-icons/fa'
import {FaPenToSquare} from 'react-icons/fa6'
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='flex flex-row justify-between items-center px-24 py-6'>
        <div className='bg-white text-black  w-full flex flex-row gap-3 items-center'>
            <Link href={'/'} className='font-semibold text-xl border-r-[1px] pr-3 border-black'>AELI</Link>
            <Link href={'/News'}>News</Link>
        </div>
        <div className='flex flex-row gap-8 items-center'>
            
        {
            isOpen ?
            <div className='flex flex-row gap-3 rounded-full border-gray-500 bg-gray-100 border-[1px] p-2 pl-4 py-1 items-center'>
            <FaSearch color='gray'></FaSearch>
            <input type="text" placeholder='Cari judul berita...' className='focus:outline-none bg-transparent' />
            <button onClick={() => setIsOpen(!isOpen)}><FaTimes color='gray'></FaTimes></button>
            </div>
            :
            <button onClick={() => setIsOpen(!isOpen)} className='flex flex-row gap-2 py-[5.5px] items-center '><FaSearch></FaSearch>Search</button>
        }
        <Link href={'/news/write'} className='flex flex-row items-center gap-2'>
            <FaPenToSquare></FaPenToSquare>Write
            
        </Link>
        </div>
    

    </div>
  )
}

export default Navbar