import React from 'react'
import SettingsVoiceOutlinedIcon from '@mui/icons-material/SettingsVoiceOutlined';

const Audiobutton = () => {
  return (
    <div style={{width:'200px', height:'200px', border:"black",backgroundColor:"black",
    borderStyle:"solid",borderRadius:"100px",display:"flex",alignItems:"center",justifyContent:"center",margin:"10px 10px 10px 30px"}}>
      
      <SettingsVoiceOutlinedIcon className='mic' sx={{color:"white", width:'150px', height:'150px'}} />
      
    </div>
  )
}

export default Audiobutton