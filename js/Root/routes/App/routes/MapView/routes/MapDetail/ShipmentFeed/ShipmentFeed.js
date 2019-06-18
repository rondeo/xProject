import React, { Component } from "react";
import { FlatList } from "react-native";
import { connect } from "react-redux";

import styles from "./ShipmentFeedStyle";
import ShipmentFeedItem from "./ShipmentFeedItem";

class ShipmentFeed extends Component {
  constructor(props) {
    super(props);
    this.state = { currentMenuId: "" };
  }

  toggleMenu = id => {
    this.setState({ currentMenuId: id });
  };

  _renderItem = ({ item }) => {
    const { onClickItem, customerName, onClickMenuItem } = this.props;
    const { currentMenuId } = this.state;

    return (
      <ShipmentFeedItem
        item={item}
        onClickItem={onClickItem}
        customerName={customerName}
        onClickMenuItem={onClickMenuItem}
        toggleMenu={this.toggleMenu}
        currentMenuId={currentMenuId}
      />
    );
  };

  _keyExtractor = (item, index) => item.id;

  render() {
    const { shipments } = this.props;

    return (
      <FlatList
        data={shipments}
        extraData={this.state}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
        contentContainerStyle={styles.flatList}
      />
    );
  }
}

const mapActionCreators = {};

const mapStateToProps = (state, ownProps) => {
  return {
    shipments: state.shipmentDetail.shipments,
    customerName: state.shipmentDetail.customerName
  };
};

export default connect(
  mapStateToProps,
  mapActionCreators
)(ShipmentFeed);
