import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

export default  function News(props) {

  const [articles, setarticles] = useState([]);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);
  const [loading, setloading] = useState('false');

  const updateNews = async () => {
    let category = props.category==='all'?'': `&category=${props.category}`;
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=eeafbfe56f5542f889370b78386aa7c4&page=${page}&pageSize=${props.pageSize}${category}` ;
    setloading(true);
    const news = await fetch(url);
    const parsedNews = await news.json();
    setarticles(parsedNews.articles);
    settotalResults(parsedNews.totalResults);
    setloading(false);
  }


  // const handleNextClick = () => {
  //   if(page < Math.ceil(totalResults/props.pageSize)){
  //     updateNews();
  //     setpage(page + 1);
  //   }
  // }

  // const handlePrevClick = () => {
  //   if(page > 1){
  //     updateNews();
  //     setpage(page - 1);
  //   }
  // }

  useEffect(() => {
    updateNews();
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    let category = props.category==='all'?'': `&category=${props.category}`;
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=eeafbfe56f5542f889370b78386aa7c4&page=${page + 1}&pageSize=${props.pageSize}${category}` ;
    setpage(page + 1);
    setloading(true);
    const news = await fetch(url);
    const parsedNews = await news.json();
    setarticles(articles.concat(parsedNews.articles));
    settotalResults(parsedNews.totalResults);
    setloading(false);
  }
  
  return (
    <>
      <h1 className='text-center  mt-5 pt-4'> News App - Top {props.category.slice(0,1).toUpperCase() + props.category.slice(1)} Headlines</h1>
      {loading && <Spinner/>}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
        loader={<Spinner/>}
      >
        <div className='container'>
          <div className="row">
            {articles.map(elem=>(
              <div  key={elem.url} className="col-md-4 my-3">
                <NewsItem imageURL={elem.urlToImage} title={elem.title} desc={elem.description} url={elem.url} author={elem.author} date={elem.publishedAt}/>
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll>
      {/* <div className='container d-flex justify-content-between'>
        <button disabled={page <= 1} className="btn btn-primary" type="submit" onClick={handlePrevClick}>Previous</button>
        <span>Current Page : {page}</span>
        <span>Total Pages : {Math.ceil(totalResults/props.pageSize)}</span>
        <button disabled={page >= Math.ceil(totalResults/props.pageSize)} className="btn btn-primary" type="submit" onClick={handleNextClick}>Next</button>
      </div> */}
    </>
  )
}
