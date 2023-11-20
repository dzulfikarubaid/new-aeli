import React from 'react'
import Content from '../Content'
import Image from 'next/image'
import Dpp from '../../dpp'
import Link from 'next/link'
import NoNavbar from '../NoNavbar'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
const pengurus = [
    {
        nama: "NURFAHMI",
        jabatan: "Ketua Umum",
        foto: "/Foto Pengurus/Nurfahmi.png"

    },
    {
        nama: "JEPIH NURHADI",
        jabatan: "Bendahara Umum",
        foto: "/avatar-blue.png"
    },
    {
        nama: "GIGIH GESANG",
        jabatan: "Sekretaris Jenderal",
        foto: "/avatar-blue.png"
    },
    {
        nama: "NURSANTI ADJI",
        jabatan: "Kepala Bidang Kesekretariatan",
        foto: "/avatar-blue.png"
    },
    {
        nama: "UNANG RUSNADI",
        jabatan: "Kepala Bidang Keanggotaan",
        foto: "/avatar-blue.png"
    },
    {
        nama: "DIAN WIBOWO",
        jabatan: "Kepala Bidang Keorganisasian",
        foto: "/avatar-blue.png"
    },
    {
        nama: "ADI WALUYO",
        jabatan: "Kepala Bidang Penelitian dan Pengembangan",
        foto: "/avatar-blue.png"
    },
    {
        nama: "ARDIAN RANGGA F",
        jabatan: "Kepala Bidang Pendidikan dan Pelatihan",
        foto: "/avatar-blue.png"
    },
    {
        nama:"D.P. ARSA",
        jabatan: "Kepala Bidang Sertifikasi dan Akreditasi",
        foto: "/avatar-blue.png"
    },
    {
        nama: "SOFIYAN HADI",
        jabatan: "Kepala Bidang Komunikasi Publik",
        foto: "/avatar-blue.png"
    },
    {
        nama: "DENY NUR ALAM",
        jabatan: "Kepala Bidang Hubungan Pemerintah",
        foto: "/avatar-blue.png"
    },
    {
        nama: "HERIYANTO",
        jabatan: "Kepala Bidang Hubungan Pemerintah",
        foto: "/avatar-blue.png"
    },
    {
        nama: "DENY NUR ALAM",
        jabatan: "Kepala Bidang Hubungan Internasional",
        foto: "/avatar-blue.png"
    },
    {
        nama: "DWIKI PRAYOGA MENZANO",
        jabatan: "Kepala Bidang Hubungan Pasar dan Mitra",
        foto: "/avatar-blue.png"
    },
    
]
function dpp() {
    function Card(props:any){
        const {nama, jabatan, foto, key} = props
        const formattedNama = nama
        .split(' ')
        .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ')

        const namaUrl = nama.toLowerCase().replace(/\s+/g, '-');
      return(
        <Link href={`/dpp/${namaUrl}`} className=''>
        <div  className=' p-4 text-blue-500 justify-center items-center w-[200px] flex flex-col gap-4 rounded-xl '>
          <Image width={100} height={100} src={foto} alt="" />
          <div className=''>
            <h1 >{formattedNama}</h1>
            <h1 className='text-black'>{jabatan}</h1>
          </div>
        </div>
        </Link>
      )
    }
    return (
      <NoNavbar>
        
        <div className='w-full'>
        <div className='flex flex-col w-full justify-center items-center'>
            <h1 className='font-bold text-center text-xl'>Struktur Organisasi Dewan Pengurus Pusat</h1>
        <Image className='my-10' alt='' width={800} height={400} src={'/OrgChart.png'}></Image>
        </div>
        <h1 className='font-bold text-center text-xl'>Daftar Dewan Pengurus Pusat</h1>
        <div className='flex flex-col w-full gap-10 justify-center items-center py-10 '>
        <Card nama={pengurus[0].nama} jabatan={pengurus[0].jabatan} foto={pengurus[0].foto}></Card>
        <div className='flex gap-10'>
        <Card nama={pengurus[2].nama} jabatan={pengurus[2].jabatan} foto={pengurus[2].foto}></Card>
        <Card nama={pengurus[1].nama} jabatan={pengurus[1].jabatan} foto={pengurus[1].foto}></Card>
        </div>
        <div className='self-start'>
        <Card nama={pengurus[3].nama} jabatan={pengurus[3].jabatan} foto={pengurus[3].foto}></Card></div>
        </div>
        <div className='flex w-[900px]'>
        <Swiper
            pagination={{ clickable: true }}  // Enable clickable pagination

          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
          spaceBetween={4}
          slidesPerView={3}
          autoplay={{
            delay: 8000,
          }}
          effect='fade'
          fadeEffect={{ crossFade: true }}
          onSlideChange={(swiper) => isNaN(swiper.realIndex) && swiper.slideTo(0)}
          onSwiper={(swiper) => console.log(swiper)}
        >
        <SwiperSlide>
         <Card nama={pengurus[1].nama} jabatan={pengurus[1].jabatan} foto={pengurus[1].foto}></Card>
        
        </SwiperSlide>
        <SwiperSlide>
        <Card nama={pengurus[1].nama} jabatan={pengurus[1].jabatan} foto={pengurus[1].foto}></Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card nama={pengurus[1].nama} jabatan={pengurus[1].jabatan} foto={pengurus[1].foto}></Card></SwiperSlide>
        <SwiperSlide>
        <Card nama={pengurus[1].nama} jabatan={pengurus[1].jabatan} foto={pengurus[1].foto}></Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card nama={pengurus[1].nama} jabatan={pengurus[1].jabatan} foto={pengurus[1].foto}></Card></SwiperSlide>
        <SwiperSlide>
        <Card nama={pengurus[1].nama} jabatan={pengurus[1].jabatan} foto={pengurus[1].foto}></Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card nama={pengurus[1].nama} jabatan={pengurus[1].jabatan} foto={pengurus[1].foto}></Card></SwiperSlide>
        <div className="swiper-pagination"></div>
        </Swiper>

        </div>
        </div>
      </NoNavbar>
    )
  }
  
  export default dpp