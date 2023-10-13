import React from 'react'
import RecordButtonGrid from '../components/RecordButtonGrid'
import BigGreyBox from '../components/BigGreyBox'
import BigRecordBox from '../components/BigRecordBox'
const Recorder = () => {
  return (
    <div style={{display:"flex"}}>
    <RecordButtonGrid/>
    <BigRecordBox/>
    <BigGreyBox/>
    </div>
  )
}

export default Recorder