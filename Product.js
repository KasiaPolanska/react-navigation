import { useNavigation } from "@react-navigation/native";
import React, {useState} from 'react';
import { View, Text, Alert } from 'react-native';

export default function Product() {
    const navigation = useNavigation();

    return (
        <View>
            <Text>Im very product</Text>
        </View>
    );
}