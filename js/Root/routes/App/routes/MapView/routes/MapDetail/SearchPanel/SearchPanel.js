import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import _ from "lodash";
import styles from "./SearchPanelStyle";
import { CloseIconSvg } from "js/UIElements/SvgImages";
import { colors } from "js/UIElements/colors";
import SearchBar from "./SearchBar";
const SEARCH_TEXTS = [
  {
    label: `Shipment with status 'Red'`,
    value: "SHIPMENT_STATUS_RED"
  },
  {
    label: `Shipment with status 'Yellow'`,
    value: "SHIPMENT_STATUS_YELLOW"
  },
  {
    label: `Cargo Release Filed`,
    value: "CARGO_RELEASE_FILED"
  },
  {
    label: `Entry Summary Filed`,
    value: "ENTRY_SUMMARY_FILED"
  },
  {
    label: `Shipments at Port of Unlading`,
    value: "SHIPMENTS_UNLADING"
  },
  {
    label: `Shipments at Port of Lading`,
    value: "SHIPMENTS_LADING"
  },
  {
    label: `Shipments enroute from Port`,
    value: "SHIPMENTS_ENROUTE"
  },
  {
    label: `Shipments delivered but still active`,
    value: "SHIPMENTS_ACTIVE"
  }
];
class SearchPanel extends Component {
  constructor(props) {
    super(props);
    props.setParams({
      color: "rgba(0, 0, 0, 1)",
      centerComponent: <SearchBar updateSearchText={props.updateSearchText} />,
      leftComponent: (
        <CloseIconSvg fill={colors.white} width={16} height={16} />
      ),
      customOnHeaderLeftClick: () => {
        props.onSearchBackClick();
      }
    });
  }
  onSearchItemClick = value => {
    const { updateSearchText } = this.props;
    updateSearchText(value);
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>{`I want to see...`}</Text>
        <View style={styles.otherTextContainer}>
          {_.map(SEARCH_TEXTS, item => {
            return (
              <TouchableOpacity
                onPress={() => this.onSearchItemClick(item.label)}
                activeOpacity={0.5}
                key={item.value}
              >
                <Text style={styles.searchText}>{item.label}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  }
}

export default SearchPanel;
