import React from 'react'
import "./article.css"

const Article = (props) => {
  return (
    <div className="gpt3__article">
      <img className='gpt3__article-image' src={props.imageUrl} alt="Blog_1" />
      <div className="gpt3__article-content">
        <p>{props.date}</p>
        <h2>{props.title}</h2>
        <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article