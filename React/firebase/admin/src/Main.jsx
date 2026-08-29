import React,{createContext} from 'react'
import { Routes, Route, Outlet, Link } from "react-router-dom";
//================ Admin =========================

import Header from './Component/Header';
import Footer from './Component/Footer';
import Dashboard from './Pages/Dashboard'
import Add_Product from './Pages/Add_Product';
import View_product from './Pages/View_product';
import PNF from './Pages/PNF';
import Index from './Pages/Index';
import View_contact from './Pages/View_contact';
import View_users from './Pages/View_users';
import Edit_contact from './Pages/Edit_contact';
import Private_Route from './Component/Private_Route';




function Main() {
  return (
        <div>
            <Routes>
                
                <Route index element={<><Index/></>} />
                <Route path='index' element={<><Index/></>} />
                <Route path='dashboard' element={<><Header/><Dashboard/> </>}/>
                <Route path='add_product' element={<Private_Route><Header/><Add_Product/></Private_Route>} />
                <Route path='view_product' element={<Private_Route><Header/><View_product/></Private_Route>} />
				<Route path='view_contact' element={<><Header/><View_contact/></>} />
                <Route path='view_users' element={<Private_Route><Header/><View_users/></Private_Route>} />
                <Route path='*' element={<><Header/><PNF/></>}/> 
                <Route path='view_contact/:id' element={<><Header/><Edit_contact/></>}/> 
            </Routes>
            <Footer/>
        </div>
  )
}
export default Main