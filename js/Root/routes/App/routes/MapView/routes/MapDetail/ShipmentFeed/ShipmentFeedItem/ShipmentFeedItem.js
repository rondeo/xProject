import React, { Component } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity
} from "react-native";
import styles from "./ShipmentFeedItemStyle";
import { colors } from "js/UIElements/colors";
import { MoreItemIconSvg } from "js/UIElements/SvgImages";
import _ from "lodash";
import { ShipmentProgressBar, StatusIcon } from "js/UIElements";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger
} from "react-native-popup-menu";

const MenuItems = [
  { value: "VIEW_DETAILS", label: "View Details" },
  { value: "ADD_DOCUMENTS", label: "Add Documents" },
  { value: "CONTACT_SUPPORT", label: "Contact Support" },
  { value: "NULIUS_IN_VERBA", label: "Nulius in verba" }
];
const DetailMenu = ({ isMenuOpen, onMenuClick, closeMenu }) => {
  return (
    <Menu opened={isMenuOpen} onBackdropPress={closeMenu}>
      <MenuTrigger>
        <TouchableWithoutFeedback onPress={onMenuClick}>
          <View style={styles.menuButtonContainer}>
            <MoreItemIconSvg width={16} height={16} fill={colors.silver} />
          </View>
        </TouchableWithoutFeedback>
      </MenuTrigger>
      <MenuOptions>
        <View style={styles.popoverMenuContainer}>
          {_.map(MenuItems, item => {
            return (
              <MenuOption key={item.value}>
                <Text style={styles.popoverMenuItemTitleText}>
                  {item.label}
                </Text>
              </MenuOption>
            );
          })}
        </View>
      </MenuOptions>
    </Menu>
  );
};

class ShipmentFeedItem extends Component {
  onClickItem = () => {
    const { onClickItem, item } = this.props;
    onClickItem(item);
  };

  onMenuClick = () => {
    const {
      toggleMenu,
      item: { id }
    } = this.props;
    if (toggleMenu) {
      toggleMenu(id);
    }
  };

  closeMenu = () => {
    const { toggleMenu } = this.props;
    if (toggleMenu) {
      toggleMenu("");
    }
  };

  render() {
    const {
      item: {
        shortDescription,
        bolNumber,
        manufacturer,
        source,
        destination,
        ETA,
        id,
        status: { progress } = {}
      } = {},
      customerName,
      currentMenuId
    } = this.props;
    const isMenuOpen = currentMenuId == id;

    return (
      <TouchableWithoutFeedback onPress={this.onClickItem}>
        <View style={styles.container}>
          <View style={styles.topContainer}>
            <View style={styles.topLeftContainer}>
              <StatusIcon progress={progress} />
              <View style={styles.detailTitleContainer}>
                <Text numberOfLines={1} style={styles.titleText}>
                  {shortDescription}
                </Text>
                <View style={styles.subTitleTextContainer}>
                  <Text
                    numberOfLines={1}
                    style={styles.subTitleText1}
                  >{`BOL`}</Text>
                  <Text numberOfLines={1} style={styles.subTitleText2}>
                    {bolNumber}
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.topRightContainer}>
              <DetailMenu
                isMenuOpen={isMenuOpen}
                onMenuClick={this.onMenuClick}
                closeMenu={this.closeMenu}
              />
            </View>
          </View>
          <View style={styles.detailTextContainer}>
            <Text numberOfLines={1} style={styles.fromText}>
              {manufacturer}
            </Text>
            <Text numberOfLines={1} style={styles.etaText}>{`ETA`}</Text>
          </View>
          <View style={styles.detailTextContainer}>
            <Text numberOfLines={1} style={styles.toText}>
              {source}
            </Text>
            <Text numberOfLines={1} style={styles.dateText}>
              {ETA}
            </Text>
          </View>

          <ShipmentProgressBar progress={progress} />

          <View style={styles.footerTextContainer}>
            <Text numberOfLines={1} style={styles.footerText}>
              {destination}
            </Text>
            <Text numberOfLines={1} style={styles.footerSubText}>
              {customerName}
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default ShipmentFeedItem;
