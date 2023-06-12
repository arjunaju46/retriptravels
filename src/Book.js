import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'



function Book() {

  const [bname, setBname] = useState('')
  const [email, setEm] = useState('')
  const [contact, setCon] = useState(0)

  const params = useParams()





  // const fetchTravel = async () => {
  //   const result = await axios.get('http://localhost:8000/getEmployee/' + params.id)
  //   setBname(result.data.message.bname);
  //   setEm(result.data.message.email);
  //   setCon(result.data.message.contact);

  // }


  let location=useNavigate()

  const bookTravel = async (e) => {
    e.preventDefault()

    const body = {
      id: params.id,
     bname,
     email,
     contact


    }
    const result = await axios.post('http://localhost:8000/bookTravel/', body)
    location('/')

    alert(result.data.message)

  }



  useEffect(() => {
    // fetchTravel()
  }, [])

  return (
    <div>
    <h1 className='text-center'>BOOK YOUR TRIP</h1>

    <form action="" className='container w-50 bg-warning p-5 mb-5 text-center border'>
      <input onChange={(e) => setBname(e.target.value)}  type="text" className='form-control mt-3' placeholder='Enter your name' />
      <input onChange={(e) => setEm(e.target.value)}  type="text" className='form-control mt-3' placeholder='Email id' />
      <input  onChange={(e) => setCon(e.target.value)} type="text" className='form-control mt-3' placeholder='Contact number' />

      <button onClick={(e) => bookTravel(e)}   className='btn btn-primary p-2 w-25 mt-4 '>BOOK NOW</button>



    </form>  
    </div>
  )
}

export default Book