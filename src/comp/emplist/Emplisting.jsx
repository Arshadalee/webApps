import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

function Emplisting() {
  const [empData, setEmpData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/employees")
      .then((res) => {
        setEmpData(res.data);
      })
      
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-title">
            <h2>Emplyee Dashboard</h2>
           <center> <Link to="/create"><button className="btn btn-success mx-5">Create+</button></Link></center>
          </div>
          <div className="card-body">
            <table className="table table-bordered">
              <thead className="bg-dark text-white">
                <tr>
                  <th>EMP id</th>
                  <th>Name</th> <th>Emails</th> <th>DOJ</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {empData &&
                  empData.map(item => {
                return(<>
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.DOJ}</td>
                      <td>
                        <Link to={`/update/${item.id}`}className="btn btn-success">Edit</Link>
                        <Link to={`/delete/${item.id}`}className="btn btn-danger">Delete</Link>
                        <Link to={`/read/${item.id}`}className="btn btn-primary">Details</Link>
                      </td>
                    </tr>
                </>)
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Emplisting;
