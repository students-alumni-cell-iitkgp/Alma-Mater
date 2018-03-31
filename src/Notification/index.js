import React from "react";
import {
    Button,
    Container,
    Body,
    Content,
    Header,
    Left,
    Icon,
    Text
} from "native-base";
import Expo from 'expo';

async function getToken() {
    // Remote notifications do not work in simulators, only on device
    if (!Expo.Constants.isDevice) {
        return;
    }
    let { status } = await Expo.Permissions.askAsync(
        Expo.Permissions.NOTIFICATIONS,
    );
    if (status !== 'granted') {
        return;
    }
    let value = await Expo.Notifications.getExpoPushTokenAsync();
    console.log('Our token', value);
    /// Send this to a server
}

export default class Notify extends React.Component {
    componentDidMount() {
        getToken();

        this.listener = Expo.Notifications.addListener(this.handleNotification);
    }

    componentWillUnmount() {
        this.listener && this.listener.remove();
    }

    handleNotification = ({ origin, data }) => {
        console.log(
            `Push notification ${origin} with data: ${JSON.stringify(data)}`,
        );
    };

    render() {
        return (
            <Container style={{backgroundColor:"#afbfe1"}}>
                <Header androidStatusBarColor="#16213a" style={{backgroundColor:"#1d2c4d", shadowOffset: { height: 0, width: 0 }, shadowOpacity: 0,elevation:0}}>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate("DrawerOpen")}
                        >
                            <Icon style={{color:"#afbfe1"}} name="menu" />
                        </Button>
                    </Left><Body/>
                </Header>
                <Content padder style={{color:"#afbfe1"}}>
                    <Text> token is in console</Text>
                </Content>
            </Container>
        );
    }
}

