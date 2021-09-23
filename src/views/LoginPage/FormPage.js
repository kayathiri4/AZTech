import React, { useState } from "react";


// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import axios from "axios";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Components from "views/Components/Components";

import styles from "assets/jss/material-kit-react/views/loginPage.js";


const useStyles = makeStyles(styles);

export default function FormPage(props) {
    const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
    setTimeout(function () {
        setCardAnimation("");
    }, 700);
    const classes = useStyles();
    const [ showError, setShowError ] = useState(false);
    const [ showDashboard, setShowDashboard ] = useState(false);
    const [ response, setResponse ] = useState("undefined");
    const [ clientId, setClientId ] = useState(undefined);


    const { ...rest } = props;

    // API call
    const handleSubmit = (event) => {
        console.log("clicked");
        event.preventDefault();
        setShowDashboard(true);

        const clientId = event.target.elements?.clientId?.value;
        console.log(clientId);
        if (clientId === undefined) {
            setShowError(true);
            return;
        }

        axios.get("/dev/custom").then(res => {
            console.log(res);
            const json = JSON.parse(res.data.body);
            console.log(json);
            setResponse(json);
            setClientId(clientId);
            setShowDashboard(true);
        }).catch (error => {
            console.log(error)
        });
            
         

        // var request = new XMLHttpRequest();
        // request.onreadystatechange = (e) => {
        // if (request.readyState !== 4) {
        //     return;
        // }

        // if (request.status === 200) {
        //     console.log('success', request.responseText);
        // } else {
        //     console.warn('error');
        // }
        // };

        // request.open('GET', 'https://0au5rrtzyi.execute-api.ap-southeast-1.amazonaws.com/dev/customer');
        // request.send();
        
        // fetch('https://0au5rrtzyi.execute-api.ap-southeast-1.amazonaws.com/dev/custom',{
        //     mode: 'cors',
        //     method: 'GET',
        //     header: {
        //         'Access-Control-Allow-Origin':'*',
        //         'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token'
        //     },
        // })
        // .then(response => {
        //     if (response) {
        //         // setShowDashboard(true);
        //         console.log(response)
        //         // return response.json();
        //     } else {
        //         setShowError(true);
        //     }
        // });
    }

  return (
    <div>
        { !showDashboard ? 
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]} style={{"margin-top": "-50px"}}>

                <form className={classes.form} id="form" onSubmit={handleSubmit}>
                  <CardHeader color="primary" className={classes.cardHeader} style={{"background":"#3498DB"}}>
                    <h2>Customer DNA</h2>
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

                  <h4 className={classes.divider}>Please enter the Client ID
                  { showError && <h6 id="error" style={{"color": "red", "text-transform": "none"}}> The ID you entered is invalid. Please try again.</h6>}
                        <GridContainer style={{"margin-left": "10px", "margin-right": "10px"}}>
                            <GridItem xs={12} sm={12} md={12} lg={12}>
                            <CustomInput
                                required
                                labelText="Customer Id"
                                id="clientId"
                                formControlProps={{
                                fullWidth: true,
                                }}
                            />
                            </GridItem>            
                        </GridContainer>
                        </h4>
                        <CardFooter className={classes.cardFooter}>  
                        <input type="submit" value="Submit" />

                        {/* <Button color="primary" style={{"background-color": "rgb(52, 152, 219)"}}>Submit</Button> */}
                        </CardFooter>

                    </form>

                  <br/>
                  
                  <br></br>
              </Card>
            </GridItem>
          </GridContainer>
        </div> 
        : 
        <Components
            clientId = { clientId }
            response = { response }
        /> 
    }
    </div>
  );
}
