import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Loading = () => {
  const navigate=useNavigate()
  useEffect(()=>{
    setTimeout(()=>{
      navigate('/home')
    },3000)
  })
  return (
    <div style={{width:'100vw',height:'100vh',display:'flex',alignItems:"center",justifyContent:"center"}} >
      <img src="/Loading.gif" alt="" />
    </div>
  )
}

export default Loading