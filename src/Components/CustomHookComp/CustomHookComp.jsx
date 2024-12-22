import React from 'react'
import useFetch from '../../Hooks/useFetch'

const CustomHookComp = () => {
  const {data,loading,error} = useFetch({method:"GET",url:`https://jsonplaceholder.typicode.com/posts`});
  if(loading)return <p>Loading...</p>;
  if(error)return <p>Error...{error}</p>
    return (

   

    <div><h1>Data</h1>
    {data.map((item,index)=>{
        return <div key={index}>{item.title}</div>

    })}
    </div>
  )
}

export default CustomHookComp