import { useNavigate } from "react-router-dom";
import UseRefForm from "./UseRefForm/UseRefForm";
import CustomHookComp from "./CustomHookComp/CustomHookComp";
import UseMemoComp from "./UseMemo/UseMemoComp";
export const Home = () => {
  const navigate = useNavigate();
  return (
    <>
    <h2 className="colorBlack">React Components</h2>

    <div className="flex  text-3xl flex-row  justify-around   border border-red-500">
      
      <div className="homeComp cursor-pointer " onClick={() => navigate("/todo")}>
        {" "}
        Todo
      </div>
      <div className="homeComp cursor-pointer " onClick={() => navigate("/counter")}>
        {" "}
        Counter
      </div>
      <div className="homeComp cursor-pointer " onClick={() => navigate("/loadData")}>
        {" "}
        Load Data
      </div>
      <div className="homeComp cursor-pointer " onClick={() => navigate(`/form/${2}`)}>
        {" "}
        Form
       </div>
       <div className="homeComp cursor-pointer " onClick={() => navigate("/useRef")}>
        {" "}
        Use Ref Form
      </div>
      <div className="homeComp cursor-pointer " onClick={() => navigate("/customHook")}>
        {" "}
        Custom Hook
      </div>
      <div className="homeComp cursor-pointer " onClick={() => navigate("/useMemo")}>
        
        Use Memo
      </div>
      <div className="homeComp cursor-pointer " onClick={() => navigate("/suspense")}>
        Suspense
      </div>
      <div className="homeComp cursor-pointer " onClick={() => navigate("/useCallBack")}>
        Use Call Back
      </div>
     
    </div>
    </>
    
  );



};
