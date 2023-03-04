import React from 'react';

const NewsCard = ({ newsitems: {author,title,url,urlToImage,publishedAt} }) => {
  return (
    <div className="newsitems" key={url}>
      <div>
        <p>{publishedAt}</p>
      </div>

      <div>
        <img src={urlToImage !== null ? urlToImage : "https://www.freeiconspng.com/uploads/no-image-icon-13.png"} alt={title} />
      </div>

      <div>
        <span style={{color:"whitesmoke"}}>{author}</span>
        <h3 style={{color:"whitesmoke"}}>{title}</h3>
      </div>
      <a rel="noreferrer" href={url} target="_blank" className="btn btn-sm btn-dark">Read More</a>
    </div>
  );
}

export default NewsCard;
