import { ChevronRightIcon, Icon, InfoIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  HStack,
  Image,
  Input,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToBasket } from "../../Redux/AppReducer/action";
import CircleIcon from "./CircleIcon";
import { Success } from "./Succes_Model";

const PaymentPage = () => {
  const dispatch = useDispatch();
  const Payment = useSelector((state) => state.AppReducer.basket);
  // console.log(Payment)

  useEffect(() => {
    dispatch(addToBasket());
  }, [dispatch]);
  return (
    <Box>
      <Image
        height={{ base: "15px", md: "25px", lg: "45px" }}
        marginLeft={{ base: "50px", md: "150px", lg: "200px" }}
        marginTop={{ base: "30px", md: "40px", lg: "50px" }}
        src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg"
        alt="logo"
      />
      <Box display={"flex"} gap="20px">
        <Box marginLeft={{ base: "100px", md: "200px", lg: "400px" }}>
          <Box
            border={{
              base: "1px solid black",
              md: "3px solid black",
              lg: "5px solid black",
            }}
            width={{ base: "50px", md: "100px", lg: "150px" }}
            marginTop={{ base: "10px", md: "20px", lg: "30px" }}
            borderRadius={{ base: "5px", md: "7px", lg: "10px" }}
          ></Box>
          <Text
            marginTop={{ base: "3px", md: "4px", lg: "5px" }}
            marginLeft={{ base: "5px", md: "10px", lg: "15px" }}
            fontWeight="semibold"
            fontSize={{ base: "5px", md: "10px", lg: "15px" }}
          >
            Traveller Details
          </Text>
        </Box>
        <Box>
          <Box
            border={{
              base: "1px solid black",
              md: "3px solid black",
              lg: "5px solid black",
            }}
            backgroundColor="white"
            width={{ base: "50px", md: "100px", lg: "150px" }}
            marginTop={{ base: "10px", md: "20px", lg: "30px" }}
            borderRadius={{ base: "5px", md: "7px", lg: "10px" }}
          ></Box>
          <Text
            marginTop={{ base: "3px", md: "4px", lg: "5px" }}
            fontSize={{ base: "5px", md: "10px", lg: "15px" }}
            marginLeft={{ base: "5px", md: "10px", lg: "15px" }}
            fontWeight="semibold"
          >
            Payment Details
          </Text>
        </Box>
        <Box>
          <Box
            border={{
              base: "1px solid black",
              md: "3px solid black",
              lg: "5px solid black",
            }}
            backgroundColor="white"
            width={{ base: "50px", md: "100px", lg: "150px" }}
            marginTop={{ base: "10px", md: "20px", lg: "30px" }}
            borderRadius={{ base: "5px", md: "7px", lg: "10px" }}
          ></Box>
          <Text
            marginTop={{ base: "3px", md: "4px", lg: "5px" }}
            fontSize={{ base: "5px", md: "10px", lg: "15px" }}
            marginLeft={{ base: "5px", md: "10px", lg: "15px" }}
            fontWeight="semibold"
          >
            Review Order
          </Text>
        </Box>
      </Box>
      <Box
        border={"1px solid grey"}
        marginTop={"15px"}
        width={{ base: "100%", md: "100%", lg: "100%" }}
      ></Box>

      {/* back to basket */}
      <Text
        fontSize={"13px"}
        color={"grey"}
        marginTop={"15px"}
        marginLeft={"200px"}
      >
        {" "}
        <Link to="/basket">Back to Basket</Link>
        {<ChevronRightIcon />}
        <Link to="/checkout">Traveller Details</Link>
      </Text>

      {/* Big Box Started */}
      <Box marginLeft={"200px"} display={"flex"} gap={"20px"}>
        <Box
          width={"555px"}
          // border={"1px solid red"}
          marginBottom={"30px"}
        >
          <Text
            fontSize={"24px"}
            fontWeight={"700"}
            lineHeight="120%"
            marginTop={"30px"}
          >
            Payment Details
          </Text>
          <Box display={"flex"} gap={"10px"} marginTop={"10px"}>
            <Box>
              <i className="fa-solid fa-lock"></i>
            </Box>
            <Box>
              <Text fontSize={"15px"}>
                This form is encrypted and your information is always guaranteed
                secure.
              </Text>
            </Box>
          </Box>
          <Box>
            <Text fontSize={"15px"}>View Details</Text>
          </Box>
          {/* Credit Card details */}
          <Box display={"flex"} marginTop={"40px"} gap={"5px"}>
            <Box>
              <RadioGroup defaultValue="1">
                <Stack>
                  <Radio value="1" defaultChecked colorScheme={"blackAlpha"}>
                    Credit Card
                  </Radio>
                </Stack>
              </RadioGroup>
            </Box>
            <Image
              height={"20px"}
              src={
                "https://static.tacdn.com/img2/solutions/shoppingcart/cc_Visa_icon.svg"
              }
            />
            <Image
              height={"20px"}
              src={
                "https://static.tacdn.com/img2/solutions/shoppingcart/cc_Mastercard_icon.svg"
              }
            />
            <Image
              height={"20px"}
              src={
                "https://static.tacdn.com/img2/solutions/shoppingcart/cc_AMEX_2019_icon.svg"
              }
            />
          </Box>

          {/* Cardholder Name Added */}
          <Box>
            <Text fontWeight={"bold"} display={"flex"} marginTop={"20px"}>
              Cardholder Name <Text color={"red"}> *</Text>
            </Text>
            <Input
              marginTop={"10px"}
              width={"340px"}
              height={"44px"}
              type={"text"}
            />
          </Box>
          {/* Credit/debit card number */}
          <Box>
            <Text fontWeight={"bold"} display={"flex"} marginTop={"20px"}>
              Credit/debit card number <Text color={"red"}> *</Text>
            </Text>
            <Input
              marginTop={"10px"}
              width={"340px"}
              height={"44px"}
              type={"Number"}
            />
          </Box>
          <Box display={"flex"} gap={"120px"}>
            <Text fontWeight={"bold"} display={"flex"} marginTop={"20px"}>
              Expiration date <Text color={"red"}> *</Text>
            </Text>
            <Text fontWeight={"bold"} display={"flex"} marginTop={"20px"}>
              CVC Code <Text color={"red"}> *</Text>
            </Text>
          </Box>
          <Box display={"flex"} gap={"10px"} marginTop={"10px"}>
            <Select placeholder="Month" width={"110px"} height={"50px"}>
              <option value="01 - Jan">01 - Jan</option>
              <option value="02 - Feb">02 - Feb</option>
              <option value="03 - Mar">03 - Mar</option>
              <option value="04 - Apr">04 - Apr</option>
              <option value="05 - May">05 - May</option>
              <option value="06 - Jun">06 - Jun</option>
              <option value="07 - Jul">07 - Jul</option>
              <option value="08 - Aug">08 - Aug</option>
              <option value="09 - Sep">09 - Sep</option>
              <option value="10 - Oct">10 - Oct</option>
              <option value="11 - Nov">11 - Nov</option>
              <option value="12 - Dec">12 - Dec</option>
            </Select>
            <Select placeholder="Year" width={"110px"} height={"50px"}>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
              <option value="2029">2029</option>
              <option value="2030">2030</option>
              <option value="2031">2031</option>
              <option value="2032">2032</option>
              <option value="2033">2033</option>
              <option value="2034">2034</option>
              <option value="2035">2035</option>
              <option value="2036">2036</option>
              <option value="2037">2037</option>
              <option value="2038">2038</option>
              <option value="2039">2039</option>
              <option value="2040">2040</option>
              <option value="2041">2041</option>
            </Select>
            <Input type={"number"} width={"110px"} height={"50px"} />
            <Text color={"grey"} marginTop="10px" fontSize={"13px"}>
              {<Icon />} What is this?
            </Text>
          </Box>
          {/* Billing Address */}
          <Text fontSize={"24px"} fontWeight={"700"} paddingTop={"40px"}>
            Billing Address
          </Text>
          <Box display={"flex"} gap={"200px"}>
            <Text fontWeight={"bold"} display={"flex"} marginTop={"20px"}>
              Country <Text color={"red"}> *</Text>
            </Text>
            <Text fontWeight={"bold"} display={"flex"} marginTop={"20px"}>
              Postal/Zip Code <Text color={"red"}> *</Text>
            </Text>
          </Box>
          <Box display={"flex"} gap={"20px"} marginTop={"10px"}>
            <Select placeholder="India" width={"250px"} height={"50px"}>
              <option value="India">India</option>
              <option value="Iceland">Iceland</option>
              <option value="Hong kong">Hong kong</option>
              <option value="Indian Ocean">Indian Ocean</option>
              <option value="Australia">Australia</option>
              <option value="England">England</option>
              <option value="London">London</option>
              <option value="Barbados">Barbados</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="Cyprus">Cyprus</option>
              <option value="France">France</option>
              <option value="Russia">Russia</option>
              <option value="Shri Lanka">Shri Lanka</option>
              <option value="Poland">Poland</option>
              <option value="Norway">Norway</option>
              <option value="Oman">Oman</option>
              <option value="Dubbai">Dubbai</option>
              <option value="Ukraine">Ukraine</option>
              <option value="Togo">Togo</option>
            </Select>
            <Input width={"200px"} type={"number"} height={"50px"} />
          </Box>
          <Box marginTop={"20px"}>
            <Checkbox colorScheme={"blackAlpha"} defaultChecked>
              <Text fontSize={"15px"}>
                Add this card to your account for future use {<InfoIcon />}
              </Text>
            </Checkbox>
          </Box>
          <Box textAlign={"center"}>
            <Success />
          </Box>
        </Box>

        {/* Review Order Details started */}
        <Box
          width={"360px"}
          // border={"1px solid red"}
          marginTop={"25px"}
        >
          <Box
            boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
            borderRadius={"5px"}
            padding={"10px"}
          >
            {Payment?.length > 0 &&
              Payment.map((item) => {
                return (
                  <div key={item.id}>
                    <Box>
                      <Text
                        fontSize={"24px"}
                        fontWeight={"700"}
                        paddingTop={"20px"}
                        marginLeft={"15px"}
                      >
                        Review Order Details
                      </Text>
                    </Box>
                    <Box display={"flex"}>
                      <Box padding={"20px"}>
                        <Image
                          height={"100px"}
                          width={"200px"}
                          src={item.imageUrl}
                          alt="order_details"
                        />
                      </Box>
                      <Box padding={"10px"}>
                        <Text fontSize={"15px"} fontWeight={"bold"}>
                          {" "}
                          {item.title}
                        </Text>
                        <Box display={"flex"}>
                          <HStack gap={"-10px"}>
                            <CircleIcon />
                            <CircleIcon />
                            <CircleIcon />
                            <CircleIcon />
                          </HStack>
                          <Text fontSize={"13px"}>(101 reviews)</Text>
                        </Box>
                        <Box fontSize={"13px"}>
                          <Text>City Tour in 6 Seater</Text>
                          <Text>Vehicle - 09:00</Text>
                          <Text>Saturday, 27 August, 2022</Text>
                          <Text>2 Adults</Text>
                          <Text>Non-refundable</Text>
                        </Box>
                      </Box>
                    </Box>
                    <Box>
                      <Box
                        display={"flex"}
                        justifyContent={"space-around"}
                        fontSize={"13px"}
                      >
                        <Text>Booking Fee {<Icon />}</Text>
                        <Text>₹0.00</Text>
                      </Box>
                      <Box
                        display={"flex"}
                        justifyContent={"space-around"}
                        fontSize={"13px"}
                      >
                        <Text>Subtotal:</Text>
                        <Text>₹{item.price}</Text>
                      </Box>
                      <Box
                        fontWeight={"bold"}
                        display={"flex"}
                        justifyContent={"space-around"}
                      >
                        <Text>Total:</Text>
                        <Text>₹{item.price}</Text>
                      </Box>
                    </Box>
                  </div>
                );
              })}
          </Box>
          {/* Book with confidence started */}
          <Box
            boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
            borderRadius={"5px"}
            marginTop={"30px"}
          >
            <Box>
              <Text
                fontSize={"24px"}
                fontWeight={"700"}
                paddingTop={"20px"}
                marginLeft={"15px"}
              >
                Book with confidence
              </Text>
            </Box>
            <Divider marginTop={"20px"} />
            <Box padding={"20px"}>
              <Box display={"flex"} gap={"20px"} marginTop={"10px"}>
                <Box fontSize={"25px"}>
                  <i className="fa-solid fa-wallet"></i>
                </Box>
                <Box>
                  <Text fontWeight={"bold"}>Lowest price guarantee</Text>
                  <Text fontSize={"15px"}>
                    Find it cheaper? We'll refund the difference
                  </Text>
                </Box>
              </Box>
              <Box display={"flex"} gap={"20px"} marginTop={"10px"}>
                <Box fontSize={"25px"}>
                  <i className="fa-solid fa-lock"></i>
                </Box>
                <Box>
                  <Text fontWeight={"bold"}>Privacy protection</Text>
                  <Text fontSize={"15px"}>
                    We use SSL encryption to keep your data secure
                  </Text>
                </Box>
              </Box>
              <Box display={"flex"} gap={"20px"} marginTop={"10px"}>
                <Box fontSize={"25px"}>
                  <i className="fa-solid fa-headphones"></i>
                </Box>
                <Box>
                  <Text fontWeight={"bold"}>24/7 global support</Text>
                  <Text fontSize={"15px"}>
                    Get the answers you need, when you need them
                  </Text>
                </Box>
              </Box>
              <Box display={"flex"} gap={"20px"} marginTop={"10px"}>
                <Box fontSize={"25px"}>
                  <i className="fa-solid fa-phone"></i>
                </Box>
                <Box>
                  <Text fontWeight={"bold"}>Give us a call</Text>
                  <Text fontSize={"15px"}>
                    We’d be happy to help you out with your booking
                  </Text>
                  <Link to="#" fontSize={"15px"}>
                    Call now: 000-0800-100-6999
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box textAlign={"center"}>
        <Text
          marginTop={"20px"}
          marginBottom={"30px"}
          fontSize={"12px"}
          color={"grey"}
          textAlign={"center"}
        >
          © 2022 TripAdvisor LLC All rights reserved. Tripadvisor{" "}
          <Link to="#" color={"#188ead"}>
            Terms of Use
          </Link>{" "}
          and{" "}
          <Link to="#" color={"#188ead"}>
            Privacy Policy
          </Link>
          .
        </Text>
      </Box>
    </Box>
  );
};

export { PaymentPage };
