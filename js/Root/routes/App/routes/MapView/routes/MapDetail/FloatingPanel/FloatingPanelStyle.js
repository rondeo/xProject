import { StyleSheet, Dimensions } from "react-native";
import { colors } from "js/UIElements/colors";

const Screen = {
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height - 75
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },

  panelContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },

  panel: {
    height: Screen.height + 2,
    backgroundColor: "rgba(255,255,255,0.8)",
    marginHorizontal: 10,
    flexDirection: "column",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2
  },

  panelHandleContainer: {
    width: "100%",
    paddingVertical: 16,
    alignItems: "center",
    position: "relative"
  },
  panelHandle: {
    width: 25,
    height: 6,
    borderRadius: 4,
    backgroundColor: "#5887A5",
    alignSelf: "center"
  },
  closeButtonContainer: {
    position: "absolute",
    right: 0,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  closeButton: {
    padding: 3,
    width: 20,
    height: 20,
    borderRadius: 10,
    borderColor: colors.silverChalice,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  listContainer: {
    height: "100%",
    paddingBottom: 32
  }
});
export default styles;
