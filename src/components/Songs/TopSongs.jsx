import { useEffect, useState } from "react";
import axios from "axios";
import { Box } from "@mui/material";
import AlbumCard from "../../components/Section/AlbumCard/AlbumCard";

const TopSongs = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios
      .get("https://qtify-backend.labs.crio.do/albums/top")
      .then((res) => setAlbums(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
        gap: "24px",
        px: 2,
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
};

export default TopSongs;
