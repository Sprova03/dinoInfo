import React from 'react'

export const DinoScreenCuriosidades = ({data}) => {
  return (
    <h4>
    {data.curiosidades.map(e =>  <p>{e}</p>)}
  </h4>
  )
}
