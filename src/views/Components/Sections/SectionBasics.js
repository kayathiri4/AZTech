import React, { useState, useEffect } from 'react';
// plugin that creates slider
import Slider from "nouislider";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import Switch from "@material-ui/core/Switch";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import People from "@material-ui/icons/People";
import Check from "@material-ui/icons/Check";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.js";
import Paginations from "components/Pagination/Pagination.js";
import Badge from "components/Badge/Badge.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionBasics(props) {
  const classes = useStyles();
  const { clientId, response, ...rest } = props;

  const [checked, setChecked] = React.useState([24, 22]);
  const [selectedEnabled, setSelectedEnabled] = React.useState("b");
  const [checkedA, setCheckedA] = React.useState(true);
  const [checkedB, setCheckedB] = React.useState(false);
  const [packages, setPackages] = React.useState(undefined);
  const parcels = { 0: "subs"}
  const labels = ['IT', 'Accounting', 'Human Resource',
        'Cleaning', 'Security'];
  const datasets = [
        {
            label: 'department',
            backgroundColor: [
                '#B21F00',
                '#C9DE00',
                '#2FDE00',
                '#00A6B4',
                '#6800B4'
            ],
            hoverBackgroundColor: [
                '#501800',
                '#4B5000',
                '#175000',
                '#003350',
                '#35014F'
            ],
            data: [45, 34, 80, 72, 38]
        }
    ]

  useEffect(() => {
    setPackages(response.packages_using)
    console.log(typeof(response.packages_using));
  }, [response.packages_using])
  
  return (
    <div className={classes.sections}>
      <div className={classes.container}>
        <div className={classes.title}>
          <h2>Customer Details</h2>
        </div>
        <div id="buttons">
        <form id="form">
          <b>User ID:</b>  { clientId ? clientId : "2354678" }
          <br/>
          <br/>
          <b>District: </b>{response.district ? response.district : "Matara"}
          <br/>
           <b> Age:</b> { response.age ? response.age : "27"}
          <br/>
           <b>Average Monthly Bill: </b> Rs { response.average_monthly_bill? response.average_monthly_bill : "2700" }
          <br/>
          <b>Number of fixed Broadband Accounts</b> { response.number_of_fixed_bb_accounts ?response.number_of_fixed_bb_accounts : "2" }
          <br/>
          <b>Number of IP TV Accounts</b> { response.number_of_iptv_accounts ? response.number_of_iptv_accounts : "0" }
          <br/>
          <b>Packages Using: </b> 
          <GridContainer>
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <Button style={{"padding": "30px 90px"}}>{ response.packages_using ? response.packages_using[0] : "WFH package" }</Button>
            </GridItem> 
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <Button style={{"padding": "30px 90px"}}>{ response.packages_using ? response.packages_using[1] : "OTT package" }</Button>
            </GridItem> 
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <Button style={{"padding": "30px 90px"}}>{ response.packages_using ? response.packages_using[2] : "Messenger package" }</Button>
            </GridItem> 
          </GridContainer>
          <hr/>
          <b>Interests: </b> 
          <GridContainer>
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <Button style={{"padding": "30px 90px"}}>{ response.interests ? response.interests[0] : "Data using" }</Button>
            </GridItem> 
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <Button style={{"padding": "30px 90px"}}>{ response.interests ? response.interests[1] : "E-Channeling" }</Button>
            </GridItem> 
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <Button style={{"padding": "30px 90px"}}>{ response.interests ? response.interests[2] : "OTT usage" }</Button>
            </GridItem> 
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <Button style={{"padding": "30px 90px"}}>{ response.interests ? response.interests[3] : "Video Conference" }</Button>
            </GridItem> 
          </GridContainer>
          <br/>
          <hr/>
          <br/>
          <b>Services Using: </b> 
          <GridContainer>
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <Button style={{"padding": "30px 80px"}}>{ response.services_using ? response.services_using[0] : "OTT subscription" }</Button>
            </GridItem> 
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <Button style={{"padding": "30px 90px"}}>{ response.services_using ? response.services_using[1] : "E-Channeling" }</Button>
            </GridItem> 
          </GridContainer>
          <br/>
          <hr/>
          <b>Recommended Packages: </b> 
          <GridContainer>
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <Button color="primary" style={{"padding": "30px 90px"}}>{ response.recommended_package ? response.recommended_package[0] : "OTT Package" }</Button>
            </GridItem> 
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <Button color="primary" style={{"padding": "30px 90px"}}>{ response.recommended_package ? response.recommended_package[1] : "WHF Package" }</Button>
            </GridItem> 
          </GridContainer>
          <br/>
          <hr/>
          <b>Recommended Services: </b> 
          <GridContainer>
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <Button color="primary" style={{"padding": "30px 90px"}}>{ response.recommended_services ? response.recommended_services[0] : "E-Channeling" }</Button>
            </GridItem> 
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <Button color="primary" style={{"padding": "30px 90px"}}>{ response.recommended_services ? response.recommended_services[1] : "Music Subcription" }</Button>
            </GridItem> 
          </GridContainer>
          <br/>
          <br/>
          <h2>Potential Customers</h2>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4} lg={3}>
            <Button style={{"padding": "30px 90px"}}>Chanelling <br/>100</Button>
            <Button color="primary" style={{"margin":"10px 40px"}}>Promote Service</Button>
            </GridItem>            
            <GridItem xs={12} sm={4} md={4} lg={3}>
            <Button style={{"padding": "30px 100px"}}>Shoping <br/> 4200</Button>
            <Button color="primary" style={{"margin":"10px 40px"}}>Promote Service</Button>
            </GridItem>
            <GridItem xs={12} sm={4} md={4} lg={3}>
            <Button style={{"padding": "30px 100px"}}>Dining <br/> 2700</Button>
            <Button color="primary" style={{"margin":"10px 40px"}}>Promote Service</Button>
            </GridItem>
            <GridItem xs={12} sm={4} md={4} lg={3}>
            <Button style={{"padding": "30px 100px"}}>Music <br/> 4600</Button>
            <Button color="primary" style={{"margin":"10px 40px"}}>Promote Service</Button>
            </GridItem>
          </GridContainer>
          <br/>
          <hr/>
          </form>
          <h2>Find Customers</h2>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6} lg={6}>
            <CustomInput
                required
                labelText="Location"
                id="Location"
                formControlProps={{
                fullWidth: true,
                }}
            />
              <CustomInput
                required
                labelText="Age"
                id="Age"
                formControlProps={{
                fullWidth: true,
                }}
            /><CustomInput
            required
            labelText="Interest"
            id="Interest"
            formControlProps={{
            fullWidth: true,
            }}
        />
            </GridItem> 
            <GridItem xs={12} sm={6} md={6} lg={6}>
              <h4 style={{"margin-left": "30%"}}><b>Potential Customers</b></h4>
              <h4 style={{"margin-left": "40%"}}><b>1000</b></h4>
              <br/>
              <GridContainer>
              <GridItem xs={12} sm={6} md={6} lg={6}>
              <Button style={{"padding": "30px 90px"}}>Get Potential <br/>Customer</Button>
              </GridItem>
              <GridItem xs={12} sm={6} md={6} lg={6}>
              <Button style={{"padding": "30px 90px"}}>Promote <br/>Service</Button>
              </GridItem>
              </GridContainer>
            </GridItem> 
          </GridContainer>
            <br/>
            <hr/>
            <br/>
          <h2>Available Packages</h2>
          <GridContainer>
            <GridItem s={12} sm={4} md={4} lg={3}>
              <h3>Socialmedia 1 - Rs 499</h3>
              <h6>Unlimited - Valid for 30 days</h6>
            </GridItem>
            <GridItem s={12} sm={4} md={4} lg={3}>
              <h3>Socialmedia 2 - Rs 299</h3>
              <h6>Unlimited - Valid for 30 days</h6>
            </GridItem>
            <GridItem s={12} sm={4} md={4} lg={3}>
              <h3>Socialmedia 3 - Rs 399</h3>
              <h6>Unlimited - Valid for 30 days</h6>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
