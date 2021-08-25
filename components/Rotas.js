import * as React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {MaterialCommunityIcons} from '@expo/vector-icons';

import Home from './Home';
import Lugares from './Lugares';
import Imagens from './Imagens';

const Tab = createBottomTabNavigator();

export default function Rotas(){
  
  return(
    <Tab.Navigator  initialRouteNome="Home" tabBarOptions={{activeTintColor:'#00008B',}}>
      <Tab.Screen name="Home"
       component={Home}
       options={{tabBarLabel:'Home',
       tabBarIcon:({color, size}) => (
       <MaterialCommunityIcons name="home" color={color}
       size={size}/>
       ),
       }}
       />
        <Tab.Screen name="Lugares"
       component={Lugares}
       options={{tabBarLabel:'Lugares',
       tabBarIcon:({color, size}) => (
       <MaterialCommunityIcons name="map-marker" color={color}
       size={size}/>
       ),
       }}
       />
        <Tab.Screen name="Imagens"
       component={Imagens}
       options={{tabBarLabel:'Imagens',
       tabBarIcon:({color, size}) => (
       <MaterialCommunityIcons name="image" color={color}
       size={size}/>
       ),
       }}
       />
    </Tab.Navigator>
  );
}