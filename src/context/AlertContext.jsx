// src/context/AlertContext.jsx
import { createContext, useContext, useState } from "react";

const AlertContext = createContext(); //provider dell'alert context

const AlertProvider = ({ children }) => {    
  const [alertData, setAlertData] = useState({
    visible: false,
    message: "",
    type: "success",
  });

  const showAlert = ({ message, type = "success" }) => {
    setAlertData({ visible: true, message, type });

    //set timeout 
    setTimeout(() => {
      setAlertData({ visible: false, message: "", type: "success" });
    }, 3000);
  };

  //wrapping nell'app.jsx
  return (
    <AlertContext.Provider value={{ alertData, showAlert }}> 
      {children}
    </AlertContext.Provider>
  );
};

const useAlertContext = () => useContext(AlertContext);

export { AlertProvider, useAlertContext };
