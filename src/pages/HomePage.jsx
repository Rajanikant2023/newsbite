import React,{useEffect,useState} from 'react'
import { Navbar, NewsCard} from '../components'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const HomePage = () => {
  const [newsitem, setNewsItem] = useState([]);
  // const [searchItem, setsearchItem] = useState('latest')
 useEffect(() => {
    const fetchData=async()=>{
      const data=await fetchFromAPI(`q=latest`);
      // console.log(data.articles);
      setNewsItem(data.articles);
      // console.log(videos);
    }
    fetchData();
 })
  return (
    <div>
      <Navbar/>
      <div className="row">
      {newsitem?.length > 0 ? (
        <div className="container">
        {newsitem.map((newsitems) => (
          <NewsCard newsitems={newsitems} />
       ))}
     </div>
      ) : (
        <div className="empty">
          <h2>No News found</h2>
        </div>
      )}
      </div>
    </div>
  )
  }

export default HomePage;
