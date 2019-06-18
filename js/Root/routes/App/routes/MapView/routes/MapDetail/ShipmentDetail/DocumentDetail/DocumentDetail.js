import React, { Component } from "react";
import { View, Text } from "react-native";
import styles from "./DocumentDetailStyle";
import DocumentItem from "./DocumentItem";
import _ from "lodash";
import { DocumentIconSvg } from "js/UIElements/SvgImages";

class DocumentDetail extends Component {
  render() {
    const { documents } = this.props;

    return (
      <View style={styles.container}>
        {_.map(documents, item => {
          return <DocumentItem item={item} key={item.type} />;
        })}
        {/*<View style={styles.addButtonContainer}>*/}
          {/*<DocumentIconSvg width={28} height={35} />*/}
          {/*<View style={styles.addButtonDetailContainer}>*/}
            {/*<Text style={styles.addButtonText}>{`Add More Documents`}</Text>*/}
            {/*<Text style={styles.addButtonSubText}>{`For this Shipment`}</Text>*/}
          {/*</View>*/}
        {/*</View>*/}
      </View>
    );
  }
}

export default DocumentDetail;
