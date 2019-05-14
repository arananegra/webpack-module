import * as React from "react";
import { meanOfArray } from "../HelperFunctions";
let classNames = require('./testComponentStyles');

export class TestComponent extends React.Component {
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
            <div className={classNames["hello-world"]}>
                <h1>HOLA REACT jeje</h1>
            </div>
        );
    }
}