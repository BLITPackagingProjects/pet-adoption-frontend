import axios from 'axios';
import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react'

const Pets = (props) => {

  const [data, setData] = useState([]);
  const url = "http://localhost:9090/pets";

  useEffect(()=>{

    axios.get(url).then((res)=> setData(res.data))
  },[])

  
  return (
    <div>
   
      
      <table className="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Color</th>
      <th scope="col">Gender</th>
      <th scope='col'>Age</th>
      <th scope='col'>Function</th>
    </tr>
  </thead>
  <tbody>
   {data.map((item)=>
    <tr key={item.petId}>
      <td>{item.petId}</td>
      <td>{item.name}</td>
      <td>{item.color}</td>
      <td>{item.sex}</td>
      <td>{item.age}</td>
    <td className='btn btn-primary' onClick={()=>{
      const obj = {
        status: "pending"
      }
      axios.post(`http://localhost:9090/Application/${localStorage.getItem('custId')}/${item.petId}/1`, obj).then((res)=>{
        console.log(res)
        })
        props.history.replace('/app')
    
    }}>Apply</td>
    </tr>
    
   )}
  </tbody>
</table>

      
    </div>
  )
}

export default Pets






// 


// <table class="table">
// <thead>
//   <tr>
//     <th scope="col">#</th>
//     <th scope="col">First</th>
//     <th scope="col">Last</th>
//     <th scope="col">Handle</th>
//   </tr>
// </thead>
// <tbody>
//   <tr>
//     <th scope="row">1</th>
//     <td>Mark</td>
//     <td>Otto</td>
//     <td>@mdo</td>
//   </tr>
//   <tr>
//     <th scope="row">2</th>
//     <td>Jacob</td>
//     <td>Thornton</td>
//     <td>@fat</td>
//   </tr>
//   <tr>
//     <th scope="row">3</th>
//     <td colspan="2">Larry the Bird</td>
//     <td>@twitter</td>
//   </tr>
// </tbody>
// </table>

// 