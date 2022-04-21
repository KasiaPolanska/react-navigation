import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import { View, Text, Alert, Input, Button, TouchableOpacity} from 'react-native';
// import { } from 'react-native-elements';

const HomeScreen = () => {
    const navigation = useNavigation();
    const alert = () => navigation.navigate('Product');

    // const [email,setEmail] = useState('');
    // const [password,setPassword] = useState('');
    return (
        <View backgroundColor='black'>
        {/* <Input
            placeholder="Email"
        /> */}
        <Text>CLICK THE BUTTONNNNN!</Text>
        <TouchableOpacity
            onPress={alert}>
            <Text>Click here!</Text>
        </TouchableOpacity>
        </View>
    );
};

export default HomeScreen;