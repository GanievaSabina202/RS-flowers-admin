import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import style from "./style.module.css";
const Login = () => {
  const { loginWithRedirect, logout, user, isLoading } = useAuth0();
  return (
    <div className={style.div}>

      <div className={style.logincardwrap}>
        <img src="http://cdn.onlinewebfonts.com/svg/img_542942.png" />
        {!isLoading && !user && (
          <button
            className={style.loginbtn}
            onClick={() => loginWithRedirect()}
          >
            Log in
          </button>
        )}
        {!isLoading && user && (
          <button className={style.loginbtn} onClick={() => logout()}>
            Log out
          </button>
        )}
      </div>

    </div>
  );
};

export default Login;
