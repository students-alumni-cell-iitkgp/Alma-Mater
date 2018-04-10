import React, { Component } from "react";
import * as firebase from "firebase";
import { View} from 'react-native';
import Image from 'react-native-image-progress';
import ProgressBar from 'react-native-progress/Bar';
import Lightbox from 'react-native-lightbox';

export default class TabOne extends Component {
    constructor(){
        super();
        this.state = {
            imageList: [],
        }
    }
    componentDidMount(){
        let starCountRef = firebase.database().ref('images/');
        let images = this.state.imageList;
        starCountRef.on('child_added', (snapshot) => {
            let postElement = snapshot.val();
            images.push(postElement.image);
            this.setState({
                imageList: images
            })
        });
    }

    render() {
        return (
            <View style={{marginBottom:40}}>
                {
                    this.state.imageList.map( (url,index) => {
                        return (
                            <Lightbox>
                            <Image
                                key={'images'+index}
                                source={{ uri: url }}
                                indicator={ProgressBar}
                                style={{ width: "100%", height: 200,margin:5,marginLeft:0 }} />
                            </Lightbox>
                        )
                    })
                }
            </View>
        );
    }
}
