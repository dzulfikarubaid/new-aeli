import React, { useEffect, useState } from 'react'
import Content from '../Content'
import NoNavbar from '../NoNavbar'
import MiniNavbar from './navbar'
import Headroom from 'react-headroom'
import Link from 'next/link'
import Image from 'next/image'
import NavbarWhite from '../components/Navbar'
import { FaArchway, FaEye } from 'react-icons/fa'
import { PiEye, PiTarget } from 'react-icons/pi'

function Index() {
  // HistoryFlow.js

  const HistoryStep = ({ year, event }: any) => {
    return (
      <div className="flex flex-col items-center mb-8">
        <div className="w-16 h-16 bg-white rounded-full mb-4"></div>
        <p className="text-white font-semibold">{year}</p>
        <p className="text-white">{event}</p>
      </div>
    );
  };

  const historyData = [
    { year: "9 Juni 2007", event: 'AELI dideklarasikan pada bersamaan dengan penyelenggaraan Festival Outbound Nasional di Tangerang Selatan, Banten.' },
    { year: "2007-2010", event: 'Ketua Umum Enda Mulyanto AELI mendirikan DPD Pertama di Jawa Tengah' },
    {
      year: "2010-2013", event: 'Ketua Umum Robby Seahan AELI mendirikan DPD Jatim, Bali & Sumut AELI menjadi Tim Ahli Kemenpar dalam merancang SKKNI Kepemanduan Outbound dan disahkan dengan Kepmenakertrans Nomor KEP.329/MEN/XII / 2011' },
  { year: "2013-2016", event: 'Ketua Umum Kresno Wiyoso AELI mendirikan 11 DPD baru yaitu Sumbar, Sumsel, Kepri, Riau, Bengkulu, Lampung, DKI Jakarta, Banteng, Jabar, DIY & NTB Melaksanakan 9 kali Uji Kompetensi Kepemanduan Outbound' },
  { year: "2016-2019", event: "Ketua Umum Kresno Wiyoso, Ketua Harian Nurfahmi AELI mendirikan 2 DPD Baru yaitu Kaltim & Sulsel (total 17 DPD) 1 Dekade AELI Pengembangan Organisasi meluaskan kiprah EL di Indonesia" },
    { year: "2019-2022", event: 'Ketua Umum Nurfahmi Penguatan Organisasi semasa Covid 19 Inovasi program Virtual' },
    { year: "2022-2025", event: 'Ketua Umum Nurfahmi Capacity Building Program Campaign' },
  ];

  const HistoryFlow = () => {
    return (
      <div className="flex justify-center items-center ">
        <div className="flex space-x-8">
          {historyData.map((step, index) => (
            <HistoryStep key={index} {...step} />
          ))}
        </div>
      </div>
    );
  };
  function Title(props: any) {
    const { id, children } = props
    return (
      <h1 id={id} className='font-bold text-center text-xl p-10'>
        {children}</h1>
    )
  }
  const [fix, setFix] = useState(false)
  function setFixed() {

    if (window.scrollY > 120) {
      setFix(true);
    } else {
      setFix(false);
    }



  }
  useEffect(() => {
    window.addEventListener('scroll', setFixed);
  }, [])
  return (

    <div id='top'>
      <NoNavbar>
        <div className='flex flex-row gap-10'>
          <img className='w-[300px] h-auto' src="/avatar-blue.png" alt="" />
          <div className='text-left '>
            <h1 className='text-3xl mb-6 font-bold'>Nama Ketua</h1>
            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente culpa magnam possimus labore voluptas quos at alias nulla nam, adipisci dignissimos doloremque esse nostrum, aspernatur harum vel. Aliquid, facere debitis."</p>
          </div>
        </div>
        {/* <Title id='aeli'>Asosiasi Experiential Learning Indonesia</Title>
        <p className='pt-4 px-10'>
          Asosiasi Experiential Learning Indonesia (AELI) adalah asosiasi yang hadir sebagai wadah bagi penyedia layanan yang menjalankan program peningkatan kapasitas Sumber Daya Manusia (SDM) dengan pembelajaran berbasis pengalaman/Experiential Learning.
          <br /><br />
          AELI memiliki harapan dan keinginan untuk bisa memberi kontribusi nyata dalam meningkatkan SDM masyarakat Indonesia. Hal yang dilakukan AELI untuk dapat mewujudkan harapan tersebut adalah dengan merancang berbagai kegiatan Experiential Learning, seperti program pengenalan metode, provider, dan praktisi Experiential Learning.
          <br /><br />
          AELI menilai bahwa semakin banyak orang yang mengenal dan menggunakan metode Experiential Learning, maka akan semakin banyak pula manusia Indonesia yang memiliki kapasitas mumpuni.

        </p> */}
        <div className='flex flex-col gap-10 w-full p-10'>
          <div className='text-center flex flex-col justify-center items-center'>
            <PiEye size={50}></PiEye>
            <h1 className='font-bold text-3xl text-center text-[#EC4969] '>Vision</h1></div>
          <p className=''>
            Menjadi wadah dan mitra yang berkualitas bagi seluruh lembaga atau perorangan pengguna metode pelatihan berbasis pengalaman di Indonesia dan bertanggung jawab terhadap pengembangan kualitas manusia Indonesia
          </p>
          <div className='text-center flex flex-col justify-center items-center'>
            <PiTarget size={50}></PiTarget>
            <h1 className='font-bold text-3xl text-center text-[#EC4969] '>Mission</h1></div>
          <p className=''>
            ● Memasyarakatkan pelatihan berbasis pengalaman kepada masyarakat Indonesia
            <br />
            ● Meningkatkan kualitas  pelatihan dan pendidikan berbasis pengalaman, sehingga menjadi metode pelatihan yang efektif dan diakui di Indonesia
            <br />
            ● Meningkatkan kualitas pelaksana pelatihan berbasis pengalaman sehingga menjadi pelaksana pelatihan yang bertanggung jawab terhadap pengembangan manusia Indonesia
          </p></div>
        <div className='h-[600px] w-auto m-10 flex flex-col items-center p-16' style={{ background: `url(bg-history.png)`, backgroundSize: '100% 100%', backgroundPosition: 'center' }}>
          <h1 className='text-white font-bold'>Our Journey</h1>
          <div className='flex flex-1'>
            <HistoryFlow />
          </div>
        </div>

        <Title id='sejarah'>Sejarah</Title>
        <p className='pt-4 px-10'>
          <strong className='font-bold'>Masuknya Outward Bound ke Indonesia
          </strong>
          <br />
          Sejarah AELI tidak bisa dipisahkan dari masuknya Outward Bound ke Indonesia. Secara resmi Outward Bound Indonesia (OBI) yang merupakan lembaga pendidikan informal didirikan pada tahun 1990, oleh Djoko Kusumowidagdo, dan segera mendapat respon positif dari masyarakat.
          <br /><br />
          Konsep OBI dianggap sebagai lahan bisnis baru dan segera diikuti oleh banyak lembaga serupa. Salah satu lembaga sengaja menghilangkan kata “ward” hingga terciptalah salah kaprah istilah Outbound sampai sekarang. Sepanjang dekade 1990-an, lembaga/organisasi pendidikan yang menggunakan medium “aktivitas luar ruang” tumbuh dengan cepat.
          <br /><br />
          Terdapat banyak istilah yang digunakan untuk menyebutkan aktivitas luar ruang, seperti adventure, outdoor training, dan lain sebagainya. Berbagai istilah tersebut kemudian dikerucutkan dan istilah outbound terpilih untuk diadopsi. Selain menggunakan medium luar ruang pendidikan, jenis ini juga menggunakan media “game”. Salah satu aktivitas yang kemudian melekat erat dan identik dengan istilah outbound adalah flying fox.
          <br /><br />
          Kesadaran Pembentukan Wadah Experiential Learning
          Pada awal tahun 2000-an, para pelaku pendidikan mulai sadar untuk menata diri. Saat itu sudah ada ide untuk membentuk wadah bagi aktivitas mereka, namun belum bisa terwujud dikarenakan banyaknya variasi aktivitas dan metode yang digunakan. Pada akhirnya, upaya pembentukan wadah tersebut kembali digagas.
          <br /><br />
          Pembentukan wadah pelaku pendidikan dimulai dengan adanya kesepakatan bahwa meskipun banyak cara yang mereka gunakan, namun metodenya tetap sama, yakni experiential education (EE). Akan tetapi, dikarenakan EE yang digagas oleh John Dewey, sudah menjadi nama lembaga internasional (AEE, Association for Experiential Education), maka para penggagas wadah ini pun mengusulkan penggunaan sebutan  Experiential Learning (EL).
          <br /><br />
          <strong className='font-bold'>Inisiasi Pembentukan AELI</strong>
          <br />
          Pertemuan informal pertama untuk menggagas pembentukan wadah diadakan di Tanah Tingal pada bulan November 2006 dan dilanjutkan dengan pertemuan berikutnya di Pancawati. Pada pertemuan ketiga di Pasir Randu, dibentuklah “Panitia Tujuh” yang terdiri dari:
          <br /><br />
          ●	Enda Mulyanto (Pelopor Adventure Camp, PAC),
          <br />
          ●	Robby Seahan (OBET Nusantara),
          <br />
          ●	Rovino (Ono, Kampoeng Pasir Randu),
          <br />
          ●	Kresno Wiyoso (Inong, Tanah Tingal),
          <br />
          ●	Yuniga Fernando (Ega, Pancawati Outdoor Training),
          <br />
          ●	Soelistyo Winarno (Soel, Praktisi EL) dan
          <br />
          ●	F. Rahardi (Wartawan).
          <br /><br />
          Panitia Tujuh selanjutnya mengadakan persiapan administratif (notaris, dll) dan rencana deklarasi. Tanggal 24 Januari 2007 beberapa lembaga penyelenggara outdoor training sepakat untuk membentuk asosiasi dengan nama “Indonesian Experiential Learning Association” (IELA) atau “Asosiasi Experiential Learning Indonesia” (AELI).
          <br /><br />
          <strong className='font-bold'>Penggunaan Istilah Experiential Learning</strong>
          <br />
          Experiential Learning sendiri kemudian disepakati sebagai istilah untuk mewadahi pengertian “Pembelajaran berbasis pengalaman”. Penggunaan nama Experiential Learning disepakati, setelah melalui diskusi panjang yang cukup alot, sebab ada pula gagasan agar menggunakan nama “Outbound”. Namun akhirnya nama Experiential Learning dipilih, karena semua lembaga penyelenggara outdoor training sebenarnya menerapkan metodologi pembelajaran ini.
          <br /><br />
          Dengan memilih nama Experiential Learning, anggota asosiasi menjadi tidak hanya terbatas pada lembaga penyelenggara outdoor training, melainkan juga para lembaga pendidikan formal (sekolah, perguruan tinggi), para pengajar (guru, dosen), maupun lembaga-lembaga pendidikan non formal di luar outdoor training. Asosiasi ini bahkan juga terbuka bagi siapa saja yang berminat terhadap metode pembelajaran berbasis pengalaman.
          <br /><br />
          <strong className='font-bold'>AELI Berdiri Secara Resmi
          </strong>
          <br />
          Setelah secara administratif AELI didaftarkan ke notaris pada 24 April 2007 (Akta Pendirian No. 7 Tgl. 24 April 2007, Notaris HARYANTI SUSANTO TANUBRATA, S.H, M.Kn. Jakarta Selatan), kemudian pada tanggal 9 Juni 2007 dikuatkan dengan deklarasi pembentukannya di Tanah Tingal, Jombang, Ciputat, Tangerang Selatan, Banten.
          <br /><br />
          Deklarasi ini dilakukan bersamaan dengan penyelenggaraan Festival Outbound Nasional I (FON I). Acara FON I sendiri sudah berlangsung sejak tanggal 8 Juni dengan berbagai aktivitas, mulai dari pelatihan, seminar, dan pameran. Setelah dideklarasikan, para deklarator melanjutkan acara dengan mengadakan Musyawarah Nasional I (Munas I) untuk membentuk kepengurusan, memilih Ketua, dan merancang program kerja, termasuk menentukan tempat sekretariat.
        </p>
        <Title id='program'>Program</Title>
        <p className='pt-4 px-10'>
          Konsep Experiential Learning yang banyak dikenal orang adalah program capacity building, character building, dan competency building. Konsep tersebut kemudian semakin berkembang menjadi berbagai progam dalam bentuk gathering, outing, wisata games based learning, dan lain sebagainya.
          <br /><br />
          Untuk mencapai Visi dan menjalankan Misi yang ditetapkan, AELI memiliki program-program pengembangan terkait Experiential Learning antara lain:
          <br /><br />
          <strong className='font-bold'>Program peningkatan kapasitas anggota perorangan (Praktisi)</strong><br />
          ●	Certified Training “Basic Facilitator Experiential Learning”
          <br />
          ●	Certified Training “Advance Facilitator Experiential Learning”
          <br />
          ●	Certified Training “Programmer Experiential Learning”
          <br />
          ●	Sertifikasi Kompetensi Kerja Nasional Indonesia (SKKNI) Facilitator Experiential Learning bekerjasama dengan LSP
          <br /><br />
          <strong className='font-bold'>Program peningkatan kapasitas anggota lembaga (Provider)</strong><br />
          ●	Certified Training “Professional Provider Experiential Learning”
          <br />
          ●	Accredited Member of AELI
          <br />
          ●	Accredited Experiential Program of AELI Member
          <br />
          ●	Pendampingan Desa Wisata untuk menjadi Penyedia Layanan Wisata Experiential

        </p>
        <Title id='sertifikasi'>Sertifikasi</Title>
        <p className='pt-4 px-10'><strong className='font-bold'>Sertifikasi Kepemanduan Outbound</strong><br />
          AELI telah menjadi mitra BNSP dan LSP untuk mengadakan Sertifikasi Uji Kompetensi  Kepemanduan Outbound sejak tahun 2014. Daftar pelaksanaan Sertifikasi Uji Kompetensi Kepemanduan Outbound adalah sebagai berikut :
          <br /><br />
          1.	Tebet, Senin, 17 November 2014 (para asesor)
          <br />
          2.	Cibubur, Selasa, 24 Maret 2015
          <br />
          3.	Pancawati, Selasa, April 2015
          <br />
          4.	Boyolali, Selasa, 26 Mei 2015
          <br />
          5.	Denpasar, Rabu, 25 November 2015
          <br />
          6.	Kaliurang, Selasa, 1 Desember 2015
          <br />
          7.	Cibubur, Minggu, 6 Desember 2015
          <br />
          8.	Panjang Jiwo, Rabu, 16 Desember 2015
          <br />
          9.	Lembang, Senin, 10 Mei 2016
          <br />
          10.	Denpasar, Rabu-Kamis, 2-3 Agustus 2017
          <br />
          11.	Lubana Sengkol, Selasa-Rabu, 15-16 Agustus 2017
          <br />
          12.	Makassar, Minggu, 20 Agustus 2017
          <br />
        </p>
        {/* {
          fix &&
          <Link href="#top" scroll={false} className='bottom-8 w-10 fixed right-8 ease-in-out duration-700 '>
          <Image width={40} height={40} src="/backtop.png" alt="" />
        </Link>
        } */}
      </NoNavbar></div>
  )
}

export default Index