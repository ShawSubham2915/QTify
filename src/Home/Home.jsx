import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import './Home.module.css'
import Hero from '../components/Hero/Hero'
import Section from '../components/Section/Section'
import TopSongs from '../components/Songs/TopSongs/TopSongs'
import NewSongs from '../components/Songs/NewSongs/NewSongs'
import Songs from '../components/Songs/Songs'

const Home = () => {
  const topSongs = TopSongs();
  const newSongs = NewSongs();

  return (
    <div>
      <Navbar />

      <Hero />

      {/* Top Albums */}
      <Section
        title="Top Albums"
        carousel={topSongs.carouselView}>
        {topSongs.gridView}
      </Section>

      {/* New Albums */}
      <Section 
        title="New Albums" 
        carousel={newSongs.carouselView}>
        {newSongs.gridView}
      </Section>

      {/* All Songs */}
      <Songs />
    </div>
  )
}

export default Home
