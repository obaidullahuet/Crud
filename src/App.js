import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useFormik } from "formik";
import *  as yup from "yup";
import './App.css';
// import Api from "./Api_Lecture10";
// import Form from "./Tati" ;
import Crud from "./Crud";
import Globalvar from "./Globalsates";



import {
  createBrowserRouter,
  RouterProvider, 
  createRoutesFromElements,
  Route
} from "react-router-dom";
import EditContact from "./EditContact";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* <Route path="/" element={<RootLayout/>}> */}
        <Route path="/" element={<Crud/>}/>
        <Route path="/edit/:id" element={<EditContact/>}/>
        <Route path="/global" element={<Globalvar/>}/>
      </Route>
      // { <Route path="*" element={<NotFound/>}/> }
    // </Route>
  )
);







function BasicExample() {


  return (
    
    <>
 


<RouterProvider router={router}/>


    {/* < Form/> */}
    {/* <Api /> */}
    </>
  );
}

export default BasicExample;
