import React from "react";
import { View, AsyncStorage, AppState } from "react-native";
import { createStackNavigator, SafeAreaView } from "react-navigation";
import { connect } from "react-redux";
import { App, Splash, SignIn, SignUp } from "../routes";
import { LoadingIndicator } from "js/UIElements";
import { screenChange } from "js/modules/navigationModule";
import { setUserInRedux, onSignOut } from "js/modules/loginModule";
import { StackNavigationHeader } from "js/NavigationHeaders";
import DrawerNavigator from "../routes/DrawerNavigator/components";
import { transitionConfig } from "js/CommonStylesAndUtils/StackNavigationScreenUtils";
import { navigateOnce } from "js/Services";
import _ from "lodash";
const prefix = "klearExpress://";
SafeAreaView.setStatusBarHeight(0);

//console.log("SignIn", SignIn);

const RootNavigator = ({ initialRouteName, onStateChange, prefix }) => {
  const CustomStackNavigator = createStackNavigator(
    {
      app: {
        screen: App,
        path: "app",
        navigationOptions: { header: null }
      },
      splash: {
        screen: Splash,
        path: "splash",
        navigationOptions: { header: null }
      },
      signIn: {
        screen: SignIn,
        path: "signIn",
        navigationOptions: { header: null }
      },
      signUp: {
        screen: SignUp,
        path: "signIn",
        navigationOptions: { header: null }
      },
      ...DrawerNavigator
    },
    {
      initialRouteName: initialRouteName,
      headerMode: "screen",
      transitionConfig,
      cardStyle: {
        shadowOpacity: 0
      }
    }
  );
  CustomStackNavigator.router.getStateForAction = navigateOnce(
    CustomStackNavigator.router.getStateForAction
  );

  return (
    <CustomStackNavigator
      ref={ref => (myNav = ref)}
      uriPrefix={prefix}
      onNavigationStateChange={onStateChange}
    />
  );
};

class Root extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  _handleAppStateChange = nextAppState => {
    if (nextAppState == "background") {
    } else if (nextAppState == "active") {
    }
  };

  componentWillMount() {
    AsyncStorage.getItem("user").then(value => {
      this.props.setUserInRedux(JSON.parse(value));
      //this.props.setUserInRedux(null);
      this.setState({ isLoading: false });
    });
    AppState.addEventListener("change", this._handleAppStateChange);
  }

  onStateChange = (prevState, currentState) => {
    this.props.screenChange(prevState, currentState, "root");
  };

  static router = RootNavigator.router;

  render() {
    if (this.state.isLoading) {
      return (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <LoadingIndicator loading={true} />
        </View>
      );
    } else {
      let initialRouteName;

      if (this.props.kxToken) {
        initialRouteName = "app";
      } else {
        initialRouteName = "signIn";
      }

      return (
        <RootNavigator
          initialRouteName={initialRouteName}
          onStateChange={this.onStateChange}
          prefix={prefix}
        />
      );
    }
  }
}

const mapActionCreators = {
  setUserInRedux,

  onSignOut,
  screenChange
};

const mapStateToProps = state => {
  return {
    kxToken: _.get(state.login, "user.kxToken", "")
  };
};

export default connect(
  mapStateToProps,
  mapActionCreators
)(Root);
