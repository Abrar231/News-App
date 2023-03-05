import React from 'react'
import loadingG from './loading.gif'

export default function Spinner() {
  return (
    <div className='container text-center m-3'>
        <img src={loadingG}  alt="..."/>
    </div>
  )
}
