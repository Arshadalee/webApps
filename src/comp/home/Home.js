import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Create from '../Create';



function Home() {
    const [data,setData]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3000/employees").then((res)=>{
        setData(res.data);
        }).catch((err)=>{
            console.log(err);})
    },[]);
    return ( <>

    <div className="container">
        <div className='table'>
        <Link to="/create"><button className='btn btn-sucsess'>create</button></Link>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>name</th>
                    <th>Email</th>
                    <th>DOJ</th>
                </tr>
            </thead>
            <tr>
                {data.map((d,i)=>{
                    return(<tr key={i}>
                    <td>{d.id}</td>
                    <td>{d.name}</td>
                    <td>{d.email}</td>
                    </tr>)
                })}
            </tr>
        </div>
    </div>
    </> );
}

export default Home;