import React from "react";
import styles from "./ActivityTimeLineStyle";
import { View, Text } from "react-native";
import { LocationIconSvg, PortIconSvg } from "js/UIElements/SvgImages";
import { dateDifference } from "js/Services";
import _ from "lodash";
import { colors } from "js/UIElements/colors";
import { StatusIcon } from "js/UIElements";
import { getCountString } from "js/Services";
const IconContainer = ({ left, bottom = 0, icon, zIndex = 1 }) => {
  return (
    <View
      style={{
        ...styles.iconContainer,
        left: `${left - 4}%`,
        bottom: `${bottom}%`,
        zIndex: zIndex
      }}
    >
      {icon}
    </View>
  );
};

const LocationIcon = () => {
  return (
    <View style={styles.locationIconContainer}>
      <LocationIconSvg />
      <View style={styles.blackDot} />
    </View>
  );
};

const SequanceIcon = ({ number }) => {
  return (
    <View style={styles.sequanceIconContainer}>
      <View
        style={{
          ...styles.iconOuterShadow,
          backgroundColor: colors.christi,
          width: 48,
          height: 48,
          borderRadius: 24
        }}
      />
      <Text style={styles.sequanceText}>{number}</Text>
    </View>
  );
};

const ContainerIcon = ({ number }) => {
  const countString = getCountString({
    count: number,
    singularText: "container",
    pluralText: "containers"
  });
  return (
    <View style={styles.containerIconContainer}>
      <StatusIcon status="green" showBorder={true} showShadow={true} />
      <Text style={styles.containerText}>{countString}</Text>
    </View>
  );
};

const PortIcon = ({ number }) => {
  return (
    <View style={styles.portIconContainer}>
      <View
        style={{
          ...styles.iconOuterShadow,
          backgroundColor: colors.black,
          width: 64,
          height: 64,
          borderRadius: 32
        }}
      />
      <PortIconSvg />
    </View>
  );
};
class ActivityTimeLine extends React.Component {
  render() {
    const { activities, startDate, endDate } = this.props;

    const totalEstimatedDays = dateDifference.inDays(
      new Date(startDate),
      new Date(endDate)
    );

    let leftPositonWidth = 0;
    let lastDate = startDate;
    return (
      <View style={styles.container}>
        <IconContainer icon={<LocationIcon />} left={0} bottom={43} />
        <IconContainer icon={<LocationIcon />} left={100} bottom={43} />
        {_.map(activities, (activity, index) => {
          const isSequenceNoInt = activity.milestoneSequenceNo % 1 === 0;
          const currentDays = dateDifference.inDays(
            new Date(startDate),
            new Date(activity.date)
          );

          lastDate = activity.date;

          leftPositonWidth = (currentDays * 100) / totalEstimatedDays;
          const isPortOfArrival = activity.status == "PortOfArrival";
          if (isPortOfArrival) {
            return (
              <IconContainer
                left={leftPositonWidth}
                icon={<PortIcon />}
                key={`PortOfArrival${activity.milestoneSequenceNo}`}
                zIndex={index + 2}
              />
            );
          }
          if (activity.containers) {
            return (
              <IconContainer
                left={leftPositonWidth}
                icon={
                  <ContainerIcon
                    number={activity.milestoneSequenceNo}
                    containersLength={activity.containers.length}
                  />
                }
                key={activity.milestoneSequenceNo}
                zIndex={index + 1}
              />
            );
          } else if (isSequenceNoInt) {
            return (
              <IconContainer
                left={leftPositonWidth}
                icon={<SequanceIcon number={activity.milestoneSequenceNo} />}
                key={activity.milestoneSequenceNo}
                zIndex={index + 1}
              />
            );
          }
        })}
        <View style={styles.line}>
          <View
            style={{ ...styles.greenLine, width: `${leftPositonWidth}%` }}
          />
        </View>
      </View>
    );
  }
}

export default ActivityTimeLine;
