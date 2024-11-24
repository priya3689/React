import { useEffect, useState } from "react";
function LoadData(){
    function loadData(){
       fetch(`https://jsonplaceholder.typicode.com/posts`)
       .then(res => res.json())
       .then(data => setData(data))
       
    }
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
  
    </div>
 

    )};

    export default LoadData;


  /*  
    
    import { useEffect, useState } from "react";
import "./Counter.css";

export const Counter = () => {
  const [data, setData] = useState([]);
  console.log(data, "data");

  //hooks
  //usestate
  // useEffect

  useEffect(() => {
    getApi();
  }, []);

  function getApi() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json));
  }

  return (
    <div>
      {data?.map((post, index) => {
        console.log(index);

        return <div key={post.id}>{post.title} </div>;
      })}
    </div>
  );
};

    
    
    
    
    */
    