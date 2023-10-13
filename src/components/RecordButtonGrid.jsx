import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import IconButon from './IconButon';
import PauseIcon from '@mui/icons-material/Pause';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import SaveIcon from '@mui/icons-material/Save';
const RecordButtonGrid = () => {
  return (
    <div style={{display:"flex",flexDirection:"column",height:"91vh",justifyContent:"center"}}>
        <IconButon height={"50px"} width={"50px"} component={<PlayArrowIcon sx={{color:"white"}} />} />
        <IconButon height={"50px"} width={"50px"} component={<PauseIcon sx={{color:"white"}} />} />
        <IconButon height={"50px"} width={"50px"} component={<VideoCallIcon sx={{color:"white"}} />} />
        <IconButon height={"50px"} width={"50px"} component={<SaveIcon sx={{color:"white"}} />} />
    </div>
  )
}

export default RecordButtonGrid
