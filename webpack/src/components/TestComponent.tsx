import * as React from "react";
import { meanOfArray } from "../helpers/HelperFunctions";
//let classNames = require('./testComponentStyles');
const logo = require('../../assets/images/logo.png');

import styled, { keyframes } from 'styled-components'

const TestComponentMain = styled.div`
  text-align: center;
`;

const TestComponentHeader = styled.header`
    background-color: #4d4949b0;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;


const TestComponentLogo = styled.img`
    animation: ${rotate} infinite 20s linear;
    height: 20vmin;
    pointer-events: none;
    margin-bottom: 5%;
`;

const TestComponentImage = styled.img`
    height: 20vw;
    margin-top: 1rem;
    margin-bottom: 1rem;
`;

const TestComponentLink = styled.a`
  color: #61fb7b;
`;

export interface TestProps {
  numberOfKs: number;
}

export interface TestState {
  doggoUrl: string
}

export class TestComponent extends React.Component<TestProps, TestState> {
  constructor(props: TestProps) {
    super(props);
  }

  state = {
    doggoUrl: ''
  }

  componentDidMount() {
    let array = [1, 2, 3, 4, 5];
    let sum = meanOfArray(array);
    console.log(sum);
    fetch(process.env.DOGGO_API)
      .then(response => {
        return response.json()
      })
      .then(data => {
        this.setState({doggoUrl: data.message})
      })
      .catch(error => {
        console.log(error)
      })
  }

  public render(): JSX.Element {
    return (
      <>
        <TestComponentMain>
          <TestComponentHeader>
            <TestComponentLogo src={logo} alt="logo"/>
            <TestComponentImage src={this.state.doggoUrl}/>
            <p>
              Limones en resolución {this.props.numberOfKs}k desde un hola mundo de React
            </p>
            <TestComponentLink
              href="https://lemoncode.net/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Aprenderás React, ya verás.
            </TestComponentLink>
          </TestComponentHeader>
        </TestComponentMain>
      </>
    );
  }
}