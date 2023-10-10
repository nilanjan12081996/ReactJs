import { useEffect, useState } from "react"

import { Link } from "react-router-dom"
import { deleteStudent, displayStudents } from "../service/Api"
import Layout from "./layouts/Layout"

const ReadStudent=()=>{
    const[students,setStudentDetalis]=useState([])
    const getStudents=async()=>{
        let response=await displayStudents()
        setStudentDetalis(response?.data?.data)
    }
    useEffect(()=>{
        getStudents()
    },[])
    const deleteStudentData=async(id)=>{
        await deleteStudent(id)
        getStudents()
    }
    return(
        <>
        <Layout>
        <table className='table container-sm mt-5'>
                <thead>
                    <tr>
                        <th> ID </th>
                        <th> Name </th>
                        <th> Email </th>
                        <th> City </th>
                        <th> Phone </th>
                        <th> Address </th>
                        <th> Class </th>
                    </tr>
                </thead>

                <tbody>
                    {
                       students.map(students => (
                            <tr key={students._id}>
                                <td> {students._id} </td>
                                <td> {students.name} </td>
                                <td> {students.email} </td>
                                <td> {students.city} </td>
                                <td> {students.phone} </td>
                                <td> {students.address} </td>
                                <td> {students.class} </td>
                                <td>
                                    <Link to={`/edit/${students._id}`}> <button className='btn btn-primary' style={{ marginRight: '10px' }}> Edit </button> </Link>
                                    <button className='btn btn-danger' color='secondary' onClick={()=>deleteStudentData(students._id)}> Delete </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </Layout>
         
        </>
    )
}
export default ReadStudent