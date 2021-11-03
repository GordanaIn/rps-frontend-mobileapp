import React, {useContext, useEffect} from "react";
import {TokenContext} from "../context/TokenContext";
import {allGames, joinGame} from "../fetch/FetchToGame";
import image from "./image/pop.png";
import {FlatList, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from "react-native";



const JoinGameList =({navigation})=> {
    const token = useContext(TokenContext)
    const [gameList, setGameList] = React.useState([]);

    useEffect(() => {
        allGames(token)
            .then(setGameList)
            .catch((error) => console.log(error));
    }, [])

    const onButtonJoin = (gameId) => {
        joinGame(token, gameId)
            .then(gameStatus => {
                console.log("token join", gameId );
                navigation.navigate("Play Game")
            });
    }
        return (
            <ImageBackground source={image} style={styles.image}>

                    <Text style={styles.text}>Welcome to Join Game</Text>
                    <View>
                        <Text style={styles.titleList}>List of games</Text>
                        <Text style={styles.textTwo}>Choose a Game and play</Text>
                            <FlatList style={styles.scrollView}
                            keyExtractor={(item) => item.id}
                                data={gameList}
                                renderItem={({item}) => (
                                    <TouchableOpacity
                                        style={styles.listGame}
                                    >
                                        <View>
                                            <Text
                                                  style={styles.list}
                                                  onPress={() => onButtonJoin(item.id)}
                                            >
                                                {item.name = null ? "Anonymous" : item.name}
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                )}
                            />
                    </View>
            </ImageBackground>
        );
    }

const styles = StyleSheet.create({
    container: {
    },
    image: {
        flex: 1,
        justifyContent: "center",
        resizeMode:'cover',
    },

    text: {
        color: "white",
        fontSize: 32,
        fontWeight: "bold",
        textAlign: "center",
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom:20,
    },
    textTwo: {
        color: "#0cabdb",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        paddingTop: 50,
        paddingBottom: 18,
    },
    titleList: {
        color: "white",
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
        paddingTop: 30,
    },
    scrollView: {
        backgroundColor: '#441b68',
        marginTop:20,
        borderColor: "#05b5e8",
        borderWidth:5,
        borderRadius:40,
        margin:10,

    },
    listGame:{
        backgroundColor:"white",
        borderColor:"#05b5e8",
        borderWidth:3,
        borderRadius:10,
        marginBottom:20,
        paddingLeft:30,

    },
    list:{
        color:"black",
        fontSize: 20,
        textAlign:"center",
        fontWeight: "bold",
    }


});


export default JoinGameList;
