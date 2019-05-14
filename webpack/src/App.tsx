import * as React from "react";
import { TestComponent } from "./components/TestComponent";
export class App extends React.Component<{}, {}> {
    public render(): JSX.Element {
        return (
            <div>
                <TestComponent/>
            </div>
            );
        }
}