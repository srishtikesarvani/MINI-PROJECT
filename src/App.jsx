
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Link, Routes} from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Login from './component/Login.';
import Signup from './component/Signup';
import AddRentableRoom from './component/AddRentableRoom';
import { AppProvider } from './AppContext';
import UpdateRoom from './component/UpdateRoom';
import ManageRoom from './component/ManageRoom';
import BrowseRoom from './component/BrowseRoom';

function App () {
  return (
    <div>
    <BrowserRouter >
    <AppProvider>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/rent' element={<AddRentableRoom/>}/>
      <Route path='/update' element={<UpdateRoom />}/>
      <Route path='/manage' element={<ManageRoom/>}/>
      <Route path='/browse' element={<BrowseRoom/>}/>
    </Routes>
    </AppProvider>
    </BrowserRouter>
    </div>
  );
}

export default App;
