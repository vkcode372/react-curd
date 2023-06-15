import {Typography, Box,  Grid, TextField, Button} from "@mui/material";
import { makeStyles } from '@mui/styles';
import List from "../student/List";
import axios from "axios";
import { useEffect, useState } from "react";
const useStyles = makeStyles({
    headingColor: {
      backgroundColor: "#f1c40f",
      borderRadius: 3,
      color: 'white',
      padding: '0 30px',
    },
    AddStudent: {
      backgroundColor: "#8e44ad",
      color: "white",
    },
    showStudent: {
      backgroundColor: "#2980b9",
      color: "white",
      margin: '0 10px',
    }
  });
const Home = () => {
    const clasess = useStyles();
    const [Addstudent,setAddStudent]=useState({

    });

    function getStuInfo(e){
        setAddStudent({
            ...Addstudent,[e.target.name]:e.target.value
        });
        
        console.log(Addstudent);
    }
    async  function onFormSubmit(e){
        e.preventDefault();
         try{
                     await axios.post(`http://localhost:33000/student`,Addstudent)
         }catch(error){
           alert("Somthing is worng");
         }
    }
    return (
        <>
            <Box textAlign="center" p={2}>
                <Typography variant="h2" className={`${clasess.headingColor}`} >React CURD with api</Typography>
            </Box>
            <Grid container textAlign="center">
                <Grid item md={6} xs={12}>
                    <Typography variant="h4" className={`${clasess.AddStudent}`}>Add Student</Typography>
                    <Box textAlign="center" pt={2} className="gr">

                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField autoComplete="stuname" onChange={(e)=>getStuInfo(e)} name="studentname" id="stuname" label="Name" variant="outlined" required fullWidth />

                            </Grid>
                            <Grid item xs={12}>
                                <TextField autoComplete="stuemail" name="email" onChange={(e)=>getStuInfo(e)} id="stuemail" label="Email" variant="outlined" required fullWidth />
                            </Grid>
                        </Grid>
                        <Box mt={2}>
                            <Button onClick={e=>onFormSubmit(e)} type="submit" variant="contained" color="primary" fullWidth>Add</Button>
                        </Box>


                    </Box>

                </Grid>
                <Grid item md={6} xs={12} >
                    <Typography variant="h4" className={`${clasess.showStudent}`}>Student List</Typography>
                    <Box textAlign="center" p={2}>

                        <List></List>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}
export default Home;