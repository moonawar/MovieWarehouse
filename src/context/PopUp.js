import React, { createContext, useState } from "react";
import classes from '../components/Alert.module.css'

export const PopUpContext = createContext();

export const PopUpProvider = (props) => {
  const classAlert = classes.alert;
  const hideAlert = classes.hide;
  const [alertClass, setAlertClass] = useState(hideAlert);
  const [popUpText, setPopUpText] = useState("");

  const showPopUp = () => {
    setAlertClass(classAlert);
    setTimeout(() => {
      setAlertClass(hideAlert);
      setPopUpText("")
    }, 4000);
  };
  return (
    <PopUpContext.Provider
      value={[alertClass, setAlertClass, popUpText, setPopUpText, showPopUp]}
    >
      {props.children}
    </PopUpContext.Provider>
  );
};
