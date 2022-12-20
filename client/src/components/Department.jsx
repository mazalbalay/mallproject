import React from 'react'
import { useParams } from 'react-router-dom';

export default function Department() {
    let { depId } = useParams();

  return (
    <div>Department id : {depId}</div>
  )
}
