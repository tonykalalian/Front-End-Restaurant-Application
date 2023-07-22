import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Media from "./Media";

const Home = () => {
  const restaurantName = "Delicious Delights";
  const restaurantDescription =
    "Welcome to Delicious Delights - your go-to place for mouthwatering dishes!";

  return (
    <Box sx={{ padding: 3 }}>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h3" component="h1" gutterBottom>
          {restaurantName}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {restaurantDescription}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: 3,
          "@media (min-width: 600px)": {
            gridTemplateColumns: "repeat(2, 1fr)",
          },
          "@media (min-width: 900px)": {
            gridTemplateColumns: "repeat(4, 1fr)",
            "> div:nth-child(1)": {
              gridColumn: "1 / span 4",
            },
          },
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Typography variant="h5" gutterBottom>
              Menu
            </Typography>
            <Media />
          </Box>
        </Box>
        {/* Additional content can be added here */}
      </Box>
    </Box>
  );
};

export default Home;
