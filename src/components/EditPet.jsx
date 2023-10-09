import { Button } from "@mui/base";
import { Box, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { useState } from "react"
import { SERVER_URL } from "./Constans";


const EditPet = ({data, updatePet}) => {
    const[open,setOpen] = useState();
    const[pet, setPet] = useState({
        pet_id:data.pet_id,
        name:data.name,
        color:data.color,
        sex:data.sex,
        age:data.age
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

    const handleSave = async ()=> {
        await updatePet(pet, SERVER_URL+ 'pets/' +data.id)
        handleClickClose();
    }

  return (
    <div>
       
        <Box m={1} display="flex" justifyContent="center" alignItems="center">
            <Button onClick={handleClickOpen} color="success" variant="contained" >Edit Pet</Button>
        </Box>
        <Dialog open={open} onClose={handleClickClose}>
            <DialogTitle>Edit Pet</DialogTitle>
            <DialogContent>
                <input  placeholder="Pet_id" name="pet_id" value={pet.pet_id} onChange={handleChange}/> <br/>
                <input  placeholder="Name" name="name" value={pet.name} onChange={handleChange}/> <br/>
                <input  placeholder="Color" name="color" value={pet.color} onChange={handleChange}/> <br/>
                <input  placeholder="Sex" name="sex"   value={pet.sex} onChange={handleChange}/> <br/>
                <input  placeholder="Age" name="age" value={pet.age} onChange={handleChange}/> <br/>

                <DialogActions>
                    <Button onClick={handleClickClose}> Cancel </Button>
                    <Button onClick={handleSave}> Save </Button>
                </DialogActions>
            </DialogContent>
        </Dialog>
        
    </div>
  )
}

export default EditPet