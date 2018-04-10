import React, { Component } from 'react';
import { Constants, MapView, Location, Permissions } from 'expo';
import {
    Button,
    Container,
    Body,
    Content,
    Header,
    Left,
    Icon,
    Text,
    Right
} from "native-base";
export default class App extends Component {
    state = {
        mapRegion: {
            latitude: 22.314984,
            longitude:  87.31041,
            latitudeDelta: 0.00004195044303443,
            longitudeDelta: 0.000542817690068 },
        locationResult: null,
        location: {coords: { latitude: 22.314984, longitude: 87.31041}},
    };

    componentDidMount() {
        this._getLocationAsync();
    }

    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                locationResult: 'Permission to access location was denied',
                location,
            });
        }

        let location = await Location.getCurrentPositionAsync({});
        this.setState({ locationResult: JSON.stringify(location), location, });
    };

    render() {
        return (
            <Container style={{backgroundColor:"#afbfe1",
                justifyContent: 'center',
                alignItems: 'center',}}>
                <Header androidStatusBarColor="#16213a" style={{backgroundColor:"#1d2c4d",width:"100%", shadowOffset: { height: 0, width: 0 }, shadowOpacity: 0,elevation:0}}>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate("DrawerOpen")}
                        >
                            <Icon style={{color:"#afbfe1"}} name="menu" />
                        </Button>
                    </Left><Body/>

                    <Right>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate("Home")}
                        >
                            <Icon style={{color:"#afbfe1"}} name="paper-plane" />
                        </Button>
                    </Right>
                </Header>
                <Content>

                    <MapView
                        style={{ alignSelf: 'stretch', height: 200 }}
                        region={{ latitude: this.state.location.coords.latitude, longitude: this.state.location.coords.longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }}

                    >
                        <MapView.Marker
                            coordinate={this.state.location.coords}
                            title="My Marker"
                            description="Some description"
                        />
                    </MapView>

                    <Text>
                        Location: {this.state.locationResult}
                    </Text>
                </Content>
            </Container>
        );
    }
}
