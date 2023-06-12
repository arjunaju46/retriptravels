import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { v4 as uuid } from 'uuid'


function Add() {

  const [id, setId] = useState('')
  const [Package, setPack] = useState('')
  const [itinery, setIt] = useState('')
  const [price, setPri] = useState(0)
  const [name, setName] = useState('')
  const [photo, setPho] = useState('')

  useEffect(() => {
    setId(uuid().slice(0, 3))

  }, [])

  let location=useNavigate()
  const addTravel = async (e) => {
    e.preventDefault()
    setId(uuid().slice(0, 3))
    const body = {
      id,
      Package,
      itinery,
      price,
      name,
      photo


    }
   const result= await axios.post('http://localhost:8000/addTravels',body)
   location('/')

   alert(result.data.message)

  }
  // console.log(id);
  // console.log(name);

  return (
    <div>
      <h1 className='text-center'>ADD NEW TRIP</h1>

      <form action="" className='container w-50 bg-warning p-5 mb-5 text-center border'>
        <input onChange={(e) => setName(e.target.value)} type="text" className='form-control mt-3' placeholder='package provider name' />
        <input onChange={(e) => setPack(e.target.value)} type="text" className='form-control mt-3' placeholder='Package name ' />
        <input onChange={(e) => setIt(e.target.value)} type="text" className='form-control mt-3' placeholder='Oackage Itinery' />
        <input onChange={(e) => setPri(e.target.value)} type="text" className='form-control mt-3' placeholder='Amount' />
        <input  onChange={(e) => setPho(e.target.value)}  type="text" className='form-control mt-3' placeholder='Add postImage website uploded image direct Link ' />

        <button onClick={(e) => addTravel(e)} className='btn btn-primary p-2 w-25 mt-4 '>Add</button>



      </form>    </div>
  )
}

export default Add