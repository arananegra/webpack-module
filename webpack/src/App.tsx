import * as React from "react";
import { meanOfArray } from "./HelperFunctions";
export class App extends React.Component<{}, {}> {
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
            <div className="hello-world">
                <h1>HOLA REACT</h1>
            </div>
        );
    }
}