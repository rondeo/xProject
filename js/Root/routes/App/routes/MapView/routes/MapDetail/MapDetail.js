import React, { Component } from "react";
import styles from "./MapDetailStyle";
import { View, Dimensions, Animated, Image } from "react-native";
import { connect } from "react-redux";

import _ from "lodash";

import {
  setSelectedShipmentDetail,
  updateSearchText
} from "js/modules/shipmentDetailModule";
import FloatingPanel from "./FloatingPanel";
import { colors } from "js/UIElements/colors";
import logo from "js/Images/logo.png";
const Screen = {
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height - 75
};
import { isIphoneX } from "js/Services";
import SearchPanel from "./SearchPanel";
import ScreenPanel from "./ScreenPanel";
import { updateCurrentScreen } from "js/modules/navigationModule";
import { DrawerIconSvg, SearchIconSvg } from "js/UIElements/SvgImages";
import Map from "./Map";

const START_POSITION = Screen.height + (isIphoneX() ? -40 : 20);
const END_POSITION = 80;

const initialMapRegion = {
  longitudeDelta: 53.78,
  latitudeDelta: 71.81,
  longitude: 165.23,
  latitude: -43.49
};

class MapDetail extends Component {
  constructor(props) {
    super(props);
    feedDeltaY = new Animated.Value(START_POSITION);
    this.state = {
      currentShipmentDetailId: "",
      headerOpacityTimeAnimation: new Animated.Value(1),
      isSearching: false
    };
  }

  componentDidMount = () => {
    this.initScreen();
  };

  initScreen = () => {
    const {
      navigation: { setParams, state },
      screenProps
    } = this.props;
    setParams({
      color: this.feedDeltaY
        ? this.feedDeltaY.interpolate({
            inputRange: [END_POSITION, START_POSITION],
            outputRange: ["rgba(0,0,0,1)", "rgba(0,0,0,0.25)"],
            extrapolate: "clamp"
          })
        : "rgba(0, 0, 0, 0.25)",
      leftComponent: (
        <DrawerIconSvg width={20} height={20} fill={colors.concrete} />
      ),
      rightComponent: (
        <SearchIconSvg fill={colors.white} width={24} height={24} />
      ),
      centerComponent: (
        <Image
          source={logo}
          style={{ width: 150, height: 40, resizeMode: "contain" }}
        />
      ),
      customOnHeaderLeftClick: () => {
        screenProps.onDrawerClick();
      },
      customOnHeaderRightClick: () => {
        this.onSearchClick();
      }
    });
  };

  onSearchClick = () => {
    this.setState({ isSearching: true });
    // this.props.updateSearchText("");
  };

  onSearchBackClick = () => {
    this.setState({ isSearching: false });
    this.initScreen();
    this.props.updateSearchText("");
  };

  updateHeaderScrollValue = value => {
    this.feedDeltaY = value;
    this.initScreen();
  };

  onClickShipmentItem = item => {
    this.setState({ currentShipmentDetailId: item.id });
    this.props.setSelectedShipmentDetail(item);
    setTimeout(this.animateToRegion);
  };

  onScreenPanelCloseClick = () => {
    const { updateCurrentScreen } = this.props;
    updateCurrentScreen("");
    this.initScreen();
  };

  onShipmentDetailBackClick = () => {
    if (!this.state.currentShipmentDetailId) {
      return;
    }
    this.setState({ currentShipmentDetailId: "" });
    // setTimeout(this.animateToRegion);
    this.initScreen();
  };

  animateToRegion = () => {
    const { shipments } = this.props;
    const { currentShipmentDetailId } = this.state;
    const currentLocation = currentShipmentDetailId
      ? _.find(shipments, item => item.id == currentShipmentDetailId)
          .currentLocation
      : initialMapRegion;

    let r = {
      ...initialMapRegion,
      ...currentLocation
    };
    if (this.mapRef) {
      this.mapRef.animateToCoordinate(currentLocation, 300);
    }
  };

  updateMapRef = ref => {
    this.mapRef = ref;
  };

  render() {
    const {
      shipments,
      currentScreen,
      navigation: { setParams },
      updateSearchText,
      shipmentPath
    } = this.props;
    const { isSearching, currentShipmentDetailId } = this.state;

    const hideFloatingPanel = isSearching || currentScreen;

    return (
      <View style={styles.container}>
        <Map
          onShipmentDetailBackClick={this.onShipmentDetailBackClick}
          initialMapRegion={initialMapRegion}
          shipments={shipments}
          currentShipmentDetailId={currentShipmentDetailId}
          onClickShipmentItem={this.onClickShipmentItem}
          shipmentPath={shipmentPath}
          updateMapRef={this.updateMapRef}
        />
        <FloatingPanel
          startPosition={START_POSITION}
          endPosition={END_POSITION}
          onClickItem={this.onClickShipmentItem}
          updateHeaderScrollValue={this.updateHeaderScrollValue}
          currentShipmentDetailId={currentShipmentDetailId}
          deltaY={this.feedDeltaY}
          shouldHide={hideFloatingPanel}
          setParams={setParams}
          onShipmentDetailBackClick={this.onShipmentDetailBackClick}
        />
        {isSearching && (
          <SearchPanel
            setParams={setParams}
            onSearchBackClick={this.onSearchBackClick}
            updateSearchText={updateSearchText}
          />
        )}
        {!!currentScreen && (
          <ScreenPanel
            setParams={setParams}
            onScreenPanelCloseClick={this.onScreenPanelCloseClick}
          />
        )}
      </View>
    );
  }
}

const mapActionCreators = {
  setSelectedShipmentDetail,
  updateCurrentScreen,
  updateSearchText
};

const mapStateToProps = (state, ownProps) => {
  return {
    shipments: state.shipmentDetail.shipments,
    currentScreen: state.navigation.currentScreen,
    searchText: state.shipmentDetail.searchText,
    shipmentPath: state.shipmentDetail.shipmentPath
  };
};

export default connect(
  mapStateToProps,
  mapActionCreators
)(MapDetail);
