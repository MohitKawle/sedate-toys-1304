import React from "react";
import { Box, Button, Container, Flex, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./Cart.css";
import { ArrowBackIcon } from "@chakra-ui/icons";

const Cart = () => {
  return (
    <>
      <Container maxW="90%" padding="1rem">
        {/* ----------------------------Header----------------------------- */}
        <Heading as="h2" size="2xl" padding="0.75rem">
          Cart
        </Heading>
        <Link to="/thingsToDo">
          <Flex>
            <Box>
              <ArrowBackIcon />
            </Box>
            <Box>
              <u>See all things to do</u>
            </Box>
          </Flex>
        </Link>

        {/* -----------------------------Main Cart------------------------------ */}
        <Container>
          <Flex gap="2rem" justifyContent="space-between">
            {/* -----------------------Left side for items added--------------------- */}
            <Box className="items-added">
              {/* {cartItems.map((items) => { */}
              <Flex direction="column">
                {/* -----------------------------image and edit, delete options----------------------------- */}
                <Box>
                  <Flex>
                    {/* -----------------------------------image-------------------------------- */}
                    <Box>{/* {items.imageSrc} */}</Box>
                    <Flex>
                      <Box>
                        {/* <Link to="./">  */}
                        Edit
                        {/* </Link>  */}
                      </Box>
                      <Box> Delete </Box>
                    </Flex>
                  </Flex>
                </Box>
                {/* ---------------------------------descriptions------------------------------------- */}
                <Box></Box>
              </Flex>
              {/* })} */}
            </Box>

            {/* -----------------------Right side for total amount------------------------ */}
            <Box p={8} shadow="md" borderWidth="1px" className="review">
              <Heading as="h2" size="lg" padding="0.75rem">
                Review Order Details
              </Heading>
              <br />
              <Flex gap="8rem">
                {/* ------------------------------headings-------------------------------- */}
                <Box>
                  <Flex direction="column">
                    <Box>Booking Fee</Box>
                    <Box>Subtotal</Box>
                    <Box>
                      <b>Total ${}</b>
                    </Box>
                  </Flex>
                </Box>
                {/* -------------------------amounts-------------------------------- */}
                <Box>
                  <Box> ₹0.00</Box>
                  <Box> ₹ ${}</Box>
                  <Box>
                    <b>₹ ${}</b>
                  </Box>
                </Box>
              </Flex>
              <br />
              <p style={{ fontSize: "12px", color: "gray" }}>
                No additional taxes and fees
              </p>
              <Button p={7} className="checkout-btn">
                Checkout
              </Button>

              <Container></Container>
            </Box>
          </Flex>
        </Container>
      </Container>
    </>
  );
};

export default Cart;
