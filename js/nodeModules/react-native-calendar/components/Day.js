import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from "react-native";

import styles from "./styles";

export default class Day extends Component {
  static defaultProps = {
    customStyle: {}
  };

  static propTypes = {
    caption: PropTypes.any,
    customStyle: PropTypes.object,
    filler: PropTypes.bool,
    event: PropTypes.array,
    isSelected: PropTypes.bool,
    isToday: PropTypes.bool,
    isWeekend: PropTypes.bool,
    onPress: PropTypes.func,
    showEventIndicators: PropTypes.bool,
    currentMonthDate: PropTypes.bool
  };

  dayCircleStyle = (isWeekend, isSelected, isToday, event) => {
    const { customStyle } = this.props;
    const dayCircleStyle = [
      styles.dayCircleFiller,
      customStyle.dayCircleFiller
    ];

    if (isSelected) {
      if (isToday) {
        dayCircleStyle.push(
          styles.currentDayCircle,
          customStyle.currentDayCircle
        );
      } else {
        dayCircleStyle.push(
          styles.selectedDayCircle,
          customStyle.selectedDayCircle
        );
      }
    }

    if (event) {
      if (isSelected) {
        dayCircleStyle.push(
          styles.hasEventDaySelectedCircle,
          customStyle.hasEventDaySelectedCircle,
          event.hasEventDaySelectedCircle
        );
      } else {
        dayCircleStyle.push(
          styles.hasEventCircle,
          customStyle.hasEventCircle,
          event.hasEventCircle
        );
      }
    }
    if (isToday) {
      dayCircleStyle.push(
        styles.currentDayCircle,
        customStyle.currentDayCircle
      );
    }
    return dayCircleStyle;
  };

  dayTextStyle = (isWeekend, isSelected, isToday, event) => {
    const { customStyle } = this.props;
    const dayTextStyle = [styles.day, customStyle.day];

    if (isToday && !isSelected) {
      dayTextStyle.push(styles.currentDayText, customStyle.currentDayText);
    } else if (isToday || isSelected) {
      dayTextStyle.push(styles.selectedDayText, customStyle.selectedDayText);
    } else if (isWeekend) {
      dayTextStyle.push(styles.weekendDayText, customStyle.weekendDayText);
    }

    if (event) {
      dayTextStyle.push(
        styles.hasEventText,
        customStyle.hasEventText,
        event.hasEventText
      );
    }

    if (!this.props.currentMonthDate) {
      dayTextStyle.push(styles.notCurrentMonthText);
    }
    return dayTextStyle;
  };

  dayButtonStyle = (isWeekend, isSelected, isToday, event) => {
    const { customStyle } = this.props;
    const dayButtonStyle = [styles.dayButton, customStyle.dayButton];

    if (isWeekend) {
      dayButtonStyle.push(
        styles.weekendDayButton,
        customStyle.weekendDayButton
      );
    }
    return dayButtonStyle;
  };

  render() {
    let { caption, customStyle } = this.props;
    const {
      filler,
      event,
      isWeekend,
      isSelected,
      isToday,
      showEventIndicators
    } = this.props;

    return filler ? (
      <TouchableWithoutFeedback>
        <View style={[styles.dayButtonFiller, customStyle.dayButtonFiller]}>
          <Text style={[styles.day, customStyle.day]} />
        </View>
      </TouchableWithoutFeedback>
    ) : (
      <TouchableOpacity onPress={this.props.onPress}>
        <View
          style={this.dayButtonStyle(isWeekend, isSelected, isToday, event)}
        >
          <View
            style={this.dayCircleStyle(isWeekend, isSelected, isToday, event)}
          >
            <Text
              style={this.dayTextStyle(isWeekend, isSelected, isToday, event)}
            >
              {caption}
            </Text>
          </View>
          {showEventIndicators &&
            event && (
              <View style={styles.eventIndicatorDiv}>
                {event.map((e, index) => {
                  return (
                    <View
                      style={[
                        styles.eventIndicatorFiller,
                        customStyle.eventIndicatorFiller,
                        event && styles.eventIndicator,
                        event && customStyle.eventIndicator,
                        event && e.eventIndicator
                      ]}
                      key={index}
                    />
                  );
                })}
              </View>
            )}
        </View>
      </TouchableOpacity>
    );
  }
}
