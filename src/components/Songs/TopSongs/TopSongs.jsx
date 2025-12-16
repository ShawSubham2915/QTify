import { useEffect, useState } from "react";
import axios from "axios";
import { Box } from "@mui/material";

import Carousel from "../../Carousel/Carousel";
import AlbumCard from "../../Section/AlbumCard/AlbumCard";

const TopSongs = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios
      .get("https://qtify-backend.labs.crio.do/albums/top")
      .then((res) => setAlbums(res.data))
      .catch(console.error);
  }, []);

  const carouselView = (
    <Carousel
      items={albums}
      renderItem={(album) => (
        <AlbumCard
          key={album.id}
          image={album.image}
          title={album.title}
          follows={album.follows}
        />
      )}
    />
  );

  const gridView = (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
        gap: "30px",
      }}
    >
      {albums.map((album) => (
        <AlbumCard
          key={album.id}
          image={album.image}
          title={album.title}
          follows={album.follows}
        />
      ))}
    </Box>
  );

  return { carouselView, gridView };
};

export default TopSongs;
