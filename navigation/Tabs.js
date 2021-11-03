import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import {StartGameStackNavigator, JoinGameStackNavigator,NavigateStackForGame} from "./NavigateStackForGame"
const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'home'
                            : 'home';
                    } else if (route.name === 'History') {
                        iconName = focused ? 'trophy-outline' : 'list';
                    }else if (route.name === 'Start Game'){
                        iconName = focused ?'play' : 'game-controller';
                    }else if (route.name === 'Join') {
                        iconName = focused ?'arrow-up-outline' : 'enter-outline';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}

        >
            <Tab.Screen name="Home" component={NavigateStackForGame} />
            <Tab.Screen name="Start Game" component={StartGameStackNavigator} />
            <Tab.Screen name="Join" component={JoinGameStackNavigator } />

        </Tab.Navigator>
    )
}
export default Tabs;
