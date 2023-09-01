// Navbar.tsx
import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { FaPenToSquare } from 'react-icons/fa6';

function Navbar({ searchInput, setSearchInput, handleSearchSubmit }:any) {
    const searchInputRef:any = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='flex flex-row justify-between items-center px-24 py-6'>
      <div className='bg-white text-black w-full flex flex-row gap-3 items-center'>
        <Link href={'/'} className='font-semibold text-xl border-r-[1px] pr-3 border-black'>
          AELI
        </Link>
        <Link href={'/news'}>News</Link>
      </div>
      <div className='flex flex-row gap-8 items-center'>
        {isOpen ? (
          <form onSubmit={handleSearchSubmit} className='flex flex-row gap-3 rounded-full border-gray-500 bg-gray-100 border-[1px] p-2 pl-4 py-1 items-center'>
            <button type='submit'><FaSearch color='gray' /></button>
            <input
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className='focus:outline-none bg-transparent'
              type='text'
              ref={(input) => {
                if (input && isOpen) {
                  input.focus();
                }
                searchInputRef.current = input;
              }}
              placeholder='Cari judul berita...'
            />
         
            <button onClick={() => setIsOpen(!isOpen)}>
              <FaTimes color='gray' />
            </button>
          </form>
        ) : (
          <button
            onClick={() => {
              setIsOpen(!isOpen);
              setTimeout(() => {
                if (searchInputRef.current) {
                  searchInputRef.current.focus();
                }
              }, 0);
            }}
            className='flex flex-row gap-2 py-[5.5px] items-center '
          >
            <FaSearch />
            Search
          </button>
        )}
        <Link href={'/news/write'} className='flex flex-row items-center gap-2'>
          <FaPenToSquare />
          Write
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
