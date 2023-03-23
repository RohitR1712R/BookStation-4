import React,{Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default class DonateScreen extends Component{
    render(){
        return(
            <View>
                <Text>Donate Screen</Text>
                <TouchableOpacity style={styles.bookButton}>
                    <Text style = {styles.bookButtonText}>The Great Wizard Of OZ</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.bookButton}>
                    <Text style = {styles.bookButtonText}>The Time Machine</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bookButton: {
        width: 300,
        height: 100,
        backgroundColor: "#ADD8E6",
        marginTop: 150,
        marginLeft: 350,
        justifyContent: "center",
        alignItems: "center"
    },
    bookButtonText: {
        fontSize: 24,
        color: "white",

    }
})