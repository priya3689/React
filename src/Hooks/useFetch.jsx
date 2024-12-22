import { useEffect, useState } from "react";
import axios from "axios";

const useFetch =(axiosconfig) => {

    const [data, setData]=useState(null);
    const [loading,setLoading] = useState(true);
    const[error,setError] = useState(null);
    console.log(axiosconfig);
    useEffect(()=>{
        
        const fetchData = async () => {
          try {
            setLoading(true);
            const response = await axios(axiosconfig);
            
            setData(response.data);
          } catch (error) {
            setError(error.message);
            console.log(error)
          }
          finally {
            setLoading(false);
          }
        }
        fetchData();
    },[JSON.stringify(axiosconfig)] )

    return {data: data,loading: loading,error: error}
}

export default useFetch;