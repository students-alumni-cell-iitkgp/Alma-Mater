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
import { Image } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class HomeScreen extends React.Component {
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
        </Header>
          <Content style={{color:"#afbfe1"}} contentContainerStyle={{ flex: 1 }}>
              <Image source={require('../img/logo.png')} style={{marginLeft:25}}/>
              <Grid style={{height:"100%"}}>
                  <Col style={{width:"50%"}}>
                      <Row  size={1}>
                          <Button vertical style={{ backgroundColor: '#283c69',height:"100%",width:"100%",flex:1,
                              justifyContent: 'center',
                              alignItems: 'center',borderRadius:0}} onPress={() =>this.props.navigation.navigate('Events')}>
                              <Icon name="baseball" />
                              <Text>Events</Text>
                          </Button>
                      </Row>
                      <Row  size={1}>
                          <Button vertical style={{  backgroundColor: '#1d2c4d',height:"100%",width:"100%",flex:1,
                              justifyContent: 'center',
                              alignItems: 'center',borderRadius:0}}  onPress={() =>this.props.navigation.navigate('Navigate')}>
                              <Icon name="navigate" />
                              <Text>Navigate</Text>
                          </Button>
                      </Row>
                      <Row  size={1}>
                          <Button vertical style={{  backgroundColor: '#283c69',height:"100%",width:"100%",flex:1,
                              justifyContent: 'center',
                              alignItems: 'center',borderRadius:0}}  onPress={() =>this.props.navigation.navigate('Newsfeed')}>
                              <Icon name="paper" />
                              <Text>Newsfeed</Text>
                          </Button>
                      </Row>
                  </Col>
                  <Col style={{width:"50%"}}>
                      <Row  size={1}>
                          <Button vertical style={{  backgroundColor: '#1d2c4d',height:"100%",width:"100%",flex:1,
                              justifyContent: 'center',
                              alignItems: 'center',borderRadius:0}}  onPress={() =>this.props.navigation.navigate('Gallery')}>
                              <Icon name="images" />
                              <Text>Gallery</Text>
                          </Button>
                      </Row>
                      <Row  size={1}>
                          <Button vertical style={{  backgroundColor: '#283c69',height:"100%",width:"100%",flex:1,
                              justifyContent: 'center',
                              alignItems: 'center',borderRadius:0}}  onPress={() =>this.props.navigation.navigate('Locate a friend')}>
                              <Icon name="hand" />
                              <Text>Locate Friend</Text>
                          </Button>
                      </Row>
                      <Row  size={1}>
                          <Button vertical style={{ backgroundColor: '#1d2c4d',height:"100%",width:"100%",flex:1,
                              justifyContent: 'center',
                              alignItems: 'center',borderRadius:0}}  onPress={() =>this.props.navigation.navigate('Notifications')}>
                              <Icon name="alarm" />
                              <Text>Notifications</Text>
                          </Button>
                      </Row>
                  </Col>
              </Grid>
      </Content>
      </Container>
    );
  }
}
