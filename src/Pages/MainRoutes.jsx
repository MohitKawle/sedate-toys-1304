import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Homepage'
const MainRoutes = () => {
  return (<>
    <Routes>
    <Route path="/" element={<Homepage />} />
    

    </Routes>
   
    </>)
}

export default MainRoutes