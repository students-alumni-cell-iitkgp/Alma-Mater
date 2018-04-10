import React, { Component } from "react";
import { Content, Card, CardItem, Text, Body } from "native-base";
import { AppRegistry, Image, StatusBar } from "react-native";
export default class TabTwo extends Component {
  render() {
    return (
      <Content padder style={{ marginTop: 0 }}>
          <Card style={{ flex: 0 }}>
              <CardItem>
                  <Body>
                  </Body>
              </CardItem>
              <CardItem>
                  <Body>
                  <Text style={{textAlign:'center'}}>Azad won Platinum, Sweeps all three GCs under RK's nose</Text>
                  </Body>
              </CardItem>
          </Card>
      </Content>
    );
  }
}
