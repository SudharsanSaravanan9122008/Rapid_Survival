import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class OnlineGameScreen extends Component{
    render(){
        return(
            <View style={{
                flex: 1,
                justifyContent:'center',
                alignItems: 'center',
            }}>
                <Text>
                    OnlineGameScreen
                </Text>
            </View>
        )
    }
}