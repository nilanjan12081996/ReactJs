// import logo from './logo.svg';
import './App.css';
import Register from './pages/auth/Register';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login from './pages/auth/Login';
import Home from './pages/Home';
import Contact from './pages/Contact';
import CreateStudent from './components/CreateStudent';
import ReadStudent from './components/ReadStudent';
import EditStudent from './components/EditStudent';
import ForgetPassword from './pages/auth/ForgetPassword';

function App() {
  return (
   <>
  <Router>
  
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/add' element={<CreateStudent/>}/>
      <Route path='/read' element={<ReadStudent/>}/>
      <Route path='/edit/:id' element={ <EditStudent/> } />
      <Route path='/forgetpassword' element={<ForgetPassword/>}/>
    </Routes>
  </Router>
   </>
  );
}

export default App;
