import React from 'react'

function Footer(props:any) {
  const{className} = props
  return (
    <div className={`${className} mt-10 translate-y-10`}>
    <div className='text-center bg-blue-400 w-full h-10'></div>
    <div className='text-center bg-blue-500 w-full p-10  text-white'>
        <h1>
            Sekretariat Dewan Pengurus Pusat<br/>
            Jalan Simpang Tiga Kalibata No. 01 A<br/>
            Duren Tiga, Jakarta Selatan 12830<br/>
            Telepon 021 2208 3446<br/>
            Email : dpp@aeli.or.id
        </h1>
    </div>
    </div>
    
  )
}

export default Footer