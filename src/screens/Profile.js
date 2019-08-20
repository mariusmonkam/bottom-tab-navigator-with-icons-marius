import React, { Component } from 'react';
import { 
  View,Text,Button
 } from 'react-native';
 
 class DetailsScreen extends Component {

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Screen</Text>
        
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
         <Button
          title="Go to Settings"
          onPress={() => this.props.navigation.navigate('Settings')}
        />
        
      </View>

    );
  }
}

export default DetailsScreen;