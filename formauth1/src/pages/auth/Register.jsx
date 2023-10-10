import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import "./reg.css"
import 'react-toastify/dist/ReactToastify.css';
import Layout from "../../components/layouts/Layout"
const Register=()=>{
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[phone,setPhone]=useState("")
    const[address,setAddress]=useState("")
    const[answer,setAnswer]=useState("")
    const nevigate=useNavigate()
    const handleSubmit= async(e)=>{
        e.preventDefault()
        try {
            const res=await axios.post(`${process.env.REACT_APP_API}/api/auth/register`,{
                name,
                email,
                password,
                phone,
                address,
                answer
            })
            if(res && res.data.success)
            {
                toast.success(res.data && res.data.message)
                nevigate("/login")
            }
            else{
                toast.error(res.data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error("something went wrong")
        }
    }
return(
    <>
    <Layout>
    <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                icon={true}
            />
    <div className="main">
    <form onSubmit={handleSubmit}>
    <h1>Registration Form</h1>
  <div className="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" 
    value={name}
    onChange={(e)=>{setName(e.target.value)}}
    placeholder="Enter Your Name"
    />
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Email</label>
    <input type="email" className="form-control" id="exampleInputEmail1" 
    value={email}
    onChange={(e)=>{setEmail(e.target.value)}}
    placeholder="Enter Your Email"
    />
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Password</label>
    <input type="password" className="form-control" id="exampleInputEmail1" 
    value={password}
    onChange={(e)=>{setPassword(e.target.value)}}
    placeholder="Enter Your Password"
    />
</div>
<div className="form-group">
    <label for="exampleInputEmail1">Phone</label>
    <input type="text" className="form-control" id="exampleInputEmail1" 
    value={phone}
    onChange={(e)=>{setPhone(e.target.value)}}
    placeholder="Enter Your Phone"
    />
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Address</label>
    <input type="text" className="form-control" id="exampleInputEmail1" 
    value={address}
    onChange={(e)=>{setAddress(e.target.value)}}
    placeholder="Enter Your Address"
    />
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Favourit Sports</label>
    <input type="text" className="form-control" id="exampleInputEmail1" 
    value={answer}
    onChange={(e)=>{setAnswer(e.target.value)}}
    placeholder="Enter Your Favourit Sports"
    />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
    </Layout>
  


    </>
)
}
export default Register