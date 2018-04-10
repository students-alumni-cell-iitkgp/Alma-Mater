import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Animated,
    Image,
    Dimensions,
} from "react-native";
import {
    Button,
    Icon,
    Right,Header,Left
} from "native-base";
import { MapView} from 'expo';


const Images = [
    require('../img/1.jpg') ,
    require('../img/2.jpg') ,
    require('../img/3.jpg') ,
    require('../img/4.jpg') ,
]

const { width, height } = Dimensions.get("window");

const CARD_HEIGHT = height / 3.5;
const CARD_WIDTH = width - 50;

export default class screens extends Component {
    state = {
        markers: [
            {
                coordinate: {
                    latitude: 22.318921 ,
                    longitude: 87.309912,
                },
                title: "Musical Night",
                description: "Exercise your vocal chords and sing like before",
                image: Images[0],
            },
            {
                coordinate: {
                    latitude: 22.318681 ,
                    longitude: 87.309126,
                },
                title: "Entertainia",
                description: "Laugh your heart out together with friends",
                image: Images[1],
            },
            {
                coordinate: {
                    latitude: 22.316349 ,
                    longitude: 87.310198,
                },
                title: "Illumination",
                description: "Illumination with diyas - KGP Culture ",
                image: Images[2],
            },
            {
                coordinate: {
                    latitude: 22.318731 ,
                    longitude: 87.302529,
                },
                title: "2.2 Marathon",
                description: "Run together to foster the spirit of good health",
                image: Images[3],
            },
        ],
        region: {
            latitude: 22.314984,
            longitude:  87.31041,
            latitudeDelta: 0.01184195044303443,
            longitudeDelta: 0.012542817690068,
        },
        activeMarkerIndex: 0,
    };

    componentWillMount() {
        this.index = 0;
        this.animation = new Animated.Value(0);
    }
    componentDidMount() {
        // We should detect when scrolling has stopped then animate
        // We should just debounce the event listener here
        this.animation.addListener(({ value }) => {
            let index = Math.floor(value / CARD_WIDTH + 0.5); // animate 30% away from landing on the next item
            if (index >= this.state.markers.length) {
                index = this.state.markers.length - 1;
            }
            if (index <= 0) {
                index = 0;
            }

            clearTimeout(this.regionTimeout);
            this.regionTimeout = setTimeout(() => {
                if (this.index !== index) {
                    this.index = index;
                    const { coordinate } = this.state.markers[index];
                    this.setState({
                        activeMarkerIndex: index,
                    });
                    this.map.animateToRegion(
                        {
                            ...coordinate,
                            latitudeDelta: this.state.region.latitudeDelta,
                            longitudeDelta: this.state.region.longitudeDelta,
                        },
                        350
                    );
                }
            }, 10);
        });
    }

    render() {
        const interpolations = this.state.markers.map((marker, index) => {
            const inputRange = [
                (index - 1) * CARD_WIDTH,
                index * CARD_WIDTH,
                ((index + 1) * CARD_WIDTH),
            ];
            const scale = this.animation.interpolate({
                inputRange,
                outputRange: [1, 2.5, 1],
                extrapolate: "clamp",
            });
            const opacity = this.animation.interpolate({
                inputRange,
                outputRange: [0.2, 1, 0.2],
                extrapolate: "clamp",
            });
            return { scale, opacity };
        });
    const
        MapStyle=[
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#1d2c4d"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#8ec3b9"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#1a3646"
                    }
                ]
            },
            {
                "featureType": "administrative.country",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#4b6878"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#64779e"
                    }
                ]
            },
            {
                "featureType": "administrative.province",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#4b6878"
                    }
                ]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#334e87"
                    }
                ]
            },
            {
                "featureType": "landscape.natural",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#023e58"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#283d6a"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#6f9ba5"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#1d2c4d"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#023e58"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#3C7680"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#304a7d"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#98a5be"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#1d2c4d"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#2c6675"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#255763"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#b0d5ce"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#023e58"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#98a5be"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#1d2c4d"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#283d6a"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#3a4762"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#0e1626"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#4e6d70"
                    }
                ]
            }
        ];
        return (
            <View style={styles.container}>

                <Header androidStatusBarColor="#16213a" style={{backgroundColor:"#1d2c4d", shadowOffset: { height: 0, width: 0 }, shadowOpacity: 0,elevation:0}}>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate("DrawerOpen")}
                        >
                            <Icon style={{color:"#afbfe1"}} name="menu" />
                        </Button>
                    </Left>
                    <Right>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate("Home")}
                        >
                            <Icon style={{color:"#afbfe1"}} name="paper-plane" />
                        </Button>
                    </Right>
                </Header>
                <MapView
                    ref={map => this.map = map}
                    initialRegion={this.state.region}
                    customMapStyle={MapStyle}
                    style={styles.container}
                >
                    {this.state.markers.map((marker, index) => {
                        const currentMarkerColor = index === this.state.activeMarkerIndex ? {backgroundColor:'red'}:{};
                        const scaleStyle = {
                            transform: [
                                {
                                    scale: interpolations[index].scale,
                                },
                            ],
                        };
                        const opacityStyle = {
                            opacity: interpolations[index].opacity,
                        };
                        return (
                            <MapView.Marker key={index} coordinate={marker.coordinate}>
                                <Animated.View style={[styles.markerWrap, opacityStyle]}>
                                    <Animated.View style={[styles.ring, scaleStyle]} />
                                    <View style={[styles.marker, currentMarkerColor]}>
                                        <Text style={{display: 'none'}}>{this.state.activeMarkerIndex}</Text>
                                    </View>
                                </Animated.View>
                            </MapView.Marker>
                        );
                    })}
                </MapView>
                <Animated.ScrollView
                    horizontal
                    scrollEventThrottle={1}
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={CARD_WIDTH}
                    onScroll={Animated.event(
                        [
                            {
                                nativeEvent: {
                                    contentOffset: {
                                        x: this.animation,
                                    },
                                },
                            },
                        ],
                        { useNativeDriver: true }
                    )}
                    style={styles.scrollView}
                    contentContainerStyle={styles.endPadding}
                >
                    {this.state.markers.map((marker, index) => (
                        <View style={styles.card} key={index}>
                            <Image
                                source={marker.image}
                                style={styles.cardImage}
                                resizeMode="cover"
                            />
                            <View style={styles.textContent}>
                                <Text numberOfLines={1} style={styles.cardtitle}>{marker.title}</Text>
                                <Text numberOfLines={2} style={styles.cardDescription}>
                                    {marker.description}
                                </Text>
                            </View>
                        </View>
                    ))}
                </Animated.ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#1d2c4d",
    },
    scrollView: {
        position: "absolute",
        bottom: 30,
        left: 0,
        right: 0,
        paddingVertical: 10,
    },
    endPadding: {
        paddingRight: width - CARD_WIDTH,
    },
    card: {
        padding: 10,
        elevation: 2,
        backgroundColor: "#1d2c4d",
        marginHorizontal: 10,
        shadowRadius: 5,
        shadowOpacity: 1,
        shadowOffset: { x: 2, y: -2 },
        height: 200,
        width: CARD_WIDTH,
        overflow: "hidden",
    },
    cardImage: {
        flex: 3,
        width: "100%",
        height: "100%",
        alignSelf: "center",
    },
    textContent: {
        flex: 1,
    },
    cardtitle: {
        fontSize: 12,
        marginTop: 5,
        fontWeight: "bold",
        color:"#afbfe1"
    },
    cardDescription: {
        fontSize: 12,
        color: "#afbfe1",
    },
    markerWrap: {
        alignItems: "center",
        justifyContent: "center",
    },
    marker: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: "#ffffff",
    },
    ring: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: "rgba(130,4,150, 0.3)",
        position: "absolute",
        borderWidth: 1,
        borderColor: "rgba(130,4,150, 0.5)",
    },
});
