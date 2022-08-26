import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button,
  } from '@chakra-ui/react'
  import navbar from '../navbar.module.css'

const DropDown = () => {
  return (
    <Menu>
    <MenuButton as={Button} backgroundColor='white'  >
      <img 
      className={navbar.dropdown_img}
      src="https://static.tacdn.com/img2/brand/home/homemar2022_dt_trans.webp" alt="" />
    </MenuButton>
    <MenuList>
      <MenuItem>View</MenuItem>
      <MenuItem>Booking</MenuItem>
      <MenuItem>Account info</MenuItem>
      <MenuItem>Sign out</MenuItem>
      
    </MenuList>
  </Menu>
  )
}

export default DropDown




