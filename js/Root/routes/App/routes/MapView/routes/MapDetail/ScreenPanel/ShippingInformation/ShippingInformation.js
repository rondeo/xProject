import React, { Component } from "react";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import styles from "./ShippingInformationStyle";
import {
  AutoComplete,
  TextAreaMultiInput,
  DropDown,
  RadioButton
} from "js/UIElements";
import { PlusIconSvg, InformationIconSvg } from "js/UIElements/SvgImages";
import BrokersInput from "./BrokersInput";
import _ from "lodash";

const INCOTERMS = [
  { value: "DAP -", label: "DAP -" },
  { value: "DAP - 1", label: "DAP - 1" },
  { value: "DAP - 2", label: "DAP - 2" }
];
const OPTIONS = [
  { value: "INDEPENDENCE", label: "Independence" },
  { value: "BROKARAGE", label: "Brokarage" }
];

class ShippingInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount = () => {
    const {
      initScreen,
      currentScreen,
      data: { freightForwarders },
      data: { carriers },
      data: { brokers }
    } = this.props;
    initScreen({ screenName: currentScreen });
    if (!freightForwarders) {
      this.addMoreFreightForwardersClick();
    }
    if (!carriers) {
      this.addMoreCarriersClick();
    }
    if (!carriers) {
      this.addMoreCarriersClick();
    }
    if (!brokers) {
      this.addMoreBrokersClick();
    }
  };

  updateCarriersFieldValue = params => {
    const { updateFieldValue } = this.props;
    updateFieldValue({ carriers: params });
  };
  updateBrokersFieldValue = params => {
    const { updateFieldValue } = this.props;
    updateFieldValue({ brokers: params });
  };
  updateFreightForwardersFieldValue = params => {
    const { updateFieldValue } = this.props;
    updateFieldValue({ freightForwarders: params });
  };
  updateFieldValue = params => {
    let param = {};
    param[this.props.name] = { ...this.props.value, ...params };
    this.props.updateFieldValue(param);
    if (this.state.error != "") {
      this.setState({ error: "" });
    }
  };

  addMoreCarriersClick = () => {
    const { carriers = {} } = this.props.data;
    this.updateCarriersFieldValue({
      [Object.keys(carriers).length + 1]: {
        text: ""
      }
    });
  };
  addMoreBrokersClick = () => {
    const { brokers = {} } = this.props.data;
    this.updateBrokersFieldValue({
      [Object.keys(brokers).length + 1]: {
        name: "",
        email: ""
      }
    });
  };
  addMoreFreightForwardersClick = () => {
    const { freightForwarders = {} } = this.props.data;
    this.updateFreightForwardersFieldValue({
      [Object.keys(freightForwarders).length + 1]: {
        text: ""
      }
    });
  };

  render() {
    const {
      data: {
        incoTerms = "",
        carriers = {},
        freightForwarders = {},
        brokers = {}
      } = {},
      updateFieldValue
    } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.itemContainer}>
          <View style={styles.hintContainer}>
            <TouchableWithoutFeedback>
              <InformationIconSvg />
            </TouchableWithoutFeedback>
          </View>
          <DropDown
            options={INCOTERMS}
            value={"DAP - "}
            name="INCOTERMS"
            label={"INCOTERMS"}
            updateFieldValue={this.updateFieldValue}
            defaultValue={INCOTERMS[0].value}
          />
        </View>
        {_.map(Object.keys(freightForwarders), (key, index) => {
          const item = freightForwarders[key];
          const isEmpty = _.isEmpty(item);

          return (
            !isEmpty && (
              <TextAreaMultiInput
                key={key}
                label={index == 0 ? "FREIGHT FORWARDERS" : ""}
                containerCustomStyle={styles.itemContainerTelephone}
                value={item}
                textContentType={"phone"}
                name={key}
                updateFieldValue={this.updateFreightForwardersFieldValue}
                showRemove={index > 0}
              />
            )
          );
        })}

        <View style={styles.itemContainer}>
          <TouchableWithoutFeedback
            onPress={() => this.addMoreFreightForwardersClick()}
          >
            <View style={styles.addMoreContainer}>
              <PlusIconSvg />
              <Text style={styles.addMore}>{"Add More"}</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>

        {_.map(Object.keys(carriers), (key, index) => {
          const item = carriers[key];
          const isEmpty = _.isEmpty(item);
          return (
            !isEmpty && (
              <AutoComplete
                key={key}
                label={index == 0 ? "CARRIERS" : ""}
                containerCustomStyle={styles.itemContainerTelephone}
                value={item}
                name={key}
                updateFieldValue={this.updateCarriersFieldValue}
                showRemove={index > 0}
              />
            )
          );
        })}

        <View style={styles.itemContainer}>
          <TouchableWithoutFeedback onPress={() => this.addMoreCarriersClick()}>
            <View style={styles.addMoreContainer}>
              <PlusIconSvg />
              <Text style={styles.addMore}>{"Add More"}</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        {_.map(Object.keys(brokers), (key, index) => {
          const item = brokers[key];
          const isEmpty = _.isEmpty(item);
          return (
            !isEmpty && (
              <BrokersInput
                key={key}
                label={index == 0 ? "BROKERS" : ""}
                containerCustomStyle={styles.itemContainerTelephone}
                value={item}
                name={key}
                options={OPTIONS}
                updateFieldValue={this.updateBrokersFieldValue}
                showRemove={index > 0}
              />
            )
          );
        })}
        <View style={styles.itemContainer}>
          <TouchableWithoutFeedback onPress={() => this.addMoreBrokersClick()}>
            <View style={styles.addMoreContainer}>
              <PlusIconSvg />
              <Text style={styles.addMore}>{"Add More"}</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }
}

export default ShippingInformation;
