import React, {Component} from "react";
import {View, Text, Linking, TouchableWithoutFeedback} from "react-native";
import styles from "./DocumentItemStyle";
import {DocumentIconSvg} from "js/UIElements/SvgImages";
import moment from "moment";

class DocumentItem extends Component {
    openLink = () =>{
        Linking.openURL(this.props.item.uri);
    }
    render() {
        const {
            item: {type, date}
        } = this.props;

        return (
            <TouchableWithoutFeedback onPress={this.openLink}>
            <View style={styles.container}>
                <DocumentIconSvg/>
                <View style={styles.detailContainer}>
                    <Text style={styles.typeText}>{type}</Text>
                    <Text style={styles.dateText}>
                        {moment(date).format("MMM Do, YYYY")}
                    </Text>
                </View>
            </View>
            </TouchableWithoutFeedback>
        );
    }
}

export default DocumentItem;
