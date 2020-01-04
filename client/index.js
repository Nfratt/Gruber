import React from "react";
import {render} from "react-dom";

import { Provider } from "react-redux";
import store from "./redux/store";

import App from "./App";

/**
react redux may be used 
 * @see {@link https://react-redux.js.org/api/provider}
 */
const renderApp = () => render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);

/**
 * Setting up hot module reloading for our components
 */
if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./App', renderApp)
  }
  renderApp()