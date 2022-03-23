import Card from './Card'

import React from 'react'

const Appointment = ({doctor, date, patient}) => {
  return (
    <Card>
      <h1>Patient: {patient.name} ID:{patient.id}</h1>
      <h1>Doctor: {doctor.name} ID:{doctor.id}</h1>
      <p>Appointment Date: {date}</p>
      
    </Card>
  )
}

export default Appointment


