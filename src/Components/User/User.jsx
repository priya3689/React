import { useContext } from "react";
import { formContext } from "../../context/FormDataContext";
import "./User.css";

const User = () => {
  const { formData } = useContext(formContext);
  return <div>
    
    <div className="userComponent">
      <h3>Welcome {formData.name}!</h3>
      Email : <b>{formData.email} </b> 
        | Country :<b> {formData.country}</b>
    </div>
    
    
    </div>;
};

export default User;
