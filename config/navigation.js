import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import Splash from '../pages/Splash';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Dashboard from '../pages/Dashboard';

const NavStack = createStackNavigator();
const NavStackScreen = () => (
  <NavStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="Splash">
    <NavStack.Screen name="Splash" component={Splash} />
    <NavStack.Screen name="Login" component={Login} />
    <NavStack.Screen name="Signup" component={Signup} />
    <NavStack.Screen name="Dashboard" component={Dashboard} />
  </NavStack.Navigator>
);

// const TabStack = createBottomTabNavigator();
// const TabStackScreen = () => (
//   <TabStack.Navigator
//     screenOptions={({ route }) => ({
//       tabBarIcon: ({ focused, color, size }) => {
//         let iconName;
//         let sizes;

//         if (route.name === 'Home') {
//           iconName = focused
//             ? 'ios-folder-open'
//             : 'ios-folder';
//           sizes = focused ? 26 : 20;
//         } else if (route.name === 'Favorites') {
//           iconName = focused ? 'ios-list-box' : 'ios-list';
//           sizes = focused ? 26 : 20;
//         } else if (route.name === 'Profile') {
//           iconName = focused ? 'ios-person' : 'ios-person';
//           sizes = focused ? 26 : 20;
//         }

//         // You can return any component that you like here!
//         return <Ionicons name={iconName} size={sizes} color={color} />;
//       },
//     })}
//     tabBarOptions={{
//       activeTintColor: '#7ed6df',
//       inactiveTintColor: '#34495e',
//       tabStyle: {
//         backgroundColor: '#1179ae',
//         borderTopColor: '#27ae60',
//         height: 'auto'
//       },
//       style: {
//         backgroundColor: '#1179ae'
//       }
//     }}
//   >
//     <TabStack.Screen
//       name="Home"
//       options={
//         {
//           title: 'Eksplore'
//         }
//       }
//       component={NavStackScreen}
//     />
//     <TabStack.Screen
//       name="Favorites"
//       options={
//         {
//           title: 'Riwayat'
//         }
//       }
//       component={NavStackScreen2}
//     />
//     <TabStack.Screen
//       name="Profile"
//       options={
//         {
//           title: 'Profile'
//         }
//       }
//       component={NavStackScreen3}
//     />
//   </TabStack.Navigator>
// )

const Navigation = () => (
  <NavigationContainer>
    <NavStackScreen />
  </NavigationContainer>
);

export default Navigation;