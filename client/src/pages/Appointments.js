import React from 'react'
import useAxios from 'axios-hooks'
import AxiosContainer from '../components/AxiosContainer';
import StringifyJSON from '../components/StringifyJSON';
import useAxiosOnMount from '../hooks/useAxiosOnMount';
import Appointment from '../components/Appointment';
import List from '../components/List';
import AppointmentForm from '../components/AppointmentForm';


const Appointments = () => {
  const {data:appointments,loading,error} = useAxiosOnMount('/api/all_good');
  const renderOneAppointment = (appointmentObj) => {
    console.log(appointmentObj)
    return <Appointment key={appointmentObj.id} {...appointmentObj} />
  }
  
  return (
    <AxiosContainer title={'Appointments'} loading={loading} error={error}>
      <List list={appointments} renderItem={renderOneAppointment}/>
    
    </AxiosContainer>
  )
}
export default Appointments

// import React from 'react'
// import useAxios from 'axios-hooks'
// import AxiosContainer from '../components/AxiosContainer';
// import StringifyJSON from '../components/StringifyJSON';

// const Appointments = () => {
//   const [{data,loading,error},refetch] = useAxios('/api/appointments');
  
//   return (
//     <AxiosContainer title={'Appointments'}loading={loading} error={error}>
//       <StringifyJSON jsObj={data}/>
//     </AxiosContainer>
//   )
// }
// export default Appointments
