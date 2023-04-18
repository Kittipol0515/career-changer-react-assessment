import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import Navbar from "./Navbar"


const mockEmployees = [
  {
    id: 0,
    name: "mock",
    lastname: 'mocklastname',
    position: "Manager"
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer"
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer"
  },
]

const Home = () => {

  const [employees,setEmployees] = useState(mockEmployees)
  const [sector,setSector] = useState()
  const [title,setTitle] = useState("React - Assessment")

  const handleUserClick = () => {
    setSector("user");
    setTitle("Home - User Sector")
  }
  const handleAdminClick = () => {
    setSector("admin");
    setTitle("Home - Admin Sector")
  };
//  useEffect(() => setEmployees(mockEmployees),[])
  return (
    <div>
      <Navbar />
      <hr />
      <h1>Generation Thailand <br />{title}</h1>
      <div className="buttonhome">
        <button onClick={handleUserClick}>User Home Sector</button>
        <button onClick={handleAdminClick}>Admin Home Sector</button>
      </div>
      {sector === "user" && <User employees={employees} />}
      {sector === "admin" && <Admin employees={employees} setEmployees={setEmployees} />}
    </div>
  )
}

const User = ({employees}) => {
  return (
    <div>
      <table className="tableuser">
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.lastname}</td>
              <td>{employee.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}




const Admin = ({employees,setEmployees}) => {
  
  const handleDelete = (id) => {
    const deleteEmployees = employees.filter(employee => employee.id !== id);
    setEmployees(deleteEmployees)
  }
  const [name,setName] = useState()
  const [lastname,setLastname] = useState()
  const [position,setPosition] = useState()

  const handleAddClick= () => {
    setEmployees((prepEmployee) => {
      return(
        [...prepEmployee, {id: prepEmployee.length,
          name: name,
          lastname: lastname,
          position: position}]
      )
    })
  }

  return (
    <div>
      <h3>Create User Here</h3>
      <div>
        <input onChange={(event) => setName(event.target.value)} type="text" placeholder="Name" />
        <input onChange={(event) => setLastname(event.target.value)} type="text" placeholder="Last name" />
        <input onChange={(event) => setPosition(event.target.value)}type="text" placeholder="Position" />
        <button onClick={handleAddClick}>save</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Position</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.lastname}</td>
              <td>{employee.position}</td>
              <td>
                <button onClick={() => handleDelete(employee.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>    
    </div>
  )
}



export default Home;
