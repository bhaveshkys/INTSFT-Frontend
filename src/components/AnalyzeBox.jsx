import React from 'react'
import TextButton from './TextButton'

const AnalyzeBox = () => {
  return (
    <div style={{borderStyle:"solid",width:"616px",height:"392px",display:"flex"}}>
        <div style={{borderStyle:"solid",height:"390px",width:"400Px",backgroundColor:"#140F0F"}}>
        <h1>ANALZYE</h1>
        </div>
        <div style={{display:"flex",flexDirection:"column",width:"210px",justifyContent:"space-evenly",alignItems:"center"}}>
            <TextButton content={"Semantic"} />
            <TextButton content={"Word Cloud"} />
            <TextButton content={"Sentiment"} />
            <TextButton content={"Summary"} />
        </div>
    </div>
  )
}

export default AnalyzeBox