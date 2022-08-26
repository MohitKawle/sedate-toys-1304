import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Homepage';
import { Hotels } from '../Components/Hotels';
import SinglePage from '../Components/Thingd_to_do/SinglePage';
import Things from '../Components/Thingd_to_do/Things';
const MainRoutes = () => {
  return (<>
    <Routes>
    <Route path="/" element={<Homepage />} />
   <Route path="/hotels" element={<Hotels/>}/>
   <Route path="/places/:id" element={<SinglePage />}/>
   <Route path='/Things' element ={<Things />} />
 
    </Routes>
   
    </>)
}

export default MainRoutes