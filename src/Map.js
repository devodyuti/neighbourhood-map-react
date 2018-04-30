import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {MapView} from 'expo';
import PlaceMarker from './PlaceMarker';
import {connect} from 'react-redux';


class Map extends React.Component {
  state = {
    region:{
          latitude:22.5726,
          longitude:88.3639,
          longitudeDelta:0.04,
          latitudeDelta:-0.02
  },
  onLatitudeChange:undefined,
  onlongitudeChange:undefined

}

componentWillReceiveProps(nextProps) {
  nextProps.auth !== undefined && this.props.navigation.navigate('query');
}

toPlaceMarker() {
  console.log(this.state.onLatitudeChange);
  return this.state.onLatitudeChange? <PlaceMarker navigation={this.props.navigation} latitude={this.state.onLatitudeChange} longitude={this.state.onLongitudeChange}/> : <View/>
}

mapDraggComplete= (e) => {
  this.setState({
    onLatitudeChange:e.latitude,
    onLongitudeChange:e.longitude
  })
}
  render() {
    return (
        <MapView style={{flex:1}}
          region={this.state.region}
          onRegionChangeComplete = {this.mapDraggComplete}
        >
          {this.toPlaceMarker()}
        </MapView>
    );
  }
}

const mapStateToProps = (state)=>{
  return {
    auth:state.auth.accessToken
  }
}


export default connect(mapStateToProps)(Map)
