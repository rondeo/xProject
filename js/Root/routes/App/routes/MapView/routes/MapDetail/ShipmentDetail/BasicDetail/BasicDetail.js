import React, { Component } from "react";
import { View, Text } from "react-native";
import styles from "./BasicDetailStyle";
import { StatusIcon } from "js/UIElements";
import { ActivityTimeLine } from "js/UIElements";
import moment from "moment";
class BasicDetail extends Component {
  render() {
    const { shipmentDetail } = this.props;
    const {
      bgColor,
      shortDescription,
      bolNumber,
      manufacturer,
      source,
      startDate,
      destination,
      ETA,
      activities,
      status: { progress } = {}
    } = shipmentDetail;
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <StatusIcon progress={progress} />

          <View style={styles.titleTextContainer}>
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
        <View style={styles.addressContainer}>
          <View style={styles.originAddressContainer}>
            <Text style={styles.originAddressLabel}>{`ORIGIN`}</Text>
            <Text style={styles.originAddressText}>{source}</Text>
            <Text style={styles.originTimeText}>
              {moment(startDate).format("MMM Do, YYYY")}
            </Text>
          </View>
          <View style={styles.destinationAddressContainer}>
            <Text style={styles.destinationAddressLabel}>{`DESTINATION`}</Text>
            <Text style={styles.destinationAddressText}>{destination}</Text>
            <Text style={styles.destinationTimeText}>
              {moment(ETA).format("MMM Do, YYYY")}
            </Text>
          </View>
        </View>
        <ActivityTimeLine
          activities={activities}
          startDate={startDate}
          endDate={ETA}
        />
      </View>
    );
  }
}

export default BasicDetail;
