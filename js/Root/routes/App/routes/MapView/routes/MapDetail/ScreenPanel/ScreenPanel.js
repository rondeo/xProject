import React, {Component} from "react";

import {View, Text, TouchableOpacity, ScrollView} from "react-native";
import _ from "lodash";
import styles from "./ScreenPanelStyle";
import {connect} from "react-redux";
import {CloseIconSvg} from "js/UIElements/SvgImages";
import {colors} from "js/UIElements/colors";
import {updateFieldValue, initScreen} from "js/modules/screenDetailModule";

import PersonalProfile from "./PersonalProfile";
import Communication from "./Communication";
import Notifications from "./Notifications";
import PaymentInformation from "./PaymentInformation";
import CompanyInformation from "./CompanyInformation";
import ShippingInformation from "./ShippingInformation";
import BondInformation from "./BondInformation";
import BusinessSize from "./BusinessSize";
import PowerOfAttornyInformation from "./PowerOfAttornyInformation";


const SCREEN_INFO = {
    PERSONAL_PROFILE: {
        label: "Personal Profile",
        screen: props => <PersonalProfile {...props} />
    },
    COMMUNICATION: {
        label: "Communication",
        screen: props => <Communication {...props} />
    },
    NOTIFICATION: {
        label: "Notifications",
        screen: props => <Notifications {...props} />
    },
    PAYMENT_INFORMATION: {
        label: "Payment Information",
        screen: props => <PaymentInformation {...props} />
    },
    MY_BUSINESS: {
        label: "Company Information",
        screen: props => <CompanyInformation {...props} />
    },
    SHIPPING_INFORMATION: {
        label: "Shipping Information",
        screen: props => <ShippingInformation {...props} />
    },
    BOND_INFORMATION: {
        label: "Bond Information",
        screen: props => <BondInformation {...props} />
    },
    POWER_OF_ATTORNEY: {
        label: "Power Of Attorny",
        screen: props => <PowerOfAttornyInformation {...props} />
    },
    BUSINESS_SIZE: {
        label: "Business Size",
        screen: props => <BusinessSize {...props} />
    }
};
/*
*this is used for manage save and cancel button ,add screenname to  HIDE_CANCEL_BUTTON from SCREEN_INFO for hide cancel button
*
*/
const HIDE_CANCEL_BUTTON = {COMMUNICATION:{}, NOTIFICATION:{}};

class ScreenPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttons: {}
        };

        props.setParams({
            color: "rgba(0, 0, 0, 1)",
            rightComponent: (
                <CloseIconSvg fill={colors.white} width={16} height={16}/>
            ),
            customOnHeaderRightClick: () => {
                props.onScreenPanelCloseClick();
            }
        });
    }

    componentWillMount = () => {
        this.resetButtons();
    };

    resetButtons = () => {
        this.setState({
            buttons: {
                cancel: {label: "Cancel", onClick: this.onCancelClick},
                save: {label: "SAVE & CLOSE", onClick: this.onSaveClick}
            }
        });
        this.resetScroll();
    };

    updateButtons = params => {
        const updateButtons = {...this.state.buttons, ...params};
        this.setState({buttons: updateButtons});
        this.resetScroll();
    };

    onSaveClick = () => {
        const {onScreenPanelCloseClick} = this.props;
        onScreenPanelCloseClick();
    };

    onCancelClick = () => {
        const {onScreenPanelCloseClick} = this.props;
        onScreenPanelCloseClick();
    };

    updateFieldValue = params => {
        const {updateFieldValue, currentScreen} = this.props;
        updateFieldValue({data: params, screenName: currentScreen});
    };

    componentWillReceiveProps = nextProps => {
        if (this.props.currentScreen != nextProps.currentScreen) {
            this.resetScroll();
        }
    };

    resetScroll = () => {
        if (this.scrollView) {
            this.scrollView.scrollTo({x: 0, y: 0, animated: false});
        }
    };

    render() {
        const {currentScreen} = this.props;

        const currentScreenDetail = SCREEN_INFO[currentScreen] || {};
        const isPref = _.get(HIDE_CANCEL_BUTTON, currentScreen, "");
        const {
            buttons: {cancel, save}
        } = this.state;

        const screen = currentScreenDetail
            ? currentScreenDetail.screen({
                ...this.props,
                updateFieldValue: this.updateFieldValue,
                resetButtons: this.resetButtons,
                updateButtons: this.updateButtons
            })
            : null;
        const label = _.get(currentScreenDetail, "label", "");
        return (
            <View style={styles.container}>
                <View style={styles.panel}>
                    <ScrollView
                        ref={ref => (this.scrollView = ref)}
                        contentContainerStyle={styles.scrollView}
                    >
                        <Text style={styles.headerText}>{label}</Text>
                        <View style={styles.screenContainer}>{screen}</View>
                    </ScrollView>
                    <View style={styles.bottomContainer}>
                        {!isPref ? (
                            <TouchableOpacity
                                onPress={cancel.onClick}
                                style={styles.cancelButton}
                                activeOpacity={0.8}
                            >
                                <Text style={styles.cancelButtonText}>{cancel.label}</Text>

                            </TouchableOpacity>
                        ) : null}
                        <TouchableOpacity
                            onPress={save.onClick}
                            style={styles.saveButton}
                            activeOpacity={0.8}
                        >
                            <Text style={styles.saveButtonText}>{save.label}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const mapActionCreators = {
    updateFieldValue,
    initScreen
};

const mapStateToProps = (state, ownProps) => {
    const currentScreen = state.navigation.currentScreen;
    return {
        currentScreen: currentScreen,
        data: state.screenDetail[currentScreen] || {}
    };
};

export default connect(
    mapStateToProps,
    mapActionCreators
)(ScreenPanel);
