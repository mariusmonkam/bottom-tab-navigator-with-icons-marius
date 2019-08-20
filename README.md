# botton-tab-navigator-with-icons
react-native starter app with 4 screens button tab navigation with icons 

this is a starter app of native app with 4 screens implement with react-navigation and react-native-vector-icons 
These are the steps to follow to setup your react-native app project.
#H2 Initializing The project
1. `react-native init Project_Name`
2. `cd Project_Name `
3. `react-native start`
4. `react-native run-android`

At this point you are ready to start your app is ready to go , in case you are not familliar with the intallation of react-native project please
refere to the doccumentation [React-native cli Quick start or Expo cli Quickstart ](https://facebook.github.io/react-native/docs/getting-started
"react-native getting start") 
***
##H2 Installing react-navigation dependency

5. `npm install --save react-navigation` or `yarn add react-navigation` I myself prefere using yarn.
If you are not familiar with react-navigation installation please refere to the documentation 
[react-navigation doc ](https://reactnavigation.org/docs/en/getting-started.html) 
6. `npm install --save react-native-gestures-handler` or `yarn add react-native-gesture-handler`
if you are not familliar to react-native-gesture-handler please refere to the doc 
[react-native-gesture-handler Getting-started ](https://kmagiera.github.io/react-native-gesture-handler/docs/getting-started.html)
Some time you may be require to link the dependency use `react-native link react-native-gesture-handler` , 
but in most case for react-native >= v60 is not necessary because is automaticaly linked.

***
Before continue 
install react-native icons by typing this command on your terminal `yarn add react-native-vector-icons` or
`npm install --save react-native-vector-icons` you can follow the instruction here [react-native-vectoc-icons](https://github.com/oblador/react-native-vector-icons)
Now that you are ready to start codiding , the manual approche for me is the best but you can also clone the entire project 

Now you are ready to take your app to the next level this is how it look
![alt text](https://github.com/MariusMonkam/bottom-tab-navigator-with-icons-marius/blob/master/Screenshot_2019-08-20-19-47-58_resized_20190820_075137802.png " bottom-tab-navigatior 4 screens with react-navigation")

This how our App.js look like
   ```javascript
       import React from 'react';
import {View, Text} from 'react-native';
import {createAppContainer, createBottomTabNavigator} from 'react-navigation';
import HomeScreen from './src/screens/Home';
import DetailsScreen from './src/screens/Details';
import ProfileScreen from './src/screens/Profile';
import SettingsScreen from './src/screens/Settings';
import Ionicons from 'react-native-vector-icons/Ionicons';

class IconWithBadge extends React.Component {
  render() {
    const {name, badgeCount, color, size} = this.props;
    return (
      <View style={{width: 24, height: 24, margin: 5}}>
        <Ionicons name={name} size={size} color={color} />
        {badgeCount > 0 && (
          <View
            style={{
              // /If you're using react-native < 0.57 overflow outside of the parent
              // will not work on Android, see https://git.io/fhLJ8
              position: 'absolute',
              right: -6,
              top: -3,
              backgroundColor: 'red',
              borderRadius: 6,
              width: 12,
              height: 12,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white', fontSize: 10, fontWeight: 'bold'}}>
              {badgeCount}
            </Text>
          </View>
        )}
      </View>
    );
  }
}

const HomeIconWithBadge = props => {
  // You should pass down the badgeCount in some other ways like context, redux, mobx or event emitters.
  return <IconWithBadge {...props} badgeCount={3} />;
};
const getTabBarIcon = (navigation, focused, tintColor) => {
  const {routeName} = navigation.state;
  let IconComponent = Ionicons;

  let iconName;
  if (routeName === 'Home') {
    iconName = `ios-home${focused ? '' : ''}`;
    // We want to add badges to home tab icon
    IconComponent = HomeIconWithBadge;
  } else if (routeName === 'Details') {
    iconName = `ios-list-box${focused ? '' : ''}`;
  } else if (routeName === 'Profile') {
    iconName = `md-contact${focused ? '' : ''}`;
  } else if (routeName === 'Settings') {
    iconName = `ios-settings${focused ? '' : ''}`;
  }

  // You can return any component that you like here!
  return <IconComponent name={iconName} size={25} color={tintColor} />;
};

const BottomTabNavigator = createBottomTabNavigator(
  {
    Home: {screen: HomeScreen},
    Profile: {screen: ProfileScreen},
    Details: {screen: DetailsScreen},
    Settings: {screen: SettingsScreen},
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) =>
        getTabBarIcon(navigation, focused, tintColor),
    }),

    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  },
);

const App = createAppContainer(BottomTabNavigator);
export default App;

This is how our home page look like 

```javascript
import React, { Component } from 'react';
import { 
  View,Text,Button
 } from 'react-native';
 
 class HomeScreen extends Component {
 
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
       
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <Button
          title="Go to Profile"
          onPress={() => this.props.navigation.navigate('Profile')}
        />
         <Button
          title="Go to Settings"
          onPress={() => this.props.navigation.navigate('Settings')}
        />
        
      </View>

    );
  }
}



export default HomeScreen;
```
```
Feel free to drop me a message if necessary...happy haking!
