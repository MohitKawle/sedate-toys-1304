import React,{useState} from 'react'
import Signin from '../Pages/Signin'
import Modal1 from './SignIn/Modal1'
import navbar from '../Components/navbar.module.css'
const Navbar = () => {
const {Signin,setSignin}=useState(0)
  return (<>
 
    <div className={navbar.navbarDiv}>
      <div>
        <img className={navbar.logo}
        
        src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg" alt="" />
      </div>
    </div>
    
    </>
  )
}

export default Navbar

{/* <div>{<Signin/>}</div> */}