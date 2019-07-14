import * as React from "react";
import TextField from "@material-ui/core/TextField";
import { BrowserView, MobileView } from "react-device-detect";
import { createStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";
import makeStyles from "@material-ui/styles/makeStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Search from '@material-ui/icons/Search';

const classes = require('./testComponentStyles.scss');
const appLogo = require('../../assets/layers.svg');
const appLogo1 = require('../../assets/app.svg');
const uptoLogo = require('../../assets/uptoLogo1.png');
const profile = require('../../assets/profile.png');

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    input: {
      width: '168px'
    }
  }),
);


export const AppLayout: React.FC = (props) => {
  const materialClasses = useStyles();
  return (
    <>
      <BrowserView>
        <div className={classes.appBarHorizontal}>
          <div className={classes.innerAppBarArrangment}>
            <a href={'#'} style={{textDecoration: 'none', color: '#000000'}}>
              <div className={classes.headerNamePosition}>
                <span className={classes.uptodownFont}>u</span>
                <span className={classes.uptodownFont}>p</span>
                <span className={classes.fontSpecialColor}>t</span>
                <span className={classes.fontSpecialColor}>o</span>
                <span className={classes.uptodownFont}>d</span>
                <span className={classes.uptodownFont}>o</span>
                <span className={classes.uptodownFont}>w</span>
                <span className={classes.uptodownFont}>n</span>
              </div>
            </a>
            <div className={classes.searchInput}>
              <TextField
                style={{color: "red"}}
                id="standard-bare"
                placeholder={"Search by name"}
                margin="normal"
                className={materialClasses.input}
              />
            </div>
            <div style={{marginLeft: '15px'}}>
              <Search/>
            </div>
            <div style={{display: "flex", justifyContent: "flex-end", width: '100%'}}>
              <label style={{fontFamily: 'Roboto, Light', fontSize: '18px', marginRight: '12px'}}>Pepe</label>
              <input onClick={(e) => {
                console.log("hola")
              }} className={classes.profile} type="image" src={profile} alt='uptoLogo'/>
            </div>
          </div>
        </div>
        <div className={classes.childrenContent}>
          {props.children}
        </div>
        <div className={classes.appBarVertical}>
          <input onClick={(e) => {
            console.log("hola")
          }} className={classes.uptoLogo} type="image" src={uptoLogo} alt='uptoLogo'/>
          <div style={{marginTop: '-6px'}}>
            <div className={classes.navItem}>
              <a href={'#'} style={{textDecoration: 'none'}}>
                <div style={{marginLeft: '15px', marginRight: '17px', marginTop: '5px'}}>
                  <img style={{width: '20px'}} id="appLogo" src={appLogo}/>
                </div>
                <div style={{marginLeft: '3px', marginTop: '-6px'}}>
                  <span style={{fontFamily: 'Roboto', fontSize: '10px', color: 'white'}}>Assigned</span>
                </div>
              </a>
            </div>
            <div className={classes.navItem}>
              <a href={'#'} style={{textDecoration: 'none'}}>
                <div style={{marginLeft: '15px', marginRight: '17px', marginTop: '5px'}}>
                  <img style={{width: '20px'}} id="appLogo" src={appLogo1}/>
                </div>
                <div style={{marginLeft: '3px', marginTop: '-6px'}}>
                  <span style={{fontFamily: 'Roboto', fontSize: '10px', color: 'white'}}>Apply for</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </BrowserView>
      <MobileView>
        {props.children}
      </MobileView>
    </>
  );
}