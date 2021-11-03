import {ImageBackground, StyleSheet, Text, View} from "react-native";
import image from "./image/pop.png";
import {Card} from "react-native-elements";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import React, {useContext, useEffect} from "react";

import {TokenContext} from "../context/TokenContext";
import {getGameStatus, move} from "../fetch/FetchToGame";
FontAwesome5.defaultProps = {activeOpacity: 0.5};
 const PlayGame = ({navigation}) => {
     const [gameState, setGameState] = React.useState("");
     const [name, setName] = React.useState(false);
     const [opponentName, setOpponentName] = React.useState(false);
     const [player1, setPlayer1Move] = React.useState(false);
     const [player2, setPlayer2Move] = React.useState(false);
     const token = useContext(TokenContext);


     function updateNameOnScreen(game) {
         setName(game.name);
         setPlayer1Move(game.move);
         setOpponentName(game.opponentName);
         setPlayer2Move(game.opponentMove);
         setGameState(game.game);
     }

     useEffect(function (){
         getGameStatus(token)
             .then(currentGame =>{
                 console.log("currentGame", token);
                 updateNameOnScreen(currentGame);
         })
     });




     function setMove(sign) {
         move(token,sign)
            .then(game => { console.log("user", token , "move",sign);
                updateNameOnScreen(game);
            })
             .catch(error => console.log(error));
     }


     return (
        <ImageBackground source={image} style={styles.image}>
            <Text style={styles.textOne}>Rock Paper and Scissors</Text>
            <Card.Divider style={styles.card}>
                <Text style={styles.textTitle}>Start Game</Text>
                <Text style={styles.text}>Make your move to start game</Text>
                <Text style={styles.resultCard}>{gameState}</Text>
                <Text style={styles.userNameOne}>{name ?? "Anonymous"}</Text>
                <Text style={styles.userMove1}>{player1}</Text>
                <Text style={styles.userNameTwo}>{opponentName ?? "Anonymous"}</Text>
                <Text style={styles.userMove2}>{player2?? ""}</Text>
                <View style={styles.rps1}>
                    <FontAwesome5
                        name={"hand-rock"}
                        style={styles.rpsOne}
                        activeOpacity={0.5}
                        onPress={() => (setMove('ROCK'))}/>
                </View>
                <View style={styles.rps2}>
                    <FontAwesome5
                        name={"hand-paper"}
                        style={styles.rpsTwo}
                        activeOpacity={0.5}
                        onPress={() => (setMove('PAPER'))}/>
                </View>
                <View style={styles.rps3}>
                    <FontAwesome5
                        name={"hand-scissors"}
                        style={styles.rpsThree}
                        activeOpacity={0.5}
                        onPress={() => (setMove( 'SCISSORS'))}/>
                </View>
            </Card.Divider>
        </ImageBackground>

     )
 }
const styles = StyleSheet.create({
    card: {
        color:"white",
        backgroundColor: "white",
        borderWidth:10,
        borderRadius:40,
        borderColor:"#461d7f",
        paddingBottom:490,
        margin:10,
    },
    image: {
        flex: 1,
        justifyContent: "center",
        resizeMode:'cover',
    },
    text: {
        color: "#1c864c",
        fontSize: 18,
        textAlign: "center",
        margin: 10,
        fontWeight: "bold",
        position:"absolute",
        marginLeft:40,
        marginTop:290
     },
    textOne: {
        color: "white",
        fontSize: 30,
        textAlign: "center",
        margin: 10,
        fontWeight: "bold",
        marginTop:30,
    },
    textTitle: {
        color: "#1c7693",
        fontSize: 30,
        textAlign: "center",
        margin: 10,
        fontWeight: "bold",
        position:"absolute",
        marginLeft:100,
        marginTop:20
    },
    rps1:{
        position:"absolute",
        marginLeft:118,
        marginTop:350,


    },
    rps2:{
        position:"absolute",
        marginLeft:5,
        marginTop:350,
    },
    rps3:{
        position:"absolute",
        marginLeft:230,
        marginTop:350,
    },
    rpsOne:{
        color: "#04b2c7",
        fontSize: 70,
        borderRadius:50,
        position:"absolute",
        marginLeft:10,
        marginTop:5,
    },
    rpsTwo:{
        color: "#7daf35",
        fontSize: 70,
        borderRadius:50,
        position:"absolute",
        marginTop:5,
        marginLeft:13,
    },
    rpsThree:{
        color: "#f10a94",
        fontSize: 70,
        borderRadius:50,
        marginTop:5,
        position:"absolute",
        marginLeft:8,
    },
    resultCard: {
        backgroundColor: 'white',
        marginTop:70,
        marginBottom: 70,
        borderRadius:10,
        borderWidth:5,
        borderColor:"#4e95c6",
        position:"absolute",
        marginLeft:120,
        textAlign:"center",
        paddingTop:5,
        paddingBottom:5,
        paddingRight:20,
        paddingLeft:20,
        color:"black",
        fontSize:15,
    },
    userNameOne: {
        backgroundColor: 'white',
        marginTop:170,
        marginBottom: 30,
        borderRadius:5,
        borderWidth:2,
        borderColor:"#cb0c76",
        position:"absolute",
        marginLeft:10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 5,
        paddingBottom:5,
        margin:-5,
    },
    userMove1: {
        backgroundColor: 'white',
        marginTop:210,
        marginBottom: 30,
        borderRadius:5,
        borderWidth:2,
        borderColor:"#cb0c76",
        position:"absolute",
        marginLeft:30,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 5,
        paddingBottom:5,
        margin:-5,
    },
    userNameTwo: {
        backgroundColor: 'white',
        marginTop:170,
        borderRadius:5,
        borderWidth:2,
        borderColor:"#cb0c76",
        position:"absolute",
        marginLeft: 190,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 5,
        paddingBottom:5,
        margin:-5,
    },
    userMove2: {
        backgroundColor: 'white',
        marginTop:210,
        borderRadius:5,
        borderWidth:2,
        borderColor:"#cb0c76",
        position:"absolute",
        marginLeft: 200,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 5,
        paddingBottom:5,
        margin:-5,
    },
    userResult3: {
        backgroundColor: 'white',
        marginTop:250,
        borderRadius:5,
        borderWidth:2,
        borderColor:"#cb0c76",
        position:"absolute",
        marginLeft: 130,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 5,
        paddingBottom:5,
        margin:-5,
    },
});

export default PlayGame;
