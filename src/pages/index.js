import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import HappyBirthdaySong from "../audio/happybirthday.mp3"
import GoochMeme from "../images/gooch.mp4"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <audio id="birthday_song" controls autoPlay>
      <source src={HappyBirthdaySong} />
    </audio>
    <p>Welcome to your birthday site! 🎉🥳</p>
    <p>You might say to yourself. What does this website mean? What does it mean to be a gooch and how taint am I? Well, there's one man who can tell you this and a whole lot more.</p>
    <div style={{ maxWidth: `500px`, marginBottom: `1.45rem` }}>
      <video width="100%" height="240" controls autoPlay loop>
        <source src={GoochMeme} type="video/mp4" />
      </video>
    </div>
  </Layout>
)

export default IndexPage
