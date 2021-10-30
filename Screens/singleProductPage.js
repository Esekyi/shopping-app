import React from 'react';
import {TouchableOpacity, View, Text, ScrollView} from 'react-native';
import AppHeader from '../components/AppHeader';
import { FontAwesome } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';

const SingleProductPage = ({navigation}) => {
    return (
        <ScrollView style={{flex: 1, backgroundColor: "#fff"}}>
            <AppHeader />
            <TouchableOpacity onPress={navigation.goBack}>
                <View style={{padding: 10, flexDirection: 'row', alignItems: 'center'}}>
                    <FontAwesome name="chevron-left" size={15} color="black" />
                    <Text> Back</Text>
                </View>
            </TouchableOpacity>
        </ScrollView>
        
    );
}

export default SingleProductPage;
