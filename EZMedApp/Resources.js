import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Resources = () => {
  return (
    <View style={styles.container}>
      <Text>Resources Page</Text>
      {/* Resources and helpful information go here */}
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

export default Resources;
