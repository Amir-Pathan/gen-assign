import React, { useState,useEffect } from "react";
import { Typography,Grid,Button,Paper, Divider,TextField,InputLabel } from "@mui/material";
import BasicModal from "../lib/modal";
import DivisionCard from "../lib/card";


function Divisions(){

  const initial={
    name:'',
    email:"",
    totalemp:'',
    incharge:""
  }

  const [isOpen,setIsOpen] = useState(false)

  const [division,setDivision] = useState([])

  const [state,setState] = useState(initial)

  const handleChange=(k,e)=>{

    setState(prev=>({
      ...prev,
      [k]:e
    }))

  }

  useEffect(()=>{

    let divs = localStorage.getItem('division')

    divs=JSON.parse(divs)||[]

    setDivision(divs)
  },[])

  const addDivision=()=>{


    if(state.name.length>0&&state.email.length>0&&state.totalemp.length>0&&state.incharge.length>0){

      let division = localStorage.getItem('division')

      division=JSON.parse(division)||[]

      division.push(state)

      localStorage.setItem('division',JSON.stringify(division))

      setState({
        name:'',
        email:'',
        incharge:'',
        totalemp:''
      })

      handleOpen(false)


    }

  }


  const handleOpen=(val)=>setIsOpen(val)


    return (
        <div style={{marginLeft:'180px'}}>
          <Typography variant="h4">Divisons</Typography>
          <Grid container item xs={12} md={12}>
            <Grid item xs={9} md={9}>
              <Grid container item xs={12} md={12} spacing={2}>
                {
                  division.map((i,index)=>{

                    return <Grid container item xs={4} md={4} key={index}>
                      <DivisionCard 
                      name={i.name}
                      email={i.email}
                      incharge={i.incharge}
                      totalemp={i.totalemp}
                      />
                    </Grid>

                  })
                }
                </Grid>
            </Grid>
            <Grid item xs={3} md={3}>
                <Button variant="contained" style={{
                  backgroundColor:'chocolate'
                }}
                onClick={()=>handleOpen(true)}
                > + Add Division</Button>
            </Grid>
          </Grid>
          <BasicModal
           open={isOpen}
           handleOpen={(val)=>handleOpen(val)}
           >
            <Typography>Add New Division</Typography>
            <Divider/>
            <Grid container item xs={12} md={12} spacing={2}>
               <Grid item xs={12} md={12}>
                   <InputLabel>DivisionName</InputLabel>
                   <TextField size="small" label='DivisionName'
                    required
                   value={state.name}
                   onChange={(e)=>{handleChange('name',e.target.value)}}
                   />
               </Grid>
               <Grid container item xs={12} md={12} spacing={2}>
                <Grid item xs={4} md={4}>
                    <InputLabel>Incharege</InputLabel>
                   <TextField size="small" label='Incharge Head'
                    required
                    value={state.incharge}
                    onChange={(e)=>{handleChange('incharge',e.target.value)}}/>
                </Grid>
                <Grid item xs={4} md={4}>
                    <InputLabel>Incharge email Id</InputLabel>
                   <TextField size="small" label='Email Id'
                    required
                    value={state.email}
                    onChange={(e)=>{handleChange('email',e.target.value)}}/>
                </Grid>
                <Grid item xs={4} md={4}>
                    <InputLabel>Total Employee working</InputLabel>
                   <TextField size="small" label='Total employee'
                    required
                    type={'number'}
                    value={state.totalemp}
                    onChange={(e)=>{handleChange('totalemp',e.target.value)}}/>
                </Grid>
               </Grid>
            </Grid>
            <Divider/>
            <Grid container item xs={12} md={12}>
              <Grid item xs={6} md={7}></Grid>
              <Grid container item xs={6} md={5} spacing={2} style={{marginTop:'10px'}}>
                 <Button
                 onClick={()=>handleOpen(false)}
                 >Cancel</Button>
                 <Button style={{
                  backgroundColor:'chocolate',
                  color:"black"
                 }}
                 onClick={addDivision}
                 >Save</Button>
              </Grid>
            </Grid>
          </BasicModal>
        </div>
    )

}

export default Divisions