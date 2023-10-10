import axios from "axios"

export const addStudent=async(data)=>{
    try {
        return await axios.post("https://restapinodejs.onrender.com/api/student",data)
    } catch (error) {
        console.log("error"+error.message);
    }
}
export const displayStudents=async()=>{
    try {
        return await axios.get("https://restapinodejs.onrender.com/api/allstudent")
    } catch (error) {
        console.log("Error"+error.message);
    }
}
export const getStudent=async(data)=>{
    try {
        return await axios.get(`https://restapinodejs.onrender.com/api/edit/${data}`)
    } catch(error) {
        console.log("Error"+error.message);
    }
}
export const updateStudent=async(data,id)=>{
    try {
        return await axios.post(`https://restapinodejs.onrender.com/api/update/${id}`,data)
    } catch (error) {
        console.log("Error"+error.message);
    }
}
export const deleteStudent=async(id)=>{
    try {
        return await axios.delete(`https://restapinodejs.onrender.com/api/delete/${id}`)
    } catch (error) {
        console.log("Error"+error.message);
    }
}