import React,{Component} from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default class RequestScreen extends Component{
   render(){
    return(
        <View>
            <Text style = {styles.headerText}>Request screen</Text>
            <TouchableOpacity style = {styles.button}>
                <Text style= {styles.buttonText}>Charlie And The Chocolate Factory</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.button}>
                <Text style = {styles.buttonText}>The Invisible Man</Text>
            </TouchableOpacity>
        </View>

        
    )
   }
}

const styles = StyleSheet.create({

    button: {
        width: 400,
        height: 100,
        backgroundColor: "#FFCCCB",
        marginTop: 100,
        marginLeft:400,
        justifyContent: "center",
        alignItems: "center"
        
    },

    buttonText: {
        fontSize: 24,
        color: "white"
    },
    
    headerText: {
        fontSize: 30,
        fontStyle: "italic",
        fontWeight: "600",
        color: "red",
        marginLeft: 500,
        marginTop: 20,
        backgroundColor: "#ff6666"
       
    }
})

