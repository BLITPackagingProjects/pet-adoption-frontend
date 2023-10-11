import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";



 export const Showallapplications = () => {

  const[data, setData] = useState([]);
  const url = "http://localhost:9090/Application/available"


    useEffect(()=>{
      axios.get(url).then((res)=> setData (res.data))
    },[])

    const handleClick = ()=>{

    }


  return (
    <div>

      <table className="table">
      <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Date</th>
      <th scope="col">Name</th>
      <th scope="col">Color</th>
      <th scope="col">Gender</th>
      <th scope='col'>Age</th>
      <th scope='col'>Function</th>
    </tr>
  </thead>
  <tbody>
   {data.map((item)=>
    <tr key={item.applicationId}>
      <td>{item.date}</td>
      <td>{item.pets.name}</td>
      <td>{item.pets.color}</td>
      <td>{item.pets.sex}</td>
      <td>{item.pets.age}</td>
    <td className='btn btn-primary' onClick={handleClick}>Pending</td>

    </tr>

   )}
  </tbody>

      </table>

    </div>
  )
}