import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BegginerScreen = () => {
  return (
    <View style={styles.container}>
      <Text>หน้า Begginer</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BegginerScreen;