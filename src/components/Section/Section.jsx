import { Box, Typography, Button } from "@mui/material";
import { useState } from "react";

const Section = ({ title, carousel, children, hideToggle = false }) => {
  const [showAll, setShowAll] = useState(false);

  return (
    <Box sx={{ mb: 4 }}>      
      <Box sx={{ px: 3 }}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Typography variant="h6" color="white">
            {title}
          </Typography>

          {!hideToggle && (
          <Button
            onClick={() => setShowAll(!showAll)}
            sx={{ color: "#34C94B", textTransform: "none" }}
          >
            {showAll ? "Collapse" : "Show All"}
          </Button>
        )}
        </Box>

        {hideToggle ? carousel : showAll ? children : carousel}
      </Box>


      <Box
        sx={{
          mt: 4,
          borderBottom: "1px solid #34C94B",
          width: "100%",
        }}
      />
    </Box>
  );
};

export default Section;
