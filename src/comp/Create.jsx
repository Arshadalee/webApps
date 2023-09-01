import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Create() {
    const [input,setInput]=useState({
        name: "",
        email: "",
        DOJ:""
    })
    const navigate=useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:3000/employees",input).then((res)=>{
        alert("Data Updated!");
        navigate("/");
        })

    }
    return ( <>
        
        <center>
        <div className="w-50 border bg-secondary text-white p-5">
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" className="form-control" placeholder="Enter your name"
                    onChange={e=>{
                        return setInput({...input,name:e.target.value})
                    }}
                />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" className="form-control" placeholder="Enter your Email address"
                    onChange={e=>{
                        return setInput({...input,email:e.target.value})
                    }}
                />
            </div><br/>
            <div>
                <label htmlFor="DOJ">Date of joining</label>
                <input type="date" name="DOJ" className="form-control" placeholder="Enter Date of joining"
                    onChange={e=>{
                        return setInput({...input,DOJ:e.target.value})
                    }}
                />
            </div><br/>
            <button type="submit"  className="btn btn-success">Submit</button>
                    </form>
            
            </div>
        </center>
    </> );
}





export default Create;