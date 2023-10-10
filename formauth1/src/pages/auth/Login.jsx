import { useState } from "react"
import { useAuth } from "../../context/Auth"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { ToastContainer, toast } from "react-toastify"
import "./reg.css"
import 'react-toastify/dist/ReactToastify.css';
import Layout from "../../components/layouts/Layout"

const Login=()=>{
    const [email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[auth,setAuth]=useAuth()
    const nevigate=useNavigate()
    const handleSubmit=async(e)=>{
        e.preventDefault()
        try{
            const res=await axios.post(`${process.env.REACT_APP_API}/api/auth/login`,{
                email,
                password
            })
            if(res&&res.data.success)
            {
                toast.success(res.data && res.data.message)
                setAuth({
                    ...auth,
                    user:res.data.user,
                    token: res.data.token
                })
                console.log(res);
                nevigate('/')
                localStorage.setItem("auth",JSON.stringify(res.data))
            }
            else {
                toast.error(res.data.message);
              }

        }catch(error){
            console.log(error);
          toast.error("Something went wrong");
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
    <h1>Login Form</h1>
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

 
 
  <button type="submit" className="btn btn-primary">Submit</button><br/>
  <Link to='/register'>New User?</Link>
  **** forget password <Link to='/forgetpassword'> Forget Password</Link>
</form>
    </div>
        </Layout>
      
    

        </>
    )
}
export default Login