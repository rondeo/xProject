import React from "react";
import styles from "./BrokersInputStyle";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import { TextAreaInput, RadioButton } from "js/UIElements";
import _ from "lodash";

class BrokersInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: "" };
  }

  updateFieldValue = params => {
    let param = {};
    param[this.props.name] = { ...this.props.value, ...params };
    this.props.updateFieldValue(param);
    if (this.state.error != "") {
      this.setState({ error: "" });
    }
  };

  removeField = () => {
    let param = {};
    param[this.props.name] = {};
    this.props.updateFieldValue(param);
  };

  render() {
    const { showRemove, label, value, options } = this.props;

    return (
      <View style={styles.container}>
        {!!label ? (
          <View style={styles.rowLabelContainer}>
            <Text style={styles.label} numberOfLines={1}>
              {label}
            </Text>

            {!!options ? (
              <View style={styles.radioButtonContainer}>
                {_.map(options, (item, index) => {
                  return (
                    <RadioButton
                      key={index}
                      containerCustomStyle={styles.radioButton}
                      groupName={"type"}
                      label={item.label}
                      name={item.label}
                      labelNumberOfLines={1}
                      value={value.type}
                      updateFieldValue={this.updateFieldValue}
                    />
                  );
                })}
              </View>
            ) : null}
          </View>
        ) : null}

        <View style={styles.containerBroker}>
          <TextAreaInput
            containerCustomStyle={styles.inputContainer}
            value={value.name}
            inputTextCustomStyle={styles.nameInputText}
            name="name"
            updateFieldValue={this.updateFieldValue}
            placeholder={"Name of the Broker"}
          />
          <TextAreaInput
            containerCustomStyle={styles.inputContainer}
            value={value.email}
            inputTextCustomStyle={styles.emailInputText}
            name="email"
            placeholder={"Email Address of the Broker"}
            updateFieldValue={this.updateFieldValue}
          />
        </View>
        {showRemove && (
          <View style={styles.removeViewContainer}>
            <TouchableWithoutFeedback onPress={() => this.removeField()}>
              <Text style={styles.removeView}>{`Remove`}</Text>
            </TouchableWithoutFeedback>
          </View>
        )}
      </View>
    );
  }
}

BrokersInput.defaultProps = {
  showRemove: false
};

export default BrokersInput;
