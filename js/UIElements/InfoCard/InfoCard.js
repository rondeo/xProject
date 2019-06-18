import React, { Component } from "react";
import { View, Image, Text } from "react-native";
import styles from "./InfoCardStyle";
import versol from "js/Images/versol.png";
import moment from "moment";
class InfoCard extends Component {
  render() {
    const { shortDescription, bolNumber, ETA, destination } = this.props.item;
    return (
      <View style={styles.container}>
        <View>
          <Image
            style={styles.topImage}
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/kxr-images-public/US_Test_Vessel.png"
            }}
          />
          <View style={styles.detailContainer}>
            <View style={styles.driverDetailContainer}>
              <Text style={styles.titleText}>{shortDescription}</Text>
              <Text style={styles.containerNumberText}>{bolNumber}</Text>
            </View>
            <View style={styles.addressContainer}>
              <Text style={styles.addressLabelText}>{`DEST.`}</Text>
              <Text numberOfLines={2} style={styles.addressText}>
                {destination}
              </Text>
            </View>
            <View style={styles.timeContainer}>
              <Text style={styles.timeLabelText}>{`ETA`}</Text>
              <Text style={styles.timeText}>
                {moment(ETA).format("MMM Do, YYYY")}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default InfoCard;
