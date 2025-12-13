import { Card, CardMedia, Chip, Typography, Box } from "@mui/material";

const AlbumCard = ({ image, title, follows }) => {
  return (
    <Box sx={{ width: 160 }}>
      <Card
        elevation={0}
        sx={{
          borderRadius: "12px",
          overflow: "hidden",
          backgroundColor: "#fff",
        }}
      >
        <CardMedia
          component="img"
          image={image}
          alt={title}
          sx={{
            height: 160,
            objectFit: "cover",
          }}
        />
        <Box
          sx={{
            px: 1,
            py: 1,
          }}
        >
          <Chip
            label={`${follows} Follows`}
            size="small"
            sx={{
              backgroundColor: "#121212",
              color: "#fff",
              fontSize: "12px",
              height: 24,
              borderRadius: "16px",
            }}
          />
        </Box>
      </Card>

      <Typography
        sx={{
          color: "#fff",
          fontSize: "14px",
          mt: 1,
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default AlbumCard;
