import React, { useEffect } from 'react';
import { Grid, TableContainer, Box,Table, TableBody, TableHead, TableRow, TableCell,Button } from "@mui/material";
import { useParams,useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios  from 'axios';
const View = () => {
    const userID=useParams();
    const Navigatert = useNavigate();
    const [studentinfo,setStudentinfo]=useState([])
    useEffect(()=>{
      async function getStudentInfo(){
              try{
                     const  StudentInfodata= await axios.get(`http://localhost:33000/student/${userID.id}`);
                     setStudentinfo(StudentInfodata.data);
              }catch(error){
               alert("somthing is wrong");
            }
      }  
      getStudentInfo();
    },[userID.id])
  return (
   <>
     <Grid container>
                <TableContainer >
                    <Table m={2}>
                        <TableHead>
                            <TableRow style={{ backgroundColor: "#616161" }}>
                                <TableCell align="center">NO</TableCell>
                                <TableCell align="center">Name</TableCell>
                                <TableCell align="center">Email</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        <TableRow>
                                    <TableCell align="center">{studentinfo.id}</TableCell>
                                    <TableCell align="center">{studentinfo.studentname}</TableCell>
                                    <TableCell align="center">{studentinfo.email}</TableCell>
                                    
                                </TableRow>
                           
                        </TableBody>
                    </Table>
                </TableContainer>
               
              
            </Grid>
            <Box m={3} textAlign="center"  >  <Button  color='primary' variant="contained" onClick={()=>Navigatert("/")}>Back To Home Page</Button></Box>
   </>
  )
}

export default View