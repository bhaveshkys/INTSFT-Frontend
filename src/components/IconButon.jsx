import { Button, IconButton } from '@mui/material'
import React from 'react'

const IconButon = ({component,height,width}) => {
  return (
    <div style={{boxShadow:"0px 0px 10px 3px white", width:width,height:height,border:"black",backgroundColor:"black",
    borderStyle:"solid",borderRadius:"100px",display:"flex",alignItems:"center",justifyContent:"center",margin:"10px 10px 10px 30px"}} >
        {/* <button className='button' style={{backgroundColor:"black",borderStyle:"none"}}>
        {component}
        </button> */}
        
        <IconButton>
            {component}
        </IconButton>
    </div>
  )
}

export default IconButon