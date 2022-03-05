import React from 'react'
import "./brand.css"
import google from "../../assets/google.png"
import slack from "../../assets/slack.png"
import dropbox from "../../assets/dropbox.png"
import shopify from "../../assets/shopify.png"
import atlassian from "../../assets/atlassian.png"

const Brand = () => {
  return (
    <div className="gpt3__brand container section__padding">
      <img src={google} alt="google" />
      <img src={slack} alt="slack" />
      <img src={dropbox} alt="dropbox" />
      <img src={shopify} alt="shopify" />
      <img src={atlassian} alt="atlassian" />
    </div>
  )
}

export default Brand