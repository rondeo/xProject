import React from "react";
import styles from "./ACHCardStyle";
import { Text, View } from "react-native";
import { CheckBox } from "js/UIElements";
import _ from "lodash";

const CHECK_BOXES = [
  {
    name: "SAVINGS",
    label: "Savings"
  },
  {
    name: "CHECKING",
    label: "Checking"
  }
];

class ACHCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: "" };
  }

  updateFieldValue = params => {};

  render() {
    const { label, value, updateFieldValue } = this.props;

    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.cardTitle}>{"ACH INFORMATION"}</Text>
          <View style={styles.LinnerContainer}>
            {_.map(CHECK_BOXES, item => {
              const checkBoxValue = _.get(value, item.name, false);
              return (
                <CheckBox
                  key={item.name}
                  name={item.name}
                  label={item.label}
                  value={checkBoxValue}
                  updateFieldValue={this.updateFieldValue}
                  containerCustomStyle={styles.achCardcontainer}
                  titleCustomStyle={styles.customeCheckboxTitleStyle}
                />
              );
            })}
          </View>
          <View style={styles.preferedContainer}>
            <CheckBox
              isCircle={true}
              name={"prefered"}
              label={"Prefered"}
              value={_.get(value, "prefered", false)}
              updateFieldValue={this.updateFieldValue}
            />
          </View>
        </View>
        <View style={styles.cardHolderContainer}>
          <Text style={styles.cardHolderTitle}>{"NAME OF ACCOUNT"}</Text>
          <Text style={styles.cardHolderName}>
            {value.fullName ? value.fullName : "-"}
          </Text>
          <View style={styles.cvvContainer}>
            <Text style={styles.cardHolderTitle}>{"BANK NAME"}</Text>
            <Text style={styles.cardCVVNumber}>
              {value.bankName ? value.bankName : "-"}
            </Text>
          </View>
        </View>
        <View style={styles.cardInfoContainer}>
          <View style={styles.cardHolderContainer}>
            <Text style={styles.cardHolderTitle}>{"ACCOUNT NUMBER"}</Text>
            <Text style={styles.cardHolderNumber}>
              {value.accountNumber ? value.accountNumber : "-"}
            </Text>
          </View>
          <View style={styles.cvvContainer}>
            <Text style={styles.cardHolderTitle}>{"ROUTING NUMBER"}</Text>
            <Text style={styles.cardCVVNumber}>
              {value.routingNumber ? value.routingNumber : "-"}
            </Text>
          </View>
        </View>
        <View style={styles.cardHolderContainer}>
          <Text style={styles.cardHolderTitle}>{"BANK CITY /STATE"}</Text>
          <Text style={styles.cardExpDate}>
            {value.bankCity ? value.bankCity : "-"}
          </Text>
        </View>
      </View>
    );
  }
}

export default ACHCard;
