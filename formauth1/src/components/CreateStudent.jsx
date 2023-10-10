import { useNavigate } from "react-router-dom"
import { addStudent } from "../service/Api"
import { useState } from "react"
import { useAuth } from "../context/Auth"
import Layout from "./layouts/Layout"

const CreateStudent=()=>{
   
    
    const initialState={
        name:"",
        email:"",
        city:"",
        phone:"",
        address:"",
        class:""
    }
    const[student,setStudent]=useState(initialState)
    const navigate = useNavigate()
    let name,value
    const postDataStudent=(e)=>{
        name=e.target.name
        value=e.target.value
        setStudent({ ...student, [name]: value })
    }
    const submitInfo=async(e)=>{
        e.preventDefault()
        await addStudent(student)
        navigate('/read')
    }
    return(
        <>
        <Layout>
        
          
                   <h1>Add Student Details</h1>
        <form onSubmit={submitInfo} >
  <div class="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="text" class="form-control" name="name" value={student.name} onChange={e => postDataStudent(e)}/>
    
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Email</label>
    <input type="text" class="form-control" name="email" value={student.email} onChange={e => postDataStudent(e)}/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">City</label>
    <input type="text" class="form-control" name="city" value={student.city} onChange={e => postDataStudent(e)}/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Phone</label>
    <input type="text" class="form-control" name="phone" value={student.phone} onChange={e => postDataStudent(e)}/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Address</label>
    <input type="text" class="form-control" name="address" value={student.address} onChange={e => postDataStudent(e)}/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Class</label>
    <input type="text" class="form-control" name="class" value={student.class} onChange={e => postDataStudent(e)}/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
        </Layout>
  
        </>
    )
}
export default CreateStudent