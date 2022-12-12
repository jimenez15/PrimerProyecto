import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeGroup from '../src/navigation/HomeGroup';
import SettingsScreen from '../src/containers/SettingsScreen';


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
                    ? "person-circle"
                    : 'person-circle-outline';
                } else if (route.name === 'Settings') {
                  iconName = focused 
                  ? 'ios-information-circle'
                  : 'ios-information-circle-outline';
                }
    
                 return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: 'magenta',
              tabBarInactiveTintColor: 'black',
            })}
          >
            <Tab.Screen name="Home" component={HomeGroup} options={{headerTitleAlign:'center'}} />
            <Tab.Screen name="Settings" component={SettingsScreen} options={{headerTitleAlign:'center'}} />
          </Tab.Navigator>
        </NavigationContainer>
      );
    }

     
    