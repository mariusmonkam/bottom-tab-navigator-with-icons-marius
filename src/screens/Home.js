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