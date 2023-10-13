import React from 'react'
import IconButon from './IconButon';
import MicIcon from '@mui/icons-material/Mic';

const BigRecordBox = () => {
  return (
    <div style={{display:"flex" ,width:"90vw",alignItems:"center",justifyContent:"center",flexDirection:"column" }} >
        <h1>RECORD</h1>
        <IconButon height={"200px"} width={"200px"} component={<MicIcon sx={{color:"white",height:"150px",width:"150px"}} />} />
    </div>
  )
}

export default BigRecordBox