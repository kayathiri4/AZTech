import React, {useState} from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import './style.css';

function Login() {


  const [ showLogin, setShowLogin ] =  useState(true);
  const [ showLogout, setShowLogout ] =  useState(false);

  const onLoginSuccess = (res) => {
    console.log("Login success: ", res.profileObj)
    setShowLogin(false);
    setShowLogout(true);
  }

  const onFailureSuccess = (res) => {
    console.log("Login failure: ", res)
  }

  const onSignOutSuccess = () => {
    alert("Signout successfully")
    setShowLogin(true);
    setShowLogout(false);
  }

  const clientId = "762293579403-97l40lc1o04losrmhqif405jnkkhnugd.apps.googleusercontent.com";
  return (
    <div>

      <h1>Welocme to my page</h1>
      { showLogin &&
        <GoogleLogin
          clientId={clientId}
          buttonText="Login with Google"
          onSuccess={onLoginSuccess}
          onFailure={onFailureSuccess}
          cookiePolicy={"single_host_origin"}
        />
      }
      { showLogout && 
        <GoogleLogout
          clientId={clientId}
          buttonText="Logout"
          onLogoutSuccess={ onSignOutSuccess }
        >
        </GoogleLogout>
    }
    </div>
  );
}

export default Login;
