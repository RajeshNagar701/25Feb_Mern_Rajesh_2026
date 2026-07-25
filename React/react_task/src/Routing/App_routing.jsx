/*
Routing in React is managed using the external React Router library, as React does not 
feature built-in navigation. It enables client-side routing, allowing Single Page Applications 
(SPAs) to update the view without full browser reloads

npm install react-router-dom


step 1) theam setup => website folder => 
                       component
                       pages    
step 2) npm install react-router-dom

step 3) App.js Routing code

        <BrowserRouter>
           <Routes>
                <Route path="/"  element={<><Rheader/><Home/><Rfooter/></>}></Route>
                <Route path="*"  element={<><PNF/></>}></Route>
           </Routes>
        </BrowserRouter>

step 4) header.js Navbar setup 

        <NavLink className="nav-link" to="/">Home</NavLink>
        
*/


import React from 'react'
import Home from './website/pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Rheader from './website/component/Rheader'
import Rfooter from './website/component/Rfooter'
import About from './website/pages/About'
import Blog from './website/pages/Blog'
import Contact from './website/pages/Contact'
import PNF from './website/pages/PNF'

function App_routing() {
  return (
    <div>
        <BrowserRouter>
           <Routes>
                <Route path="/"  element={<><Rheader/><Home/><Rfooter/></>}></Route>
                <Route path="/about"  element={<><Rheader/><About/><Rfooter/></>}></Route>
                <Route path="/blog"  element={<><Rheader/><Blog/><Rfooter/></>}></Route>
                <Route path="/contact"  element={<><Rheader/><Contact/><Rfooter/></>}></Route>
                <Route path="*"  element={<><PNF/></>}></Route>
           </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App_routing