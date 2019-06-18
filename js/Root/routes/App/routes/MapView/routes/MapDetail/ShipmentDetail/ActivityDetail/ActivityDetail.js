import React, { Component } from "react";
import ActivityItem from "./ActivityItem";
import styles from "./ActivityDetailStyle";
import { View } from "react-native";
import _ from "lodash";

class ActivityDetail extends Component {
  render() {
    const { activities } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.verticalLine} />
        {_.map(activities, item => {
          return <ActivityItem item={item} key={item.milestoneSequenceNo} />;
        })}
      </View>
    );
  }
}

export default ActivityDetail;
