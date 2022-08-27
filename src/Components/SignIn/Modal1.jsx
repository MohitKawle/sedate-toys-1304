import React, { useState } from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import navbar from '../navbar.module.css'
import modal from "./modal.module.css"
import { mode } from '@chakra-ui/theme-tools'


const Modal1 = ({ SetSignIn }) => {


  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen}
        className={navbar.signin_Button}
        colorScheme='Black '
        variant="solid"
        br='20px'
      >Sign in</Button>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text
              // fontWeight='bold' 
              mb='1rem'>
              <div className={module.m1_main}>
                <div>
                  <img className={modal.m1_logo}

                    src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_Logo_dark-bg_circle-green_horizontal-lockup_registered_RGB.svg" alt="" />
                </div>
                <div className={modal.m11}>

                  Sign in to unlock the</div>
                <div className={modal.m11}>best of Tripadvisor.</div>
                <div className={modal.m1o}>
                  <div className={modal.m1G} >
                    <img
                      className={modal.m1_glogo}
                      src="https://www.guaranteedremovals.com/wp-content/uploads/2018/05/4-google-g-logo.jpg" alt="" />
                    Continue with Google</div>
                    <div className={modal.m1G} >
                    <img
                      className={modal.m1_glogo}
                      src="https://th.bing.com/th/id/OIP.Ua5AXhtGRgPuisZVmetclQHaFL?pid=ImgDet&rs=1" alt="" />
                    Continue with Facebook</div>
                    <div className={modal.m1G} onClick={() => { SetSignIn(1) }} >
                    <img
                      className={modal.m1_elogo}
                      src="https://th.bing.com/th/id/OIP.eSrmTw44QXD79PzHo4CcngAAAA?pid=ImgDet&w=300&h=300&rs=1" alt="" />
                    Continue with Email</div>
                </div>
                <div className={modal.small}>
                <div> By proceeding, you agree to our Terms of Use and confirm 
                you have read our Privacy and Cookie Statement.

                </div>
                <div>This site is protected by reCAPTCHA and the Google Privacy Policy and <a href="">Terms of Service apply.</a> </div>
                  
                </div>
                

              </div>


            </Text>
            {/* <Lorem count={2} /> */}
          </ModalBody>

          {/* <ModalFooter>
            <Button colorScheme='black' mr={5} onClick={onClose} >
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter> */}
          
        </ModalContent>
      </Modal>
    </>)
}

export default Modal1


