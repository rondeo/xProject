import React from "react";
import {View, Text, ScrollView, TouchableWithoutFeedback} from "react-native";
import styles from "./DrawerMenuStyle";
import {
    MessageIconSvg,
    MyAccountIconSvg,
    LogOutIconSvg,
    AccountInfoIconSvg,
    PersonalProfileIconSvg,
    SettingIconSvg
} from "js/UIElements/SvgImages";
import {colors} from "js/UIElements/colors";
import _ from "lodash";

const MENU_ITEMS = [
    {
        value: "MESSAGES",
        label: "Messages",
        icon: <MessageIconSvg fill={colors.dustyGray}/>,
        isClickable: false
    },
    {
        value: "MYACCOUNT",
        label: "My Account",
        icon: <MyAccountIconSvg fill={colors.dustyGray}/>,
        subMenu: [
            {
                value: "PROFILE_INFORMATION",
                label: "My Profile Information",
                icon: <PersonalProfileIconSvg fill={colors.white}/>,
                detailMenu: [
                    {
                        value: "PERSONAL_PROFILE",
                        label: "My Personal Profile",
                        isClickable: true
                    },
                    {value: "MY_BUSINESS", label: "My Business", isClickable: true},
                    // {
                    //     value: "BUSINESS_SIZE",
                    //     label: "Business Size",
                    //     isClickable: true
                    // },
                ]
            },
            {
                value: "ACCOUNT_INFORMATION",
                label: "Account Information",
                icon: <AccountInfoIconSvg fill={colors.white}/>,
                detailMenu: [

                    {
                        value: "PAYMENT_INFORMATION",
                        label: "Payment Information",
                        isClickable: true
                    },
                    {
                        value: "SHIPPING_INFORMATION",
                        label: "Shipping Information",
                        isClickable: true
                    },
                    {
                        value: "BOND_INFORMATION",
                        label: "Bond Information",
                        isClickable: true
                    },
                    {
                        value: "POWER_OF_ATTORNEY",
                        label: "Power of attorney",
                        isClickable: true
                    }
                ]
            },
            {
                value: "SETTINGS",
                label: "Setting & Prefrences",

                icon: <SettingIconSvg fill={colors.white}/>,
                detailMenu: [
                    {
                        value: "COMMUNICATION",
                        label: "Communication",

                        isClickable: true
                    },
                    {
                        value: "NOTIFICATION",
                        label: "Notifications",

                        isClickable: true
                    }
                ]
            }
            // {
            //   value: "MANAGE_USERS",
            //   label: "Manage Users"
            // }
        ]
    },
    {
        value: "LOGOUT",
        label: "Log out",
        icon: <LogOutIconSvg fill={colors.white}/>,
        isClickable: true
    }
];

const DrawerMenu = ({onDrawerItemClick}) => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.content}>
                {_.map(MENU_ITEMS, item => {
                    return (
                        <View style={styles.menuContainer} key={item.value}>
                            <TouchableWithoutFeedback
                                onPress={
                                    item.isClickable ? () => onDrawerItemClick(item.value) : null
                                }
                            >
                                <View style={styles.menuItem}>
                                    <View style={styles.menuIcon}>{item.icon}</View>
                                    <Text style={styles.menuItemText}>{item.label}</Text>
                                </View>
                            </TouchableWithoutFeedback>
                            {item.subMenu && (
                                <View style={styles.subMenuContainer}>
                                    {_.map(item.subMenu, submenuItem => {
                                        const isDetailMenu = !!submenuItem.detailMenu;
                                        return (
                                            <View
                                                style={styles.subDetailMenuContainer}
                                                key={submenuItem.value}
                                            >
                                                <TouchableWithoutFeedback
                                                    onPress={
                                                        submenuItem.isClickable
                                                            ? () => onDrawerItemClick(submenuItem.value)
                                                            : null
                                                    }
                                                >
                                                    <View style={styles.subMenuItem}>
                                                        <View style={styles.subMenuIcon}>
                                                            {submenuItem.icon}
                                                        </View>
                                                        <Text
                                                            style={
                                                                isDetailMenu
                                                                    ? styles.subMenuItemText
                                                                    : styles.detailMenuItemText
                                                            }
                                                        >
                                                            {submenuItem.label}
                                                        </Text>
                                                    </View>
                                                </TouchableWithoutFeedback>
                                                {isDetailMenu && (
                                                    <View style={styles.detailMenuContainer}>
                                                        {_.map(submenuItem.detailMenu, detailMenuItem => {
                                                            return (
                                                                <TouchableWithoutFeedback
                                                                    onPress={
                                                                        detailMenuItem.isClickable
                                                                            ? () =>
                                                                                onDrawerItemClick(
                                                                                    detailMenuItem.value
                                                                                )
                                                                            : null
                                                                    }
                                                                    key={detailMenuItem.value}
                                                                >
                                                                    <View style={styles.detailMenuItem}>
                                                                        <View style={styles.menuIcon}/>
                                                                        <Text style={styles.detailMenuItemText}>
                                                                            {detailMenuItem.label}
                                                                        </Text>
                                                                    </View>
                                                                </TouchableWithoutFeedback>
                                                            );
                                                        })}
                                                    </View>
                                                )}
                                            </View>
                                        );
                                    })}
                                </View>
                            )}
                        </View>
                    );
                })}
            </View>
        </ScrollView>
    );
};

export default DrawerMenu;
