import { Fragment } from 'react';
import './App.css';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import HomePage from './components/Homepage';
import LoginPage from './components/Loginpage';
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import Dashboard from './LoggedinComponents/Dashboard';
//theme
//import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
//import "primereact/resources/primereact.min.css";

//icons
//import "primeicons/primeicons.css";

const router = createBrowserRouter([
  {path: '/', element: <HomePage/>},
  {path:'/Login', element: <LoginPage/>},
  {path: '/Dashboard', element: <Dashboard/> }
])

function App() {



  return <Fragment>
    <Header/>
  <RouterProvider router={router} />
  <Footer/>
  </Fragment>
  
  
}

export default App;
