import { useRouter } from "next/router";
import React, { useEffect, useState } from 'react';
import axios from "axios";
import Navbar from "./navbar";
import { formatDistanceToNow, parseISO } from 'date-fns';
import Link from "next/link";

interface DataItem {
  id: string,
  name: string,
  content: string,
  title: string,
  create_at: string
}

function DetailArticles() {
  const [selectedArticle, setSelectedArticle] = useState<DataItem | null>(null);
  const [searchInput, setSearchInput] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [value, setValue] = useState<DataItem[]>([]);
  const { query } = useRouter();
  const router = useRouter();
  const articleTitle = selectedArticle ? selectedArticle.title : "Artikel tidak ditemukan";

  useEffect(() => {
    axios.get('/api/getarticles')
      .then((res) => {
        console.log(res.data.data);
        const articles: DataItem[] = res.data.data;
        setValue(articles);
        const selected: DataItem | undefined = articles.find(item => item.id === query.id);
        if (selected) {
          setSelectedArticle(selected);
        }
        else{
          router.push('/halaman-tidak-ditemukan')
          return null
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [query.id]);

  const handleSearchSubmit = (e: any) => {
    e.preventDefault();
    // Membuat URL dengan parameter pencarian dan mengarahkan pengguna
    const url = `/articles?search=${searchInput}`;
    router.push(url);
  };

  useEffect(() => {
    // Mengambil nilai parameter pencarian dari URL jika ada
    const querySearch = router.query.search || '';
    setSearchInput(querySearch.toString());

    // Filter data based on searchInput
    const filteredResults:any = value.filter(({ title }: any) =>
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
      return "kurang dari 1 menit yang lalu";
    } else if (secondsLeft < 3600) {
      const minutes = Math.floor(secondsLeft / 60);
      return `pada ${minutes} ${minutes > 1 ? "menit" : "menit"} yang lalu`;
    } else if (secondsLeft < 86400) {
      const hours = Math.floor(secondsLeft / 3600);
      return `pada ${hours} ${hours > 1 ? "jam" : "jam"} yang lalu`;
    } else {
      const options: any = { year: 'numeric', month: 'long', day: 'numeric' };
      return "pada " + createdAtDate.toLocaleDateString('id-ID', options);
    }
  };

  return (
    <div>
      <Navbar
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        handleSearchSubmit={handleSearchSubmit}
      />
      <div className="flex flex-col justify-center items-center">
        {selectedArticle && (
          <div className="w-[700px] flex flex-col gap-10">
            <h1 className="font-extrabold text-[40px]">{articleTitle}</h1>
            <div>
              <Link className='hover:border-b hover:border-black' href={`/profile/${selectedArticle.name}`}>{selectedArticle.name}</Link>
              <h1>Diposting {formatTimeLeft(selectedArticle.create_at)}</h1>
            </div>
            <div dangerouslySetInnerHTML={{ __html: selectedArticle.content }} />
          </div>
        )}
      </div>
    </div>
  )
}

export default DetailArticles;
