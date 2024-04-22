import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from 'formik'
import * as yup from 'yup'
import {useSelector,useDispatch} from 'react-redux'
import { addContact ,deleteContact} from "./Redux/contactreducer";


export const Crud = () => {

  const dispatch = useDispatch();

  const usenaviaget=useNavigate();
  // const {contactbooks} = useSelector(state => state)
  const contactbooks = useSelector(state => state.contactbooks);

  const movenext=()=>{
    usenaviaget("/global");
  }
  


  const [message, setMessage] = useState({
    success: false,
    data: "",
  });


  const handledelet = (id) => {

    dispatch(deleteContact(id));
    
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: yup.object({
      name: yup.string().required("required"),
      email: yup.string().required("required").email("invalid email"),
      message: yup.string().required("required"),
    }),
    onSubmit: (values) => {

      let newarr = {
        ...values,
        id: Date.now(),

        

      };

      dispatch(addContact(newarr));

      formik.resetForm();

    
      setMessage({
        success: true,
        data: "data has been submitted",
      });
    },
  });


  return (
    <>
    <button  onClick={movenext} className="btn btn-primary">click me</button>
      <h1>{contactbooks.contacts.length}</h1>
      {message.success ? (
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <strong>Hi{message.data} </strong> .
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      ) : null}
      <h1>my name is obaidullah</h1>
    <form onSubmit={formik.handleSubmit}className="mb-3 ml-3 col-auto" >
      <div className="mb-3  col-auto">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          full name
        </label>
        <input
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.name}
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="enter your name"
          name="name"
        />
      <p className="text-danger">  {formik.errors.name && formik.touched.name ? <span>{formik.errors.name}</span> : null}</p>
      </div>

      <div className="mb-3 col-auto">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email
        </label>
        <input
          // onChange={(e) => setName({ ...sname, email: e.target.value })}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.email}
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="enter your email address"
          name="email"
        />
        < p className="text-danger"> {formik.errors.email && formik.touched.email ? <span>{formik.errors.email}</span> : null}</p>
      </div>

      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Example textarea
        </label>
        <textarea
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.message}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          name="message"
        ></textarea>
<p className="text-danger">     {formik.errors.message && formik.touched.message ? <span>{formik.errors.message}</span> : null}</p>
      </div>

      <button
        type="submit"
        className="btn btn-primary mb-3"
      >
        Confirm identity
      </button>
    </form>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">name</th>
            <th scope="col">eami</th>
            <th scope="col">actions</th>
          </tr>
        </thead>
        <tbody>
          {contactbooks.contacts.map((name, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{name.name}</td>
                <td>{name.email}</td>
                

                <td>
                  <button
                    onClick={() => handledelet(name.id)}
                    className="btn btn-danger"
                  >
                    delete
                  </button>
                </td>
                <td>
                  <Link to={`/edit/${name.id}`} className="btn btn-primary">
                    edit
                  </Link>
                </td>
                <td>
                  <button className="btn btn-success">update</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Crud;
