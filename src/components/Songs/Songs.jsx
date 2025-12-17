import axios from "axios";
import { useEffect, useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import Section from "../Section/Section";
import Carousel from "../Carousel/Carousel";
import AlbumCard from "../Section/AlbumCard/AlbumCard";



const Songs = () => {

    const [songs, SetSongs] = useState([]);
    const [genres, SetGenres] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState("all");

   const getSongs = async () => {
        try {
            let res = await axios.get("https://qtify-backend.labs.crio.do/songs");
            SetSongs(res.data);
        } catch (error) {
            console.error("Error fetching songs",error);
        }
    }

    const getgenres = async () => {
        try {
            let res = await axios.get("https://qtify-backend.labs.crio.do/genres");
            let resdata = res.data.data;
            SetGenres(resdata);
        } catch (error) {
            console.error("Error fetching genres",error);
        }
    }

    useEffect(() => {
        getSongs();
        getgenres();
    }, []);

    const filteredSongs = (selectedGenre === "all" ? songs : songs.filter(song => song.genre.key === selectedGenre));


  return (
    <Section title="Songs" hideToggle carousel={
      <Box sx={{ }}>
        
        <Tabs
          value={selectedGenre}
          onChange={(e, val) => setSelectedGenre(val)}
          TabIndicatorProps={{ style: { backgroundColor: "#34C94B"} }}
          sx={{                
                "& .MuiTab-root": {
                color: "#ffffff",
                textTransform: "none",
                fontSize: "14px",
                minHeight: "48px",                
                },
                "& .Mui-selected": {
                color: "#ffffff",
                fontWeight: 600,
                },
                mb: 3,
            }} >
          <Tab label="All" value="all" />
          {genres.map((genre) => (
            <Tab key={genre.key} label={genre.label} value={genre.key} />
          ))}
        </Tabs>

        {/* Carousel View*/}
        <Carousel
          items={filteredSongs}
          renderItem={(song) => (
            <AlbumCard
              image={song.image}
              title={song.title}
              chipLabel={`${song.likes} Likes`}
            />
          )}
        />
      </Box>
    } />
  );
}

export default Songs
