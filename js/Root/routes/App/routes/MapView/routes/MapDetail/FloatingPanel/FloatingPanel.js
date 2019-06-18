import React, { Component } from "react";
import {
  View,
  Dimensions,
  Animated,
  TouchableWithoutFeedback
} from "react-native";

import Interactable from "react-native-interactable";
import styles from "./FloatingPanelStyle";

import { isIphoneX } from "js/Services";
import ShipmentFeed from "../ShipmentFeed";
import ShipmentDetail from "../ShipmentDetail";

import { CloseIconSvg } from "js/UIElements/SvgImages";
import { colors } from "js/UIElements/colors";

const Screen = {
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height - 75
};

class FloatingPanel extends Component {
  constructor(props) {
    super(props);
    this.state = { drawerState: "closed", menuOpenId: "" };
    this.state = {
      deltaY: new Animated.Value(0),
      panelBackgroundColorOpacity: 1
    };
    this.state.deltaY.addListener(this.deltaYChange);
    if (this.props.updateHeaderScrollValue) {
      this.props.updateHeaderScrollValue(this.state.deltaY);
    }
    this.animatedViewRef = null;
  }

  deltaYChange = ({ value }) => {
    this._value = value;
  };

  onDrawerClick = () => {
    if (this.animatedViewRef && this.state.drawerState == "closed") {
      this.animatedViewRef.changePosition({ x: 0, y: Screen.height / 1.9 });
    }
  };
  onDrawerSnap = event => {
    const snapPointId = event.nativeEvent.id;
    this.setState({ drawerState: snapPointId });
  };

  onClosePress = () => {
    // if (this.animatedViewRef && this.state.drawerState == "open") {
    //   this.animatedViewRef.changePosition({
    //     x: 0,
    //     y: Screen.height + (isIphoneX() ? -40 : 20)
    //   });
    // }
  };

  handleScroll = event => {
    const { currentShipmentDetailId } = this.props;
    if (currentShipmentDetailId) {
      const { panelBackgroundColorOpacity } = this.state;
      if (
        event.nativeEvent.contentOffset.y > 220 &&
        panelBackgroundColorOpacity < 1
      ) {
        this.setState({ panelBackgroundColorOpacity: 1 });
      } else if (
        event.nativeEvent.contentOffset.y < 220 &&
        panelBackgroundColorOpacity >= 1
      ) {
        this.setState({ panelBackgroundColorOpacity: 0.8 });
      }
    }
  };

  componentWillReceiveProps = nextProps => {
    if (
      !this.props.currentShipmentDetailId &&
      nextProps.currentShipmentDetailId
    ) {
      this.setState({ panelBackgroundColorOpacity: 0.8 });
    }
  };
  render() {
    const {
      startPosition,
      endPosition,
      currentShipmentDetailId,
      onClickItem,

      shouldHide,
      setParams,
      onShipmentDetailBackClick
    } = this.props;
    const { deltaY, drawerState, panelBackgroundColorOpacity } = this.state;
    const paddingBottom = deltaY.interpolate({
      inputRange: [endPosition, startPosition],
      outputRange: [
        endPosition + (isIphoneX() ? 16 : -24),
        startPosition + (isIphoneX() ? 16 : -24)
      ],
      extrapolate: "clamp"
    });
    const hiddenPanelStyle = shouldHide ? { height: 0 } : {};
    return (
      <View style={styles.container} pointerEvents={"box-none"}>
        <View style={styles.panelContainer} pointerEvents={"box-none"}>
          <Interactable.View
            ref={ref => (this.animatedViewRef = ref)}
            verticalOnly={true}
            initialPosition={{ y: startPosition }}
            boundaries={{
              top: endPosition,
              bottom: startPosition
            }}
            snapPoints={[
              { y: startPosition, id: "closed", tension: 0, damping: 0 },
              { y: endPosition, id: "open", tension: 0, damping: 0 }
            ]}
            onSnap={this.onDrawerSnap}
            animatedValueY={this.state.deltaY}
          >
            <View
              style={{
                ...styles.panel,
                ...hiddenPanelStyle,
                backgroundColor: currentShipmentDetailId
                  ? `rgba(255,255,255,${panelBackgroundColorOpacity})`
                  : colors.white
              }}
              pointerEvents={"auto"}
            >
              {!shouldHide && (
                <View style={styles.panelHandleContainer}>
                  <View style={styles.panelHandle} />
                  {drawerState == "open" && !!currentShipmentDetailId && (
                    <TouchableWithoutFeedback
                      onPress={onShipmentDetailBackClick}
                    >
                      <View style={styles.closeButtonContainer}>
                        <View style={styles.closeButton}>
                          <CloseIconSvg
                            width={7}
                            height={7}
                            fill={colors.silverChalice}
                          />
                        </View>
                      </View>
                    </TouchableWithoutFeedback>
                  )}
                </View>
              )}
              <Animated.View
                style={{
                  ...styles.listContainer,
                  height: currentShipmentDetailId ? 0 : "100%",
                  paddingBottom: currentShipmentDetailId ? 0 : paddingBottom
                }}
              >
                <ShipmentFeed onClickItem={onClickItem} />
              </Animated.View>

              {!!currentShipmentDetailId && (
                <Animated.View
                  style={{
                    ...styles.listContainer,
                    height: "100%",
                    paddingBottom: paddingBottom
                  }}
                >
                  <ShipmentDetail
                    handleScroll={this.handleScroll}
                    panelBackgroundColorOpacity={panelBackgroundColorOpacity}
                    setParams={setParams}
                    onShipmentDetailBackClick={onShipmentDetailBackClick}
                  />
                </Animated.View>
              )}
            </View>
          </Interactable.View>
        </View>
      </View>
    );
  }
}

export default FloatingPanel;
