import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LogIn from './LogIn.jsx';
import Roots from './Roots.jsx';
import Registation from './Registation.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Roots></Roots> ,
  },
  {
    path:'/login',
    element:<LogIn></LogIn>
  },
  {
    path:"/reg",
    element:<Registation></Registation>
  }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
