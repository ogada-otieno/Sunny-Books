import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Badge, Box, IconButton } from "@mui/material";
import {
  PersonOutline,
  MenuOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import LogoutSharpIcon from "@mui/icons-material/LogoutSharp";
import LoginSharpIcon from "@mui/icons-material/LoginSharp";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { useNavigate } from "react-router-dom";
import { shades } from "../../theme";
import { setIsCartOpen, resetCart } from "../../state";

const Navbar = ({ user, onLogout }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  const handleLogout = () => {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout());

    // reset cart state
    dispatch(resetCart()); 
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      width="100%"
      height="60px"
      backgroundColor="rgba(255,255,255,0.95)"
      color="black"
      position="fixed"
      top="0"
      left="0"
      zIndex="1"
    >
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          onClick={() => navigate("/")}
          sx={{ "&:hover": { cursor: "pointer" } }}
          color={shades.secondary[500]}
        >
          <IconButton sx={{ color: "green" }}>
            <WbSunnyOutlinedIcon />
          </IconButton>
          Sunny Books
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          columnGap="20px"
          zIndex="2"
        >
          <IconButton sx={{ color: "black" }}>
            <SearchOutlined />
          </IconButton>
          <IconButton sx={{ color: "black" }}>
            <PersonOutline />
          </IconButton>
          <Badge
            badgeContent={cart.length}
            color="secondary"
            invisible={cart.length === 0}
            sx={{
              "& .Mui-Badge-badge": {
                right: 5,
                top: 5,
                padding: "0, 4px",
                height: "14px",
              },
            }}
          >
            <IconButton
              onClick={() => dispatch(setIsCartOpen({}))}
              sx={{ color: "black" }}
            >
              <AddShoppingCartIcon />
            </IconButton>
          </Badge>
          {user && (
            <IconButton onClick={handleLogout} sx={{ color: "red" }}>
              <LogoutSharpIcon />
            </IconButton>
          )}
          {!user && (
            <IconButton onClick={() => navigate("/login")} sx={{ color: "green" }}>
              <LoginSharpIcon />
            </IconButton>
          )}
          <IconButton sx={{ color: "black" }}>
            <MenuOutlined />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
