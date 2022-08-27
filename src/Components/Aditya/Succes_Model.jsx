import { CheckCircleIcon } from "@chakra-ui/icons"
import { Box, Button, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react"
import React from "react"
import { useNavigate } from "react-router-dom";


const Success=()=> {
    const navigate=useNavigate();

function BackToHome(){
  navigate("/")
}
    const OverlayOne = () => (
      <ModalOverlay
        bg='blackAlpha.300'
        backdropFilter='blur(10px) hue-rotate(90deg)'
      />
    )

  
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = React.useState(<OverlayOne />)
  
    return (
      <>
        <Button
        marginTop={"40px"}
        padding={"10px 150px 10px 150px"}
        backgroundColor={"black"}
        color={"white"}
        borderRadius={"30px"}
        _hover={{textDecoration:"none"}}
          onClick={() => {
            setOverlay(<OverlayOne />)
            onOpen()
          }}
        >
         Submit your Order
        </Button>
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          {overlay}
          <ModalContent>
           <Box fontSize={"30px"} 
           padding={"20px"}
           >
           <Image height={{base:"15px",md:"25px",lg:"45px"}} 
            marginTop={{base:"30px",md:"40px",lg:"30px"}}
            marginLeft={"90px"}
        src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg" alt="logo" />
           </Box>
            <ModalHeader textAlign={"center"} color={"Green"} fontWeight={"bold"} fontSize={"30px"}>Payment Successful!</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text color={"red"} textAlign={"center"}>Thank You for booking Order...</Text>
            </ModalBody>
            <ModalFooter>
              <Button color={"white"} bgColor={"teal"} 
              _hover={{color:"black",bgColor:"teal"}}
              onClick={BackToHome}>Back to Homepage</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export {Success}