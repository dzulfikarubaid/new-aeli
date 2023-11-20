import React from 'react'
import {motion, useAnimation, AnimatePresence} from 'framer-motion'
const Card = (props:any, {isVisible}:any) => {
    const {judul, deskripsi} = props
  return (
    <AnimatePresence>

       {
        isVisible && (
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className='flex flex-col bg-gradient-to-br from-purple-950 to-transparent rounded-xl border-2 gap-4 border-white/30 text-teks p-6  '>
            <h1 className='font-semibold text-lg'>{judul}</h1>
            <p className='font-extralight text-sm text-subteks'>{deskripsi}</p>
    
        </motion.div>
        )
       }
    </AnimatePresence>
  )
}

export default Card