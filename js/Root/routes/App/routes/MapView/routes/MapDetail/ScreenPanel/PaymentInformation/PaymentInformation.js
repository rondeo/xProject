import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from "react-native";
import styles from "./PaymentInformationStyle";
import VisaCard from "./VisaCard";
import ACHCard from "./ACHCard";
import AddBankInformation from "./AddBankInformation";
import AddCreditCardInformation from "./AddCreditCardInformation";
import _ from "lodash";
import {
  AchIconSvg,
  ArrowIconSvg,
  CreditCardIconSvg,
  PaypalIconSvg,
  PlusIconSvg
} from "js/UIElements/SvgImages";

import { colors } from "js/UIElements/colors";

const MenuItems = {
  BANK_INFO: {
    value: "bankDetails",
    label: "ACH",
    icon: <AchIconSvg />,
    intialValue: {
      fullName: "",
      bankName: "",
      accountNumber: "",
      bankCity: "",
      state: "",
      country: "",
      routingNumber: ""
    }
  },
  CREDIT_CARD_INFO: {
    value: "creditCardDetails",
    label: "Credit card",
    icon: <CreditCardIconSvg />,
    intialValue: {
      fullName: "",
      cardNumber: "",
      cvv: "",
      expMonth: "",
      expYear: ""
    }
  },
  PAYPAL: { value: "PAYPAL", label: "Paypal", icon: <PaypalIconSvg /> }
};

const CardFeed = ({ bankDetails, creditCardDetails }) => {
  return (
    <View style={styles.feedContainer}>
      {_.map(bankDetails, (item, index) => {
        return <ACHCard value={item} key={index} />;
      })}
      {_.map(creditCardDetails, (item, index) => {
        return <VisaCard value={item} key={index} />;
      })}
    </View>
  );
};
const AddButton = ({
  onMenuClick,
  isMenuOpen,
  onMenuItemClick,
  isAlreadyCard
}) => {
  const size = isAlreadyCard ? 16 : 48;
  const buttonStyle = isAlreadyCard
    ? { flexDirection: "row", width: 140 }
    : { flexDirection: "column" };
  const textStyle = isAlreadyCard
    ? { marginLeft: 8, textAlign: "center" }
    : { marginTop: 16 };

  const menuContainerStyle = isAlreadyCard ? { bottom: 16 } : { bottom: 80 };
  return (
    <View
      style={{ ...styles.innerContainer, height: isAlreadyCard ? "auto" : 350 }}
    >
      <View style={styles.createButtonContainer}>
        <TouchableWithoutFeedback onPress={onMenuClick}>
          <View style={{ ...styles.createButtonIcon, ...buttonStyle }}>
            <PlusIconSvg width={size} height={size} />
            <Text
              style={{ ...styles.createButtonText, ...textStyle }}
            >{`Add Payment Method`}</Text>
          </View>
        </TouchableWithoutFeedback>

        {isMenuOpen && (
          <View style={{ ...styles.menuContainer, ...menuContainerStyle }}>
            <View style={styles.popoverMenuContainer}>
              {_.map(Object.keys(MenuItems), key => {
                const item = MenuItems[key];
                return (
                  <TouchableOpacity
                    key={item.value}
                    onPress={() => onMenuItemClick(key)}
                    activeOpacity={0.8}
                  >
                    <View style={styles.menuItem}>
                      {item.icon}
                      <Text style={styles.popoverMenuItemTitleText}>
                        {item.label}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
            <ArrowIconSvg width={15} height={20} fill={colors.mineshaft} />
          </View>
        )}
      </View>
    </View>
  );
};

class PaymentInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentOpenScreenName: "",
      isMenuOpen: false
    };
  }

  componentWillMount = () => {
    const { initScreen, currentScreen } = this.props;
    initScreen({ screenName: currentScreen });
  };

  onMenuItemClick = value => {
    const item = MenuItems[value];
    this.setState({
      currentOpenScreenName: value,
      isMenuOpen: false,
      [value]: item.intialValue
    });
    const { updateButtons, resetButtons } = this.props;
    updateButtons({
      save: {
        label: "SAVE",
        onClick: () => {
          this.onCardSaveClick();
          this.setState({ currentOpenScreenName: "" });
          resetButtons();
        }
      },
      cancel: {
        label: "Cancel",
        onClick: () => {
          this.setState({ currentOpenScreenName: "" });
          resetButtons();
        }
      }
    });
  };

  updateCardValue = params => {
    const { currentOpenScreenName } = this.state;

    const updateScreenValue = {
      ...this.state[currentOpenScreenName],
      ...params
    };

    this.setState({ [currentOpenScreenName]: updateScreenValue });
  };

  onCardSaveClick = () => {
    const { updateFieldValue, data } = this.props;
    const { currentOpenScreenName } = this.state;
    const currentOpenScreenValue = _.get(
      MenuItems[currentOpenScreenName],
      "value",
      ""
    );

    let currenCardData = data[currentOpenScreenValue] || [];

    if (this.state[currentOpenScreenName]) {
      currenCardData.push(this.state[currentOpenScreenName]);
    }
    updateFieldValue({ [currentOpenScreenValue]: currenCardData });
  };

  onMenuClick = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  };

  render() {
    const {
      data: { bankDetails = [], creditCardDetails = [] },
      updateFieldValue
    } = this.props;
    const { currentOpenScreenName, isMenuOpen } = this.state;
    const isAlreadyCard =
      _.get(bankDetails, "length", 0) > 0 ||
      _.get(creditCardDetails, "length", 0) > 0;

    return (
      <View style={styles.container}>
        {!!!currentOpenScreenName && (
          <CardFeed
            bankDetails={bankDetails}
            creditCardDetails={creditCardDetails}
          />
        )}
        {!!!currentOpenScreenName && (
          <AddButton
            isMenuOpen={isMenuOpen}
            onMenuClick={this.onMenuClick}
            onMenuItemClick={this.onMenuItemClick}
            isAlreadyCard={isAlreadyCard}
          />
        )}
        {currentOpenScreenName == "BANK_INFO" && (
          <AddBankInformation
            value={_.get(this.state, currentOpenScreenName, {})}
            updateFieldValue={this.updateCardValue}
          />
        )}
        {currentOpenScreenName == "CREDIT_CARD_INFO" && (
          <AddCreditCardInformation
            value={_.get(this.state, currentOpenScreenName, {})}
            updateFieldValue={this.updateCardValue}
          />
        )}
      </View>
    );
  }
}

export default PaymentInformation;
