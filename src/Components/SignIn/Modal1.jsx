import React,{useState} from 'react'
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


const Modal1 = () => {
 
    
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
          <Button  onClick={onOpen}
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
        <Text fontWeight='bold' mb='1rem'>
          <div>
          <div>Sign in to unlock the</div>
          <div>best of Tripadvisor.</div>
          <div>continue with google</div>
          <div>continue with google</div>
          <div>continue with google</div>
          </div>
          
          
        </Text>
        {/* <Lorem count={2} /> */}
      </ModalBody>

      <ModalFooter>
        <Button colorScheme='black' mr={5} onClick={onClose} >
          Close
        </Button>
        <Button variant='ghost'>Secondary Action</Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
    </>)
}

export default Modal1


