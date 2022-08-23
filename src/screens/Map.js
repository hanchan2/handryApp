import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';
// import MapView from 'react-native-maps';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'

const Map = ({ route }) => {
    const { place } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.content}>Place: {place.name} Lat: {place.latitude} Long: {place.longitude}</Text>
            <View style={styles.mapContainer}>
                <MapView
                    // provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    region={{
                        latitude: parseFloat(place.latitude),
                        longitude: parseFloat(place.longitude),
                        latitudeDelta: 0.01,
                        longitudeDelta: 0.01,
                    }}
                >
                    <Marker
                        coordinate={{
                            latitude: parseFloat(place.latitude),
                            longitude: parseFloat(place.longitude)
                        }}
                        title={place.name}
                    />
                </MapView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        fontSize: 18,
        textAlign: 'center',
    },
    mapContainer: {
        ...StyleSheet.absoluteFillObject,
        // height: 500,
        // width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        position: 'absolute',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

export default Map;