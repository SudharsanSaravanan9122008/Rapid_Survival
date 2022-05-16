import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class OfflineGameScreen extends Component{
    render(){
        return(
            <View style={{
                flex: 1,
                justifyContent:'center',
                alignItems: 'center',
            }}>
                <Text>
                    OfflineGameScreen
                </Text>
            </View>
        )
    }
}