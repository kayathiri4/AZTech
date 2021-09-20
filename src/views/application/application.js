import React, { useState , useEffect } from "react";
import { GoogleLogout } from 'react-google-login';

// nodejs library that concatenates classes
import classNames from "classnames";

// react components for routing our app without refresh

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "components/CustomButtons/Button.js";

// sections for this page
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";
import LoginPage from "views/LoginPage/LoginPage";

const useStyles = makeStyles(styles);

export default function Components() {
  const classes = useStyles();
  const [authenticatedUser, setAuthenticatedUser] = useState(undefined);
  const [userName, setUserName] = useState(undefined);

  const [ loginSuccess, setShowLoginSuccess ] =  useState(false);
  const clientId = "762293579403-97l40lc1o04losrmhqif405jnkkhnugd.apps.googleusercontent.com";

  useEffect(() => {
      const user = localStorage.getItem("user");
      const userName = localStorage.getItem("userName")
      if (user) {
          setAuthenticatedUser(user);
          setUserName(userName);
      }
  }, [])


  const onLoginSuccess = (res) => {
    console.log("Login success: ", res.profileObj)
    localStorage.setItem("user", res.profileObj);
    localStorage.setItem("userName", res.profileObj.email);
    localStorage.setItem("profileUrl", res.profileObj.imageUrl);
    console.log(res.profileObj.imageUrl);
    setShowLoginSuccess(true);
    setAuthenticatedUser(res.profileObj);
  }

  const onFailureSuccess = (res) => {
    console.log("Login failure: ", res);
  }

  const onSignOutSuccess = () => {
    localStorage.removeItem("user"); 
    localStorage.removeItem("userName"); 
    setAuthenticatedUser(undefined);
    console.log("logout");   
  }

  //   const { ...rest } = props;
  return (
    <div>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.section}>
          <div id="navbar" className={classes.navbar}>
            <div className={classes.navigation}>
              <Header
                brand={<h3>AZTech</h3>}
                color="dark"
                rightLinks={
                  <List className={classes.list}>
                    <ListItem className={classes.listItem}>
                      <Button
                        href="/"
                        color="transparent"
                        className={classes.navLink}
                      >
                        Home
                      </Button>
                    </ListItem>
                    {!authenticatedUser &&
                    <ListItem className={classes.listItem}>
                      <Button
                        href=""
                        className={classes.navLink}
                        onClick={(e) => e.preventDefault()}
                        color="transparent"
                      >
                        Login
                      </Button>
                    </ListItem>
                    }
                    { authenticatedUser &&
                    <ListItem className={classes.listItem}>
                      <CustomDropdown
                        left
                        caret={false}
                        hoverColor="black"
                        dropdownHeader={localStorage.getItem("userName")}
                        buttonText={
                          <img
                            src={localStorage.getItem("profileUrl")}
                            className={classes.img}
                            alt="profile"
                          />
                        }
                        buttonProps={{
                          className:
                            classes.navLink + " " + classes.imageDropdownButton,
                          color: "transparent",
                        }}
                        dropdownList={[
                        //   authenticatedUser.email,
                          <GoogleLogout
                            clientId={clientId}
                            buttonText="Logout"
                            render={renderProps => (
                                <div onClick={renderProps.onClick}>Logout</div>
                              )}
                            onLogoutSuccess={ onSignOutSuccess }
                            >
                          </GoogleLogout>,
                         
                        ]}
                      />
                    </ListItem>
                    }
                  </List>
                }
              />
              { !authenticatedUser ?
                <LoginPage
                  onLoginSuccess={onLoginSuccess}
                  onFailureSuccess={onFailureSuccess}
                /> 
                :<div>
                    <h2>Login Successful</h2>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
