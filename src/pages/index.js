import React from "react"

import Layout from "../components/layout"
import HappyBirthdaySong from "../audio/happybirthday.mp3"
import GoochMeme from "../images/gooch.mp4"
import HatFlip from "../images/hat-flip.mp4"
import PBWhiskey from "../images/pb_n_whiskey.jpg"
import Mustache from "../images/i-mustache-you-for-the-markers.mp4"

const IndexPage = () => (
  <Layout>
    <audio id="birthday_song" controls autoPlay>
      <source src={HappyBirthdaySong} />
    </audio>
    <p>Welcome to your birthday site! 🎉🥳</p>
    <p>You might say to yourself. What does this website mean? What does it mean to be a gooch and how taint am I? Well, there's one man who can tell you this and a whole lot more - irrespective if you want to know.</p>
    <div style={{ maxWidth: `500px`, marginBottom: `1.45rem` }}>
      <video width="100%" height="240" controls autoPlay loop>
        <source src={GoochMeme} type="video/mp4" />
      </video>
    </div>
    <p>Here's a toast to the refined gentleman's birthday. To celebrate, here's a list of Billy's favorite pastimes.
      <ul>
        <li>Smack talking about high school hockey</li>
        <li>Duck hunting</li>
        <li>Guns and the 2nd Amendment (they are separate things)</li>
        <li>Eggs</li>
        <li>Moaning while eating literally anything tastier than smashed eggs in a pan.</li>
        <li>Peanut Butter and Whiskey
          <br />
          <img src={PBWhiskey} style={{maxHeight: `500px`}} />
        </li>
        <li>Dogs</li>
        <li>Accent impersonations (probably offensive to some people tbh)</li>
        <li>Performing duck calls naked in front of his apartment windows (nature calls)</li>
        <li>Hat flips
          <div style={{ maxWidth: `500px`, marginBottom: `1.45rem` }}>
            <video width="100%" height="240" controls autoPlay loop>
              <source src={HatFlip} type="video/mp4" />
            </video>
          </div>
        </li>
      </ul>
    </p>
    <p>Happy Birthday Billy! There truly is no one like you - in a good way...</p>
    <div style={{ maxWidth: `500px`, marginBottom: `1.45rem` }}>
      <video width="100%" height="240" controls autoPlay loop>
        <source src={Mustache} type="video/mp4" />
      </video>
    </div>
  </Layout>
)

export default IndexPage
