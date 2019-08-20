
import React from 'react';
import { 
  View,Text,
 } from 'react-native';
 import { createAppContainer, createBottomTabNavigator, 
 } from 'react-navigation'
import HomeScreen from './src/screens/Home'
import DetailsScreen from './src/screens/Details'
import ProfileScreen from './src/screens/Profile'
import SettingsScreen from './src/screens/Settings'
import Ionicons from 'react-native-vector-icons/Ionicons';

class IconWithBadge extends React.Component {
  render() {
    const { name, badgeCount, color, size } = this.props;
    return (
      <View style={{ width: 24, height: 24, margin: 5 }}>
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
            <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
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
  const { routeName } = navigation.state;
  let IconComponent = Ionicons;

  let iconName;
  if (routeName === 'Home') {
    iconName = `ios-home${focused ? '' : ''}`;
    // We want to add badges to home tab icon
    IconComponent = HomeIconWithBadge;
  } else if (routeName === 'Details') {
    iconName = `ios-list-box${focused ? '' : ''}`;
  }else if (routeName === 'Profile') {
    iconName = `md-contact${focused ? '' : ''}`;
  }else if (routeName === 'Settings') {
    iconName = `ios-settings${focused ? '' : ''}`;
  }
  

  // You can return any component that you like here!
  return <IconComponent name={iconName} size={25} color={tintColor} />;
};



const BottomTabNavigator = createBottomTabNavigator(
  {
    Home:{screen:HomeScreen },
    Profile:{screen:ProfileScreen },
    Details:{screen:DetailsScreen },
    Settings:{screen:SettingsScreen }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) =>
        getTabBarIcon(navigation, focused, tintColor),
    }),
    
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    
    },
  }
)

const App = createAppContainer(BottomTabNavigator)
export default App;