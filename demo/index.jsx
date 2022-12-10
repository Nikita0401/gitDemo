import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";

export const Home = () => {
  const history = useNavigate();
  const values = useContext(UserContext);
  const {login, setLogin} = values;
  useEffect(() => {
    if (!login) {
      history("/login");
    }
  },[]);
  return <h1> Login Succesfully</h1>;
};
