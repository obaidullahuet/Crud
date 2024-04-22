import React, { useEffect } from 'react'
import { useState, } from 'react'
import {useSelector} from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useDispatch } from 'react-redux'
import { editContact } from './Redux/contactreducer'

const EditContact = () => {

  // const {contactbooks} = useSelector(state => state)
  const contactbooks = useSelector(state => state.contactbooks);
  const dispatch = useDispatch();

  const  {id}= useParams();
  const navigate = useNavigate();
  


  useEffect(() => { 
    let newarr = contactbooks.contacts.find((contact) => contact.id == id);
    formik.setValues(newarr);
  }, []);


  const formik=useFormik({
      initialValues:{
          name:"",
          email:"",
      },

      validationSchema:yup.object({
          name:yup.string().required("required"),
          email:yup.string().required("required").email("invalid email")
      }),
      onSubmit:(values)=>{
          
        // console.log(values);
          dispatch(editContact(values));

          navigate("/");
      }

  });







  


  return (
   <>
  <form onSubmit={formik.handleSubmit}>

   
    <div className="mb-3 col-auto"   >

      <label for="exampleFormControlInput1" className="form-label">Name</label>
      <input type="text" className="form-control" id="exampleFormControlInput1" name="name" value={formik.values.name} onChange={formik.handleChange} />
      <p>{formik.errors.name ? <div className="text-danger">{formik.errors.name}</div> : null}</p>

      <label for="exampleFormControlInput1" className="form-label">Email</label>
      <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={formik.values.email} onChange={formik.handleChange} />
      <p>{formik.errors.email ? <div className="text-danger">{formik.errors.email}</div> : null}</p>

        
        </div>

      <button type='submit'  className='btn btn-danger' >update</button>
  </form>
   </>
  )
}

export default EditContact