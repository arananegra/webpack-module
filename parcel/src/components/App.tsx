import * as React from "react";
import { TestComponent } from "./TestComponent";
export class App extends React.Component<{}, {}> {
    public render(): JSX.Element {
        return (
            <div>
                <TestComponent numberOfKs={4} />
            </div>
        );
    }
}