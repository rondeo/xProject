import React from "react";
import styles from "./VisaCardStyle";
import { Image, Text, TouchableWithoutFeedback, View } from "react-native";
import visa from "js/Images/visa.png";
import { CheckBox } from "js/UIElements";
import _ from "lodash";

class VisaCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: "" };
  }

  updateFieldValue = params => {};
  render() {
    const { label, value } = this.props;

    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.cardTitle}>{"CREDIT CARD"}</Text>
          <Image source={visa} style={styles.visaCard} />
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
          <Text style={styles.cardHolderTitle}>{"CARD HOLDER"}</Text>
          <Text style={styles.cardHolderName}>
            {value.fullName ? value.fullName : "-"}
          </Text>
        </View>
        <View style={styles.cardInfoContainer}>
          <View style={styles.cardHolderContainer}>
            <Text style={styles.cardHolderTitle}>{"NUMBER"}</Text>
            <Text style={styles.cardHolderNumber}>
              {value.cardNumber ? value.cardNumber : "-"}
            </Text>
          </View>
          <View style={styles.cvvContainer}>
            <Text style={styles.cardHolderTitle}>{"CVV"}</Text>
            <Text style={styles.cardCVVNumber}>
              {value.cvv ? value.cvv : "-"}
            </Text>
          </View>
        </View>
        <View style={styles.cardHolderContainer}>
          <Text style={styles.cardHolderTitle}>{"EXP.DATE"}</Text>
          <Text style={styles.cardExpDate}>{`${
            value.expMonth ? value.expMonth : "00"
          }/${value.expYear ? value.expYear : "00"}`}</Text>
        </View>
      </View>
    );
  }
}

export default VisaCard;
