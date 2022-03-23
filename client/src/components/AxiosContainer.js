import React from 'react'
import useAxios from 'axios-hooks'
import Card from './Card'
import Loader from './Loader/Loader'

const AxiosContainer = ({title, loading,error,children}) => {
  if(loading) return <h1 className='loading'><Loader/>  {title}</h1>
  if(error) return <p>Error</p>
  return (
    <Card>
      <h1>{title}</h1>
      {children}
    </Card>
  )
}
export default AxiosContainer
