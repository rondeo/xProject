import React, { Component } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import _ from "lodash";
import styles from "./SearchBarStyle";
import { connect } from "react-redux";
import { CloseIconSvg } from "js/UIElements/SvgImages";
import { colors } from "js/UIElements/colors";
class SearchBar extends Component {
  updateSearchText = value => {
    this.props.updateSearchText(value);
  };
  render() {
    const { searchText } = this.props;

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.headerSearchText}
          placeholder={"Search anything"}
          value={searchText}
          name={"searchText"}
          onChangeText={this.updateSearchText}
        />
        {!!searchText && (
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => this.updateSearchText("")}
            activeOpacity={0.8}
          >
            <CloseIconSvg fill={colors.white} width={8} height={8} />
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

const mapActionCreators = {};

const mapStateToProps = (state, ownProps) => {
  return {
    searchText: state.shipmentDetail.searchText
  };
};

export default connect(
  mapStateToProps,
  mapActionCreators
)(SearchBar);
