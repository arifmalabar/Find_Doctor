import React, { useState } from "react";
import {
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity
} from "react-native";
import {
    Home2,
    Note,
    Chart,
    User
} from "iconsax-react-native";
import Home from "../screen/Home";
import Buletin from "../screen/Buletin";
import Antrian from "../screen/Antrian";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ArticleDetail from "../screen/ArticleDetail";
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
function AppFragment()
{
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: "#3399ff",
                tabBarInactiveTintColor: "black",
                tabBarStyle : {
                    height: 48, 
                    paddingBottom: 8,
                    paddingTop: 8
                },
                tabBarLabelStyle: {
                    fontWeight: "bold"
                }
            }}>
                <Tab.Screen
                    name = "Home"
                    component={Home}
                    options={{
                        tabBarLabel:'Home',
                        tabBarIcon: ({focused, color}) => (
                            <Home2 
                                color={color}
                                variant={focused ? 'Bold':'Linear'}
                                size={24}
                            />
                        ),
                        headerShown: false
                    }}/>
                    <Tab.Screen
                    name = "Antrian"
                    component={Antrian}
                    options={{
                        tabBarLabel:'Antrian',
                        tabBarIcon: ({focused, color}) => (
                            <Chart 
                                color={color}
                                variant={focused ? 'Bold':'Linear'}
                                size={24}
                            />
                        ),
                        headerShown: false
                    }}/>
                    <Tab.Screen
                    name = "Buletin"
                    component={Buletin}
                    options={{
                        tabBarLabel:'Buletin',
                        tabBarIcon: ({focused, color}) => (
                            <Note 
                                color={color}
                                variant={focused ? 'Bold':'Linear'}
                                size={24}
                            />
                        ),
                        headerShown: false
                    }}/>
            </Tab.Navigator>
    );
}
const BottomNav = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="AppFragment"
                component={AppFragment}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="ArticleDetail"
                component={ArticleDetail}
                options={{
                    headerShown: false,
                    animationTypeForReplace: 'pop',
                    animationEnabled: true,
                    gestureEnabled: true,
                    ...TransitionPresets.SlideFromRightIOS
                }}
            />
        </Stack.Navigator>
    );
}
export default BottomNav;