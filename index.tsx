import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./src/components/App";


(function () {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./service-worker.js', { scope: '/gtplus-frontend/' })
            .then(() => console.log('Service Worker registered successfully.'))
            .catch(error => console.log('Service Worker registration failed:', error));
    }
})();

ReactDOM.render((
    <App />
),
    document.getElementById('root')
);
