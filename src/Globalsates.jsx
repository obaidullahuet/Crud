import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { deposite,wihtdrwal } from './Redux/depositereducer'
import {useNavigate} from 'react-router-dom'

const Globalsates = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch()
  const {wuthdrawl} = useSelector(state => state)
  const increase = () => {
    dispatch(deposite())
  }
  const decrease = () => {
    dispatch(wihtdrwal())
  }


  const movetoCrud = () => {
    navigate("/");
  }
  return (
    <div>
      <div className="container">
        <button   onClick={increase}  className="btn btn-success m-4">ADD</button>
        <button   onClick={decrease}  className="btn btn-danger">Delete</button>
      </div>
      <h1 className='container text-bg-dark  ' >  ${wuthdrawl.value}</h1>

      <button onClick={movetoCrud} className="btn btn-primary">Back</button>

    </div>
  );
}

export default Globalsates