import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

import Input from './app/components/Input';
import Button from './app/components/Button';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{width: 100}}>
        <Input
          placeholder="E-mail"
          value=""
          onChangeText={val => console.log('val:', val)}
        />
      </View>
      <View style={{width: 200, marginTop: 30}}>
        <Input
          placeholder="E-mail"
          value=""
          onChangeText={val => console.log('val:', val)}
        />
      </View>
      <View style={{width: 300, marginTop: 30}}>
        <Input
          placeholder="E-mail"
          value=""
          onChangeText={val => console.log('val:', val)}
        />
      </View>
      <View style={{width: 300, marginTop: 30}}>
        <Button label="Sign In" onPress={() => console.log('onPress..')} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
});

export default App;
