import React, { useState,useEffect } from 'react'
import { Grid, TableContainer, Table, TableBody,
    TableHead, TableRow, Paper, IconButton, Tooltip, TableCell
} from "@mui/material";
import { Link } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import axios from 'axios';
const List = () => {
     const [student,setStudent]=useState([]);
     useEffect(()=>{
        async function getStudentData(){
            try{
               const students =await axios.get("http://localhost:33000/student");
               setStudent(students.data);
            }catch(error){
                console.log(error);
            }
        }
        getStudentData();
     })
   
     const DeletStudent=async (id)=>{
        await axios.delete(`http://localhost:33000/student/${id}`);
        let newStudent=student.filter((item)=>{
            
              return item.id!=id;

        });
        setStudent(newStudent);
     }
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
                                <TableCell align="center">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                student.map((student,i)=>{
                                     return(
                                        <TableRow key={i}>

                                        <TableCell align="center">{i+1}</TableCell>
                                        <TableCell align="center">{student.studentname}</TableCell>
                                        <TableCell align="center">{student.email}</TableCell>
                                        <TableCell align="center">
                                            <Tooltip title="view">
                                                <IconButton> <Link to={`/view/${student.id}`}> <VisibilityIcon color="primary"></VisibilityIcon> </Link> </IconButton>
                                            </Tooltip>
                                            <Tooltip>
                                                <IconButton><Link to={`/edit/${student.id}`}><EditIcon /></Link></IconButton>
                                            </Tooltip>
                                            <Tooltip title="Delete">
                                                <IconButton onClick={()=>{DeletStudent(student.id)}}> <DeleteIcon color="secondary"></DeleteIcon> </IconButton>
                                            </Tooltip>
                                        </TableCell>
                                    </TableRow>
                                     )
                                })
                            }
                           
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </>
    )
}

export default List


