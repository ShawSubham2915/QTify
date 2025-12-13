import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import './Home.module.css'
import Hero from '../components/Hero/Hero'
import Section from '../components/Section/Section'
import TopSongs from '../components/Songs/TopSongs'
import NewSongs from '../components/Songs/NewSongs/NewSongs'

const Home = () => {
  return (
    <div>
      <Navbar />

      <Hero />

      <Section title="Top Songs" showDivider>
        <TopSongs />
      </Section>

      <Section title="New Songs" >
        <NewSongs />
      </Section>
    </div>
  )
}

export default Home
