import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import styled from "@emotion/styled";
import { shades } from "../../theme";
// import store from "../../store";
import {
  decreaseCount,
  increaseCount,
  removeFromCart,
  resetCart,
  setIsCartOpen,
} from "../../state";

const FlexBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CartMenu = ({ user }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);

  const totalPrice = cart.reduce((total, book) => {
    return (
      parseInt(total) + parseInt(book.item.count) * parseInt(book.item.price)
    );
  }, 0);

  // array of all books in the cart
  const bookHolder = cart.map((book) => book.item);
  // console.log(bookHolder);

  const handleCheckoutAndAddToOrder = async (e) => {
    const fillOrder = await fetch(`/orders`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        total_price: totalPrice,
        user_id: user.id,
      }),
    });

    const order = await fillOrder.json();

    for (const book of bookHolder) {
      const data = {
        quantity: book.count,
        book_id: book.id,
        order_id: order.id,
      };
      console.log(data);

      fetch("/order_books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((err) => console.error(err));
    }


    dispatch(resetCart()); // remove when payment has been configured to work properly
  };

  // console.log(store.getState())
  return (
    <Box
      display={isCartOpen ? "block" : "none"}
      backgroundColor="rgba(0, 0, 0, 0.4)"
      position="fixed"
      zIndex={10}
      width="100%"
      height="100%"
      left="0"
      top="0"
      overflow="auto"
    >
      <Box
        position="fixed"
        right="0"
        bottom="0"
        width="max(400px, 30%)"
        height="100%"
        backgroundColor="white"
      >
        <Box padding="30px" overflow="auto" height="100%">
          {/* HEADER */}
          <FlexBox mb="15px">
            <Typography variant="h3">Books in cart ({cart.length})</Typography>
            <IconButton onClick={() => dispatch(setIsCartOpen({}))}>
              <CloseIcon />
            </IconButton>
          </FlexBox>

          {/* CART LIST */}
          <Box>
            {cart.map((book, cartId) => {
              const { image_url, title, id, description, price, count } =
                book.item;
              {
                /* console.log(book.item, cartId) */
              }

              return (
                <Box key={cartId}>
                  <FlexBox p="15px 0">
                    <Box flex="1 1 40%">
                      <img
                        alt={title}
                        width="123px"
                        height="164px"
                        src={image_url}
                      />
                    </Box>
                    <Box flex="1 1 60%">
                      <FlexBox mb="5px">
                        <Typography fontWeight="bold">{title}</Typography>
                        <IconButton
                          onClick={() => dispatch(removeFromCart({ id: id }))}
                        >
                          <CloseIcon />
                        </IconButton>
                      </FlexBox>
                      <Typography>{description}</Typography>
                      <FlexBox m="15px 0">
                        <Box
                          display="flex"
                          alignItems="center"
                          border={`1.5px solid ${shades.neutral[500]}`}
                        >
                          <IconButton
                            onClick={() => dispatch(decreaseCount({ id: id }))}
                          >
                            <RemoveIcon />
                          </IconButton>
                          <Typography>{count}</Typography>
                          <IconButton
                            onClick={() => dispatch(increaseCount({ id: id }))}
                          >
                            <AddIcon />
                          </IconButton>
                        </Box>
                        <Typography fontWeight="bold">${price}</Typography>
                      </FlexBox>
                    </Box>
                  </FlexBox>
                  <Divider />
                </Box>
              );
            })}
          </Box>
          {/* ACTIONS */}
          <Box m="20px 0">
            <FlexBox m="20px 0">
              <Typography fontWeight="bold">SUBTOTAL</Typography>
              <Typography fontWeight="bold">KSh {totalPrice}</Typography>
            </FlexBox>
            <Button
              sx={{
                backgroundColor: shades.primary[400],
                color: "white",
                borderRadius: 0,
                minWidth: "100%",
                padding: "20px 40px",
                m: "20px 0",
              }}
              onClick={() => {
                // navigate("/checkout"); // will include this when payment functionality is complete
                navigate("/checkout/success");
                dispatch(setIsCartOpen({}));
                handleCheckoutAndAddToOrder();
              }}
            >
              CHECKOUT
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CartMenu;
