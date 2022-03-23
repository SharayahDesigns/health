// import React from 'react'
// import useAxios from 'axios-hooks'
// import AxiosContainer from '../components/AxiosContainer';
// import StringifyJSON from '../components/StringifyJSON';
// import useAxiosOnMount from '../hooks/useAxiosOnMount';

// const Doctors = () => {
//   const {data,loading,error} = useAxiosOnMount('/api/doctors');
  
  
//   return (
//     <AxiosContainer title={'Doctors'}loading={loading} error={error}>
//       <StringifyJSON jsObj={data} />
     
//     </AxiosContainer>
//   )
// }
// export default Doctors


import React from 'react'
import useAxios from 'axios-hooks'
import AxiosContainer from '../components/AxiosContainer';
import StringifyJSON from '../components/StringifyJSON';
import useAxiosOnMount from '../hooks/useAxiosOnMount';
import List from '../components/List';

const Doctors = () => {
  const [{data,loading,error},refetch] = useAxios('/api/doctors');
  
  return (
    <AxiosContainer title={'Doctors'}loading={loading} error={error}>
      <StringifyJSON jsObj={data} />
      {/* <List data={doctors}/> */}
    </AxiosContainer>
  )
}
export default Doctors
