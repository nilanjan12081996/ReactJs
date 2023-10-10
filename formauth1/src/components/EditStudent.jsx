import { useEffect, useState } from "react"
import { useNavigate,useParams } from "react-router-dom"
import { getStudent, updateStudent } from "../service/Api"
import Layout from "./layouts/Layout"

const EditStudent=()=>{
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
    const{ id }=useParams()
    let name,value
    const postDataStudent=(e)=>{
        name=e.target.name
        value=e.target.value
        setStudent({ ...student, [name]: value })
    }
    const submitInfo=async(e)=>{
        e.preventDefault()
       let reg={
        name:student.name,
        email:student.email,
        city:student.city,
        phone:student.phone,
        address:student.address,
        class:student.class
        }
        console.log(reg);
    }
    const getStudentData=async()=>{
        const response=await getStudent(id)
        setStudent(response?.data)

    }
    useEffect(()=>{
        getStudentData()
    },[])
    const addStudentDetails=async()=>{
            await updateStudent(student,id)
            navigate('/read')
    }
    return(
        <>
        <Layout>
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
  <button type="submit" class="btn btn-primary" onClick={()=>addStudentDetails()}>Update</button>
</form>
        </Layout>
 
        </>
    )
}
export default EditStudent