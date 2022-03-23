import axios  from "axios";
import { useEffect, useState } from "react";

// heres is my hook
// if you want to use this you need to give a valid url 
const useAxiosOnMount = (url) => {
  const [data,setData] = useState([]);
  const [loading,setLoading] = useState(true)
  const [error,setError] = useState(null)
  
  useEffect(() => {
    getData();
  },[]);

  const getData = async() => {
    setLoading(true)
    try {
      let res = await axios.get(url)
      setData(res.data)
      setLoading(false)
    } catch(error) {
      setError(error)
      setLoading(false)
    }
  }
  
  return {data,loading,error}
};

export default useAxiosOnMount

