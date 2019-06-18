import React, {Component} from "react";
import {Text, View} from "react-native";
import styles from "./BusinessSizeStyle";
import {RadioButton, TextAreaInput} from "js/UIElements";
import _ from "lodash";

const OWNER_TYPE = [
    {value: "My Own", label: "My Own"},
    {value: "Klear Express", label: "Klear Express"},
    {value: "Broker", label: "Broker"}
];
const OWNER_OPERATION_MODE = [
    {value: "Annually", label: "Annually"},
    {value: "Monthly", label: "Monthly"}
];

class BusinessSize extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount = () => {
        const {initScreen, currentScreen} = this.props;
        initScreen({screenName: currentScreen});
    };

    updateFieldValue = params => {
        let param = {};
        param[this.props.name] = {...this.props.value, ...params};
        this.props.updateFieldValue(param);
        if (this.state.error != "") {
            this.setState({error: ""});
        }
    };

    render() {
        const {
            data: {
                bondnumber = "",
                bondamount = "",
                bondOwnership = "",
                bondType = "",
                numberOfShipment = "4000"
            } = {},
            updateFieldValue
        } = this.props;

        return (
            <View style={styles.container}>
                <View style={styles.itemContainer}>
                    <Text style={styles.label}>{'NUMBER OF SHIPMENTS'}</Text>
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
                <View style={styles.container}/>


            </View>
        );
    }
}

export default BusinessSize;
