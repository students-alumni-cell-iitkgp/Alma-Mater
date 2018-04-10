import React, { Component } from "react";
import { Image, View } from "react-native";
import {
    Container,
    Header,
    Title,
    Button,
    IconNB,
    DeckSwiper,
    Card,
    CardItem,
    Icon,
    Thumbnail,
    Text,
    Left,
    Right,
    Body,
    Content
} from "native-base";

const cardOne = require('../img/1.jpg') ;
const cardTwo = require('../img/1.jpg') ;
const cardThree = require('../img/1.jpg') ;
const cardFour = require('../img/1.jpg') ;
const logo = require("../img/ic_launcher.png");
const cards = [
    {
        text: "Technology Student Gymkhana",
        name: "Vishal Kumar Singh, RP Hall won the VP election",
        date: "07/04/2018",
        image: cardOne
    },
    {
        text: "General Championship",
        name: "Azad Hall seals sports GC with flash",
        date: "07/04/2018",
        image: cardTwo
    },
    {
        text: "Director, IIT Kharagpur",
        name: "Initialised new reforms to change improve institutes ranking",
        date: "07/04/2018",
        image: cardThree
    },
    {
        text: "Director, IIT Kharagpur",
        name: "Initialised new reforms to change improve institutes ranking",
        date: "07/04/2018",
        image: cardFour
    }
];

export default class Events extends React.Component {
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
                    <Right>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate("Home")}
                        >
                            <Icon style={{color:"#afbfe1"}} name="paper-plane" />
                        </Button>
                    </Right>
                </Header>

                <View style={{ flex: 1, padding: 12 }}>
                    <DeckSwiper
                        ref={mr => (this._deckSwiper = mr)}
                        dataSource={cards}
                        looping={false}
                        renderEmpty={() =>
                            <View style={{ alignSelf: "center" }}>
                                <Text>Over</Text>
                            </View>}
                        renderItem={item =>
                            <Card style={{ elevation: 3 }}>
                                <CardItem>
                                    <Left>
                                        <Thumbnail source={logo} />
                                        <Body>
                                        <Text>
                                            {item.text}
                                        </Text>
                                        <Text note>{item.date}</Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                                <CardItem cardBody>
                                    <Image
                                        style={{
                                            resizeMode: "cover",
                                            width: null,
                                            flex: 1,
                                            height: 300
                                        }}
                                        source={item.image}
                                    />
                                </CardItem>
                                <CardItem>
                                    <Text>
                                        {item.name}
                                    </Text>
                                </CardItem>
                            </Card>}
                    />
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        flex: 1,
                        position: "absolute",
                        bottom: 20,
                        left: 0,
                        right: 0,
                        justifyContent: "space-between",
                        padding: 15
                    }}
                >
                    <Button iconLeft onPress={() => this._deckSwiper._root.swipeLeft()}>
                        <Icon name="arrow-back" />
                        <Text>Swipe Left</Text>
                    </Button>
                    <Button iconRight onPress={() => this._deckSwiper._root.swipeRight()}>
                        <Text>Swipe Right</Text>
                        <Icon name="arrow-forward" />
                    </Button>
                </View>
            </Container>
        );
    }
}

