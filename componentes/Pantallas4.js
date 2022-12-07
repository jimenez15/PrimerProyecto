import * as React from 'react';
import { Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

function User({navigation, route}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button onPress={()=>navigation.navigate} title='Pasar página'/>
    </View>
  );
}

function Profile({route}) {

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Screen</Text> 
      </View>
    );
  }

function SettingsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
    
                if (route.name === 'Home') {
                  iconName = focused
                    ? 'ios-accessibility'
                    : 'ios-accessibility-outline';
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
            <Tab.Screen name="Home" component={HomeGroup} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      );
    }

      function HomeGroup() {
        return (
            <Stack.Navigator initialRouteName="Profile">
              <Stack.Screen name='Profile' component={Profile} options={{title:'Ususarios'}}/>
              <Stack.Screen name="Detalles"  component={User} options={{title:'Perfil'}} />
            </Stack.Navigator>
        );
      }
    