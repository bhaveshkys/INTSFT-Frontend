import React from 'react'
import MicIcon from '@mui/icons-material/Mic';

const Micbutton = () => {
  return (
    <div style={{width:'200px', height:'200px', border:"black",backgroundColor:"black",
    borderStyle:"solid",borderRadius:"100px",display:"flex",alignItems:"center",justifyContent:"center",margin:"10px 10px 10px 30px"}}>
      
      <MicIcon className='mic' sx={{color:"white", width:'150px', height:'150px'}} />
      
    </div>
  )
}

export default Micbutton