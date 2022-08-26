import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Homepage';
import { Hotels } from '../Components/Hotels';
const MainRoutes = () => {
  return (<>
    <Routes>
    <Route path="/" element={<Homepage />} />
   <Route path="/hotels" element={<Hotels/>}/>
 
    </Routes>
   
    </>)
}

export default MainRoutes