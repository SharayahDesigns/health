import React from 'react'
import useAxios from 'axios-hooks'
import AxiosContainer from '../components/AxiosContainer';
import StringifyJSON from '../components/StringifyJSON';

const Doctors = () => {
  const [{data,loading,error},refetch] = useAxios('/api/doctors');
  
  
  return (
    <AxiosContainer title={'Doctors'}loading={loading} error={error}>
      <StringifyJSON jsObj={data} />
     
    </AxiosContainer>
  )
}
export default Doctors
