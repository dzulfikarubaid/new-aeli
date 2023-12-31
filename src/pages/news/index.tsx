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
      .get('/api/getnews')
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
    const url = `/news?search=${searchInput}`;
    router.push(url);
    setLoading(false)
  };
  const nameCount:any = {};

// Menghitung jumlah item dengan nama yang sama
filteredData.forEach((item) => {
  const { name } = item;
  if (nameCount[name]) {
    nameCount[name] += 1;
  } else {
    nameCount[name] = 1;
  }
});

  return (
    <div>
      <Navbar
        searchInput={searchInput}
        setSearchInput={setSearchInput}

        handleSearchSubmit={handleSearchSubmit}
      />

<div className='flex flex-row px-24 py-10 gap-10 justify-center'>
    <section className='flex flex-col w-[800px] gap-10'>
      {loading ? (
        <h1>Memuat data...</h1>
      ) : filteredData.length > 0 ? (
        filteredData.map((item: any, index) => (
          <div key={item.id} className='flex flex-col w-[600px] gap-4 p-4'>
            <div className='flex flex-row gap-1 h-6'>
              <Link className='hover:border-b hover:border-black w-fit' href={`/profile/${item.name}`}>
                {item.name}
              </Link>
              <p>•</p>
              <Link href={`/news/${item.id}`}>{formatTimeLeft(item.create_at)}</Link>
            </div>
            <Link href={`/news/${item.id}`} className=' flex flex-row justify-between items-start'>
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
              <img className='w-[100px] h-[100px] object-scale-down' src={item.image} alt='' />
            </Link>
          </div>
        ))
      ) : (
        <div>Berita tidak ditemukan</div>
      )}
    </section>
    <section>
    <div className='w-[350px] flex flex-col gap-3'>
      <h1 className='font-bold'>Peringkat Penulis Terbanyak</h1>
      {Object.keys(nameCount).sort((a, b) => nameCount[b] - nameCount[a]).map((name, index) => (
        <div key={index}>
          {index+1}. {name}: {nameCount[name]} berita
        </div>
      ))}
    </div>
  </section>
</div>

    </div>
  );
}

export default Articles;
