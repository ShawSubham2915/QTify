import { Box, Typography, Button } from "@mui/material";
import { useState } from "react";

const Section = ({ title, children }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Box  p={2} borderBottom={"1px solid #34C94B"}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mx={2}
      >
        <Typography variant="h6" color="white">
          {title}
        </Typography>

        <Button
          variant="text"
          onClick={() => setCollapsed(!collapsed)}
          sx={{ color: "#1db954", textTransform: "none" }}
        >
          {collapsed ? "Show All" : "Collapse"}
        </Button>
      </Box>

      {!collapsed && children}
    </Box>
  );
};

export default Section;
