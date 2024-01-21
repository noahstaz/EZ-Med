import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PatientUpdates = () => {
  return (
    <View style={styles.container}>
      <Text>Patient Updates Page</Text>
      {/* Patient updates information goes here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PatientUpdates;
