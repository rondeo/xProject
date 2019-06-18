import React from "react";
import styles from "./MarkerStyle";
import { View, Platform } from "react-native";
import { Marker } from "react-native-maps";
import { StatusIcon } from "js/UIElements";
import { InfoCard } from "js/UIElements";
import { ArrowIconSvg } from "js/UIElements/SvgImages";
import { colors } from "js/UIElements/colors";
import _ from "lodash";

const Markers = ({ shipments, currentShipmentDetailId, onClickItem }) => {
  return _.map(shipments, item => {
    const progress = _.get(item.status, "progress", {});

    const isOpenCard = currentShipmentDetailId == item.id;

    return (
      <Marker
        coordinate={item.currentLocation}
        onPress={e => {
          e.stopPropagation();
          onClickItem(item);
        }}
        key={item.id}
        style={Platform.OS == "ios" ? {} : styles.marker}
        zIndex={isOpenCard ? 1 : 0}
        identifier={item.id}
      >
        <StatusIcon progress={progress} showBorder={true} showShadow={true} />

        {isOpenCard && (
          <View
            style={
              Platform.OS == "ios"
                ? styles.markerContainerIos
                : styles.markerContainer
            }
          >
            <View
              style={
                Platform.OS == "ios"
                  ? styles.shipmentInfoIosCard
                  : styles.shipmentInfoCard
              }
              key={"detailMarker"}
            >
              <InfoCard item={item} />
            </View>
            <View style={styles.arrowContainer} key={"arrow"}>
              <ArrowIconSvg width={15} height={20} fill={colors.white} />
            </View>
          </View>
        )}
      </Marker>
    );
  });
};

export default Markers;
