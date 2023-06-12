import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Edit() {
  // const [travel,setTravel]=useState([])


  const [Package, setPack] = useState('')
  const [itinery, setIt] = useState('')
  const [price, setPri] = useState(0)
  const [name, setName] = useState('')
  const [photo, setPho] = useState('')

  const params = useParams()

  const fetchTravel = async () => {
    const result = await axios.get('http://localhost:8000/getEmployee/' + params.id)
    setPack(result.data.message.Package);
    setIt(result.data.message.itinery);
    setPri(result.data.message.price);
    setName(result.data.message.name);
    setPho(result.data.message.photo);

  }

  const editTravel = async (e) => {
    const body = {
      id: params.id,
      Package,
      itinery,
      price,
      name,
      photo



    }
    const result = await axios.post('http://localhost:8000/editTravel/', body)
    alert(result.data.message)

  }



  useEffect(() => {
    fetchTravel()
  }, [])
  // console.log(travel);

  return (
    <div>


      <h1 className='text-center'>UPDATE TRIP</h1>

      <form action="" className='container w-50 bg-warning p-5 mb-5 text-center border'>
        <input onChange={(e) => setName(e.target.value)} value={name} type="text" className='form-control mt-3' placeholder='package provider name' />
        <input onChange={(e) => setPack(e.target.value)} value={Package} type="text" className='form-control mt-3' placeholder='Package name ' />
        <input onChange={(e) => setIt(e.target.value)} value={itinery} type="text" className='form-control mt-3' placeholder='package Itinery' />
        <input onChange={(e) => setPri(e.target.value)} value={price} type="text" className='form-control mt-3' placeholder='Amount' />
        <input onChange={(e) => setPho(e.target.value)} value={photo} type="text" className='form-control mt-3' placeholder='Update image url ' />

        <button onClick={(e) => editTravel(e)} className='btn btn-primary p-2 w-25 mt-4 '>UPDATE</button>



      </form>
    </div>
  )
}

export default Edit