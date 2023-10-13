import React from 'react'
import TextBox from '../components/TextBox'
import AnalyzeBox from '../components/AnalyzeBox'

const Analyzer = () => {
  return (
    <div style={{height:"91vh",display:"flex",justifyContent:"space-around",alignItems:"center"}}>
        <TextBox/>
        <AnalyzeBox/>
    </div>
  )
}

export default Analyzer