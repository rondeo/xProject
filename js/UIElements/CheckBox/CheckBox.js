import React from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import styles from "./CheckBoxStyle";
import { CheckBoxIconSvg } from "js/UIElements/SvgImages";
import { colors } from "js/UIElements/colors";
class CheckBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: "" };
  }

  updateFieldValue = value => {
    let param = {};
    param[this.props.name] = value;
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
      isCircle,
      labelNumberOfLines
    } = this.props;
    const { error, disabled } = this.state;
    const containerCustomStyles = [
      styles.container,
      containerCustomStyle,
      error ? styles.container : {}
    ];
    const titleCustomStyles = [
      styles.titleStyle,
      { color: !!value ? colors.black : colors.dustyGray },
      titleCustomStyle,
      error ? styles.titleStyle : {}
    ];

    const checkBoxStyle = !!value
      ? styles.checkBoxSelectedContainer
      : styles.checkBoxContainer;
    return (
      <TouchableWithoutFeedback onPress={() => this.updateFieldValue(!value)}>
        <View style={containerCustomStyles}>
          <View style={{ ...checkBoxStyle, borderRadius: isCircle ? 8 : 3 }}>
            {!!value && <CheckBoxIconSvg />}
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

CheckBox.defaultProps = {
  label: "",
  value: "",
  subLabel: "",
  containerCustomStyle: {},
  isCircle: false,
  labelNumberOfLines: null,
  titleCustomStyle: {}
};

export default CheckBox;
