import React, { Component } from "react";
import App from "./index";
import configureStore from "./configureStore";

import { Provider } from "react-redux";
import { MenuProvider } from "react-native-popup-menu";
import setupMomentLocales from "js/CommonStylesAndUtils/SetupMomentLocales";

function setup(): React.Component {
  class Root extends Component {
    constructor() {
      super();
      setupMomentLocales();
      this.state = {
        isLoading: false,
        store: configureStore(() => this.setState({ isLoading: false }))
      };
    }

    render() {
      return (
        <Provider store={this.state.store}>
          <MenuProvider>
            <App />
          </MenuProvider>
        </Provider>
      );
    }
  }

  return Root;
}

export default setup;
