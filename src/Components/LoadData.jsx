import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function LoadData(){
    function loadData(){
       fetch(`https://jsonplaceholder.typicode.com/posts`)
       .then(res => res.json())
       .then(data => setData(data))
       
    }
    const navigate = useNavigate();
    const[data,setData]=useState([]);
    useEffect(() => loadData(),[]);
    console.log("Data-" +data);
    return( <div> 
          
    {data.map((item,index)=> {
       
        return ( <div key={index}>
            <div>ID - {item.userId}</div>
            <div>Title - {item.title}</div>
        </div>)
    })}; 
     <div className="cursor-pointer mt-10" onClick={()=>navigate("/")}>Back to Home</div>

    </div>
 

    )};

    export default LoadData;


  