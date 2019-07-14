import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./src/App";
import 'rsuite/dist/styles/rsuite.min.css';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

ReactDOM.render((
    <App />
),
    document.getElementById('root')
);
