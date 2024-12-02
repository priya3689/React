import { useNavigate } from "react-router-dom";
export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex  text-3xl flex-row  justify-around   border border-red-500">
      <div className="cursor-pointer" onClick={() => navigate("/todo")}>
        {" "}
        Todo
      </div>
      <div className="cursor-pointer" onClick={() => navigate("/counter")}>
        {" "}
        Counter
      </div>
      <div className="cursor-pointer" onClick={() => navigate("/loadData")}>
        {" "}
        Load Data
      </div>
      <div className="cursor-pointer" onClick={() => navigate("/form")}>
        {" "}
        Form
      </div>
    </div>
  );
};
