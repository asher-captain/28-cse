import React from 'react'

function ICard({ data }) {
  return (
    <div style={{
      border: '10px solid white',
      height: '400px',
      width: '300px'
    }}>
      <img src={data.pic} height={200} width={200} />

      <h2>Roll: {data.roll}</h2>
      <h2>Name: {data.name}</h2>
      <h2>Branch: {data.branch}</h2>
      <h2>College: {data.college}</h2>
    </div>
  )
}

export default ICard