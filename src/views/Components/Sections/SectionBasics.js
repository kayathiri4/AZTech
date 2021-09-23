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
          <b>User ID:</b>  { clientId }
          <br/>
          <br/>
          <b>District: </b>{response.district}
          <br/>
           <b> Age:</b> { response.age }
          <br/>
           <b>Average Monthly Bill: </b> Rs { response.average_monthly_bill }
          <br/>
          <b>Number of fixed Broadband Accounts</b> { response.number_of_fixed_bb_accounts }
          <br/>
          <b>Number of IP TV Accounts</b> { response.number_of_iptv_accounts }
          <br/>
          <b>Packages Using: </b> 
          <GridContainer>
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <Button style={{"padding": "30px 90px"}}>{ response.packages_using ? response.packages_using[0] : "Package1" }</Button>
            </GridItem> 
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <Button style={{"padding": "30px 90px"}}>{ response.packages_using ? response.packages_using[1] : "Package1" }</Button>
            </GridItem> 
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <Button style={{"padding": "30px 90px"}}>{ response.packages_using ? response.packages_using[2] : "Package1" }</Button>
            </GridItem> 
          </GridContainer>
          <hr/>
          <b>Interests: </b> 
          <GridContainer>
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <Button style={{"padding": "30px 90px"}}>{ response.interests ? response.interests[0] : "Interest1" }</Button>
            </GridItem> 
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <Button style={{"padding": "30px 90px"}}>{ response.interests ? response.interests[1] : "Interest2" }</Button>
            </GridItem> 
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <Button style={{"padding": "30px 90px"}}>{ response.interests ? response.interests[2] : "Interest3" }</Button>
            </GridItem> 
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <Button style={{"padding": "30px 90px"}}>{ response.interests ? response.interests[3] : "Interest4" }</Button>
            </GridItem> 
          </GridContainer>
          <br/>
          <hr/>
          <br/>
          <b>Services Using: </b> 
          <GridContainer>
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <Button style={{"padding": "30px 90px"}}>{ response.services_using ? response.services_using[0] : "Service1" }</Button>
            </GridItem> 
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <Button style={{"padding": "30px 90px"}}>{ response.services_using ? response.services_using[1] : "Service2" }</Button>
            </GridItem> 
          </GridContainer>
          <br/>
          <hr/>
          <b>Recommended Packages: </b> 
          <GridContainer>
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <Button color="primary" style={{"padding": "30px 90px"}}>{ response.recommended_package ? response.recommended_package[0] : "Package1" }</Button>
            </GridItem> 
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <Button color="primary" style={{"padding": "30px 90px"}}>{ response.recommended_package ? response.recommended_package[1] : "Package2" }</Button>
            </GridItem> 
          </GridContainer>
          <br/>
          <hr/>
          <b>Recommended Services: </b> 
          <GridContainer>
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <Button color="primary" style={{"padding": "30px 90px"}}>{ response.recommended_services ? response.recommended_services[0] : "Package1" }</Button>
            </GridItem> 
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <Button color="primary" style={{"padding": "30px 90px"}}>{ response.recommended_services ? response.recommended_services[1] : "Package2" }</Button>
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
          <h4>Available Packages</h4>
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


          {/* <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <Button color="primary">Default</Button>
              <Button color="primary" round>
                round
              </Button>
              <Button color="primary" round>
                <Favorite className={classes.icons} /> with icon
              </Button>
              <Button justIcon round color="primary">
                <Favorite className={classes.icons} />
              </Button>
              <Button color="primary" simple>
                simple
              </Button>
            </GridItem>
          </GridContainer> */}
          {/* <div className={classes.title}>
            <h3>
              <small>Pick your size</small>
            </h3>
          </div> */}
          {/* <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <Button color="primary" size="sm">
                Small
              </Button>
              <Button color="primary">Regular</Button>
              <Button color="primary" size="lg">
                Large
              </Button>
            </GridItem>
          </GridContainer>
          <div className={classes.title}>
            <h3>
              <small>Pick your color</small>
            </h3>
          </div>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <Button>Default</Button>
              <Button color="primary">Primary</Button>
              <Button color="info">Info</Button>
              <Button color="success">Success</Button>
              <Button color="warning">Warning</Button>
              <Button color="danger">Danger</Button>
              <Button color="rose">Rose</Button>
            </GridItem>
          </GridContainer>
        </div>
        <div className={classes.space50} />
        <div id="inputs">
          <div className={classes.title}>
            <h3>Inputs</h3>
          </div>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <CustomInput
                id="regular"
                inputProps={{
                  placeholder: "Regular",
                }}
                formControlProps={{
                  fullWidth: true,
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <CustomInput
                labelText="With floating label"
                id="float"
                formControlProps={{
                  fullWidth: true,
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <CustomInput
                labelText="Success input"
                id="success"
                success
                formControlProps={{
                  fullWidth: true,
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <CustomInput
                labelText="Error input"
                id="error"
                error
                formControlProps={{
                  fullWidth: true,
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <CustomInput
                labelText="With material Icons"
                id="material"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <People />
                    </InputAdornment>
                  ),
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <CustomInput
                labelText="With Font Awesome Icons"
                id="font-awesome"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <i className="fas fa-users" />
                    </InputAdornment>
                  ),
                }}
              />
            </GridItem>
          </GridContainer>
        </div>
        <div className={classes.space70} />
        <div id="checkRadios">
          <GridContainer>
            <GridItem xs={12} sm={6} md={4} lg={3}>
              <div className={classes.title}>
                <h3>Checkboxes</h3>
              </div>
              <div
                className={
                  classes.checkboxAndRadio +
                  " " +
                  classes.checkboxAndRadioHorizontal
                }
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      tabIndex={-1}
                      onClick={() => handleToggle(21)}
                      checkedIcon={<Check className={classes.checkedIcon} />}
                      icon={<Check className={classes.uncheckedIcon} />}
                      classes={{
                        checked: classes.checked,
                        root: classes.checkRoot,
                      }}
                    />
                  }
                  classes={{ label: classes.label, root: classes.labelRoot }}
                  label="Unchecked"
                />
              </div>
              <div
                className={
                  classes.checkboxAndRadio +
                  " " +
                  classes.checkboxAndRadioHorizontal
                }
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      tabIndex={-1}
                      onClick={() => handleToggle(22)}
                      checked={checked.indexOf(22) !== -1 ? true : false}
                      checkedIcon={<Check className={classes.checkedIcon} />}
                      icon={<Check className={classes.uncheckedIcon} />}
                      classes={{
                        checked: classes.checked,
                        root: classes.checkRoot,
                      }}
                    />
                  }
                  classes={{ label: classes.label, root: classes.labelRoot }}
                  label="Checked"
                />
              </div>
              <div
                className={
                  classes.checkboxAndRadio +
                  " " +
                  classes.checkboxAndRadioHorizontal
                }
              >
                <FormControlLabel
                  disabled
                  control={
                    <Checkbox
                      tabIndex={-1}
                      checkedIcon={<Check className={classes.checkedIcon} />}
                      icon={<Check className={classes.uncheckedIcon} />}
                      classes={{
                        checked: classes.checked,
                        root: classes.checkRoot,
                      }}
                    />
                  }
                  classes={{
                    label: classes.label,
                    disabled: classes.disabledCheckboxAndRadio,
                    root: classes.labelRoot,
                  }}
                  label="Disabled Unchecked"
                />
              </div>
              <div
                className={
                  classes.checkboxAndRadio +
                  " " +
                  classes.checkboxAndRadioHorizontal
                }
              >
                <FormControlLabel
                  disabled
                  control={
                    <Checkbox
                      tabIndex={-1}
                      checked={checked.indexOf(24) !== -1 ? true : false}
                      checkedIcon={<Check className={classes.checkedIcon} />}
                      icon={<Check className={classes.uncheckedIcon} />}
                      classes={{
                        checked: classes.checked,
                        root: classes.checkRoot,
                      }}
                    />
                  }
                  classes={{
                    label: classes.label,
                    disabled: classes.disabledCheckboxAndRadio,
                    root: classes.labelRoot,
                  }}
                  label="Disabled Checked"
                />
              </div>
            </GridItem>
            <GridItem xs={12} sm={6} md={4} lg={3}>
              <div className={classes.title}>
                <h3>Radio Buttons</h3>
              </div>
              <div
                className={
                  classes.checkboxAndRadio +
                  " " +
                  classes.checkboxAndRadioHorizontal
                }
              >
                <FormControlLabel
                  control={
                    <Radio
                      checked={selectedEnabled === "a"}
                      onChange={() => setSelectedEnabled("a")}
                      value="a"
                      name="radio button enabled"
                      aria-label="A"
                      icon={
                        <FiberManualRecord className={classes.radioUnchecked} />
                      }
                      checkedIcon={
                        <FiberManualRecord className={classes.radioChecked} />
                      }
                      classes={{
                        checked: classes.radio,
                        root: classes.radioRoot,
                      }}
                    />
                  }
                  classes={{
                    label: classes.label,
                    root: classes.labelRoot,
                  }}
                  label="First Radio"
                />
              </div>
              <div
                className={
                  classes.checkboxAndRadio +
                  " " +
                  classes.checkboxAndRadioHorizontal
                }
              >
                <FormControlLabel
                  control={
                    <Radio
                      checked={selectedEnabled === "b"}
                      onChange={() => setSelectedEnabled("b")}
                      value="b"
                      name="radio button enabled"
                      aria-label="B"
                      icon={
                        <FiberManualRecord className={classes.radioUnchecked} />
                      }
                      checkedIcon={
                        <FiberManualRecord className={classes.radioChecked} />
                      }
                      classes={{
                        checked: classes.radio,
                        root: classes.radioRoot,
                      }}
                    />
                  }
                  classes={{
                    label: classes.label,
                    root: classes.labelRoot,
                  }}
                  label="Second Radio"
                />
              </div>
              <div
                className={
                  classes.checkboxAndRadio +
                  " " +
                  classes.checkboxAndRadioHorizontal
                }
              >
                <FormControlLabel
                  disabled
                  control={
                    <Radio
                      checked={false}
                      value="a"
                      name="radio button disabled"
                      aria-label="B"
                      icon={
                        <FiberManualRecord className={classes.radioUnchecked} />
                      }
                      checkedIcon={
                        <FiberManualRecord className={classes.radioChecked} />
                      }
                      classes={{
                        checked: classes.radio,
                        disabled: classes.disabledCheckboxAndRadio,
                        root: classes.radioRoot,
                      }}
                    />
                  }
                  classes={{
                    label: classes.label,
                    root: classes.labelRoot,
                  }}
                  label="Disabled Unchecked Radio"
                />
              </div>
              <div
                className={
                  classes.checkboxAndRadio +
                  " " +
                  classes.checkboxAndRadioHorizontal
                }
              >
                <FormControlLabel
                  disabled
                  control={
                    <Radio
                      checked={true}
                      value="b"
                      name="radio button disabled"
                      aria-label="B"
                      icon={
                        <FiberManualRecord className={classes.radioUnchecked} />
                      }
                      checkedIcon={
                        <FiberManualRecord className={classes.radioChecked} />
                      }
                      classes={{
                        checked: classes.radio,
                        disabled: classes.disabledCheckboxAndRadio,
                        root: classes.radioRoot,
                      }}
                    />
                  }
                  classes={{ label: classes.label, root: classes.labelRoot }}
                  label="Disabled Checked Radio"
                />
              </div>
            </GridItem>
            <GridItem xs={12} sm={6} md={4} lg={3}>
              <div className={classes.title}>
                <h3>Toggle Buttons</h3>
              </div>
              <div>
                <FormControlLabel
                  control={
                    <Switch
                      checked={checkedA}
                      onChange={(event) => setCheckedA(event.target.checked)}
                      value="checkedA"
                      classes={{
                        switchBase: classes.switchBase,
                        checked: classes.switchChecked,
                        thumb: classes.switchIcon,
                        track: classes.switchBar,
                      }}
                    />
                  }
                  classes={{
                    label: classes.label,
                  }}
                  label="Toggle is on"
                />
              </div>
              <div>
                <FormControlLabel
                  control={
                    <Switch
                      checked={checkedB}
                      onChange={(event) => setCheckedB(event.target.checked)}
                      value="checkedB"
                      classes={{
                        switchBase: classes.switchBase,
                        checked: classes.switchChecked,
                        thumb: classes.switchIcon,
                        track: classes.switchBar,
                      }}
                    />
                  }
                  classes={{
                    label: classes.label,
                  }}
                  label="Toggle is off"
                />
              </div>
            </GridItem>
          </GridContainer>
        </div>
        <div className={classes.space70} />
        <div id="progress">
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.title}>
                <h3>Progress Bars</h3>
              </div>
              <CustomLinearProgress
                variant="determinate"
                color="primary"
                value={30}
              />
              <CustomLinearProgress
                variant="determinate"
                color="info"
                value={60}
              />
              <CustomLinearProgress
                variant="determinate"
                color="success"
                value={100}
                style={{ width: "35%", display: "inline-block" }}
              />
              <CustomLinearProgress
                variant="determinate"
                color="warning"
                value={100}
                style={{ width: "20%", display: "inline-block" }}
              />
              <CustomLinearProgress
                variant="determinate"
                color="danger"
                value={25}
                style={{ width: "45%", display: "inline-block" }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.title}>
                <h3>Pagination</h3>
              </div>
              <Paginations
                pages={[
                  { text: 1 },
                  { text: "..." },
                  { text: 5 },
                  { text: 6 },
                  { active: true, text: 7 },
                  { text: 8 },
                  { text: 9 },
                  { text: "..." },
                  { text: 12 },
                ]}
              />
              <Paginations
                pages={[
                  { text: "PREV" },
                  { text: 1 },
                  { text: 2 },
                  { active: true, text: 3 },
                  { text: 4 },
                  { text: 5 },
                  { text: "NEXT" },
                ]}
                color="info"
              />
            </GridItem>
          </GridContainer>
        </div>
        <div id="sliders">
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.title}>
                <h3>Sliders</h3>
              </div>
              <div id="sliderRegular" className="slider-primary" />
              <br />
              <div id="sliderDouble" className="slider-info" />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.title}>
                <h3>Badges</h3>
              </div>
              <Badge>default</Badge>
              <Badge color="primary">primary</Badge>
              <Badge color="info">info</Badge>
              <Badge color="success">success</Badge>
              <Badge color="warning">warning</Badge>
              <Badge color="danger">danger</Badge>
              <Badge color="rose">rose</Badge>
            </GridItem>
          </GridContainer> */}
        </div>
      </div>
    </div>
  );
}
