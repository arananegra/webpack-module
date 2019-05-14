import * as React from "react";
import { meanOfArray } from "../HelperFunctions";
let classNames = require('./testComponentStyles');
const logo = require('../../assets/images/logo.png')

export interface TestProps {
    numberOfKs: number;
}
export class TestComponent extends React.Component<TestProps, {}> {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        let array = [1, 2, 3, 4, 5];
        let sum = meanOfArray(array);
        console.log(sum)
    }
    public render(): JSX.Element {
        return (
            <div className={classNames["App"]}>
                <header className={classNames["App-header"]}>
                    <img src={logo} className={classNames["App-logo"]} alt="logo" />
                    <p>
                        <code>Limones en resolución {this.props.numberOfKs}k desde un hola mundo de React</code>
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
        );
    }
}