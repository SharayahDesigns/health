import React from 'react'
import useAxios from 'axios-hooks'
import AxiosContainer from '../components/AxiosContainer';
import StringifyJSON from '../components/StringifyJSON';
import useAxiosOnMount from '../hooks/useAxiosOnMount';
import Appointment from '../components/Appointment';
import List from '../components/List';


const Appointments = () => {
  const {data:appointments,loading,error} = useAxiosOnMount('/api/appointments');
  
  const renderOneAppointment = (appointmentObj) => {
  return <Appointment {...appointmentObj}/>
  }
  
  return (
    <AxiosContainer title={'Appointments'} loading={loading} error={error}>
      <List list={appointments} renderItem={renderOneAppointment}/>
     
    </AxiosContainer>
  )
}
export default Appointments

