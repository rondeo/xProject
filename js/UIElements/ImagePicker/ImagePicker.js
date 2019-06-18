import React from "react";
import styles from "./ImagePickerStyle";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { CameraIconSvg, CloseIconSvg } from "js/UIElements/SvgImages";
import PickImage from "react-native-image-picker";
import { colors } from "js/UIElements/colors";
class ImagePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: "" };
  }

  chooseImage = () => {
    let options = {
      title: null,
      takePhotoButtonTitle: "Camera",
      chooseFromLibraryButtonTitle: "Gallery",
      multiple: false,
      mediaType: "photo"
    };

    PickImage.showImagePicker(options, item => {
      if (!item.didCancel) {
        this.updateFieldValue(item.uri);
      }
    });
  };

  updateFieldValue = value => {
    let param = {};
    param[this.props.name] = value;
    this.props.updateFieldValue(param);
    if (this.state.error != "") {
      this.setState({ error: "" });
    }
  };

  clearImage = () => {
    this.updateFieldValue("");
  };
  render() {
    const {
      label,
      containerCustomStyle,
      labelStyle,
      imagePickerContainerCustomStyle,
      selectLabel,
      value
    } = this.props;
    //console.log(value);

    return (
      <View style={[styles.container, containerCustomStyle]}>
        {!!label ? (
          <Text style={[styles.label, labelStyle]}>{label}</Text>
        ) : null}
        {!!value ? (
          <View
            style={[
              styles.imagePickerContainer,
              imagePickerContainerCustomStyle
            ]}
          >
            <ImageBackground
              resizeMode="cover"
              source={{ uri: value }}
              style={styles.image}
            />
            <View style={styles.imageLayer} />
            <TouchableOpacity
              style={styles.closeButtonCotainer}
              activeOpacity={0.8}
              onPress={this.clearImage}
            >
              <CloseIconSvg fill={colors.white} width={16} height={16} />
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            style={[
              styles.imagePickerContainer,
              imagePickerContainerCustomStyle
            ]}
            activeOpacity={0.8}
            onPress={this.chooseImage}
          >
            <CameraIconSvg />
            <Text style={styles.selectLabel}>{selectLabel}</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

ImagePicker.defaultProps = {
  label: "",
  value: "",
  selectLabel: "Select an Image",
  containerCustomStyle: {},
  labelStyle: {},
  imagePickerContainerCustomStyle: {}
};

export default ImagePicker;
