import 'react-native-gesture-handler';
import React, {useContext} from 'react';
import {ImageBackground, View, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native';
import image from "./image/pop.png";
import { setNameToPlayer, startGame} from "../fetch/FetchToGame";
import {TokenContext} from "../context/TokenContext";

 const StartNewGame = ({navigation}) => {
     const [name,onChangeText ] = React.useState("");
     const token = useContext(TokenContext);

     //Button for Add name and gå to playGame page
    function onButtonSetName() {
        console.log("SetName",token);
        setNameToPlayer(token,name)
            .then(text => navigation.navigate("Play Game",token))
            .catch((error) => console.log(error));

        setTimeout(function (){
            startGame(token)
                .then(gameStatus => navigation.navigate("Play Game",token))
                console.log("token", token);
            },1000);

        }
     const setOnButtonToAnonymous = () => {
         console.log("Anonymous");
         setNameToPlayer(token, "ANONYMOUS")
             .then(text => { console.log(name);
                 navigation.navigate("Play Game",token)
             });
         setTimeout(function (){
             startGame(token)
                 .then(gameStatus => navigation.navigate("Play Game",token))
             console.log("token", token);
         },1000);

     }
    console.log("AddNameTo NewG token", token, name);
         return (
        <ImageBackground source={image} style={styles.image}>
            <View style={styles.screen}>
                <View style={styles.container}>
                <Text style={styles.text}>
                   New Game
                </Text>
                    <TextInput
                        placeholder="Enter your name"
                        style={styles.textInput}
                        onChangeText={(val) => onChangeText(val)}
                        value={name}
                        underlineColorAndroid = "transparent"
                        keyboardType="default"
                        autoCapitalize='none'
                        autoCorrect={false}
                        returnKeyType="next"/>
                    <TouchableOpacity>
                        <Text style={styles.submitButton} onPress = {(onButtonSetName)}>Play</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress = {(setOnButtonToAnonymous)}
                    >
                        <Text style={styles.anonymousButton} >Play as Anonymous</Text>
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
        borderColor: "#441b68",
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
        color: "#cb0c76",
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
        marginTop:5,
        margin: 10,
        paddingTop:10,
        paddingLeft:30,
        paddingRight:30,
        paddingBottom:10,
        alignItems: "center",
        justifyContent: "center",
        marginBottom:20,

    },
    textInput: {
        color: "#cb0c76",
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "white",
        margin: 10,
        marginTop:-10,
        marginBottom:40,
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
       color:"#cb0c76",
       borderWidth:2,
       borderColor: "#cb0c76",
       paddingVertical: 10,
       paddingHorizontal:12,
       borderRadius:10,
        fontWeight: "bold",
    },
    submitButton:{
        color: '#cb0c76',
        paddingVertical: 10,
        paddingHorizontal:12,
        borderColor:"#cb0c76",
        borderWidth:2,
        marginTop:-25,
        marginBottom: 40,
        borderRadius:10,
        fontWeight: "bold",
    },

});

export default StartNewGame;
