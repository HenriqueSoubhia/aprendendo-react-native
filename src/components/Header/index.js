import React from "react";
import { View,StyleSheet,StatusBar,Text } from "react-native";

import {Feather} from '@expo/vector-icons'
import { TouchableOpacity } from "react-native";


const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64

export default function Header({name}){
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.username}>{name}</Text>

                <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
                    <Feather name="user" size={27} color="#fff"/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#8000ff",
        paddingTop: statusBarHeight,
        flexDirection: "row",
        paddingStart:16,
        paddingEnd:16,
        paddingBottom: 44
    },
    content:{
        flex:1,
        alignItems:"center",
        flexDirection:"row",
        justifyContent:"space-between"
    },
    username:{
        fontSize: 18,
        color:"#fff",
        fontWeight: "bold"
    },
    buttonUser:{
        width: 44,
        height: 44,
        backgroundColor: "rgba(255,255,255,0.5)",
        alignItems:"center",
        justifyContent: "center",
        borderRadius: 22
        }
})