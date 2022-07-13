import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import style from "./style.module.css";
const Login = () => {
  const { loginWithRedirect, logout, user, isLoading } = useAuth0();
  return (

    <div className={style.div}>
      {!isLoading && !user && (
        <button onClick={() => loginWithRedirect()}>Log in</button>
      )}
      {!isLoading && user && <button onClick={() => logout()}>Log out</button>}
    </div>
  );
};

export default Login;
