import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
const renderApp= ReactDOM.render(<App />, document.getElementById("root"));
/**
 * Setting up hot module reloading for our components
 */
if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./App', renderApp)
  }
