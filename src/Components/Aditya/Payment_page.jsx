import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

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
    </Box>
  )
}

export default Payment_page