
// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'


// const employee = () => {
//   return (
//     <div>employee</div>
//   )
// }

// export default employee

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PetList from '../components/PetList'

const Employees = () => {
  const handleClick = () =>{
    localStorage.removeItem('token')
  }
  // const [data, setData] = useState([]);

  useEffect(()=>{
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://localhost:9090/pets',
      headers: { 
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/x-www-form-urlencoded",
      }
    };
    
  
    axios.request("http://localhost:9090/pets",config).then((res)=>console.log(res)).catch((err)=>console.log(err))

  }, [])

 

 
  return (
    <div>
      <p>List of Pets</p>
      {/* {data.map((item)=>
        <p key={item._id}>{item.text}</p> )} */}

      <Link to="/" >
      <button onClick={handleClick}>Log Out</button>
      </Link>

      
      
    </div>
  )
}

export default Employees