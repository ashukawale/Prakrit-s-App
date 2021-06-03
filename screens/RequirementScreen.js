import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class RequirementScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome To requirment screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{ 
    alignSelf: 'center', 
    marginTop: 25 
    }
})