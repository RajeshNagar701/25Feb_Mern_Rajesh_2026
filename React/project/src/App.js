import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./website/component/Header";
import Home from "./website/pages/Home";
import Footer from "./website/component/Footer";
import Admin_login from "./admin/pages/Admin_login";
import Aheader from "./admin/component/Aheader";
import Afooter from "./admin/component/Afooter";
import Dashboard from "./admin/pages/Dashboard";
import About from "./website/pages/About";
import Header_slide from "./website/component/Header_slide";
import Menu from "./website/pages/Menu";
import Book from "./website/pages/Book";
import Login from "./website/pages/Login";
import Signup from "./website/pages/Signup";


function App() {
  return (
   <>

    <BrowserRouter>
      <Routes>
        {
          // website routes
        }

        <Route path="/" element={<><Header_slide/><Home/><Footer/></>}></Route>
        <Route path="/about" element={<><Header/><About/><Footer/></>}></Route>
        <Route path="/menu" element={<><Header/><Menu/><Footer/></>}></Route>
        <Route path="/book" element={<><Header/><Book/><Footer/></>}></Route>
        <Route path="/login" element={<><Header/><Login/><Footer/></>}></Route>
        <Route path="/signup" element={<><Header/><Signup/><Footer/></>}></Route>
        
        {
          // Admin routes
        }
      
        <Route path="/admin-login" element={<><Admin_login/></>}></Route>
        <Route path="/dashboard" element={<><Aheader/><Dashboard/><Afooter/></>}></Route>

      </Routes>
    </BrowserRouter>

   </>
  );
}

export default App;
