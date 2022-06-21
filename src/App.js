import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import NotFound from './Components/Pages/NotFound/NotFound';
import About from './Components/Pages/About/About';
import Appointment from './Components/Pages/Appointment/Appointment';
import Contact from './Components/Pages/Contact/Contact';
import Reviews from './Components/Pages/Reviews/Reviews';
import Login from './Components/Pages/Login/Login';
import Register from './Components/Pages/Register/Register';
import Navbar from './Components/Pages/Shareable/Navbar/Navbar';
import RequireAuth from './Components/Pages/Shareable/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import MyAppointment from './Components/Pages/Dashboard/MyAppointment';
import MyReview from './Components/Pages/Dashboard/MyReview';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/appointment' element={
        <RequireAuth>
          <Appointment>
          </Appointment>
        </RequireAuth>
        }></Route>
        <Route path='/dashboard' element={<RequireAuth><Dashboard/></RequireAuth>}>
          <Route index element={<MyAppointment></MyAppointment>}></Route>
          <Route path='review' element={<MyReview></MyReview>}></Route>
        </Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
