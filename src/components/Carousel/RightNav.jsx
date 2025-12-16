import { IconButton } from "@mui/material";

const RightNav = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      right: 0,
      top: "40%",
      transform: "translate(50%, -50%)",
      zIndex: 5,
      width: 40,
      height: 40,
      backgroundColor: "#34C94B",
      color: "#ffff",
      "&:hover": {
        backgroundColor: "#2ebd45",
      },
    }}
  >
    ❯
  </IconButton>
);

export default RightNav;
