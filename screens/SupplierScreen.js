import React, { Component } from 'react';
import { Text, View, StyleSheet, } from 'react-native';

export default class SupplierScreen extends Component {
  constructor() {
    super();
    this.state = {
      text: ''
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome To Supplier Screen</Text>
        <Text>Name</Text>
          <TextInput
          style={styles.inputBox}
          onChangeText={text => {
            this.setState({ text: text });
          }}
          value={this.state.text}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    marginTop: 25,
  },
});
