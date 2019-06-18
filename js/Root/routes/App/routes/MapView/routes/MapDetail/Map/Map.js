import React, { Component } from "react";
import styles from "./MapStyle";
import MapView, { Polyline, Polygon } from "react-native-maps";
import Markers from "./Markers";
import _ from "lodash";
import { Dimensions } from "react-native";
import { colors } from "js/UIElements/colors";
import { getRegionBoundaries } from "js/Services";
const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  "window"
);
const getPathPoints = locations => {
  return _.map(locations, location => {
    return {
      latitude: location.locGPS.gpsLat,
      longitude: location.locGPS.gpsLon
    };
  });
};
class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: props.initialMapRegion,
      layout: { width: viewportWidth, height: viewportHeight }
    };
  }
  onRegionChange = region => {
    // console.log(region);
    this.setState({ region });
  };
  onLayout = e => {
    this.setState({ layout: e.nativeEvent.layout });
  };
  render() {
    const {
      onShipmentDetailBackClick,
      onClickShipmentItem,
      currentShipmentDetailId,
      shipments,
      shipmentPath,
      initialMapRegion,
      updateMapRef
    } = this.props;

    // const { region = {}, layout = {} } = this.state;
    // const {
    //   northLatitude,
    //   southLatitude,
    //   westLongitude,
    //   eastLongitude
    // } = getRegionBoundaries(region, layout);
    // console.log(northLatitude, southLatitude, westLongitude, eastLongitude);

    const currentLocation =
      currentShipmentDetailId &&
      _.find(shipments, item => item.id == currentShipmentDetailId)
        .currentLocation;
    return (
      <MapView
        ref={ref => updateMapRef(ref)}
        style={styles.map}
        initialRegion={initialMapRegion}
        moveOnMarkerPress={false}
        onPress={onShipmentDetailBackClick}
        onRegionChange={this.onRegionChange}
        onLayout={this.onLayout}
      >
        {/*<Polygon
          coordinates={[
            { latitude: northLatitude, longitude: westLongitude },
            { latitude: northLatitude, longitude: eastLongitude },
            { latitude: southLatitude, longitude: eastLongitude },
            { latitude: southLatitude, longitude: westLongitude }
          ]}
        />*/}
        {!!currentShipmentDetailId && [
          <Polyline
            key={"pastLine"}
            coordinates={[
              ...getPathPoints(shipmentPath.histLocs),
              currentLocation
            ]}
            strokeColor={colors.christi}
            strokeWidth={3}
          />,
          <Polyline
            key={"futureLine"}
            coordinates={[
              currentLocation,
              ...getPathPoints(shipmentPath.futureLocs)
            ]}
            strokeColor={colors.silver}
            strokeWidth={3}
          />
        ]}
        <Markers
          tracksViewChanges={false}
          shipments={shipments}
          currentShipmentDetailId={currentShipmentDetailId}
          onClickItem={onClickShipmentItem}
        />
      </MapView>
    );
  }
}
export default Map;
