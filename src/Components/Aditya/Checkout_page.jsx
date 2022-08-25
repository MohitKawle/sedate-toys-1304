import React from 'react'
import { Box, Button, Image, Text } from '@chakra-ui/react'
import styles from "../Aditya/style/Checkout.module.css"
import { ChevronLeftIcon } from '@chakra-ui/icons'

const Checkout_page = () => {
  return (
    <Box  >   
        <Image height={{base:"15px",md:"25px",lg:"45px"}} 
        marginLeft={{base:"50px",md:"150px",lg:"200px"}}
       marginTop={{base:"30px",md:"40px",lg:"50px"}}
        src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg" alt="logo" />
   <Box display={"flex"}
   gap="20px"
   >
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
            fontSize={{base:"5px",md:"15px",lg:"17px"}}
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
            fontSize={{base:"5px",md:"15px",lg:"17px"}}
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
            fontSize={{base:"5px",md:"15px",lg:"17px"}}
            marginLeft={{base:"5px",md:"10px",lg:"15px"}}
            fontWeight="semibold"
            >Review Order</Text>
          </Box>
    </Box>
        <Box border={"1px solid grey"} 
              marginTop={"15px"}
              width={{base:"100%",md:"100%",lg:"100%"}}
        ></Box>

        <Button 
        _hover={{textDecoration:"none",backgroundColor:"none"}}
        backgroundColor="none"
        > {<ChevronLeftIcon/>}Back to Basket</Button>
    </Box>
  )

}

export default Checkout_page;