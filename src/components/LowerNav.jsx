import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import './LowerNav.css'


const LowerNav = ({sendDataToParent}) => {
  
/* const handleTranscriber=(page)=>{
    page='transcriber'
    console.log("child handle click working")
} */
 const BoxStyle={
    backgroundColor: "black",
    color:"white",
    width:"33vw",
    borderRadius:"0",
    height:"64px"

 }
 const BoxStyleHover={
    backgroundColor:"rgba(170, 170, 204, 0.5)",
    boxShadow:"10px 20px 10px 10px white"
 }
  return (
    <AppBar position="fixed" sx={{ top: 'auto', bottom: 0,backgroundColor:"black" }}>
    <Toolbar sx={{display:"flex"}}>
      <IconButton onClick={()=>{sendDataToParent("recorder")}}  sx={[{
        '&:hover':BoxStyleHover
      },BoxStyle]} aria-label="open drawer">
       Recorder
      </IconButton>
      <IconButton onClick={()=>{sendDataToParent("transcriber")}}  sx={[{
        '&:hover':BoxStyleHover
      },BoxStyle]}>
        Transcriber
      </IconButton>
      <IconButton onClick={()=>{sendDataToParent("analyzer")}}  sx={[{'&:hover':BoxStyleHover},BoxStyle]}>
       Analyzer
      </IconButton>
    </Toolbar>
  </AppBar>
  )
}

export default LowerNav