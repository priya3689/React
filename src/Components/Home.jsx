import { useNavigate } from "react-router-dom";
export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex  text-3xl flex-row  justify-between   border border-red-500">
      <div onClick={() => navigate("/todo")}> todo</div>
      <div onClick={() => navigate("/counter")}> Counter</div>
    </div>
  );
};
