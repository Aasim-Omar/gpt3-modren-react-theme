import React from 'react'
import { Article } from "../../components"
import { blog01, blog02, blog03, blog04, blog05 } from "./import"
import "./blog.css"

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding container' id="blog">
      <Article title="GPT-3 and Open AI is the future. Let us exlore how it is?" date="Sep 29, 2021" imageUrl={blog01}/>
      <Article title="GPT-3 and Open AI is the future. Let us exlore how it is?" date="Sep 29, 2021" imageUrl={blog05}/>
      <Article title="GPT-3 and Open AI is the future. Let us exlore how it is?" date="Sep 29, 2021" imageUrl={blog02}/>
      <Article title="GPT-3 and Open AI is the future. Let us exlore how it is?" date="Sep 29, 2021" imageUrl={blog03}/>
      <Article title="GPT-3 and Open AI is the future. Let us exlore how it is?" date="Sep 29, 2021" imageUrl={blog04}/>
    </div>
  )
}

export default Blog