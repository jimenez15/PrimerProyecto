import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PantallaMercado from './PantallaMercado';
import PantallaAlmacen from './PantallaAlmacen';



const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused
                                ? 'cart'
                                : 'cart-outline';
                        } else if (route.name === 'Settings') {
                            iconName = focused
                                ? 'nutrition'
                                : 'nutrition-outline';
                        }

                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'aqua',
                    tabBarInactiveTintColor: 'black',
                })}
            >
                <Tab.Screen name="Home" component={PantallaMercado} options={{ headerTitleAlign: 'center' }} />
                <Tab.Screen name="Settings" component={PantallaAlmacen} options={{ headerTitleAlign: 'center' }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
} 