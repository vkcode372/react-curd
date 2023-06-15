import React, { useEffect, useState } from 'react'
import { Typography, Box, Grid, TextField, Button } from "@mui/material";
import {useNavigate } from 'react-router';
import { useParams } from 'react-router';
import axios from 'axios';
const Edit = () => {
    const Navigatert = useNavigate();
    const [EdStdent,setEdStudent]=useState({})
    const studentID=useParams();
    useEffect(()=>{
        async function getUpdateInfoData(){
            try{
               const EdStudentData= await axios.get(`http://localhost:33000/student/${studentID.id}`);
               setEdStudent(EdStudentData.data);
           
            }catch(error){
                 alert("Something is worng");
            }
        }
        getUpdateInfoData();
    },[]);
    function getStuInfo(e){
        setEdStudent({
            ...EdStdent,[e.target.name]:e.target.value
        });
    }
    async  function onFormSubmit(e){
        e.preventDefault();
         try{
                     await axios.put(`http://localhost:33000/student/${studentID.id}`,EdStdent)
                     Navigatert("/");
         }catch(error){
           alert("Somthing is worng");
         }
    }
    return (
        <>
            <Grid item md={6} xs={12}>
                <Typography variant="h4" align='center'>Edit Student</Typography>
                <Box textAlign="center" p={2} className="gr">
                    <Grid container spacing={2}>
                    <Grid item xs={12}>
                            <TextField autoComplete="id" name="id" id="stuname"  label="ID" autoFocus value={studentID.id} variant="outlined" disabled required fullWidth />
 
                        </Grid>
                        <Grid item xs={12}>
                            <TextField autoComplete="stuname" name="studentname"  onChange={(e)=>getStuInfo(e)} autoFocus value={EdStdent.studentname} id="stuname" label="Name" variant="outlined" required fullWidth />

                        </Grid>
                        <Grid item xs={12}>
                            <TextField autoComplete="stuemail" name="email" onChange={(e)=>getStuInfo(e)} autoFocus value={EdStdent.email}  id="stuemail" label="Email" variant="outlined" required fullWidth />
                        </Grid>
                    </Grid>
                    <Box mt={2}>
                        <Button type="submit" variant="contained" onClick={e=>onFormSubmit(e)} color="primary" fullWidth>Update</Button>
                    </Box>


                </Box>

            </Grid>
            <Box m={3} textAlign="center"  >  <Button  color='primary' variant="contained" onClick={()=>Navigatert("/")}>Back To Home Page</Button></Box>
        </>
    )
}

export default Edit