import * as React from "react";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

const classes = require('./testComponentStyles.scss');
const appLogo = require('../../assets/app.svg');
const uptoLogo = require('../../assets/uptoLogo1.png');

export const AppLayout1: React.FC = (props) => {
  return (
    <>
      <SideNav
        onSelect={(selected) => {
          // Add your code here
        }}
      >
        <SideNav.Toggle/>
        <SideNav.Nav defaultSelected="home">
          <NavItem eventKey="home">
            <NavIcon>
              <div>
                <img id="facebook-logo" src={appLogo}/>
              </div>
            </NavIcon>
            <NavText>
              Home
            </NavText>
          </NavItem>
          <NavItem eventKey="charts">
            <NavIcon>
              <i className="fa fa-fw fa-line-chart" style={{fontSize: '1.75em'}}/>
            </NavIcon>
            <NavText>
              Charts
            </NavText>
            <NavItem eventKey="charts/linechart">
              <NavText>
                Line Chart
              </NavText>
            </NavItem>
            <NavItem eventKey="charts/barchart">
              <NavText>
                Bar Chart
              </NavText>
            </NavItem>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    </>
  );
}