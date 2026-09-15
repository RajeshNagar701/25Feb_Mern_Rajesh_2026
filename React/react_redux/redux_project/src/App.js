
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './app/features/admin/component/Header';
import Dashboard from './app/features/admin/pages/Dashboard';
import Footer from './app/features/admin/component/Footer';
import Add_product from './app/features/admin/pages/Add_product';
import Manage_product from './app/features/admin/pages/Manage_product';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<> <Header /><Dashboard /><Footer /> </>}></Route>
          <Route path="/manage_product" element={<> <Header /><Manage_product /><Footer /> </>}></Route>
          <Route path="/add_product" element={<> <Header /><Add_product /><Footer /> </>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
