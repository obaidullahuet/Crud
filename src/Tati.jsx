import React, { useEffect } from "react";
import { useState } from "react";
import { date } from "yup";


export const Tati = () => {
  const [contactbook, setContactbook] = useState([]);

  const [message, setMessage] = useState({
    success: false,
    data: "",
  });

  const [sname, setName] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [gname, setGname] = useState([]);// to get the data from local storage

  // to clear the form after submit it

  onsubmit = (e) => {
    e.preventDefault();
    // let id=Date.now();

    let newarr ={
      ...sname,
      id:Date.now()
    };

    contactbook.push(newarr);
    localStorage.setItem("names", JSON.stringify(contactbook));
    console.log(newarr);

    setMessage({
      success: true,
      data: "data has been submitted",
    });

    setName({
      name: "",
      email: "",
      message: "",
    });
  };

  useEffect(() => {
    // setGname(JSON.parse(localStorage.getItem("names")));
    let data = JSON.parse(localStorage.getItem("names"));
    console.log(data);
    if (data!==null) {
      setGname(data);
    }

  }, []);

  const handledelet = (id) => {
    let newarr = gname.filter((name) => name.id !== id);
    localStorage.setItem("names", JSON.stringify(newarr));
    setGname(newarr);
    // navigate("/Form");
  };

  return (
    <>
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
      <div className="mb-3 col-auto">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          full name
        </label>
        <input
          onChange={(e) => setName({ ...sname, name: e.target.value })}
          value={sname.name}
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="enter your name"
        />
      </div>

      <div className="mb-3 col-auto">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email
        </label>
        <input
          onChange={(e) => setName({ ...sname, email: e.target.value })}
          value={sname.email}
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="enter your email address"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Example textarea
        </label>
        <textarea
          onChange={(e) => setName({ ...sname, message: e.target.value })}
          value={sname.message}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>

      <button type="submit" onClick={onsubmit} className="btn btn-primary mb-3">
        Confirm identity
      </button>

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
          {gname.map((name, index) => {
           
            return (
              <tr key ={index}>
                
                
                <th scope="row">{index + 1}</th>
                <td>{name.name}</td>
                <td>{name.email}</td>
          
          
                <td>
                  <button onClick={()=>handledelet(name.id)} className="btn btn-danger">delete</button>
                </td>
                <td>
                  <button className="btn btn-primary">edit</button>
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

export default Tati;
