import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import HappyBirthdaySong from "../audio/happybirthday.mp3"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <audio id="birthday_song" controls autoPlay>
      <source src={HappyBirthdaySong} />
    </audio>
    <p>Welcome to your birthday site! 🎉🥳</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
