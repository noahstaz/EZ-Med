import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Welcome to the Home Screen!</Text>
            <Button title="Button 1" onPress={() => console.log('Button 1 pressed')} />
            <Button title="Button 2" onPress={() => console.log('Button 2 pressed')} />
            <Button title="Button 3" onPress={() => console.log('Button 3 pressed')} />
            <Button title="Button 4" onPress={() => console.log('Button 4 pressed')} />
        </View>
    );
};

export default HomeScreen;
