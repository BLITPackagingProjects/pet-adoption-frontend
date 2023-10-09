import { Snackbar, Table } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Pet from './Pet';
// import { DataGrid } from '@mui/x-data-grid';
// import { SERVER_URL } from './Constans';
import AddPet from './AddPet';
import EditPet from './EditPet';


const PetList = () => {

const[pets,setPets] = useState([]);
const[open, setOpen] = useState(false);


useEffect(()=>{
   
    fetchData();
},[]);

// ********* delete functionlity
const onDelClick = async (url)=>{
    if(window.confirm("Are your sure to delete X pet ?")){
    try{
        const response = await fetch(url,{method:'DELETE'})

        if(!response.ok){
            throw new Error("Network response is not Ok")
        }
       await fetchData();
        setOpen(true);
    }catch(error){
        console.log(error)
    }
  }
}
// *********************************************************


// ***********************************************************

async function fetchData(){
    try {
        const response = await fetch("http://localhost:9090/pets");
        if(!response.ok){
            throw new Error("Networ response is not ok. ");
        }
        const result = await response.json();
        console.log(result)
        setPets(result);

    } catch (error) {
        console.error("Error fetching cars data ",error)
    }
}
// **************************************************** 

const colums = [
    {field: 'Pet_id', headerName: 'pet_id', width: 200},
    {field: 'name', headerName: 'name', width: 200},
    {field: 'color', headerName: 'Color', width: 200},
    {field: 'sex', headerName: 'sex', width: 200},
    {field: 'age', headerName: 'age', width: 200},
    {headerName: '',
     sortable: false,
     renderCell :(params)=>(
        <button onClick={()=>onDelClick("http://localhost:9090/"+'pets'+params.row.id)}>
             Delete 
        </button>)},
    
    {field: 'edit',
     headerName:'',
     sotable:false,
     filterable: false,
     renderCell: (params)=>(
        <EditPet data ={params.row} updatePet={updatePet}/>
     )
}
];
    // Adding a new Car   ******************************************************
    const addPet = async(pet) =>{
        try{
            const response = await fetch("http://localhost:9090/"+'Pets/add',{method:'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(pet)})
            if(!response.ok){
                throw new Error("Something went wrong");
            }
            await fetchData()

        }catch(error){
            console.log(error)
        }
    }
    // Edit a car   ************************************
    const updatePet = async (pet,url)=>{
        try{
            const response = await fetch(url,{method: 'PUT', 
            headers:{'Content-Type' : 'application/json'},
            body: JSON.stringify(pet)
        });
        if(!response.ok){
            throw new Error('Something went wrong')
        }
        await fetchData()

        }catch(error){
            console.log(error)
        }
    }

    return (
    <div>
        <AddPet addCar={addPet}/>
        <DataGrid rows={pets} columns={colums} getRowId={row=>row.id}
            disableRowSelectOnClick={true}>
        </DataGrid>
        <Snackbar open={open} autoHideDuration={2000} onClose={()=> setOpen(false)}
         message = "Pet deleted"  sx={{
         width: 400,
         color: "secondary",
         //backgroundColor: "green", This doesn't work
         "& .MuiSnackbarContent-root": { backgroundColor: "red" }
         }}/>

    </div>
  )
}

export default PetList