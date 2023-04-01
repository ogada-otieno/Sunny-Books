// renders book items across the application.
// reusable across the entire application
import { useState } from "react";
import { useDispatch } from "react-redux";
import { IconButton, Box, Typography, useTheme, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../theme";
import { addToCart } from "../state";
import { useNavigate } from "react-router-dom";

const BookCard = ({ book, width }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [count, setCount] = useState(1); //local state: count of number of items we'll add to the cart
  const [isHovered, setIsHovered] = useState(false); //determines if a user has hovered over an item.
  const {
    //grab color from the useTheme property
    palette: { neutral },
  } = useTheme();

  //destructure the book item attributes

  const { category, price, title, image_url } = book;
  
  // category = book.category.genre


  //   const {
  //     data: {
  //       attributes: {
  //         formats: {
  //           medium: { url },
  //         },
  //       },
  //     },
  //   } = category;

  return (
    <Box width={width}>
      <Box
        position="relative"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <img
          alt={book.title}
          width="300px"
          height="400px"
          src={image_url}
          onClick={() => navigate(`/item/${book.id}`)}
          style={{ cursor: "pointer" }}
        />
        <Box
          display={isHovered ? "block" : "none"}
          position="absolute"
          bottom="10%"
          left="0"
          width="100%"
          padding="0 5%"
        >
          <Box display="flex" justifyContent="space-between">
            {/* amount and plus/minus buttons */}
            <Box
              display="flex"
              alignItems="center"
              backgroundColor={shades.neutral[100]}
              borderRadius="3px"
            >
              <IconButton onClick={() => setCount(Math.max(count - 1, 1))}>
                <RemoveIcon />
              </IconButton>
              <Typography color={shades.primary[300]}>{count}</Typography>
              <IconButton onClick={() => setCount(count + 1)}>
                <AddIcon />
              </IconButton>
            </Box>
            {/* button for add to cart */}
            <Button
              onClick={() => {
                dispatch(addToCart({ item: { ...book, count } }));
              }}
              sx={{ backgroundColor: shades.primary[300], color: "white" }}
            >
              Add to Cart
            </Button>
          </Box>
        </Box>
      </Box>
      <Box mt="3px">
        <Typography variant="subtitle2" color={neutral.dark}>
          {book.category.genre}
          {/* {category
            .replace(/([A-Z])/g, "$1")
            .replace(/^./, (str) => str.toUpperCase())} */}
        </Typography>
        <Typography>{title}</Typography>
        <Typography fontWeight="bold">KES {price}</Typography>
      </Box>
    </Box>
  );
};

export default BookCard;
