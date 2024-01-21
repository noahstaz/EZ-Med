import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PatientStatus = () => {
  return (
    <View style={styles.container}>
      <Text>Patient Status Page</Text>
      {/* Patient status details go here */}
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

export default PatientStatus;