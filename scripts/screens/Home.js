import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Cinzel_500Medium} from '@expo-google-fonts/roboto';
import loadFonts from '../core/GUI';

export default class HomeScreen extends Component{
    constructor(props){
        super(props);
        this.state={
            loadedFonts: false
        }
    }
    componentDidMount(){
        loadFonts({
            Cinzel_500Medium: Cinzel_500Medium
        })
        this.setState({loadedFonts: true})
    }

    render(){
        if(this.state.loadedFonts === true){
            return(
                <View style={styles.container}>
                    <View style={styles.header}>
                        <View style={styles.headerTextContainer}>
                            <Text style={styles.headerText}>Rapid Survival</Text>   
                        </View>
                        <Image source={require("../../assets/images/HomeScreenBackgroundImageForHeader2.webp")} style={styles.headerBackgroundImage} blurRadius={2.5}></Image>
                    </View>

                    <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
                        <View style={{flex: 0.6, alignItems:'center', justifyContent:'space-between'}}>
                            <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Suma 1</Text></TouchableOpacity>
                            <Text></Text>
                            <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Suma 2</Text></TouchableOpacity>
                        </View>
                    </View>

                </View>
            )
        }else{
            return(
                <View style={{flex:1, alignItems:'center', justifyContent:'center'}}><Text>Loading</Text></View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#00aee8',
        flex:1
    },
    header: {
        flex:0.1,
        backgroundColor: 'red'
    },
    headerText: {
        fontSize:40,
        color:'#c6e34f',
        opacity: 0.8,
        fontFamily: "Cinzel_500Medium"
    },
    headerTextContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        zIndex:101
    },
    headerBackgroundImage:{
        resizeMode: 'cover',
        flex:1,
        marginTop:-120,
        zIndex:100,
        marginHorizontal:-5,
        marginBottom:-5,
        paddingTop:45
    },
    button:{
        marginVertical: 50,
        marginHorizontal: 200,
        borderRadius: 10,
        backgroundColor: 'white',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    buttonText:{
        fontSize: 20,
        fontFamily: 'Cinzel_500Medium'
    }
})