import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./website/component/Header";
import Home from "./website/pages/Home";
import Footer from "./website/component/Footer";
import Admin_login from "./admin/pages/Admin_login";

import Dashboard from "./admin/pages/Dashboard";
import About from "./website/pages/About";
import Header_slide from "./website/component/Header_slide";
import Menu from "./website/pages/Menu";
import Book from "./website/pages/Book";
import Login from "./website/pages/Login";
import Signup from "./website/pages/Signup";
import Add_category from "./admin/pages/Add_category";
import Manage_category from "./admin/pages/Manage_category";
import Add_product from "./admin/pages/Add_product";
import Manage_product from "./admin/pages/Manage_product";
import Manage_user from "./admin/pages/Manage_user";
import Manage_order from "./admin/pages/Manage_order";
import Manage_booking from "./admin/pages/Manage_booking";


function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          {
            // website routes
          }

          <Route path="/" element={<><Header_slide /><Home /><Footer /></>}></Route>
          <Route path="/about" element={<><Header /><About /><Footer /></>}></Route>
          <Route path="/menu" element={<><Header /><Menu /><Footer /></>}></Route>
          <Route path="/book" element={<><Header /><Book /><Footer /></>}></Route>
          <Route path="/login" element={<><Header /><Login /><Footer /></>}></Route>
          <Route path="/signup" element={<><Header /><Signup /><Footer /></>}></Route>

          {
            // Admin routes
          }
          <Route path="/admin-login" element={<><Admin_login /></>}></Route>
          <Route path="/dashboard" element={<><Dashboard /></>}></Route>
          <Route path="/add_category" element={<><Add_category /></>}></Route>
          <Route path="/manage_category" element={<><Manage_category /></>}></Route>
          <Route path="/add_product" element={<><Add_product /></>}></Route>
          <Route path="/manage_product" element={<><Manage_product /></>}></Route>

          <Route path="/manage_user" element={<><Manage_user /></>}></Route>
          <Route path="/manage_order" element={<><Manage_order /></>}></Route>
          <Route path="/manage_booking" element={<><Manage_booking /></>}></Route>
          
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
