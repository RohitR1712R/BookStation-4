import React,{Component} from "react";
import { Text, StyleSheet, TextInput, View } from "react-native";


export default class HomeScreen extends Component{
    render(){
        return(
         <View>
            <Text>HomeScreen</Text>
            <TextInput
            placeholder={"Search Books"}
            placeholderTextColor={"#000000"}
            
            />
             </View>

        )
    }
}