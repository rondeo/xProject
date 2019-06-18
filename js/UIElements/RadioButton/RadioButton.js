import React from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import styles from "./RadioButtonStyle";
import { radioButtonIconSvg } from "js/UIElements/SvgImages";
import { colors } from "../colors";

class RadioButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: "" };
  }

  updateFieldValue = () => {
    let param = {};
    param[this.props.groupName] = this.props.name;
    this.props.updateFieldValue(param);
    if (this.state.error != "") {
      this.setState({ error: "" });
    }
  };

  render() {
    const {
      value,
      label,
      subLabel,
      containerCustomStyle,
      titleCustomStyle,
      labelNumberOfLines,
      name
    } = this.props;
    const { error, disabled } = this.state;
    const containerCustomStyles = [
      styles.container,
      containerCustomStyle,
      error ? styles.container : {}
    ];
    const isSelected = name == value;
    const titleCustomStyles = [
      styles.titleStyle,
      { color: isSelected ? colors.black : colors.dustyGray },
      titleCustomStyle,
      error ? styles.titleStyle : {}
    ];

    const radioButtonStyle = isSelected
      ? styles.radioButtonSelectedContainer
      : styles.radioButtonContainer;

    return (
      <TouchableWithoutFeedback onPress={this.updateFieldValue}>
        <View style={containerCustomStyles}>
          <View style={radioButtonStyle}>
            {!!isSelected && <View style={styles.radioButtonInsideContainer} />}
          </View>

          <View style={styles.innerContainer}>
            <Text style={titleCustomStyles} numberOfLines={labelNumberOfLines}>
              {label}
            </Text>
            {!!subLabel && <Text style={styles.subTitleStyle}>{subLabel}</Text>}
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

RadioButton.defaultProps = {
  label: "",
  value: "",
  subLabel: "",
  containerCustomStyle: {},
  groupName: "",
  labelNumberOfLines: null
};

export default RadioButton;
