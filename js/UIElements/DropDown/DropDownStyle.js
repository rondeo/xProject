import {StyleSheet,Platform} from "react-native";
import {colors} from "js/UIElements/colors";
import {fontStyle} from "js/static";

const styles = StyleSheet.create({
    container: {
        width: "100%"
    },
    dropDownInputContainerStyle: {
        paddingLeft: 8,
        borderBottomColor: "transparent",
        alignItems: "center",
        height:Platform.OS === 'ios' ? 14 : 20
    },
    pickerStyle: {
        marginTop: 20,
        borderRadius: 4,

    },
    label: {
        fontSize: 14,
        ...fontStyle.medium,
        color: colors.dustyGray,
        paddingLeft: 0,
        marginBottom: 6
    },
    inputContainer: {
        width: "100%",
        flexShrink: 0,
        borderRadius: 3,
        borderColor: colors.silver,
        borderWidth: 1,
        justifyContent: "center",
        paddingVertical: 10
    }
});
export default styles;
