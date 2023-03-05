import React from 'react';
import defaultImage from './default.jpg';

export default function NewsItem(props) {

  const {imageURL, title, desc, url, author, date} = props;

  return (
    <>
        <div className="card" style={{width: "18 rem"}}>
            <img src={imageURL? imageURL: defaultImage} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{desc}</p>
                <span className="card-text badge rounded-pill text-bg-info">Author : {author?author: "Unknown"}</span>
                <span className="d-block card-text"><small className="text-muted">Published at {`${date.slice(0,10)} ${date.slice(11,-1)} IST`}</small></span>
                <a href={url} className="btn btn-primary" target="_blank" rel="noreferrer">See Full Article</a>
            </div>
        </div>
    </>
  )
}
