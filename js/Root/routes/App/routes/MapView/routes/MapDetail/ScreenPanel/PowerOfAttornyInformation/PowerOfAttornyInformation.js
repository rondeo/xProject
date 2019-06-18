import React, { Component } from "react";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import styles from "./PowerOfAttornyStyle";
import {
  TextAreaMultiInput,
  DropDown,
  TextAreaInput,
  Address
} from "js/UIElements";
import { PlusIconSvg, InformationIconSvg } from "js/UIElements/SvgImages";
import _ from "lodash";
const businessTypes = [
  { label: "Test 1", value: "test1" },
  { label: "Test 2", value: "test2" }
];
const BUSINESS_INCOTERMS_IN = [
  { value: "DE-", label: "DE -" },
  { value: "DE - 1", label: "DE - 1" },
  { value: "DE - 2", label: "DE - 2" }
];
const DOING_BUSINESS_AS = [
  { value: "DE-", label: "DE -" },
  { value: "DE - 1", label: "DE - 1" },
  { value: "DE - 2", label: "DE - 2" }
];
const OPTIONS = [
  { value: "INDEPENDENCE", label: "Independence" },
  { value: "BROKARAGE", label: "Brokarage" }
];

class PowerOfAttornyInformation extends Component {
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
        carriers = {},
        freightForwarders = {},
        brokers = {},
        businessAddress = {},
        date,
        state
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
            options={BUSINESS_INCOTERMS_IN}
            value={"DE - "}
            name="BUSINESS_INCOTERMS_IN"
            label={"BUSINESS INCOTERMS IN"}
            updateFieldValue={this.updateFieldValue}
          />
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.hintContainer}>
            <TouchableWithoutFeedback>
              <InformationIconSvg />
            </TouchableWithoutFeedback>
          </View>
          <DropDown
            options={DOING_BUSINESS_AS}
            value={"DAP - "}
            name="DOING_BUSINESS_AS"
            label={"DBA (DOING BUSINESS AS)"}
            updateFieldValue={this.updateFieldValue}
          />
        </View>

        <Address
          updateFieldValue={updateFieldValue}
          name={"businessAddress"}
          value={businessAddress}
        />

        {_.map(Object.keys(freightForwarders), (key, index) => {
          const item = freightForwarders[key];
          const isEmpty = _.isEmpty(item);

          return (
            !isEmpty && (
              <TextAreaMultiInput
                key={key}
                label={index == 0 ? "PORTS" : ""}
                containerCustomStyle={styles.portItemContainer}
                value={item}
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
      </View>
    );
  }
}

export default PowerOfAttornyInformation;
