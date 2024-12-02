import { useContext } from "react";
import { formContext } from "../context/FormDataContext";

const User = () => {
  const { formData } = useContext(formContext);

  return <div>{formData.name}</div>;
};

export default User;
