import 'react-native-gesture-handler';
import React  from 'react';
import {ImageBackground, StyleSheet, Text, ScrollView, Button} from 'react-native';
import image from './image/pop.png';
import {Card } from "react-native-elements";
import {StatusBar} from "expo-status-bar";


const HomePage = ({navigation}) =>{
     return (
         <ImageBackground source={image} style={styles.image}>
             <ScrollView style={styles.scrollView}>
                 <Card containerStyle={styles.card}>
                     <Card.Title style={styles.title}>Welcome to Rock Paper and Scissors - Game</Card.Title>
                     <Text style={styles.textOne}>
                         Rock,paper and Scissors it is a simple hand game with many names and variations.
                         It is played around the world and is commonly used as a way of coming to decisions.
                         In some cases is even played for sport. Go to rules to se how you can play the game.
                     </Text>
                     <Button title={"Go to rules"} onPress={()=>navigation.navigate("Rules of Game")}/>
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
     textOne: {
         color: "#1c7693",
         fontSize: 15,
         marginBottom: 30,
         margin: 30,
         textAlign: "center",
         backgroundColor: "white",
         paddingTop: 29
     },
    image: {
        flex: 1,
        justifyContent: "center",
        resizeMode: 'cover',
    },

    title: {
        color: "#0e0e0e",
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "white"
    },
    navigator:{
        backgroundColor:"black"

    },
    scrollView: {
        backgroundColor: '#441b68',
        marginHorizontal: 10,
        marginTop:40,
        marginBottom: 30,
        borderRadius:30,
        borderWidth:5,
        borderColor: "white"
    },
    card: {
        backgroundColor: 'white',
        marginHorizontal: 10,
        marginTop:10,
        marginBottom: 30,
        borderRadius:30,
        borderWidth:5,
        borderColor:"#4e95c6"
    },
});

export default HomePage;
