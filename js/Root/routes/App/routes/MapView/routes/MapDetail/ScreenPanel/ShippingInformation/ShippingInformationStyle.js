import {StyleSheet, Dimensions} from "react-native";
import {colors} from "js/UIElements/colors";
import {fontStyle} from "js/static";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexShrink: 0
    },
    itemContainer: {
        marginBottom: 24,
    },
    hintContainer: {
        position: "absolute",
        right: 5,
    },


    itemContainerTelephone: {
        marginBottom: 5
    },
    addMoreContainer: {
        flexDirection: "row",
        width: "100%",
        marginLeft: 15,
        alignItems: "center"
    },

    addMore: {
        padding: 5,
        color: colors.dodgerBlue,
        ...fontStyle.regular
    }
});
export default styles;
