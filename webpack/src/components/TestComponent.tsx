import * as React from "react";
import { meanOfArray } from "../helpers/HelperFunctions";
let classNames = require('./testComponentStyles');
const logo = require('../../assets/images/logo.png');
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
        console.log(process.env.DOGGO_API)
        fetch(process.env.DOGGO_API)
            .then(response => {
                return response.json()
            })
            .then(data => {
                this.setState({ doggoUrl: data.message })
            })
            .catch(error => {
                console.log(error)
            })
    }

    public render(): JSX.Element {
        return (
            <div>
                <div className={classNames["App"]}>
                    <header className={classNames["App-header"]}>
                        <img src={logo} className={classNames["App-logo"]} alt="logo" />
                        <img src={this.state.doggoUrl} className={classNames["App-image"]} />
                        <p>
                            Limones en resolución {this.props.numberOfKs}k desde un hola mundo de React
                        </p>
                        <a
                            className={classNames["App-link"]}
                            href="https://lemoncode.net/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Aprenderás React, ya verás.
                </a>
                    </header>
                </div>
            </div>
        );
    }
}