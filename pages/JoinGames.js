import React, {useContext, useEffect, useState} from "react";
import {TokenContext} from "../context/TokenContext";
import {ImageBackground,  StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import image from "./image/pop.png";
import {setNameToPlayer} from "../fetch/FetchToGame";

const JoinGames = ({navigation}) => {
    const [name, setOnChangeText] = useState("");
    const token = useContext(TokenContext);


    function onButtonSetName() {
        console.log("SetName",token);
            setNameToPlayer(token,name)
                .then(text => navigation.navigate("Join Game List"))
                .catch((error) => console.log(error));
    }


    const setOnButtonToAnonymous = () => {
        console.log("Anonymous",token);
        setNameToPlayer(token, "Anonymous")
            .then(text => {console.log(name);
                navigation.navigate("Join Game List")
            });
    }

    return (
        <ImageBackground source={image} style={styles.image}>
            <View style={styles.screen}>
                <View h1 style={styles.container}>
                    <Text style={styles.text}>
                        New player
                    </Text>
                    <TextInput
                        placeholder="Player name"
                        style={styles.textInput}
                        onChangeText={(v)=>setOnChangeText(v)}
                        value={name}
                        underlineColorAndroid = "transparent"
                        keyboardType="default"
                        autoCapitalize='none'
                        autoCorrect={false}
                        returnKeyType="next"/>
                    <TouchableOpacity
                        style = {styles.submitButton}
                        onPress = {(onButtonSetName)}
                    >
                        <Text style={styles.submitButtonText}>Play</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style = {styles.submitButton}
                        onPress = {(setOnButtonToAnonymous )}
                    >
                        <Text style={styles.submitButtonText} >Play as Anonymous</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        color:"white",
        margin: 10,
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#400890",
        backgroundColor: "white",
        borderWidth:10,
        marginTop:-85,
        elevation:30,
        paddingVertical: 20,
        paddingHorizontal:25,
        borderRadius:50,
    },
    image: {
        flex: 1,
        justifyContent: "center",
        resizeMode:'cover',
    },

    text: {
        color: "#349e05",
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        marginTop:15,
        margin: 10,
        paddingTop:10,
        paddingLeft:30,
        paddingRight:30,
        paddingBottom:10,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,

    },
    textInput: {
        color: "#cb0c76",
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "white",
        margin: 10,
        marginTop:-10,
        marginBottom:10,
        paddingTop:10,
        paddingLeft:30,
        paddingRight:30,
        paddingBottom:10,
        alignItems: "center",
        justifyContent: "center",
        borderWidth:5,
        borderColor: "#04b2c7",
        borderRadius:50,

    },

    anonymousButton:{
        color:"white",
        backgroundColor:"#cb0c76",
        borderWidth:5,
        borderColor: "white",
        elevation:8,
        paddingVertical: 10,
        paddingHorizontal:12,
        borderRadius:10,

    },
    submitButton:{
        borderColor: '#4bd211',
        margin: 15,
        paddingBottom:6,
        paddingTop:6,
        textAlign:"center",
        borderRadius:10,
        borderWidth:5,
        paddingLeft:20,
        paddingRight:20,
    },
    submitButtonText:{
        color: '#4bd211',
        fontWeight: "bold",
    }
});

export default JoinGames;
