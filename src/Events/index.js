import React, { Component } from "react";
import { Image, Dimensions } from "react-native";
import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Icon,
    Card,
    CardItem,
    Text,
    Thumbnail,
    Left,
    Right,
    Body
} from "native-base";

const deviceWidth = Dimensions.get("window").width;
const logo = require("../img/ic_launcher.png");
const cardImage = [require('../img/1.jpg'),
                   require('../img/2.jpg'),
                   require('../img/3.jpg'),
                   require('../img/4.jpg')
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
                    </Left>
                    <Body/>
                    <Right>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate("Home")}
                        >
                            <Icon style={{color:"#afbfe1"}} name="paper-plane" />
                        </Button>
                    </Right>
                </Header>
                <Content padder style={{color:"#afbfe1"}}>
                    <Card style={{}}>
                        <CardItem bordered>
                            <Left>
                                <Thumbnail source={logo} />
                                <Body>
                                <Text>Musical Night</Text>
                                <Text note>January 6, 2016 8:30PM</Text>
                                </Body>
                            </Left>
                        </CardItem>

                        <CardItem>
                            <Body>
                            <Image
                                style={{
                                    alignSelf: "center",
                                    height: 150,
                                    resizeMode: "cover",
                                    width: deviceWidth / 1.18,
                                    marginVertical: 5
                                }}
                                source={cardImage[0]}
                            />
                            <Text>
                                Music has been the one thing common in our lives. It has always helped us connect with people. So, taking a trip back to memory lane, Students' alumni cell presented Eastern Technology Music Society that took our alumni back, straight to their KGP days. The Alumni exercised their vocal chords and sang, just like they used to do in their college days.
                            </Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card style={{}}>
                        <CardItem bordered>
                            <Left>
                                <Thumbnail source={logo} />
                                <Body>
                                <Text>Entertainia</Text>
                                <Text note>January 6, 2016 8:30PM</Text>
                                </Body>
                            </Left>
                        </CardItem>

                        <CardItem>
                            <Body>
                            <Image
                                style={{
                                    alignSelf: "center",
                                    height: 150,
                                    resizeMode: "cover",
                                    width: deviceWidth / 1.18,
                                    marginVertical: 5
                                }}
                                source={cardImage[1]}
                            />
                            <Text>
                                Smiles can cast the most powerful spell of love and happiness. With Kenny Sebastian taking the tough task to fill the open air theatre with a burst of laughter, the event became one of the most talked about event of the meet. The alumni as well as the students had a great time laughing their heart out.
                            </Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card style={{}}>
                        <CardItem bordered>
                            <Left>
                                <Thumbnail source={logo} />
                                <Body>
                                <Text>Illumination</Text>
                                <Text note>January 6, 2016 8:30PM</Text>
                                </Body>
                            </Left>
                        </CardItem>

                        <CardItem>
                            <Body>
                            <Image
                                style={{
                                    alignSelf: "center",
                                    height: 150,
                                    resizeMode: "cover",
                                    width: deviceWidth / 1.18,
                                    marginVertical: 5
                                }}
                                source={cardImage[2]}
                            />
                            <Text>
                                An evening of Euphoria as the name suggests fills the hearts of all the people present with a sense of serenity and calm. The Illumination with diyas followed by the release of sky lanterns creates an aura of happiness all around. With all this we move to the DJ night around the bonfire that beautifully escalates the emotions all around and the alumni do "shake a leg".
                            </Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card style={{marginBottom:20}}>
                        <CardItem bordered>
                            <Left>
                                <Thumbnail source={logo} />
                                <Body>
                                <Text>2.2 Marathon</Text>
                                <Text note>January 6, 2016 6:30AM</Text>
                                </Body>
                            </Left>
                        </CardItem>

                        <CardItem>
                            <Body>
                            <Image
                                style={{
                                    alignSelf: "center",
                                    height: 150,
                                    resizeMode: "cover",
                                    width: deviceWidth / 1.18,
                                    marginVertical: 5
                                }}
                                source={cardImage[3]}
                            />
                            <Text>
                                The iconic marathon track that our campus possesses is inviting enough for everyone to run their problems off. With the alumni coming back after such a long time the Institute fails not to teach them a thing or two again with the run for health in the 2.2 marathon organized early in the morning. Students and alumni run together to foster the spirit of good health and harmony.
                            </Text>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}

