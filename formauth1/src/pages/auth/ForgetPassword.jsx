import React, { useState } from 'react'

import axios from 'axios'

import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Layout from '../../components/layouts/Layout'

const ForgetPassword = () => {
    const [email,setEmail]=useState("")
    const [answer,setAnswer]=useState("")
    const [newPassword,setNewPassword]=useState("")
    const navigate=useNavigate()
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post(`${process.env.REACT_APP_API}/api/auth/forgot-password`, {
          email,
          newPassword,
          answer,
        });
        if (res && res.data.success) {
          toast.success(res.data && res.data.message);
  
          navigate("/login");
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong");
      }
    };
  return (
    <Layout title={'Ecommerce app - forget-password'}>
       <div className="form-container" style={{ minHeight: "90vh" }}>
        <form onSubmit={handleSubmit}>
          <h4 className="title">Forget Password</h4>
          
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Email "
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Answer "
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>

          
        </form>
      </div>
    </Layout>
  )
}

export default ForgetPassword
