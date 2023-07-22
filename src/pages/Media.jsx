import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";

const data = [
  {
    src: "https://s7d1.scene7.com/is/image/mcdonalds/DC_201907_0005_BigMac_832x472:1-3-product-tile-desktop?wid=765&hei=472&dpr=off",
    title: "Big Mac",
  },
  {
    src: "https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-Chicken-Big-Mac:1-3-product-tile-desktop?wid=830&hei=513&dpr=off",
    title: "Chicken Big Mac",
  },
  {
    src: "https://mcdonalds.com.lb/storage/menu-products/Big-Tasty.png",
    title: "Big Tasty",
  },
  {
    src: "https://mcdonalds.com.lb/storage/menu-products/Grand-Chicken-Deluxe.png",
    title: "Grand Chicken Deluxe",
  },
  {
    src: "https://s7d1.scene7.com/is/image/mcdonalds/DC_201909_4314_McChicken_832x472:1-3-product-tile-desktop?wid=765&hei=472&dpr=off",
    title: "McChicken",
  },
  {
    src: "https://mcdonalds.com.lb/storage/menu-products/Grand-Chicken-Special.png",
    title: "Grand Chicken special",
  },
  {
    src: "https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-4-chicken-mcnuggets-1:1-3-product-tile-desktop?wid=829&hei=515&dpr=off",
    title: "Chicken McNuggets® (4pc)",
  },
  {
    src: "https://www.mcdonalds.com.sg/sites/default/files/2023-02/9pc%20McNuggets_0.png",
    title: "Chicken McNuggets® (9pc)",
  },
];

const Media = () => {
  const handleAddToCart = (item) => {
    // Implement the logic to add the item to the cart
    console.log(`Added ${item.title} to cart!`);
  };

  const handleFavoriteClick = (item) => {
    // Implement the logic to toggle the favorite status of the item
    console.log(
      `${item.title} is now ${item.isFavorite ? "unfavorited" : "favorited"}`
    );
    item.isFavorite = !item.isFavorite;
  };

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
      {data.map((item, index) => (
        <Box key={index} sx={{ width: 210, p: 1 }}>
          {item ? (
            <img
              style={{ width: 210, height: 118, objectFit: "cover" }}
              alt={item.title}
              src={item.src}
            />
          ) : (
            <Skeleton variant="rectangular" width={210} height={118} />
          )}
          {item ? (
            <Box sx={{ pt: 1, display: "flex", alignItems: "center" }}>
              <Typography gutterBottom variant="h6">
                {item.title}
              </Typography>
              <IconButton
                aria-label="favorite"
                color={item.isFavorite ? "secondary" : "default"}
                onClick={() => handleFavoriteClick(item)}
              >
                <FavoriteIcon />
              </IconButton>
              <Button variant="contained" onClick={() => handleAddToCart(item)}>
                Add to Cart
              </Button>
            </Box>
          ) : (
            <Box sx={{ pt: 1 }}>
              <Skeleton />
              <Skeleton width="80%" />
            </Box>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default Media;
