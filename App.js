/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Button
} from 'react-native';


class App extends Component {


  generateSentryError = () =>{
    throw new Error('Sentry v1.4.2')
  }

  render() {
    return(
        <View style={styles.sectionContainer}>
          <Button
              title="Generate Error for Sentry"
              onPress={() => this.generateSentryError()}
          />
        </View>
    )
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    justifyContent: 'center',
    marginTop: 100,
    paddingHorizontal: 24,
  },
});

export default App;
