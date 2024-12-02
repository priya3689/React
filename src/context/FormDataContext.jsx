import { createContext, useState } from "react";

export const formContext = createContext();

const ContextProvider = ({ children }) => {
  const [formData, setFormData] = useState({});
  console.log(formData);
  

  return (
    <formContext.Provider value={{ formData,setFormData }}>{children}</formContext.Provider>
  );
};

export default ContextProvider;
