import React, { Component } from "react";
import { Content, Text } from "native-base";
import * as firebase from "firebase";
import {
    Image, View
} from 'react-native';
export default class TabOne extends Component {
    render() {
        return (
            <View >
                {this._maybeRenderImage()}
            </View>

        );
    }


    _maybeRenderImage = () => {
        let imageurl="";
        let starCountRef = firebase.database().ref('images/');
        starCountRef.on('child_added', function (snapshot) {
            let postElement = snapshot.val();
            console.log('retrieved');
            console.log(postElement.image);
            imageurl = postElement.image;
        });
        console.log("hello")
        console.log(imageurl);
        if (!imageurl) {
            return;
        }

        return (
                <View>
                    <Image source={{ uri: imageurl }} style={{ width: "100%", height: 250 }} />
                </View>
        );
    }
}
