import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PlayGame from "../pages/PlayGame";
import JoinGameList from "../pages/JoinGameList";
import RulesOfGame from "../pages/RulesOfGame";
import StartNewGame from "../pages/StartNewGame";
import HomePage from "../pages/HomePage";
import JoinGames from "../pages/JoinGames";

const Stack = createStackNavigator();
const screenOptionsStyle={
        headerStyle: {
            backgroundColor: "#9AC4F8",
        },
        headerTintColor: "white",
        headerBackTitle: "Back",
    };
export const NavigateStackForGame = () => {
    return(
        <Stack.Navigator screenOptions={screenOptionsStyle}>
            <Stack.Screen name="Home" component={HomePage}/>
            <Stack.Screen name="Rules of Game" component={RulesOfGame}/>
        </Stack.Navigator>
    );
}
export const StartGameStackNavigator = () => {
        return (
        <Stack.Navigator screenOptions={screenOptionsStyle}>
        <Stack.Screen name="Start Game" component={StartNewGame} />
        <Stack.Screen name="Play Game" component={PlayGame} />
        </Stack.Navigator>

        );
    }
 export const JoinGameStackNavigator = () => {
        return (
        <Stack.Navigator screenOptions={screenOptionsStyle}>
        <Stack.Screen name="Join Game" component={JoinGames} />
        <Stack.Screen name="Join Game List" component={JoinGameList} />
        <Stack.Screen name="Play Game" component={PlayGame} />
        </Stack.Navigator>

        );
    }


export default {NavigateStackForGame,StartGameStackNavigator,JoinGameStackNavigator};
