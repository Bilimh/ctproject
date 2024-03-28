import React from 'react'
import { useParams } from 'react-router'


const Id = () => {
    const {id} = useParams()
  return (
    <div>Id Dynamic Dashboard -ID : {id}</div>
  )
}

export default Id