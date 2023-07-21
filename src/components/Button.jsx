import React, { useState } from 'react'

export default function Button() {
 const[name,setName] =  useState(true)
  return (
    <>
    <button onClick={()=>{
        setName(!name)
    }}>
        {name?<p>Show</p>: <p>Hide</p>}
    </button>
    <br />
    <br />
    {name ?" " :<h1>press to hide</h1>}

    </>
  )
}
