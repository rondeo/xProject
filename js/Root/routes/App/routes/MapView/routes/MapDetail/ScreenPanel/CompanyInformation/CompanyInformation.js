import React, { Component } from "react";
import { View, Text } from "react-native";
import styles from "./CompanyInformationStyle";
import { DropDown, TextAreaInput, Address, RadioButton } from "js/UIElements";
import { getCountriesNames } from "js/Services";
import _ from "lodash";
const businessTypes = [
  { label: "Test 1", value: "test1" },
  { label: "Test 2", value: "test2" }
];
const numerOptions = [
  { value: "IRS", label: "IRS" },
  { value: "SSN", label: "SSN" },
  { value: "CBP", label: "CBP" }
];
const OWNER_TYPE = [
    {value: "My Own", label: "My Own"},
    {value: "Klear Express", label: "Klear Express"},
    {value: "Broker", label: "Broker"}
];
const OWNER_OPERATION_MODE = [
    {value: "Annually", label: "Annually"},
    {value: "Monthly", label: "Monthly"}
];
class CompanyInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

  componentWillMount = () => {
    const { initScreen, currentScreen } = this.props;
    initScreen({ screenName: currentScreen });
  };

  updateFieldValue = (type, params) => {
    let param = {};
    param[type] = { ...this.props.data[type], ...params };
    console.log(param);
    this.props.updateFieldValue(param);
  };

  render() {
    const {
      data: {
        name,
        businessType,
        businessIncorporation = "us",
        importerNumber: { type, number } = {},
        businessAddress = {},
          bondnumber = "",
          bondamount = "",
          bondOwnership = "",
          bondType = "",
          numberOfShipment = "4000"
      },
      updateFieldValue
    } = this.props;
    const countriesName = getCountriesNames();
    return (
      <View style={styles.container}>
        <TextAreaInput
          label={"BUSINESS NAME"}
          containerCustomStyle={styles.itemContainer}
          updateFieldValue={updateFieldValue}
          name={"name"}
          value={name}
        />
        <Address
          updateFieldValue={updateFieldValue}
          name={"businessAddress"}
          value={businessAddress}
        />
        <DropDown
          label={"BUSINESS TYPE"}
          options={businessTypes}
          updateFieldValue={updateFieldValue}
          containerCustomStyle={styles.itemContainer}
          name={"businessType"}
          value={businessType}
          defaultValue={businessTypes[0].value}
        />
        <DropDown
          label={"BUSINESS INCORPORATION"}
          options={countriesName}
          updateFieldValue={updateFieldValue}
          containerCustomStyle={styles.itemContainer}
          name={"businessIncorporation"}
          value={businessIncorporation}
        />
        <View style={styles.rowLabelContainer}>
          <Text style={styles.label} numberOfLines={1}>
            {"IMPORTER NUMBER"}
          </Text>

          <View style={styles.radioButtonContainer}>
            {_.map(numerOptions, (item, index) => {
              return (
                <RadioButton
                  containerCustomStyle={styles.radioButton}
                  groupName={"type"}
                  label={item.label}
                  name={item.label}
                  labelNumberOfLines={1}
                  value={type}
                  updateFieldValue={params =>
                    this.updateFieldValue("importerNumber", params)
                  }
                />
              );
            })}
          </View>
        </View>

        <TextAreaInput
          updateFieldValue={params =>
            this.updateFieldValue("importerNumber", params)
          }
          inputTextCustomStyle={styles.itemContainer}
          name={"number"}
          value={number}
          keyboardType={"number-pad"}
        />

          <View style={styles.itemContainer}>
              <Text style={styles.labeBusinessSize}>{'BUSINESS SIZE'}</Text>
              <Text style={styles.label2}>{'NUMBER OF SHIPMENTS'}</Text>
              <View style={styles.shipmentContainer}>
                  <TextAreaInput
                      labelStyle={styles.label}
                      updateFieldValue={updateFieldValue}
                      name={"numberOfShipment"}
                      value={numberOfShipment}
                      placeholder={"Number Of Shipment"}
                      textContentType={"name"}
                      keyboardType={"number-pad"}
                      containerCustomStyle={styles.shipmentInput}
                      inputContainerStyle={styles.customeInputContainer}/>
                  {!!OWNER_OPERATION_MODE ? (
                      <View style={styles.radioButtonContainer2}>
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
          <View style={styles.container}/>



      </View>
    );
  }
}

export default CompanyInformation;
