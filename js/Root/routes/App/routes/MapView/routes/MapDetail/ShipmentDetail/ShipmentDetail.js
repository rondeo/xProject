import React, { Component } from "react";
import { View, FlatList, TouchableWithoutFeedback, Text } from "react-native";

import styles from "./ShipmentDetailStyle";
import BasicDetail from "./BasicDetail";

import ActivitDetail from "./ActivityDetail";
import DocumentDetail from "./DocumentDetail";
import _ from "lodash";
import { colors } from "js/UIElements/colors";
import { connect } from "react-redux";
import { BackIconSvg } from "js/UIElements/SvgImages";
const TABS = [
  { value: "ACTIVITY", label: "ACTIVITIES" },
  { value: "DOCUMENT", label: "DOCUMENTS" }
];

const TOP_POSITION = 60;
const TabComponent = ({
  currentTab,
  onTabClick,
  panelBackgroundColorOpacity
}) => {
  const borderRadius = 4;
  return (
    <View
      style={
        panelBackgroundColorOpacity == 1
          ? {
              ...styles.tabsContainer,
              backgroundColor: `rgba(255,255,255,${panelBackgroundColorOpacity})`
            }
          : styles.tabsContainer
      }
    >
      <View style={styles.tabLine} />
      {_.map(TABS, (item, index) => {
        const isCurrentTab = currentTab == item.value;
        const borderTopLeftRadius = index == 0 ? borderRadius : 0;
        const borderTopRightRadius =
          index == TABS.length - 1 ? borderRadius : 0;
        const borderBottomLeftRadius = index == 0 ? borderRadius : 0;
        const borderBottomRightRadius =
          index == TABS.length - 1 ? borderRadius : 0;
        const borderRightWidth =
          (index == 0 && !isCurrentTab) || isCurrentTab ? 0 : 1;
        const borderLeftWidth =
          (index == TABS.length - 1 && !isCurrentTab) || isCurrentTab ? 0 : 1;
        const backgroundColor = isCurrentTab ? colors.dodgerBlue : colors.white;
        const borderColor = isCurrentTab ? colors.dodgerBlue : colors.dustyGray;
        return (
          <TouchableWithoutFeedback
            onPress={() => onTabClick(item.value)}
            key={item.value}
          >
            <View
              style={{
                ...styles.tab,
                borderTopLeftRadius,
                borderTopRightRadius,
                borderBottomLeftRadius,
                borderBottomRightRadius,
                borderRightWidth,
                backgroundColor,
                borderLeftWidth,
                borderColor
              }}
            >
              <Text
                style={isCurrentTab ? styles.tabSelectedText : styles.tabText}
              >
                {item.label}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        );
      })}
    </View>
  );
};

const RENDER_ITEMS = [
  { id: "BASIC_DETAIL" },
  { id: "TAB" },
  { id: "ACTIVE_DETAIL" }
];
class ShipmentDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: "ACTIVITY"
    };
    props.setParams({
      color: "rgba(0,0,0,0)",
      leftComponent: (
        <View style={styles.headerIconContainer}>
          <BackIconSvg />
        </View>
      ),
      centerComponent: (
        <Text style={styles.headerTitleText}>{`Shipment Detail`}</Text>
      ),
      rightComponent: null,
      customOnHeaderLeftClick: () => {
        props.onShipmentDetailBackClick();
      }
    });
  }

  onTabClick = value => {
    this.setState({ currentTab: value });
  };

  _renderItem = ({ item }) => {
    const { shipmentDetail, panelBackgroundColorOpacity } = this.props;
    const { documents, activities } = shipmentDetail;

    const { currentTab } = this.state;
    switch (item.id) {
      case "BASIC_DETAIL":
        return <BasicDetail shipmentDetail={shipmentDetail} />;
      case "TAB":
        return (
          <TabComponent
            currentTab={currentTab}
            onTabClick={this.onTabClick}
            panelBackgroundColorOpacity={panelBackgroundColorOpacity}
          />
        );
      case "ACTIVE_DETAIL":
        return (
          <View style={styles.detailContainer}>
            {currentTab == "ACTIVITY" && (
              <ActivitDetail activities={activities} />
            )}

            {currentTab == "DOCUMENT" && (
              <DocumentDetail documents={documents} />
            )}
          </View>
        );
    }

    return null;
  };

  _keyExtractor = (item, index) => item.id;

  render() {
    const { handleScroll } = this.props;

    return (
      <FlatList
        onScroll={handleScroll}
        data={RENDER_ITEMS}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
        contentContainerStyle={styles.flatList}
        stickyHeaderIndices={[1]}
      />
    );
  }
}

const mapActionCreators = {};

const mapStateToProps = (state, ownProps) => {
  return {
    shipmentDetail: state.shipmentDetail.selectedShipmentDetail
  };
};

export default connect(
  mapStateToProps,
  mapActionCreators
)(ShipmentDetail);
