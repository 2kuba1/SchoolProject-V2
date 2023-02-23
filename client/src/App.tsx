import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contect';
import Application from './Pages/Application/Application';
import Announcements from './Pages/Announcements/Announcements';
import Article from './Pages/Article/Article';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AccountDetails from './Pages/AccountDetails/AccountDetails';
import AdminPanel from './Pages/AdminPanel/AdminPanel';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/apply' element={<Application />} />
        <Route path='/announcements' element={<Announcements />} />
        <Route path='/announcements/:id' element={<Article />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/accountDetails' element={<AccountDetails />} />
        <Route path='/adminPanel' element={<AdminPanel />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
