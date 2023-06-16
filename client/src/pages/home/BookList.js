import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Tabs, Tab, Box, Typography, useMediaQuery } from "@mui/material";
import BookCard from "../../components/BookCard";
import { setBooks } from "../../state";
import api from "../../config/api";

const BookList = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("all");
  const books = useSelector((state) => state.cart.books);
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  // fetch books data from the backend
  const getBooks = () => {
    axios
      .get(api.baseUrl+"books")
      .then((res) => {
        const fetchedBooks = res.data;
        dispatch(setBooks(fetchedBooks));
      })
      .catch((err) => console.log(err));
  };

  // fetch categories
  // const getCategories = () => {
  //   axios.get("/categories").then((res) => {
  //     const fetchedCategories = res.data;
  //     // console.log(fetchedCategories);
  //   });
  // };

  useEffect(() => {
    getBooks();
    // getCategories();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // include filters for categories here!!!
  return (
    <Box width="80%" margin="80px auto">
      <Typography variant="h3" textAlign="center">
        Featured <b>Books</b>
      </Typography>
      <Tabs
        textColor="primary"
        indicatorColor="primary"
        value={value}
        onChange={handleChange}
        centered
        TabIndicatorProps={{ sx: { display: isNonMobile ? "block" : "none" } }}
        sx={{
          m: "25px",
          "& .MuiTabs-flexContainer": {
            flexWrap: "wrap",
          },
        }}
      >
        {/* displays the various filters available for the books.  */}
        <Tab label="All" value="all" />
        {/* add code for the remaining filters. */}
        <Tab label="Fiction" value="fiction" />
        <Tab label="Thrillers" value="thriller" />
        <Tab label="Adult" value="adult" />
      </Tabs>
      <Box
        margin="0 auto"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, 300px)"
        justifyContent="space-around"
        rowGap="20px"
        columnGap="1.33%"
      >
        {value === "all" &&
          Object.values(books).map((book) => {
            return <BookCard book={book} key={book.id} />;
          })}
      </Box>
    </Box>
  );
};

export default BookList;
