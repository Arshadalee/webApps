import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';


function Update() {

const {id}=useParams();
const [input,setInput]=useState({
    id:"",
    name: "",
email: "",
DOJ:""});


useEffect((e)=>{

    axios.get("http://localhost:3000/employees/"+id).then((res)=>{
    setInput(res.data);
    }).catch((err)=>{
        alert(err,"something went wrong")
    })

},[])
const navigate=useNavigate();
const handleSubmit=(e)=>{
    e.preventDefault();
    axios.put("http://localhost:3000/employees/"+id,input).then((res)=>{
    alert("Data Updated!");
    
    })
}
const handleONClick=(e)=>{
    navigate("/")
}

return (  <>
        <center>
        <div className="w-50 border bg-secondry text-white p-5">
    <form onSubmit={handleSubmit}>
    <div className="update-lable1">
            <label> Emplyee id</label>
            <input type="number" disabled name='id' className='form-control'
            value={input.id}
            onChange={e=>setInput({...input,id:e.target.value})}/>
        </div>
    <div className="update-lable1">
            <label> Emplyee Name</label>
            <input type="text" name='name' className='form-control'
            value={input.name}
            onChange={e=>setInput({...input,name:e.target.value})}/>
        </div>
        <div className="update-lable1">
            <label> Emplyee Email</label>
            <input type="email" name='email' className='form-control'
            value={input.email}
            onChange={e=>setInput({...input,email:e.target.value})}/>
        </div>
        <div className="update-lable1">
            <label> Emplyee Date of joining</label>
            <input type="date" name='DOJ' className='form-control'
            value={input.DOJ}
            onChange={e=>setInput({...input,DOJ:e.target.value})}/>
        </div><br/>
        <button type="submit"  className="btn btn-success">Submit</button>
       
        
    </form>    
  
            </div>
            <button type="success" className="btn btn-primary" onClick={handleONClick}>Home</button>
         
        </center>
    </>);
}

export default Update;