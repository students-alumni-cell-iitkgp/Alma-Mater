import React from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  View,
} from 'react-native';
import {
    Container,
    Button,
    Body,
    Content,
    Header,
    Left,
    Icon,
    Text,Footer, FooterTab,
} from "native-base";
import { ImagePicker } from 'expo';
import uuid from 'uuid';
import * as firebase from 'firebase';
import { Col, Row, Grid } from "react-native-easy-grid";
import TabOne from "./tabOne";
import TabTwo from "./tabTwo";

console.disableYellowBox = true;

const url = '';

const firebaseConfig = {
    apiKey: "AIzaSyDMVlAiKWgmDZkjqknfz5W4mF5sy2fzNuo",
    authDomain: "upload-b9489.firebaseapp.com",
    databaseURL: "https://upload-b9489.firebaseio.com",
    projectId: "upload-b9489",
    storageBucket: "upload-b9489.appspot.com",
    messagingSenderId: "911555860147"
};

firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
  state = {
    image: null,
    uploading: false,
  };

    constructor(props) {
        super(props);
        this.state = {
            tab1: true,
            tab2: false,
        };
    }

    toggleTab1() {
        this.setState({
            tab1: true,
            tab2: false,
        });
    }

    toggleTab2() {
        this.setState({
            tab1: false,
            tab2: true,
        });
    }

  render() {
    let { image } = this.state;
    return (
        <Container style={{color:"#afbfe1"}}>
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
            <Content padder style={{backgroundColor:"#afbfe1"}}>
                <TabOne/>
                {this._maybeRenderImage()}
                {this._maybeRenderUploadingOverlay()}
            </Content>
            <Footer>
                <FooterTab style={{backgroundColor:"#1d2c4d"}}>
                    <Button vertical active={this.state.tab1} onPress={() => this.toggleTab1()}>
                        <Icon active={this.state.tab1} name="images" />
                        <Text>Gallary</Text>
                    </Button>
                    <Button vertical active={this.state.tab2} onPress={() => this.toggleTab2()}>
                        <Icon active={this.state.tab2} name="person" />
                        <Text>Personal</Text>
                    </Button>
                    <Button vertical onPress={this._takePhoto}>
                        <Icon name="camera" />
                        <Text>Camera</Text>
                    </Button>
                    <Button vertical onPress={this._pickImage} >
                        <Icon name="attach" />
                        <Text>Upload</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </Container>

    );
  }

  _maybeRenderUploadingOverlay = () => {
    if (this.state.uploading) {
      return (
        <View
          style={[
            StyleSheet.absoluteFill,
            {
              backgroundColor: 'rgba(0,0,0,0.4)',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex:10,
              elevation:100
            },
          ]}>
          <ActivityIndicator color="#fff" animating size="large" />
        </View>
      );
    }
  };

  _maybeRenderImage = () => {
    let { image } = this.state;
    if (!image) {
      return;
    }


    return (
        <Container>
            <Content>
                <Grid>
                    <Row>
                        <Image source={{ uri: image }} style={{ height:200,width:"100%",marginTop:20}}/>
                    </Row>
                </Grid>
            </Content>

        </Container>
    );
  };

  _takePhoto = async () => {
    let pickerResult = await ImagePicker.launchCameraAsync();

    this._handleImagePicked(pickerResult);
  };

  _pickImage = async () => {
    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    this._handleImagePicked(pickerResult);
  };

  _handleImagePicked = async pickerResult => {
    try {
      this.setState({ uploading: true });

      if (!pickerResult.cancelled) {
        uploadUrl = await uploadImageAsync(pickerResult.uri);
        this.setState({ image: uploadUrl });
      }
    } catch (e) {
      console.log(e);
      alert('Upload failed, sorry :(');
    } finally {
      this.setState({ uploading: false });
      let { image } = this.state;
      let testRef = firebase.database().ref('images/');
      makeList(testRef,{image});
    }
  };
}

async function uploadImageAsync(uri) {
  const response = await fetch(uri);
  const blob = await response.blob();
  const ref = firebase
    .storage()
    .ref()
    .child(uuid.v4());

  const task = ref.put(blob);
  return new Promise((resolve, reject) => {
    task.on(
      'state_changed',
      () => {
        /* noop but you can track the progress here */
      },
      reject /* this is where you would put an error callback! */,
      () => resolve(task.snapshot.downloadURL)
    );
  });
}

function makeList(ref,url) {
        ref.push(url);
        console.log("pushed")
}


