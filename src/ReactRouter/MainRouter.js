import React from 'react'

import Home from './Pages/Home'
import Service from './Pages/Service'
import Contact from './Pages/Contact'
import { Route, Routes } from 'react-router-dom'

const MainRouter = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element= {<Home />} />  
            <Route path="service" element={<Service />} />
            <Route path="contact" element={ <Contact />} />
                
        </Routes>
    </div>
  )
}

export default MainRouter