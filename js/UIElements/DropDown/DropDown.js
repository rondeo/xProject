import React from "react";
import styles from "./DropDownStyle";
import { Text, TextInput, View, TouchableWithoutFeedback } from "react-native";
import { Dropdown } from "react-native-material-dropdown";
import { colors } from "js/UIElements/colors";
import _ from "lodash";

class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: "" };
  }
  componentWillMount = () => {
    const { value, defaultValue, options } = this.props;
    if (!value && defaultValue && options.length > 0) {
      this.updateFieldValue(defaultValue);
    }
  };

  updateFieldValue = text => {
    let param = {};
    param[this.props.name] = text;
    this.props.updateFieldValue(param);
    if (this.state.error != "") {
      this.setState({ error: "" });
    }
  };
  render() {
    const {
      options,
      value,
      containerCustomStyle,
      label,
      labelStyle,
      inputContainerCustomStyle
    } = this.props;

    const { error, disabled } = this.state;
    const inputContainerStyle = [
      styles.inputContainer,
      inputContainerCustomStyle,
      error ? styles.errorInputContainer : {}
    ];

    return (
      <View style={[styles.container, containerCustomStyle]}>
        {!!label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
        <View style={inputContainerStyle}>
          <Dropdown
            data={options}
            value={value}
            inputContainerStyle={styles.dropDownInputContainerStyle}
            labelHeight={-15}
            rippleOpacity={0}
            labelPadding={0}
            fontSize={14}
            dropdownPosition={0}
            pickerStyle={styles.pickerStyle}
            onChangeText={this.updateFieldValue}
          />
        </View>
      </View>
    );
  }
}

DropDown.defaultProps = {
  value: "",
  options: [],
  defaultValue: "",
  containerCustomStyle: {},
  labelStyle: {},
  inputContainerCustomStyle: {}
};

export default DropDown;
