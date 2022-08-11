import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { IoArrowBack } from 'react-icons/io5'
import axios from 'axios'
import { searchByCoutrie } from '../config'
import { Button } from '../components/Button'
import Info from '../components/Info'

const Details = () => {
  const params = useParams()
  const push = useNavigate()
  let goBack = useNavigate()
  function back() {
    goBack(-1)
  }

  const [country, setCountry] = useState(null)
  console.log(country)
  useEffect(() => {
    axios
      .get(searchByCoutrie(params.name))
      .then(({ data }) => setCountry(data[0]))
  }, [params.name])

  return (
    <div>
      <Button onClick={back}>
        <IoArrowBack /> Back
      </Button>
      {country && <Info push={push} {...country} />}
    </div>
  )
}

export default Details
