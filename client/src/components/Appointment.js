import Card from './Card'

import React from 'react'

const Appointment = ({doctor, date, patient}) => {
  return (
    <Card>
      <h1>Patient: {patient.name} </h1>
      <h1>Doctor: {doctor.name} </h1>
      <p>Appointment Date: {date}</p>
      
    </Card>
  )
}

export default Appointment

// ID:{patient.id}
// ID:{doctor.id}
