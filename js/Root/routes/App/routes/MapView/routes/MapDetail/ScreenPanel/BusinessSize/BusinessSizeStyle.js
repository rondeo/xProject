import {StyleSheet, Dimensions} from "react-native";
import {colors} from "js/UIElements/colors";
import {fontStyle} from "js/static";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexShrink: 0
    },
    itemContainer: {
        marginBottom: 24
    },
    hintContainer: {
        position: "absolute",
        right: 5
    },
    itemContainerTelephone: {
        marginBottom: 5
    },
    containerRadioButton: {
        flexDirection: "column",
        marginBottom: 10
    },
    shipmentContainer: {
        width: "100%",
        flexDirection: "row"
    },
    shipmentInput: {
        width: "40%",
        marginRight: 8,
    },
    customeInputContainer: {
        width: "100%",
    },
    radioStyleUnselected: {
        marginRight: 4,
        flexBasis: "25%"
    },
    radioButtonContainer: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },
    label: {
        width: 250,
        fontSize: 12,
        ...fontStyle.medium,
        color: colors.dustyGray,
        paddingLeft: 0,
        marginBottom: 6
    },
});
export default styles;
