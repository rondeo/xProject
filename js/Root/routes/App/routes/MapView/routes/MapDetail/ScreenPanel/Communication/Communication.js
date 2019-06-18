import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";
import styles from "./CommunicationStyle";
import { CheckBox, DropDown } from "js/UIElements";
import _ from "lodash";

const CHECK_BOXES = [
  {
    name: "EMAILS",
    label: "Emails",
    subLabel:
      "We will deliver Email with the message along with the link to KlearExpress if and when action is required from you"
  },
  {
    name: "TEXT_MESSAGES",
    label: "Text Messages",
    subLabel:
      "We will deliver Text message to your phone number provided along with the link to KlearExpress if and when action is required from you"
  }
];
const languagesList = [
  { value: "English", label: "English" },
  { value: "Spanish", label: "Spanish" },
  { value: "Chinese", label: "Chinese" },
  { value: "Arabic", label: "Arabic" }
];

const checkBoxTitleStyle = {
  fontSize: 14
};
class Communication extends Component {
  componentWillMount = () => {
    const { initScreen, currentScreen } = this.props;
    initScreen({ screenName: currentScreen });
  };

  render() {
    const { data, updateFieldValue } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.languagePrefContainer}>
          <DropDown
            label={"Language Preference"}
            options={languagesList}
            value={data.lanuguage}
            name="lanuguage"
            defaultValue={languagesList[0].value}
            updateFieldValue={updateFieldValue}
            containerCustomStyle={styles.languageDropDownContainer}
          />

          <Text style={styles.titleStyle}>
            {
              "This user interface will be customized with  you above language preference"
            }
          </Text>
        </View>
        <View style={styles.languageTitleContainer}>
          <Text>{"Communication Preference"}</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.titleStyle}>
            {
              "We would like to send you notifications beside delivering them to KlearExpress Application. Your pick below will keep you informed without loging in to the Application. Select your prefered communcaition method."
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
              titleCustomStyle={checkBoxTitleStyle}
            />
          );
        })}
      </View>
    );
  }
}

export default Communication;
