import { useEffect, useState } from "react";
import axios from "axios";
import { Box } from "@mui/material";
import AlbumCard from "../../Section/AlbumCard/AlbumCard";

const NewSongs = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios
      .get("https://qtify-backend.labs.crio.do/albums/new")
      .then((res) => setAlbums(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
        gap: "24px",
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

export default NewSongs;
