import * as React from "react";
import './testComponentStyles';
const logo = require('../content/logo.png');
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
/*     componentDidMount() {
        fetch("https://dog.ceo/api/breed/Pug/images/random")
            .then(response => {
                return response.json()
            })
            .then(data => {
                this.setState({ doggoUrl: data.message })
            })
            .catch(error => {
                console.log(error)
            })
    } */

    public render(): JSX.Element {
        return (
            <div>
                <div className={"App"}>
                    <header className={"App-header"}>
                        <img src={logo} className={"App-logo"} alt="logo" />
                       {/*  <img src={this.state.doggoUrl} className={classNames["App-image"]} /> */}
                        <p>
                            Limones en resolución {this.props.numberOfKs}k desde un hola mundo de React
                        </p>
                        <a
                            className={"App-link"}
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