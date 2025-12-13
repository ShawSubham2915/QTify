import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import './Home.module.css'
import Hero from '../components/Hero/Hero'
import Section from '../components/Section/Section'
import TopSongs from '../components/Songs/TopSongs'

const Home = () => {
  return (
    <div>
      <Navbar />

      <Hero />

      <Section title="Top Songs" >
        <TopSongs />
      </Section>
    </div>
  )
}

export default Home
