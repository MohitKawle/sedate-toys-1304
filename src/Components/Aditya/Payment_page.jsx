import {  ChevronRightIcon, Icon } from '@chakra-ui/icons'
import { Box,  Divider, HStack, Image,  Radio,  RadioGroup,  Stack,  Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import CircleIcon from './CircleIcon'

const Payment_page = () => {
  return (
    <Box>
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
        > <Link to="/">Back to Basket</Link>{<ChevronRightIcon/>}<Link to="/">Traveller Details</Link></Text>
      
  {/* Big Box Started */}
      <Box  marginLeft={"200px"} 
      display={"flex"}
     gap={"20px"}
      >
        <Box 
        width={"555px"} 
        border={"1px solid red"}
        >
          <Text fontSize={"24px"}
              fontWeight={"700"}
            lineHeight="120%"
            marginTop={"30px"}
              >Payment Details</Text>
          <Box display={"flex"} gap={"10px"} marginTop={"10px"}>
            <Box><i class="fa-solid fa-lock"></i></Box>
            <Box><Text fontSize={"15px"}>This form is encrypted and your information is always guaranteed secure.</Text></Box>
          </Box>
          <Box><Text fontSize={"15px"} >View Details</Text></Box>
   {/* Credit Card details */}
          <Box display={"flex"} marginTop={"40px"} gap={"5px"}>
            <Box>
            <RadioGroup defaultValue='1'>
            <Stack >
              <Radio value='1' defaultChecked colorScheme={"blackAlpha"}>
              Credit Card
              </Radio>
            </Stack>
          </RadioGroup>
            </Box>
          <Image height={"20px"} src={"https://static.tacdn.com/img2/solutions/shoppingcart/cc_Visa_icon.svg"} />
          <Image height={"20px"} src={"https://static.tacdn.com/img2/solutions/shoppingcart/cc_Mastercard_icon.svg"} />
          <Image height={"20px"} src={"https://static.tacdn.com/img2/solutions/shoppingcart/cc_AMEX_2019_icon.svg"} />
          </Box>
        </Box>

    {/* Review Order Details started */}
    <Box 
        width={"360px"} 
        // border={"1px solid red"}
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
          <Box display={"flex"}>
          <Box padding={"20px"}>
            <Image height={"100px"} width={"200px"} src='https://media-cdn.tripadvisor.com/media/attractions-splice-spp-360x240/07/1b/76/b9.jpg'  alt='order_details'/>
          </Box>
              <Box padding={"10px"}>
             <Text fontSize={"15px"} fontWeight={"bold"}> Full Day Visit to City of Dreams Mumbai in Private Vehicle</Text>
             <Box display={"flex"}>
             <HStack gap={"-10px"}>
                <CircleIcon  />
                <CircleIcon />
                <CircleIcon  />
                <CircleIcon  />
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
              <Box display={"flex"} justifyContent={"space-around"} fontSize={"13px"}>
                <Text>Booking Fee {<Icon/>}</Text>
                <Text>₹0.00</Text>
              </Box>
              <Box display={"flex"} justifyContent={"space-around"} fontSize={"13px"} >
              <Text>Subtotal:</Text>
                <Text>₹11,771.66</Text>
              </Box>
              <Box fontWeight={"bold"} display={"flex"} justifyContent={"space-around"} >
              <Text>Total:</Text>
                <Text>₹11,771.66</Text>
              </Box>
             </Box>
          
         </Box>

         
    </Box>
      
        </Box>

 
    </Box>
  )
}

export default Payment_page;