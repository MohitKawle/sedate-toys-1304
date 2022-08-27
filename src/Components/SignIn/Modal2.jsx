import React from 'react'
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
  import modal from "./modal.module.css"
import Footer from '../Footer'
import { useSelector,useDispatch } from 'react-redux'

const Modal2 = ({setDropDown_nav}) => {
 
    
    const { isOpen="true", onOpen, onClose } = useDisclosure()
    
    
  return (
    <>
          <Button onClick={onOpen}>Email</Button>
  
  <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Modal Title</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        {/* <Text fontWeight='bold' mb='1rem'>
          You can scroll the content behind the modal
        </Text> */}
        {/* <Lorem count={2} /> */}
        <img className={modal.m1_logo} 
        src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_Logo_dark-bg_circle-green_horizontal-lockup_registered_RGB.svg" alt="image" />
        <div className={modal.m11}>    Welcome Back</div>
        <div className={modal.eemail}   >Email adress</div>
        <input type="text" className={modal.email} />
        <div className={modal.eemail}   > Password</div>
        <input type="password"  className={modal.email} />
        <div className={modal.eemail} ><a href="">forget password ?</a> </div>
        <div className={modal.signin_Button} onClick={()=>{setDropDown_nav(0)}  }>Sign in</div>
        <div className={modal.not_a_member}>  <a href="" > Not a member? </a></div>
        <div className={modal.small2}>join to unlock best advisor</div>
        <div className={modal.small2}>By proceeding, you agree to our Terms of Use and confirm you have read our Privacy and Cookie Statement.
This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</div>
      </ModalBody>

      {/* <ModalFooter>
        <Button colorScheme='blue' mr={3} onClick={onClose}>
          Close
        </Button>
        <Button  variant='ghost'>Secondary</Button>
      </ModalFooter> */}
    </ModalContent>
  </Modal>
    </>)
}

export default Modal2


