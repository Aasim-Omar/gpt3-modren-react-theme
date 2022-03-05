import React from 'react'
import { Feature } from '../../components'
import "./whatGPT3.css"

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 container" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <h2 className="sub-head">What is GPT-3</h2>
        <p className='sub-p'>
          We so opinion friends me message as delight. Whole front do of plate heard oh ought.
          His defective nor convinced residence own. Connection has put impossible own
          apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor
          entrance to on by.
        </p>
      </div>
      <div className="gpt3__whatgpt3-head  section__margin">
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Explore the Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title="Chatbots" text="We so opinion friends me message as delight. Whole front friends do of plate heard oh ought." />
        <Feature title="Knowledgebase" text="At jointure ladyship an insisted so friends humanity he. Friendly bachelor entrance to on by. As put impossible own apartments" /> 
        <Feature title="Education" text="Impossible at jointure an insisted so humanity he. Friendly ladyship bachelor. As put own friends apartments entrance to on by friends." /> 
      </div>
    </div>
  )
}

export default WhatGPT3