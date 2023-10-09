import { Button } from "@mui/base";
import { Box, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { useState } from "react"


const AddPet = (props) => {
    const[open,setOpen] = useState();
    const[pet, setPet] = useState({
        pet_id:'',
        name:'',
        color:'',
        sex:'',
        age:''
    })

    const handleClickOpen = ()=>{
        setOpen(true)
    }

    const handleClickClose = ()=>{
        setOpen(false)
    }

    const handleChange = (event) =>{
        setPet({...pet,[event.target.name] : event.target.value})
    }

    const handleSave = ()=> {
        props.addPet(pet)
        handleClickClose();
    }

  return (
    <div>
       
        <Box m={1} display="flex" justifyContent="center" alignItems="center">
            <Button onClick={handleClickOpen} color="success" variant="contained" > Add New Pet 🥳</Button>
        </Box>
        <Dialog open={open} onClose={handleClickClose}>
            <DialogTitle>New Car</DialogTitle>
            <DialogContent>
                <input  placeholder="id" name="id" value={pet.pet_id} onChange={handleChange}/> <br/>
                <input  placeholder="name" name="name" value={pet.name} onChange={handleChange}/> <br/>
                <input  placeholder="Color" name="color" value={pet.color} onChange={handleChange}/> <br/>
                <input  placeholder="pet" name="pet"   value={pet.sex} onChange={handleChange}/> <br/>
                <input  placeholder="age" name="age" value={pet.age} onChange={handleChange}/> <br/>

                <DialogActions>
                    <Button onClick={handleClickClose}> Cancel </Button>
                    <Button onClick={handleSave}> Save </Button>
                </DialogActions>
            </DialogContent>
        </Dialog>
        
    </div>
  )
}

export default AddPet