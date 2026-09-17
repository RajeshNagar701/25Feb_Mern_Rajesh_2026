
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './app/features/admin/component/Header';
import Dashboard from './app/features/admin/pages/Dashboard';
import Footer from './app/features/admin/component/Footer';
import Add_product from './app/features/admin/pages/Add_product';
import Manage_product from './app/features/admin/pages/Manage_product';
import Add_category from './app/features/admin/pages/Add_category';
import Manage_category from './app/features/admin/pages/Manage_category';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <div>
      <BrowserRouter>
        <ToastContainer></ToastContainer>
        <Routes>
          <Route path="/" element={<> <Header /><Dashboard /><Footer /> </>}></Route>
          <Route path="/add_category" element={<> <Header /><Add_category /><Footer /> </>}></Route>
          <Route path="/manage_category" element={<> <Header /><Manage_category /><Footer /> </>}></Route>
          <Route path="/add_product" element={<> <Header /><Add_product /><Footer /> </>}></Route>
          <Route path="/manage_product" element={<> <Header /><Manage_product /><Footer /> </>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
