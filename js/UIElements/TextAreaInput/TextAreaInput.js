import React from "react";
import styles from "./TextAreaInputStyles";
import { View, Text, TextInput } from "react-native";
import { colors } from "js/UIElements/colors";
import _ from "lodash";
class TextAreaInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: "" };
  }

  updateFieldValue = text => {
    let param = {};
    param[this.props.name] = text;
    this.props.updateFieldValue(param);
    if (this.state.error != "") {
      this.setState({ error: "" });
    }
  };

  contentSizeChanged = e => {
    if (this.props.onContentSizeChange) {
      this.props.onContentSizeChange(e);
    }
  };

  getTextInputHeight = () => {
    return this._textInput.measure((ox, oy, width, height, px, py) => {
      return height;
    });
  };

  isValid = () => {
    if (this.props.value == null || this.props.value.trim() == "") {
      this.setState({ error: this.props.error });
      return 1;
    } else if (this.props.customValidation) {
      let customError = this.props.customValidation(this.props.value);
      if (customError != "") {
        this.setState({ error: customError });
        return 1;
      } else {
        return 0;
      }
    } else {
      return 0;
    }
  };

  onFocus = () => {
    if (this.props.onFocus) {
      this.props.onFocus();
    }
  };

  isFocused = () => {
    return this._textInput.isFocused();
  };

  render() {
    const {
      fontSize,
      fontWeight,
      labelStyle,
      inputTextCustomStyle,
      placeholder,
      placeholderTextColor,
      label,
      value,
      blurOnSubmit,
      multiline,
      maxLength,
      numberOfLines,
      editable,
      autoGrow,
      autoFocus,
      onContentSizeChange,
      onSubmitEditing,
      secureTextEntry,
      keyboardType,
      maxHeight,
      scrollEnabled,
      errorViewStyle,
      containerCustomStyle,
      textContentType,
      rightComponent,
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
          <TextInput
            ref={component => (this._textInput = component)}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            style={[
              styles.inputText,
              inputTextCustomStyle,

              { fontWeight, fontSize, paddingRight: rightComponent ? 40 : 10 }
            ]}
            onChangeText={text => this.updateFieldValue(text)}
            value={value}
            blurOnSubmit={blurOnSubmit}
            underlineColorAndroid="transparent"
            multiline={multiline}
            maxLength={maxLength}
            numberOfLines={numberOfLines}
            editable={editable}
            onContentSizeChange={e => this.contentSizeChanged(e)}
            autoGrow={autoGrow}
            onFocus={this.onFocus}
            autoFocus={autoFocus}
            onContentSizeChange={onContentSizeChange}
            onSubmitEditing={onSubmitEditing}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            maxHeight={maxHeight}
            scrollEnabled={scrollEnabled}
            textContentType={textContentType}
          />
          {!!rightComponent && (
            <View style={styles.rightComponent}>{rightComponent}</View>
          )}
        </View>

        {!!error && !disabled ? (
          <View style={[styles.errorView, errorViewStyle]}>
            <Text style={styles.error}>{error}</Text>
          </View>
        ) : null}
      </View>
    );
  }
}

TextAreaInput.defaultProps = {
  autoGrow: false,
  blurOnSubmit: false,
  placeholderTextColor: colors.smoke,
  multiline: false,
  numberOfLines: 1,
  secureTextEntry: false,
  keyboardType: "default",
  editable: true,
  autoFocus: false,
  fontSize: 16,
  fontWeight: "500",
  scrollEnabled: undefined,
  inputTextCustomStyle: {},
  labelStyle: {},
  errorViewStyle: {},
  placeholder: "",
  containerCustomStyle: {},
  textContentType: "none",
  rightComponent: undefined,
  inputContainerCustomStyle: {}
};

export default TextAreaInput;
