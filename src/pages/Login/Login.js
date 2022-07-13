import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect, logout, user, isLoading } = useAuth0();
  return (
    <div>
      Salam
      {!isLoading && !user && (
        <button onClick={() => loginWithRedirect()}>Log in</button>
      )}
      {!isLoading && user && <button onClick={() => logout()}>Log out</button>}
    </div>
  );
};

export default Login;
