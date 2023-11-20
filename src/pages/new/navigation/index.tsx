import Link from 'next/link'
import React from 'react'

const Navigation = () => {
  return (
    <div className='flex z-[99999999] fixed top-0 py-6 items-center px-20 flex-row w-full justify-between backdrop-blur-3xl bg-transparent text-teks '>
    <div className='flex flex-row gap-3 justify-center items-center'>
    <img className='w-[35px]  rounded-xl p-1 border-[0.5px] border-white/20' src="/logo-aeli-putih.png" alt="" />
    <h1>AELI</h1>
    </div>
    <div className='flex flex-row gap-6 border-[1px] border-white/20 rounded-2xl p-2 px-4 font-extralight text-sm'>
    <Link href={'/about'}>About</Link>
    <Link href={'/activities'}>Activities</Link>
    <Link href={'/members'}>Members</Link>
    <Link href={'/blog'}>Blog</Link>
    </div>
    <div className='flex flex-row gap-4 items-center'>
    <Link href={'/signin'}>Sign In</Link>
    <Link className='border-[1px] border-white/20 rounded-2xl p-2 px-4'  href={'/signup'}>Sign Up</Link>
    </div>
    </div>
  )
}
function WithNavbar(props:any){

return(
    <div className='bg-dongker h-fit w-full'>
    <Navigation></Navigation>
    <div className='h-[85px] flex justify-center items-center'>
     <h1 className='text-[60px] font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-900 via-purple-500 to-pink-300'>Build Capacity With AELI</h1>
    </div>
    </div>
)
}

export default WithNavbar