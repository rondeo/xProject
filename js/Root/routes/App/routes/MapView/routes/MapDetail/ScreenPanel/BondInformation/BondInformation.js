import React, { Component } from "react";
import { View } from "react-native";
import styles from "./BondInformationStyle";
import { RadioButton, TextAreaInput } from "js/UIElements";
import _ from "lodash";

const OWNER_TYPE = [
  { value: "My Own", label: "My Own" },
  { value: "Klear Express", label: "Klear Express" },
  { value: "Broker", label: "Broker" }
];
const OWNER_OPERATION_MODE = [
  { value: "Single", label: "Single" },
  { value: "Single", label: "Continuous" }
];

class BondInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount = () => {
    const { initScreen, currentScreen } = this.props;
    initScreen({ screenName: currentScreen });
  };

  updateFieldValue = params => {
    let param = {};
    param[this.props.name] = { ...this.props.value, ...params };
    this.props.updateFieldValue(param);
    if (this.state.error != "") {
      this.setState({ error: "" });
    }
  };

  render() {
    const {
      data: {
        bondnumber = "",
        bondamount = "",
        bondOwnership = "",
        bondType = ""
      } = {},
      updateFieldValue
    } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.itemContainer}>
          <View style={styles.containerRadioButton}>
            {!!OWNER_TYPE ? (
              <View style={styles.radioButtonContainer}>
                {_.map(OWNER_TYPE, (item, index) => {
                  return (
                    <RadioButton
                      key={index}
                      groupName={"bondOwnership"}
                      containerCustomStyle={styles.radioStyleUnselected}
                      label={item.label}
                      name={item.label}
                      labelNumberOfLines={1}
                      value={bondOwnership}
                      updateFieldValue={updateFieldValue}
                    />
                  );
                })}
              </View>
            ) : null}
          </View>
        </View>
        <TextAreaInput
          label={"BOND NUMBER"}
          updateFieldValue={updateFieldValue}
          name={"bondnumber"}
          value={bondnumber}
          placeholder={"Enter Number here"}
          textContentType={"name"}
          keyboardType={"number-pad"}
          containerCustomStyle={styles.itemContainer}
        />
        <TextAreaInput
          label={"BOND AMOUNT"}
          updateFieldValue={updateFieldValue}
          name={"bondamount"}
          value={bondamount}
          placeholder={"Enter Amount here"}
          textContentType={"number"}
          keyboardType={"number-pad"}
          containerCustomStyle={styles.itemContainer}
        />
        <View style={styles.itemContainer}>
          <View style={styles.containerRadioButton}>
            {!!OWNER_OPERATION_MODE ? (
              <View style={styles.radioButtonContainer}>
                {_.map(Object.keys(OWNER_OPERATION_MODE), (key, index) => {
                  const item = OWNER_OPERATION_MODE[key];
                  const isEmpty = _.isEmpty(item);
                  return (
                    !isEmpty && (
                      <RadioButton
                        groupName={"bondType"}
                        containerCustomStyle={styles.radioStyleUnselected}
                        label={item.label}
                        name={item.label}
                        labelNumberOfLines={1}
                        value={bondType}
                        updateFieldValue={updateFieldValue}
                      />
                    )
                  );
                })}
              </View>
            ) : null}
          </View>
        </View>
      </View>
    );
  }
}

export default BondInformation;
