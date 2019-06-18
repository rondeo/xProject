import React, { Component } from "react";
import styles from "./ActivityItemStyle";
import { Dimensions, Image, Text, View, TouchableWithoutFeedback, Linking } from "react-native";
import moment from "moment";
import _ from "lodash";
import { CheckIconSvg, DocumentIconSvg } from "js/UIElements/SvgImages";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { colors } from "js/UIElements/colors";
import userProfile from "js/Images/brocker.png";
import tacker from "js/Images/tacker.png";

const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  "window"
);

function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

const slideWidth = wp(100);
//const itemHorizontalMargin = wp(2);
const itemWidth = slideWidth;

const NoteComponent = ({ notes }) => {
  return _.map(notes, (item, index) => {
    return (
      <View style={styles.noteContainer} key={index}>
        <View style={styles.dots} />
        <Text style={styles.optionTitleText}>{item}</Text>
      </View>
    );
  });
};

const ProfileComponent = ({ broker }) => {
  return (
    <View style={styles.cardBox}>
      <Image style={styles.imageUserProfile} source={userProfile} />
      <View style={styles.brokerNameContainer}>
        <Text style={styles.textBrokerName}>{broker.name}</Text>
        {/*<Text style={styles.viewProfileText}>{"VIEW PROFILE"}</Text>*/}
      </View>
    </View>
  );
};

const PackingListComponent = ({ containers }) => {
  return (
    <View style={styles.packListItem}>
      <View style={styles.packListItemInnerContainer}>
        <View style={styles.columnItem}>
          <View style={styles.rowItem}>
            <DocumentIconSvg width={28} height={34} />

            <View style={styles.packageListDetailContainer}>
              <Text style={styles.logoTextAbove}>{"Packing list"}</Text>
              <Text style={styles.dateText}>
                {"April 28th. 2018"}
                {/*{moment(containers.date).format("MMM Do, YYYY")}*/}
              </Text>
            </View>
          </View>
          <View>
            <View style={styles.containers}>
              <Text style={styles.containerText}>{"Container"}</Text>
              <View style={styles.containerCode}>
                <Text style={styles.containerCodeText}>
                  {containers.containerNo}
                </Text>
              </View>
            </View>

            <View>
              <View style={styles.containerImage}>
                <Image
                  style={{ width: "100%", height: "100%", resizeMode: "cover" }}
                  source={tacker}
                />
              </View>
            </View>
          </View>
          <View style={styles.driverView}>
            <Text style={styles.driverText}>{"Driver"}</Text>

            <View style={styles.driverNameView}>
              <Text style={styles.driverName}>{containers.driver}</Text>
              <Text style={styles.driverNumber}>{"40 HQ"}</Text>
            </View>
          </View>
        </View>

        <View style={styles.contactInfoContainer}>
          <Text style={styles.contactInfo}>{`Contact ${
            containers.driver
          }`}</Text>
        </View>
      </View>
    </View>
  );
};

class ActivityItem extends Component {
  _renderItem({ item, index }) {
    return <PackingListComponent containers={item} />;
  }
   openLink = (uri) =>{
        Linking.openURL(uri);
    }
  constructor(props) {
    super(props);
    this.state = {
      slider1ActiveSlide: 0
    };
  }

  render() {
    const {
      item: {
        activity,
        milestoneSequenceNo,
        file,
        status,
        filedBy,
        date,
        broker,
        notes,
        receiptOrACENotif,
        containers
      }
    } = this.props;

    const isSequenceNoInt = milestoneSequenceNo % 1 === 0;

    return (
      <View style={styles.container}>
        <View style={styles.itemHolderMainH}>
          <View style={styles.itemHolderInner1}>
            <View style={styles.stepNumberContainer}>
              {isSequenceNoInt ? (
                <Text style={styles.stepNumberText}>{milestoneSequenceNo}</Text>
              ) : (
                <CheckIconSvg />
              )}
            </View>
          </View>

          <View style={styles.itemHolderMainL}>
            <Text style={styles.titleText}>{activity}</Text>
            <Text style={styles.dateText}>
              {moment(date).format("MMM Do, YYYY")}
            </Text>

            {notes && <NoteComponent notes={notes} />}
            {broker && <ProfileComponent broker={broker} />}
            {(file || receiptOrACENotif) && (
              <View style={styles.buttonContainer}>
                {file && (
                    <TouchableWithoutFeedback onPress={()=>this.openLink(file)}>
                  <View style={styles.buttonItem}>
                    <Text style={styles.buttonView}>{`View File`}</Text>
                  </View>
                  </TouchableWithoutFeedback>
                )}
                {receiptOrACENotif && (
                   <TouchableWithoutFeedback onPress={()=>this.openLink(receiptOrACENotif)}>
                  <View style={styles.buttonItem}>
                    <Text style={styles.buttonView}>{`View Receipt`}</Text>
                  </View>
                    </TouchableWithoutFeedback>
                )}
              </View>
            )}
          </View>
        </View>

        {containers && (
          <View style={styles.carouselContainer}>
            <Carousel
              ref={c => {
                this._carousel = c;
              }}
              inactiveSlideOpacity={1}
              inactiveSlideScale={1}
              enableMomentum={true}
              renderToHardwareTextureAndroid={true}
              sliderWidth={slideWidth - 32}
              firstItem={0}
              itemWidth={itemWidth}
              enableSnap={true}
              data={containers}
              renderItem={this._renderItem}
              onSnapToItem={index => {
                this.setState({ slider1ActiveSlide: index });
              }}
            />
            <Pagination
              dotsLength={containers.length}
              activeDotIndex={this.state.slider1ActiveSlide}
              containerStyle={styles.paginationContainer}
              dotStyle={styles.dotStyle}
              inactiveDotStyle={styles.inactiveDotStyle}
              carouselRef={this._carousel}
              tappableDots={!!this._carousel}
              inactiveDotScale={1}
            />
          </View>
        )}
      </View>
    );
  }
}

export default ActivityItem;
