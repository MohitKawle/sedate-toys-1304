import React from 'react'
import { Box, Image, Text,Link, Input, InputGroup, InputLeftAddon, Checkbox, Stack, RadioGroup, Radio, Divider, Button } from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'

const Checkout_page = () => {
  return (
    <Box  >   
        <Image height={{base:"15px",md:"25px",lg:"45px"}} 
        marginLeft={{base:"50px",md:"150px",lg:"200px"}}
       marginTop={{base:"30px",md:"40px",lg:"50px"}}
        src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg" alt="logo" />
   <Box display={"flex"}
   gap="20px">
          <Box
            marginLeft={{base:"100px",md:"200px",lg:"400px"}}
          >
            <Box border={{base:"1px solid black",md:"3px solid black",lg:"5px solid black"}}
            width={{base:"50px",md:"100px",lg:"150px"}}
            marginTop={{base:"10px",md:"20px",lg:"30px"}}       
            borderRadius={{base:"5px",md:"7px",lg:"10px"}}
            ></Box>
            <Text 
            marginTop={{base:"3px",md:"4px",lg:"5px"}}
            marginLeft={{base:"5px",md:"10px",lg:"15px"}}
            fontWeight="semibold"
            fontSize={{base:"5px",md:"10px",lg:"15px"}}
            >Traveller Details</Text>
          </Box>
          <Box >
            <Box 
            border={{base:"1px solid black",md:"3px solid black",lg:"5px solid black"}}
            backgroundColor="white"
            width={{base:"50px",md:"100px",lg:"150px"}}
            marginTop={{base:"10px",md:"20px",lg:"30px"}}       
            borderRadius={{base:"5px",md:"7px",lg:"10px"}}
            ></Box>
            <Text 
            marginTop={{base:"3px",md:"4px",lg:"5px"}}
            fontSize={{base:"5px",md:"10px",lg:"15px"}}
            marginLeft={{base:"5px",md:"10px",lg:"15px"}}
            fontWeight="semibold"
            >Payment Details</Text>
          </Box>
          <Box >
            <Box 
            border={{base:"1px solid black",md:"3px solid black",lg:"5px solid black"}}
            backgroundColor="white"
            width={{base:"50px",md:"100px",lg:"150px"}}
            marginTop={{base:"10px",md:"20px",lg:"30px"}}       
            borderRadius={{base:"5px",md:"7px",lg:"10px"}}
            ></Box>
            <Text 
            marginTop={{base:"3px",md:"4px",lg:"5px"}}
            fontSize={{base:"5px",md:"10px",lg:"15px"}}
            marginLeft={{base:"5px",md:"10px",lg:"15px"}}
            fontWeight="semibold"
            >Review Order</Text>
          </Box>
    </Box>
        <Box border={"1px solid grey"} 
              marginTop={"15px"}
              width={{base:"100%",md:"100%",lg:"100%"}}
        ></Box>


{/* back to basket */}
        <Text
      fontSize={"13px"}
      color={"grey"}
      marginTop={"15px"}
      marginLeft={"200px"}
        > {<ChevronLeftIcon/>}<Link to="/">Back to Basket</Link></Text>

{/* Secure Checkout */}

      <Box 
       marginLeft={"200px"}
      >
        <Text fontSize={"24px"}
        fontWeight={"700"}
       lineHeight="120%"
       marginTop={"30px"}
        >Secure Checkout</Text>
      </Box>
      <Box
      marginLeft={"200px"}
      height={"48px"}
      width={"940px"}
      marginTop={"10px"}
      backgroundColor={"#eafaf4"}
      borderRadius={"5px"}
      >
      <Text  padding={"16px"}>Checkout securely - it takes only a few minutes. </Text>
      </Box>

      {/* Big Box started */}
      <Box  marginLeft={"200px"} 
      display={"flex"}
     gap={"20px"}
      >

{/* Contact Details started................... */}
        <Box width={"555px"} 
        // border={"1px solid red"}
        >
              <Text fontSize={"24px"}
              fontWeight={"700"}
            lineHeight="120%"
            marginTop={"30px"}
              >Contact Details</Text>
        <Box display={"flex"} gap={"50px"}>
              <Box marginTop={"10px"}>
              <Text fontWeight={"bold"} display={"flex"}>Name <Text color={"red"}> *</Text></Text>
              <Text fontSize={"15px"}>adityamuthal.2208@gmail.com</Text>
              </Box>
              <Box  marginTop={"10px"}>
              <Text fontWeight={"bold"} display={"flex"}>Phone Number <Text color={"red"}> *</Text></Text>
                  <InputGroup>
                <InputLeftAddon children='+91' />
                <Input type='tel' />
              </InputGroup>
              <Box>
              </Box>
              </Box>   
        </Box>
            <Stack marginTop={"15px"} spacing={5} >
              <Checkbox colorScheme='balck' >
              <Text fontSize={"15px"}>You will receive text message updates about your booking.</Text>
                </Checkbox>
              </Stack>

  {/* Traveller Details started ............*/}
              <Box>
            <Text fontSize={"24px"}
              fontWeight={"700"}
            lineHeight="120%"
            marginTop={"30px"}
              >Traveller Details</Text>
              <Text fontWeight={"bold"}
              marginTop={"20px"}
              >Lead Traveller</Text>
            </Box>
            <Box display={"flex"} gap={"50px"}>
              <Box marginTop={"10px"}>
              <Text fontWeight={"bold"} display={"flex"}>First Name  <Text color={"red"}> *</Text></Text>
              <InputGroup>
               <Input type='text' />
             </InputGroup>
              </Box>
              <Box  marginTop={"10px"}>
              <Text fontWeight={"bold"} display={"flex"}>Last Name  <Text color={"red"}> *</Text></Text>
                  <InputGroup>
                <Input type='text' />
              </InputGroup>
              <Box>
              </Box>
              </Box>   
        </Box>
        <Box>
        <Text fontWeight={"bold"}
              marginTop={"20px"}
              >Traveller 2</Text>
        </Box>
        <Box display={"flex"} gap={"50px"}>
              <Box marginTop={"10px"}>
              <Text fontWeight={"bold"} display={"flex"}>First Name  <Text color={"red"}> *</Text></Text>
              <InputGroup>
               <Input type='text' />
             </InputGroup>
              </Box>
              <Box  marginTop={"10px"}>
              <Text fontWeight={"bold"} display={"flex"}>Last Name  <Text color={"red"}> *</Text></Text>
                  <InputGroup>
                <Input type='text' />
              </InputGroup>
              <Box>
              </Box>
              </Box>   
        </Box>
        
{/* Tour specifics details */}
        <Box>
        <Text fontSize={"24px"}
              fontWeight={"700"}
            lineHeight="120%"
            marginTop={"30px"}
              >Tour specifics</Text>
          <Text fontWeight={"bold"} 
          display={"flex"} 
          marginTop={"10px"}>Pickup Location   <Text color={"red"}> *</Text></Text>
          <Text fontWeight={"bold"} 
          fontSize={"13px"}
          marginTop={"10px"}
          >The provider offers pickup.</Text>
        </Box>
        <RadioGroup defaultValue='1'>
          <Stack marginTop={"15px"}>
            <Radio colorScheme={"blackAlpha"} value='1'><Text fontSize={"12px"}>Enter your pickup location</Text></Radio>
            <Input type={"text"} width={"508px"} marginTop={"10px"} marginBottom={"10px"}/>
            <Radio colorScheme={"blackAlpha"} value='2'><Text fontSize={"12px"}>I will select my pickup location later</Text></Radio>
          </Stack>
        </RadioGroup>
 {/* Promo Code started */}
        <Box>
        <Text fontSize={"24px"}
              fontWeight={"700"}
            lineHeight="120%"
            marginTop={"30px"}
              >Promo Code</Text>
        <Divider marginTop={"10px"}/>
        <Text marginTop={"10px"}>Enter Promo Code</Text>
        </Box>
        <Box textAlign={"center"}>
        <Button 
        marginTop={"40px"}
        padding={"10px 150px 10px 150px"}
        backgroundColor={"black"}
        color={"white"}
        borderRadius={"30px"}
        _hover={{textDecoration:"none"}}
        >Next</Button>
        </Box>
   
        </Box>
          
{/* Review Order Details started */}
        <Box 
        width={"360px"} 
        border={"1px solid red"}
        marginTop={"25px"}
        >
         <Box
         boxShadow= "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
         borderRadius={"5px"}
         >
          <Box>
          <Text fontSize={"24px"}
              fontWeight={"700"}
              paddingTop={"20px"}
              marginLeft={"15px"}
              >Review Order Details</Text>
          </Box>
         </Box>

 {/* Book with confidence started */}
         <Box
         boxShadow= "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
         borderRadius={"5px"}
         marginTop={"30px"}
         >
          <Box>
          <Text fontSize={"24px"}
              fontWeight={"700"}
              paddingTop={"20px"}
              marginLeft={"15px"}
              >Book with confidence</Text>
          </Box>
         </Box>
        </Box>
      </Box>
     <Box textAlign={"center"}>
     <Text marginTop={"30px"} 
      marginBottom={"30px"}
      fontSize={"12px"}
      color={"grey"}
      >© 2022 TripAdvisor LLC All rights reserved. Tripadvisor <Link color={"#188ead"}>Terms of Use</Link> and <Link color={"#188ead"} >Privacy Policy</Link>.</Text>
     </Box>
    </Box>
  )

}

export default Checkout_page;