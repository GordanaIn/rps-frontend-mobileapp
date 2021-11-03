import 'react-native-gesture-handler';
import React  from 'react';
import {ImageBackground, StyleSheet, Text, ActivityIndicator, Image, ScrollView, Button} from 'react-native';
import image from './image/pop.png';
import {Card } from "react-native-elements";
import psr from './image/rules.jpeg';
import {StatusBar} from "expo-status-bar";
import {fetchToken} from "../fetch/FetchToGame";



const RulesOfGame = ({navigation}) =>{
    const onPress = () => (fetchToken())
        .then(response => navigation.navigate("Start Game"))
    return (
        <ImageBackground source={image} style={styles.image}>
            <ScrollView style={styles.scrollView}>
                <Card>
                    <Card.Title style={styles.title}>Rules of Game</Card.Title>
                    <Text style={styles.textOne}>
                        The rules require that competing players use
                        one hand to form one of three shapes at an agreed-upon time.
                    </Text>
                    <Image
                        source={require = psr}
                        style={{
                            width: 300,
                            height: 300,
                            paddingRight: 20,
                            paddingLeft: 20,
                            marginLeft: -2,
                            marginTop: 40
                        }}
                        PlaceholderContent={<ActivityIndicator/>}>
                    </Image>
                    <Text style={styles.textOne}>
                        The person that plays the strongest “object” is the winner of the game. It's that easy!
                        Rock, Paper, Scissors is a simple game that anybody can play and win. Good luck!
                    </Text>
                    <Card>
                        <Card.Title style={styles.title}>Start Game</Card.Title>
                        <Text style={styles.textTwo}>
                            Hello and Welcome to game Rock Paper and Scissors.
                        </Text>
                        <Text style={styles.textTwo}>
                            You can Start Game whit two different way.</Text>
                        <Text style={styles.textTwo}>
                            1. You can start whit button Anonymous.</Text>
                        <Text style={styles.textTwo}>
                            2. You can start by typing your name and pressing the PLAY button.</Text>
                        <Text style={styles.textTwo}>
                            And you can also Join to the Game.
                        </Text>
                    </Card>
                    <Button style={styles.button} title={"Start new game"} onPress={onPress}/>
                </Card>
                <StatusBar style="auto"/>
            </ScrollView>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        textAlign:"center",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 50,

    },
    image: {
        flex: 1,
        justifyContent: "center",
        resizeMode: 'cover',
    },

    title: {
        color: "#7d0202",
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "white"
    },
    textOne: {
        color: "#1c7693",
        fontSize: 15,
        marginBottom: 30,
        margin: 30,
        textAlign: "center",
        backgroundColor: "white",
        paddingTop: 29
    },
    textTwo: {
        color: "#1c7693",
        fontSize: 15,
        marginBottom: 5,
        textAlign: "center",
        backgroundColor: "white",
        paddingTop: 29
    },
    navigator:{
        backgroundColor:"black"

    },
    scrollView: {
        backgroundColor: '#441b68',
        marginHorizontal: 10,
        marginTop:40,
        marginBottom: 70,
        borderRadius:30,
        borderWidth:5,
        borderColor: "white"
    },
    card: {
        backgroundColor: 'white',
        marginHorizontal: 10,
        marginTop:10,
        marginBottom: 20,
        borderRadius:30,
        borderWidth:5,
        borderColor:"#4e95c6"
    },
    button:{
        marginTop:-930,
    }
});

export default RulesOfGame ;
