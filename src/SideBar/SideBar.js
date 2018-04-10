import React from "react";
import { AppRegistry, Image, StatusBar } from "react-native";
import {
  Button,
  Text,
  Container,
  List,
  ListItem,
  Content,
  Icon
} from "native-base";
const routes = [
    {
        title:"Home",
        icon:"grid"
    },
    {
        title:"Events",
        icon:"baseball"
    },
    {
        title:"Navigate",
        icon:"navigate"
    },
    {
        title:"Gallery",
        icon:"images"
    },
    {
        title:"Newsfeed",
        icon:"paper"
    },
    {
        title:"Locate a friend",
        icon:"hand"
    },
    {
        title:"Notifications",
        icon:"alarm"
    }
];
export default class SideBar extends React.Component {
  render() {
    return (
      <Container style={{
          backgroundColor:"#16213a"}}>
        <Content>
          <Image
              source={require('../img/logo1.png')}
            style={{
              height: 160,
              width: "100%",
              alignSelf: "stretch",
              position: "absolute",
                top:10,
            }}
          />
          <List
            dataArray={routes}
            contentContainerStyle={{ marginTop: 180}}
            renderRow={data => {
              return (
                <ListItem style={{borderBottomColor:"#afbfe1"}}
                  button
                  onPress={() => this.props.navigation.navigate(data.title)}
                >
                    <Icon name={data.icon} style={{color:"#afbfe1",paddingRight:20}}/>
                  <Text style={{color:"#afbfe1"}}>{data.title}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}
