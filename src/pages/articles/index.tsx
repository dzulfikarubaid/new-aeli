import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { FaPenToSquare } from 'react-icons/fa6';
import { FaSearch, FaTimes } from 'react-icons/fa';
import Navbar from './navbar';
import { useRouter } from 'next/router';

function Articles() {
  const [value, setValue] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const searchInputRef = useRef(null);
  const router = useRouter();
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios
      .get('/api/getarticles')
      .then((res) => {
        setLoading(false)
        console.log(res.data.data);
        setValue(res.data.data);
      })
      .catch((err) => {
        setLoading(false)
        console.log(err);
      });
  }, []);

  useEffect(() => {
    // Mengambil nilai parameter pencarian dari URL jika ada
    const querySearch = router.query.search || '';
    setSearchInput(querySearch.toString());

    // Filter data based on searchInput
    const filteredResults = value.filter(({ title }:any) =>
      title.toLowerCase().includes(querySearch.toString().toLowerCase())
    );
    setFilteredData(filteredResults);
  }, [router.query.search, value]);

  const formatTimeLeft = (createdAt: string) => {
    const now = new Date();
    const createdAtDate = new Date(createdAt);
    const timeLeftMillis = now.getTime() - createdAtDate.getTime();
    const secondsLeft = Math.floor(timeLeftMillis / 1000);

    if (secondsLeft < 60) {
      return 'kurang dari 1 menit yang lalu';
    } else if (secondsLeft < 3600) {
      const minutes = Math.floor(secondsLeft / 60);
      return `${minutes} ${minutes > 1 ? 'menit' : 'menit'} yang lalu`;
    } else if (secondsLeft < 86400) {
      const hours = Math.floor(secondsLeft / 3600);
      return `${hours} ${hours > 1 ? 'jam' : 'jam'} yang lalu`;
    } else {
      const options:any = { year: 'numeric', month: 'long', day: 'numeric' };
      return createdAtDate.toLocaleDateString('id-ID', options);
    }
  };

  const handleSearchSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true)
    // Membuat URL dengan parameter pencarian dan mengarahkan pengguna
    const url = `/articles?search=${searchInput}`;
    router.push(url);
    setLoading(false)
  };

  return (
    <div>
      <Navbar
        searchInput={searchInput}
        setSearchInput={setSearchInput}

        handleSearchSubmit={handleSearchSubmit}
      />

      {/* Konten Artikel */}
      {/* Konten Artikel */}
<div className='flex flex-row px-24 py-10 gap-10'>
  <div className='flex flex-wrap w-1/2 gap-6'>
    <div className='flex flex-row justify-between'>
      <div></div>
    </div>
    <div className='flex flex-col w-[600px] gap-10'>
      {loading ? (
        <h1>Memuat data...</h1>
      ) : filteredData.length > 0 ? (
        filteredData.map((item: any, index) => (
          <div key={item.id} className='flex flex-col gap-4 p-4'>
            <div className='flex flex-row gap-1 h-6'>
              <Link className='hover:border-b hover:border-black w-fit' href={`/profile/${item.name}`}>
                {item.name}
              </Link>
              <p>•</p>
              <Link href={`/articles/${item.id}`}>{formatTimeLeft(item.create_at)}</Link>
            </div>
            <Link href={`/articles/${item.id}`} className=' flex flex-row justify-between items-start'>
              <div>
                <h1 className='font-bold text-xl'>{item.title}</h1>
                <div
                  className='text-md font-light text-black'
                  dangerouslySetInnerHTML={{
                    __html:
                      item.content.length > 120
                        ? item.content.substring(0, 120).trim().replace(/\s+/g, ' ') + '...'
                        : item.content
                  }}
                />
              </div>
              {
                !item.image ? 
                <img className='w-[100px] h-[100px] object-scale-down' src={'/logo-aeli.png'} alt='' />:
                <img className='w-[100px] h-[100px] object-scale-down' src={item.image} alt='' />
              }
            </Link>
          </div>
        ))
      ) : (
        <div>Artikel tidak ditemukan</div>
      )}
    </div>
  </div>
</div>

    </div>
  );
}

export default Articles;
