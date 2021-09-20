import React, { useState } from "react";
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import GoogleButton from 'react-google-button'

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/loginPage.js";


const useStyles = makeStyles(styles);

export default function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const clientId = "762293579403-b6nio50qd78f6flq4ssq2pm5nkblqiig.apps.googleusercontent.com";

  const { onLoginSuccess, 
          onFailureSuccess,
          ...rest } = props;
  return (
    <div>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]} style={{"margin-top": "-50px"}}>
                <form className={classes.form}>
                  <CardHeader color="primary" className={classes.cardHeader} style={{"background":"#3498DB"}}>
                    <h2>Login</h2>
                    <div className={classes.socialLine}>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className={"fab fa-twitter"} />
                      </Button>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className={"fab fa-facebook"} />
                      </Button>
                      <Button
                        justIcon
                        href="#pablo"
                        color="transparent"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className={"fab fa-google-plus-g"} />
                      </Button>
                    </div>
                  </CardHeader>
                  <br/>
                  <h4 className={classes.divider}><b>Please login to the application to try the model.</b></h4>
                  <br/>
                  <CardFooter className={classes.cardFooter}>
                    <GoogleLogin
                      render={renderProps => (
                        <GoogleButton onClick={renderProps.onClick} disabled={renderProps.disabled}/>
                      )}
                        className="signInButton"
                        clientId={clientId}
                        buttonText="Login with Google"
                        onSuccess={onLoginSuccess}
                        onFailure={onFailureSuccess}
                        cookiePolicy={"single_host_origin"}
                    />
                  </CardFooter>
                  <br></br>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
    </div>
  );
}
