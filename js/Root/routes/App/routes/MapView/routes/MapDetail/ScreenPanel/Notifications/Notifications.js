import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";
import styles from "./NotificationsStyle";
import { CheckBox } from "js/UIElements";
import _ from "lodash";

const CHECK_BOXES = [
  {
    name: "SHIPMENT_STATUS",
    label: "Shipment Status",
    subLabel:
      "Status of Shipment includes arrival of Shipments at the key milestones"
  },
  {
    name: "DOCUMENT_CHANGES",
    label: "Document Changes",
    subLabel:
      "Status of key document includes changes to key customs documents ISF, Form 3461 & Form 7501"
  },
  {
    name: "CUSTOMS_RESPONSES",
    label: "Customs Responses",
    subLabel: "Any response that we receive from Customs"
  },
  {
    name: "LOGISTICS_TRACKING",
    label: "Logistics Tracking",
    subLabel:
      "Location based notification of Shipments from origin to the destination"
  },
  {
    name: "BROKER_NOTIFICATION",
    label: "Broker Notifications",
    subLabel:
      "You will be notifed when Broker is assigned and any communication he makes with your team, carrier or freight forwarder"
  }
];
class Notifications extends Component {
  componentWillMount = () => {
    const { initScreen, currentScreen } = this.props;
    initScreen({ screenName: currentScreen });
  };

  render() {
    const { data, updateFieldValue } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.itemContainer}>
          <Text style={styles.titleStyle}>
            {
              "We send following types of notification to your preferred communication method selected above. Please choose those options that you want us to inform you about."
            }
          </Text>
        </View>
        {_.map(CHECK_BOXES, item => {
          const value = _.get(data, item.name, false);
          return (
            <CheckBox
              key={item.name}
              name={item.name}
              label={item.label}
              subLabel={item.subLabel}
              value={value}
              updateFieldValue={updateFieldValue}
              containerCustomStyle={styles.checkBoxContainer}
            />
          );
        })}
      </View>
    );
  }
}

export default Notifications;
